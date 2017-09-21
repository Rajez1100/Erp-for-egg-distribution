import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ng2TableConfig } from 'app/directives';
import { GetApiurl } from 'app/functions';

@Component({
  selector: 'app-sales-teams-list',
  templateUrl: './sales-teams-list.component.html'
})
export class SalesTeamsListComponent implements OnInit {

  tableConfig: ng2TableConfig = {
    screenName: 'Sales Teams',
    fetchUrl: GetApiurl('sales-teams/'),
    queryParams: {},
    columns: [
      { title: 'Name', name: 'name', sort: true },
      { title: 'Description', name: 'description', sort: false },
      { title: 'Actions', links: ['View', 'Edit'], }
    ],
    rows: [],
    limit: 10,
    addButtonInfo: { text: 'Add Sales Team', url: '/app/sales-teams/add' }
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  doTableEvent(event: any) {
    if (event.action == 'View') this.router.navigate(['/app', 'sales-teams', event.row.id, 'view']);
    else if (event.action == 'Edit') this.router.navigate(['/app', 'sales-teams', event.row.id, 'edit']);
  }

}
