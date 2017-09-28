import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { ReportsService } from 'app/services';
import { DailyReportSummary, SelectOption } from 'app/classes';

declare var c3: any;
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html'
})
export class DailyComponent implements OnInit {
  ngUnSubcribe: Subject<void> = new Subject<void>();
  reportDataRequest: Subscription;
  date: Date;
  queryParams: Object = {};
  summary: DailyReportSummary = new DailyReportSummary();
  state: string;
  currencyFormat: string = 'INR';

  constructor(
    private route: ActivatedRoute,
    private rService: ReportsService
  ) { }

  ngOnInit() {
    this.date = new Date();
  }

  ngOnDestroy() {
    this.ngUnSubcribe.next();
    this.ngUnSubcribe.complete();
  }

  weekChanged(event: any) {
    this.date = event;

    this.queryParams['date'] = moment(event).format('DD-MM-YYYY');

    this.getReport();
  }

  getReport() {
    this.state = 'fetchingReport';

    if (this.reportDataRequest) this.reportDataRequest.unsubscribe();

    this.reportDataRequest = this.rService
      .getDailyReport(this.queryParams)
      .subscribe(Result => {
        this.summary = new DailyReportSummary(Result['summary']);

        this.state = 'fetchedReport'; console.log(this.summary)
      }, Err => {
        this.state = 'failedToFetchReport';
        this.summary = new DailyReportSummary();
      })

  }

  ngAfterViewInit() {
    let pie: HTMLDivElement = <HTMLDivElement>document.getElementById('stocked');
    setTimeout(() => {
      c3.generate({
        bindto: '#stocked',
        data: {
          columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
            ['data2', 50, 20, 10, 40, 15, 25]
          ],
          colors: {
            data1: '#1ab394',
            data2: '#BABABA'
          },
          type: 'bar',
          groups: [
            ['data1', 'data2']
          ]
        }
      });
    }, 3000);

  }

}
