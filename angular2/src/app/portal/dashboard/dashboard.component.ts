import { Component, OnInit } from '@angular/core';
import { CompanyName } from 'app/parameters';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  companyName = CompanyName;

  constructor() { }

  ngOnInit() {
  }

}
