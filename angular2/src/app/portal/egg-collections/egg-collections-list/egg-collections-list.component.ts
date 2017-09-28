import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ng2TableConfig } from 'app/directives';
import { GetApiurl } from 'app/functions';

@Component({
  selector: 'app-egg-collections-list',
  templateUrl: './egg-collections-list.component.html',
  styles: []
})
export class EggCollectionsListComponent implements OnInit {

  tableConfig: ng2TableConfig = {
    screenName: 'Egg Purchases',
    fetchUrl: GetApiurl('egg-collections/'),
    queryParams: {},
    columns: [
      { title: 'Date', name: 'date', sort: true },
      { title: 'Farm', name: 'farm_name', sort: true },
      { title: 'Rate', name: 'rate', sort: true , type: 'number', fraction: 2 },
      { title: 'Sales Team', name: 'sales_team_name', sort: true },
      { title: 'Plates', name: 'no_of_plates', sort: true },
      { title: 'Actions', links: ['View', 'Edit'], }
    ],
    rows: [],
    limit: 10,
    addButtonInfo: { text: 'Add Purchase', url: '/app/egg-collections/add' }
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  doTableEvent(event: any) {
    if (event.action == 'View') this.router.navigate(['/app', 'egg-collections', event.row.id, 'view']);
    else if (event.action == 'Edit') this.router.navigate(['/app', 'egg-collections', event.row.id, 'edit']);
  }

}
