import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { urlConst } from '../urlConst';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  private readonly getDashboard = `${urlConst.baseUrl}/api/service/getAllCounts`;
  constructor(private http: HttpClient) { }

  getDashboardItem(id) {
    return this.http.get(`${this.getDashboard}`)
  }

}
