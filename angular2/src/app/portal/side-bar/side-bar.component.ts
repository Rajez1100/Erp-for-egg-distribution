import { Component, OnInit, OnDestroy, ElementRef, AfterViewInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { GlobalsService } from 'app/services';
import { User } from 'app/classes';
import { CompanyName } from 'app/parameters';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';

declare var jQuery: any;

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html'
})
export class SideBarComponent implements OnInit {
  ngUnSubscribe: Subject<void> = new Subject<void>();
  user: User = new User();
  companyName: string = CompanyName[1];
  companyShortName: string = CompanyName[0];
  $el: any;

  constructor(
    private gs: GlobalsService,
    private el_ref: ElementRef,
    private _location: Location,
    private router: Router
  ) {

    // User details subscription
    this.gs.user$.takeUntil(this.ngUnSubscribe).subscribe(user => {
      if (user) this.user = user;
      else this.user = new User();
    })
  }

  ngOnInit() {
    this.router.events
      .filter(event => event instanceof NavigationEnd)
      .takeUntil(this.ngUnSubscribe)
      .subscribe(event => {
        this.changeActiveNavigationItem(this._location);
      })

  }

  ngAfterViewInit() {
    this.$el = jQuery(this.el_ref.nativeElement);

    this.changeActiveNavigationItem(this._location);
  }

  changeActiveNavigationItem(location): void {
    let path: string = location.path().split('?')[0];
    let pathAsArray = path.split('/');
    let count = pathAsArray.length - 1;
    for (let index = count; index > 1; index--) {
      let pathToCheck = pathAsArray.join('/');
      let $newActiveLink = this.$el.find('a[href="' + pathToCheck + '"]');
      if ($newActiveLink.length == 1 || pathToCheck.indexOf('dashboard') != -1) {
        this.$el.find('#side-menu .active').removeClass('active');
        // collapse .collapse only if new and old active links belong to different .collapse
        if (!$newActiveLink.is('.active > .collapse > li > a')) {
          this.$el.find('.active .active').closest('.collapse').collapse('hide');
        }
        $newActiveLink.closest('li').addClass('active')
          .parents('li').addClass('active');

        // uncollapse parent
        $newActiveLink.closest('.collapse').addClass('in').css('height', '')
          .siblings('a[data-toggle=collapse]').removeClass('collapsed');
        break;
      }
      pathAsArray.pop()
    }
  }

  ngOnDestroy() {
    this.ngUnSubscribe.next();
    this.ngUnSubscribe.complete();
  }
}
