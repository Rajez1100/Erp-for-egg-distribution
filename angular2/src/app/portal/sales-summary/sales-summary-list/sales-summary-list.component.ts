import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ng2TableConfig } from 'app/directives';
import { GetApiurl } from 'app/functions';

@Component({
  selector: 'app-sales-summary-list',
  templateUrl: './sales-summary-list.component.html',
  styles: []
})
export class SalesSummaryListComponent implements OnInit {

  tableConfig: ng2TableConfig = {
    screenName: 'Sales',
    fetchUrl: GetApiurl('sales-summary/'),
    queryParams: {},
    columns: [
      { title: 'Date', name: 'date', sort: true },
      { title: 'Sales Team', name: 'sales_team_name', sort: true },
      { title: 'Trays Sold', name: 'total_plates', sort: false },
      { title: 'Cost', name: 'total_cost', sort: false, type: 'number', fraction: 2 },
      { title: 'Cash Collected', name: 'cash_handovered', sort: true, type: 'number', fraction: 2 },
      { title: 'Outstanding', name: 'total_outstanding', sort: false, type: 'number', fraction: 2 },
      { title: 'Actions', links: ['View', 'Edit'], }
    ],
    rows: [],
    limit: 10,
    addButtonInfo: { text: 'Add Sales', url: '/app/sales-summary/add' }
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  doTableEvent(event: any) {
    if (event.action == 'View') this.router.navigate(['/app', 'sales-summary', event.row.id, 'view']);
    else if (event.action == 'Edit') this.router.navigate(['/app', 'sales-summary', event.row.id, 'edit']);
  }

}
