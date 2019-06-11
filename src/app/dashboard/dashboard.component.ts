import { Component, OnInit } from '@angular/core';
import { DashboardValue, Register } from './interface.dashboard';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],

})
export class DashboardComponent implements OnInit {


  constructor(private dashboardService: DashboardService) {

  }
  finalResponse = []


  ngOnInit() {
    this.dashboardService.getDashboardItem('1').subscribe(resp => {
      resp['result'].forEach(element => {
        const response = new Map<string, any>(Object.entries(element))
        this.finalResponse.push(Array.from(response))
      });
    })
  }
  ngOnDestroy(): void {
  }




}
