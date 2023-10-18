import { Component, OnInit, Output, Input, NgModule } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterOutlet } from '@angular/router';
import { DataService } from './data.service';
import { CountryFunctionList } from './models/country-function-list.model';

import {
  FormArray,
  FormGroup,
  FormControl,
  ReactiveFormsModule,
  FormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioButton, MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
export interface PeriodicElement {
  id: number;
  datasetName: string;
  function: string;
  owner: string;
  country: string;
  highlighted?: boolean;
  hovered?: boolean;
}

export interface PreviewDataDiscovery {
  //id: number,
  salesChannel: string;
  totalAccount: number;
  totalRevenue: number;
  productType: string;
}

@Component({
  selector: 'app-searchdatasets',
  standalone: true,
  templateUrl: './searchdatasets.component.html',
  styleUrls: ['./searchdatasets.component.scss'],
  imports: [
    MatTableModule,
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatRadioModule,
    MatIconModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
  ],
})
export class SearchdatasetsComponent implements OnInit {
  constructor(
    private router: Router,
    private http: HttpClient,
    private dataService: DataService
  ) {
    this.dataService.getCountriesAndFunctionNames().subscribe((d) => {
      this.CountriesAndFunctionNames = d;
      const { function_list, country_list } = this.CountriesAndFunctionNames[0];
      // console.log('manju', function_list, country_list);
      this.countries$ = country_list;
      this.funtionNames$ = function_list;
      // console.log('manju', this.countries$, this.funtionNames$);
    });
  }
  //---Radio button
  bvariable = 0;
  firstGroup = 1;
  secondGroup = 0;

  onFirstGroupChange() {
    if (this.firstGroup === 1) {
      this.firstGroup = 1;
      this.secondGroup = 0;
    } else {
      this.secondGroup = 2;
    }
  }

  // Form controls for the dropdowns
  countryControl = new FormControl<CountryFunctionList | null>(null);
  funtionNameControl = new FormControl<CountryFunctionList | null>(null);
  CountriesAndFunctionNames: any;

  // Observables for the dropdown options
  countries$: any;
  funtionNames$: any;

  private membersUrl = 'http://127.0.0.1:5000/searchdatasets';
  data: any;
  rowData: any = [];
  displayColumns: any = [];
  showAllRecords() {
    const url = `${this.membersUrl}?function='${this.funtionNameControl.value?.funtion_name}'&country='${this.countryControl.value?.country}'`;
    this.http.get<any[]>(url).subscribe(
      (data) => {
        this.dataLength = data.length;
        this.dataSource.data = data;
      },
      (err: HttpErrorResponse) => {
        console.log(err.error);
      }
    );
  }

  loading: any;

  //public dataSource= new  MatTableDataSource<MemberModel>;
  dataSource = new MatTableDataSource<CountryFunctionList>();
  rowDataSource = new MatTableDataSource<any>();
  public dataLength!: number;
  public displayedColumns = [
    'dataset_name',
    'function_name',
    'country',
    'location',
    'owner',
  ];
  // dataSource = ELEMENT_DATA;
  color = 'rgb(57,57,57)';
  // displayedColumnsWithObject: string[] = [
  //   //'id',
  //   'salesChannel',
  //   'totalAccount',
  //   'totalRevenue',
  //   'productType',
  // ];

  // EmpData: PreviewDataDiscovery[] = [
  //   {
  //     // id: 1,
  //     salesChannel: 'online stores',
  //     totalAccount: 1500,
  //     totalRevenue: 25000,
  //     productType: 'laptop',
  //   },
  //   {
  //     salesChannel: 'online stores',
  //     totalAccount: 1500,
  //     totalRevenue: 25000,
  //     productType: 'laptop',
  //   },
  //   {
  //     salesChannel: 'online stores',
  //     totalAccount: 1500,
  //     totalRevenue: 25000,
  //     productType: 'laptop',
  //   },
  //   {
  //     salesChannel: 'online stores',
  //     totalAccount: 1500,
  //     totalRevenue: 25000,
  //     productType: 'laptop',
  //   },
  //   {
  //     salesChannel: 'online stores',
  //     totalAccount: 1500,
  //     totalRevenue: 25000,
  //     productType: 'laptop',
  //   },
  // ];
  // dataSourceWithObjectColumn = new MatTableDataSource(this.EmpData);

  ngOnInit() {
    this.loading = false;
  }

  clearTable() {
    this.dataSource.data = [];
  }

  disptab = false;
  onRowClicked(row: any) {
    this.loading = true;
    localStorage.setItem('datasetName', row.dataset_name);
    row.selected = !row.selected;
    this.dataService.selectedDataSet = row;
    this.dataService.getDataLakeData(row.location).subscribe((res) => {
      this.disptab = !this.disptab;
      this.rowData = [];
      res.forEach((item: any, index: number) => {
        if (!(index == 0)) {
          let obj: any = {};
          item.forEach((value: any, index: number) => {
            obj[res[0][index].replace('\n', '').replace('ï»¿', '')] =
              value.replace('\n', '');
          });
          // console.log(obj);
          this.rowData.push(obj);
        }
      });
      // console.log(this.rowData);
      this.rowDataSource = this.rowData;
      this.dataService.storeData(this.rowData);
      const colkeys = Object.keys(this.rowData[0]);
      // const repKeys = colkeys.map((col) => col.replace(/[^a-zA-Z0-9 ]/g, ''));
      this.displayColumns = colkeys;
      this.dataService.selectedColumns = colkeys;
      // console.log(this.displayColumns);
      this.loading = false;
    });
  }

  display = false;
  update() {
    this.display = !this.display;
  }

  navigate() {
    this.router.navigate(['/querybuilder']);
  }
  ngAfterViewInit() {}
}
