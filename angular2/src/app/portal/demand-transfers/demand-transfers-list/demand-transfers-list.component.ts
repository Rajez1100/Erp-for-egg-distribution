import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ng2TableConfig } from 'app/directives';
import { GetApiurl } from 'app/functions';

@Component({
  selector: 'app-demand-transfers-list',
  templateUrl: './demand-transfers-list.component.html',
  styles: []
})
export class DemandTransfersListComponent implements OnInit {

  tableConfig: ng2TableConfig = {
    screenName: 'Demand Transfers',
    fetchUrl: GetApiurl('demand-transfers/'),
    queryParams: {},
    columns: [
      { title: 'Date', name: 'date', sort: true },
      { title: 'Transfer From', name: 'transfer_from_name', sort: true },
      { title: 'Transfer To', name: 'transfer_to_name', sort: true },
      { title: 'Plates', name: 'no_of_plates', sort: true },
      { title: 'Actions', links: ['View', 'Edit'], }
    ],
    rows: [],
    limit: 10,
    addButtonInfo: { text: 'Add Transfer', url: '/app/demand-transfers/add' }
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  doTableEvent(event: any) {
    if (event.action == 'View') this.router.navigate(['/app', 'demand-transfers', event.row.id, 'view']);
    else if (event.action == 'Edit') this.router.navigate(['/app', 'demand-transfers', event.row.id, 'edit']);
  }

}
