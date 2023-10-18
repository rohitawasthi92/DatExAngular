import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
  MatTableDataSource,
  MatTableDataSourcePaginator,
} from '@angular/material/table';
import { SubscriptionDialogComponent } from '../subscription-dialog/subscription-dialog.component';
export interface PreviewDataDiscovery {
  subsciptionName: string;
  extractName: string;
  startDate: string;
  endDate: string;
  frequency: string;
  time: string;
  action?: string;
}

@Component({
  selector: 'app-viewsubscriptions',
  templateUrl: './viewsubscriptions.component.html',
  styleUrls: ['./viewsubscriptions.component.scss'],
})
export class ViewsubscriptionsComponent implements OnInit {
  tableData!: any[];
  originalTime: any = '';

  constructor(private http: HttpClient, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.http
      .get<PreviewDataDiscovery[]>('http://127.0.0.1:5000/viewsubscription')
      .subscribe((data: any) => {
        this.tableData = data;
        this.tableData.forEach((ele) => {
          this.originalTime = ele['time'].split(':');
          ele['time'] = `${this.originalTime[0]}.${this.originalTime[1]}`;
        });
        this.dataSourceWithObjectColumn.data = this.tableData;
      });
  }

  displayedColumnsWithObject: string[] = [
    'subscription',
    'extractName',
    'startDate',
    'endDate',
    'frequency',
    'time',
    'action',
  ];

  // EmpData: PreviewDataDiscovery[] = [
  //   {
  //     subscription:'Area-Common',
  //     extractName:'XYZ',
  //     startDate:'28-09-2023',
  //     endDate:'30-09-2023',
  //     frequency:'Weekly',
  //     time: '08:30AM' ,

  //   },
  //   {
  //     subscription:'Area-Common',
  //     extractName:'XYZ',
  //     startDate:'28-09-2023',
  //     endDate:'30-09-2023',
  //     frequency:'Weekly',
  //     time: '08:30AM' ,
  //    },
  //    {
  //     subscription:'Area-Common',
  //     extractName:'XYZ',
  //     startDate:'28-09-2023',
  //     endDate:'30-09-2023',
  //     frequency:'Weekly',
  //     time: '08:30AM' ,
  //   },
  //   {
  //     subscription:'Area-Common',
  //     extractName:'XYZ',
  //     startDate:'28-09-2023',
  //     endDate:'30-09-2023',
  //     frequency:'Weekly',
  //     time: '08:30AM' ,
  //   }
  // ];

  openDialog(action: string, row: any = null) {
    console.log(row);
    const dialogRef = this.dialog.open(SubscriptionDialogComponent, {
      data: {
        rowData: row,
        action,
      },
    });
  }

  dataSourceWithObjectColumn = new MatTableDataSource(this.tableData);
}
