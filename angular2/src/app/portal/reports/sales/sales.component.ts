import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { ReportsService } from 'app/services';
import { SalesReportSummary, SelectOption } from 'app/classes';

declare var c3: any;
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styles: []
})
export class SalesComponent implements OnInit {
  ngUnSubcribe: Subject<void> = new Subject<void>();
  reportDataRequest: Subscription;
  salesTeams: Object[] = [];
  startDate: Date;
  endDate: Date;
  salesTeam: SelectOption;
  queryParams: Object = {};
  summary: SalesReportSummary = new SalesReportSummary();
  state: string;
  currencyFormat: string = 'INR';
  showSalesTeamSpecific: boolean = false;
  datepickerOptions: Object = {
    autoclose: true,
    todayHighlight: true,
    format: 'dd-mm-yyyy',
    icon: 'fa fa-calendar',
    todayBtn: 'linked'
  };

  constructor(
    private route: ActivatedRoute,
    private rService: ReportsService
  ) {
    // Route params
    this.route.data.takeUntil(this.ngUnSubcribe).subscribe(data => {

      if ('form_data' in data) this.salesTeams = data['form_data']['sales_teams'];
      else this.salesTeams = [];
    });

  }

  ngOnInit() {
    this.startDate = new Date();
    this.endDate = new Date();

    this.getReport();
  }

  ngOnDestroy() {
    this.ngUnSubcribe.next();
    this.ngUnSubcribe.complete();
  }

  salesTeamChanged(action: string, event: SelectOption) {
    if (action == 'changed') {
      this.salesTeam = event;
      this.queryParams['sales_team'] = event['id'];
    }
    else if (action == 'removed') {
      this.salesTeam = undefined;
      if ('sales_team' in this.queryParams) delete this.queryParams['sales_team'];
    }
  }

  getReport() {
    this.state = 'fetchingReport';

    this.queryParams['start'] = moment(this.startDate).format('DD-MM-YYYY');
    this.queryParams['end'] = moment(this.endDate).format('DD-MM-YYYY');

    if (this.reportDataRequest) this.reportDataRequest.unsubscribe();

    this.reportDataRequest = this.rService
      .getSalesReport(this.queryParams)
      .subscribe(Result => {
        this.summary = new SalesReportSummary(Result['summary']);

        if (this.salesTeam) this.showSalesTeamSpecific = true;
        else this.showSalesTeamSpecific = false;

        this.state = 'fetchedReport'; 
      }, Err => {
        this.state = 'failedToFetchReport';
        this.summary = new SalesReportSummary();
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

