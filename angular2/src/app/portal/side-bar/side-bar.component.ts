import { Component, OnInit, OnDestroy } from '@angular/core';
import { GlobalsService } from 'app/services';
import { User } from 'app/classes';
import { CompanyName } from 'app/parameters';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  subscriptions: Object = {};
  user: User = new User();
  companyShortName: string = CompanyName[0]; 

  constructor(
    private gs: GlobalsService
  ) {

    // User details subscription
    this.subscriptions['userDetailsSubscription'] = this.gs.user$.subscribe(user => {
      if (user) this.user = user;
      else this.user = new User();
    })
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    Object.keys(this.subscriptions).forEach(subacriptionName => this.subscriptions[subacriptionName].unsubscribe());
  }
}
