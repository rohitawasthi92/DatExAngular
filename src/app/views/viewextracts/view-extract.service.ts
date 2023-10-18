import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ViewExtractService  {

  constructor(private http: HttpClient) {   }

  getExtractsData(): Observable<any> {
    // return this.http.get(`${environment.Backend_url}/viewextract`);
    return this.http.get(`http://127.0.0.1:5000/viewextract`);
  }

  deleteExtract(name: string): Observable<any> {
    // return this.http.delete(`${environment.Backend_url}/deleteextract/${name}`);
    return this.http.delete(`http://127.0.0.1:5000/deleteextract/${name}`);
  }

  updateExtract(data: any): Observable<any> {
    // return this.http.put(`${environment.Backend_url}/updateExtract`, data);
    return this.http.put(`http://127.0.0.1:5000/updateExtract`, data)
  }

  postRunExtract(name: string) {
    const params = { data: name };
    return this.http.post<any>('http://127.0.0.1:5000/runextract', params);
  }
}
