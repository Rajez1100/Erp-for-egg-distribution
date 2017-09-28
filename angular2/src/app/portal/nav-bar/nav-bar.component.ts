import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GlobalsService, AuthService } from 'app/services';
import { User } from 'app/classes';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

declare var jQuery: any;

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent implements OnInit {
  ngUnSubscribe: Subject<void> = new Subject<void>();
  user: User = new User();

  constructor(
    private gs: GlobalsService,
    private authService: AuthService
  ) {

    // User details subscription
    this.gs.user$.takeUntil(this.ngUnSubscribe).subscribe(user => {
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
    this.ngUnSubscribe.next();
    this.ngUnSubscribe.complete();
  }

  ngAfterViewInit() {
    console.log(document.getElementById('fullscreen-toggler'))
    setTimeout(() => {
    document.getElementById('fullscreen-toggler').click();
    }, 1000)

  }

}
