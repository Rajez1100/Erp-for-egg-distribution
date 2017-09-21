import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ng2TableConfig } from 'app/directives';
import { GetApiurl } from 'app/functions';

@Component({
  selector: 'app-payments-list',
  templateUrl: './payments-list.component.html',
  styles: []
})
export class PaymentsListComponent implements OnInit {

  tableConfig: ng2TableConfig = {
    screenName: 'Payments',
    fetchUrl: GetApiurl('payments/'),
    queryParams: {},
    columns: [
      { title: 'Date', name: 'date', sort: true },
      { title: 'Farm', name: 'farm_name', sort: true },
      { title: 'Amount', name: 'amount', sort: true , type: 'number', fraction: 2 },
      { title: 'Actions', links: ['View', 'Edit'], }
    ],
    rows: [],
    limit: 10,
    addButtonInfo: { text: 'Add Payment', url: '/app/payments/add' }
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  doTableEvent(event: any) {
    if (event.action == 'View') this.router.navigate(['/app', 'payments', event.row.id, 'view']);
    else if (event.action == 'Edit') this.router.navigate(['/app', 'payments', event.row.id, 'edit']);
  }

}
