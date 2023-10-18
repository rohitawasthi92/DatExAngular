import { Component, OnInit } from '@angular/core';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';
import { ViewExtracts } from '../searchdatasets/models/view-extracts.model';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { ExtractDialogComponent } from '../extract-dialog/extract-dialog.component';
import { ViewExtractService } from '../viewextracts/view-extract.service';
import { Router } from '@angular/router';
import { DataService } from '../searchdatasets/data.service';

@Component({
  selector: 'app-viewextracts',
  templateUrl: './viewextracts.component.html',
  styleUrls: ['./viewextracts.component.scss'],
})
export class ViewextractsComponent implements OnInit {
  constructor(
    private http: HttpClient,
    public dialog: MatDialog,
    private dataService: ViewExtractService,
    private router: Router,
    private dataservice: DataService
  ) {}
  data: ViewExtracts[] = [];
  extractName!:string;
  displayedColumnsWithObject: string[] = [
    'extractName',
    'createdBy',
    'underlyingDataset',
    'fileType',
    'destination',
    'location',
    'action',
  ];

  dataSource = new MatTableDataSource(this.data);

  ngOnInit(): void {
    this.dataService.getExtractsData().subscribe((data) => {
      this.data = data;
      this.dataSource.data = this.data;
    });
    // this.http.get<ViewExtracts[]>('http://127.0.0.1:5000/viewextract').subscribe((data)=>{
    // this.data=data;
    // this.dataSource.data=this.data;
    // console.log(this.data);
    // })
  }

  onCreateSubscription() {
    this.router.navigate(['/subscription']);
  }

  onRowClicked(row:any) {
    this.extractName = row.extractName
    this.dataservice.viewExtractsSubs = row
    console.log(row);
  }

  onRunExtract() {
    this.dataService.postRunExtract(this.extractName).subscribe((res:any) => {
      console.log(res);
    })
  }

  openDialog(action: string, row: any = null) {
    const dialogRef = this.dialog.open(ExtractDialogComponent, {
      data: {
        rowData: row,
        action,
      },
    });
  }
}
