import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';
import { Router } from '@angular/router';
import { FormArray, FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../searchdatasets/data.service';
import {
  PeriodicElement,
  SearchdatasetsComponent,
} from '../searchdatasets/searchdatasets.component';
import { HttpClient } from '@angular/common/http';
import { QueryBuilder } from '../searchdatasets/models/query-builder.model';
import { map } from 'rxjs/operators';
export interface PreviewDataDiscovery {
  //id: number,
  salesChannel: number;
  totalAccount: number;
  totalRevenue: string;
  productType: string;
}

@Component({
  selector: 'app-querybuilder',
  templateUrl: './querybuilder.component.html',
  styleUrls: ['./querybuilder.component.scss'],
})
export class QuerybuilderComponent implements OnInit {
  data: any;
  datasetResponse: any;
  selectRowNames: string[] = [];
  selectRowdes: string[] = [];
  displayColumns: any = [];

  constructor(
    private router: Router,
    private dataService: DataService,
    private http: HttpClient
  ) {}

  sharedData: any;
  selection = new SelectionModel<PeriodicElement>(true, []);
  dataSource = new MatTableDataSource<PeriodicElement>();
  ngOnInit() {
    this.displayColumns = this.dataService.selectedColumns
    console.log('qb called');
    const datas = localStorage.getItem('datasetName');
    this.dataService.getQueryBuilder(datas).subscribe((data) => {
      this.dataSource.data = data;
      this.dataSource.data.forEach((data: any) => {
        data['mandatory'] = false;
      });
      this.dataService.getCountriesAndFunctionNames().subscribe((data) => {
        this.datasetResponse = data;
        //    console.log("dataSet.data ", this.datasetResponse);
      });
      // this.dataService.apiData$.subscribe((data)=>{
      //   this.sharedData = data
      //   console.log("shared",data)
      // })

      console.log('aaaa', localStorage.getItem('datasetName'));
    });
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.selected.forEach((item: any) => {
        item.mandatory = !item.mandatory;
      });
      this.selection.clear();
      return;
    }
    this.selection.select(...this.dataSource.data);
    this.selection.selected.forEach((item: any) => {
      item.mandatory = !item.mandatory;
    });
    console.log(this.selection.selected);
  }

  // checkboxLabel(row?: PeriodicElement): string {
  //   if (!row) {
  //     return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
  //   }
  //   return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  // }

  // dataSource = new MatTableDataSource<QueryBuilder>();

  rowDataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = [
    'mandatoryIndicator',
    'attribute_name',
    'attribute_description',
    'renamedColumn',
  ];
  mandatoryControl = new FormControl<QueryBuilder | null>(null);
  renamedColumnControl = new FormControl<QueryBuilder | null>(null);
  formArray = new FormArray(
    this.dataSource.data.map(
      (x: any) =>
        new FormGroup({
          renamedColumnControl: new FormControl(x.renamedColumnControl),
          mandatoryControl: new FormControl(x.mandatoryControl ? true : false),
        })
    )
  );

  // getControl(index: number, controlName: string): FormControl {
  //   return (this.formArray.at(index) as FormGroup).get(controlName) as FormControl;
  // }

  checked(ele: any) {
    console.log(this.selection);
    this.selection.toggle(ele);
    ele.mandatory = !ele.mandatory;
  }

  displayedColumnsWithObject: string[] = [
    'salesChannel',
    'totalAccount',
    'totalRevenue',
    'productType',
  ];

  // EmpData: PreviewDataDiscovery[] = [
  //   {

  //     salesChannel: 5,
  //     totalAccount: 2018822290,
  //     totalRevenue: 'REC_ECC_APO',
  //     productType: 'RFC_ECC_APO',
  //   },
  //   {
  //     salesChannel: 5,
  //     totalAccount: 2018822290,
  //     totalRevenue: 'REC_ECC_APO',
  //     productType: 'RFC_ECC_APO',
  //   },
  //   {
  //     salesChannel: 5,
  //     totalAccount: 2018822290,
  //     totalRevenue: 'REC_ECC_APO',
  //     productType: 'RFC_ECC_APO',
  //   },
  //   {
  //     salesChannel: 5,
  //     totalAccount: 2018822290,
  //     totalRevenue: 'REC_ECC_APO',
  //     productType: 'RFC_ECC_APO',
  //   },
  //   {
  //     salesChannel: 5,
  //     totalAccount: 2018822290,
  //     totalRevenue: 'REC_ECC_APO',
  //     productType: 'RFC_ECC_APO',
  //   }
  // ];
  // dataSourceWithObjectColumn = new MatTableDataSource(this.EmpData);

  selectAll() {
    console.log(this.dataSource);
  }

  viewdisp = false;
  displayView() {
    const data = this.dataService.getData();
    this.rowDataSource = data;
    this.displayColumns = Object.keys(data[0]);
    this.viewdisp = !this.viewdisp;
    this.selection.selected.forEach((element: any) => {
      if (element.mandatory) {
        this.selectRowNames.push(element.attribute_description);
        this.selectRowdes.push(element.attribute_name);
        this.dataService.setSelectedData(
          this.selectRowNames,
          this.selectRowdes
        );
      }
    });
  }
  extractNavigate() {
    this.router.navigate(['/ExtractConfigure']);
  }
}
