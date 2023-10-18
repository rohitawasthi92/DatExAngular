import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { CountryFunctionList } from './models/country-function-list.model';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  rowData: any = [];
  constructor(private http: HttpClient) {}

  selectedRowNames: string[] = [];
  selectedRowDesc: string[] = [];
  selectedDataSet: any = {};
  extractDetails: any = {};
  selectedColumns!: string[];
  viewExtractsSubs: any = {};

  // Method to get all countries
  getCountriesAndFunctionNames(): Observable<CountryFunctionList[]> {
    //You can call your custom apis here
    //I am using static data for demo
    return this.http.get<CountryFunctionList[]>(
      'http://127.0.0.1:5000/datasets'
    );
  }

  setSelectedData(names: string[], desc: string[]) {
    this.selectedRowDesc = desc
    this.selectedRowNames = names
  }

  getDataLakeData(fileName: string): Observable<any> {
    const params = { location: fileName };
    return this.http.get<any>('http://127.0.0.1:5000/preview', {
      params,
    });
  }

  postcreateExtract(data:any) {
    return this.http.post<any>('http://127.0.0.1:5000/createextract', data);
  }

  postcreateSubscription(data:any) {
    return this.http.post<any>('http://127.0.0.1:5000/subscription', data);
  }

  private URL = 'http://127.0.0.1:5000/searchrowdata';
  getQueryBuilder(datasetName: any): Observable<any> {
    const url = `${this.URL}?dataset_name=${datasetName}`;
    return this.http.get<any>(url).pipe(map((res) => res));
  }

  storeData(data: any) {
    // console.log(data);
    this.rowData = [...data];
    console.log(this.rowData);
  }

  getData() {
    console.log(this.rowData);
    return this.rowData;
  }
}
