import { Component, OnInit } from '@angular/core';
import { GlobalsService, AuthService } from 'app/services';
import { User } from 'app/classes';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  subscriptions: Object = {};
  user: User = new User();

  constructor(
    private gs: GlobalsService,
    private authService: AuthService
  ) {

    // User details subscription
    this.subscriptions['userDetailsSubscription'] = this.gs.user$.subscribe(user => {
      if (user) this.user = user;
      else this.user = new User();
    })
  }

  ngOnInit() {
  }

  logout() {
    this.authService.logout();
  }

  ngOnDestroy() {
    Object.keys(this.subscriptions).forEach(subacriptionName => this.subscriptions[subacriptionName].unsubscribe());
  }

}
