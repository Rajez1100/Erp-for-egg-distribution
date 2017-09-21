import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EggFarmsService } from 'app/services';
import { ng2TableConfig } from 'app/directives';
import { GetApiurl } from 'app/functions';

@Component({
  selector: 'app-egg-farms-list',
  templateUrl: './egg-farms-list.component.html'
})
export class EggFarmsListComponent implements OnInit {

  tableConfig: ng2TableConfig = {
    screenName: 'Egg Farms',
    fetchUrl: GetApiurl('egg-farms/'),
    queryParams: {},
    columns: [
      { title: 'Name', name: 'name', sort: true },
      { title: 'Description', name: 'description', sort: false },
      { title: 'Actions', links: ['View', 'Edit'], }
    ],
    rows: [],
    limit: 10,
    addButtonInfo: { text: 'Add Farm', url: '/app/egg-farms/add' }
  }

  constructor(
    private router: Router,
    private eggFarmsService: EggFarmsService
  ) { }

  ngOnInit() {
  }

  doTableEvent(event: any) {
    if (event.action == 'View') this.router.navigate(['/app', 'egg-farms', event.row.id, 'view']);
    else if (event.action == 'Edit') this.router.navigate(['/app', 'egg-farms', event.row.id, 'edit']);
  }

}
