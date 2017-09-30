import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import 'rxjs/add/operator/takeUntil';
import { Subject } from 'rxjs/Subject';
import { Subscription } from 'rxjs/Subscription';
import { ReportsService } from 'app/services';
import { PaymentsReportSummary, SelectOption } from 'app/classes';
import { ng2TableConfig } from 'app/directives';
import { GetApiurl } from 'app/functions';

declare var c3: any;
declare var jQuery: any;
declare var moment: any;

@Component({
  selector: 'app-payments-report',
  templateUrl: './payments-report.component.html',
  styles: []
})
export class PaymentsReportComponent implements OnInit {
  ngUnSubcribe: Subject<void> = new Subject<void>();
  reportDataRequest: Subscription;
  farms: Object[] = [];
  startDate: Date;
  endDate: Date;
  farm: SelectOption;
  queryParams: Object = {};
  reportData: PaymentsReportSummary = new PaymentsReportSummary();
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
  tableConfig: ng2TableConfig = {
    screenName: 'List Report',
    fetchUrl: GetApiurl('reports/collections-and-payments/'),
    queryParams: {},
    columns: [
      { title: 'Date', name: 'date', sort: true },
      { title: 'Farm', name: 'farm_name', sort: false },
      { title: 'Trays Purchased', name: 'plates_collection', sort: true, type: 'number', fraction: 2 },
      { title: 'Purchase Cost', name: 'cost_collection', sort: true, type: 'number', fraction: 2 },
      { title: 'Paid Amount', name: 'cost_payment', sort: true, type: 'number', fraction: 2 }
    ],
    rows: [],
    limit: 10
  }

  constructor(
    private route: ActivatedRoute,
    private rService: ReportsService
  ) {
    // Route params
    this.route.data.takeUntil(this.ngUnSubcribe).subscribe(data => {

      if ('form_data' in data) this.farms = data['form_data']['farms'];
      else this.farms = [];
    });

  }

  ngOnInit() {

    let today: Date = new Date();
    this.endDate = today;
    this.startDate = moment(today).days('0')._d;

    this.getReport();
  }

  ngOnDestroy() {
    this.ngUnSubcribe.next();
    this.ngUnSubcribe.complete();
  }

  farmChanged(action: string, event: SelectOption) {
    if (action == 'changed') {
      this.farm = event;
      this.queryParams['farm'] = event['id'];
    }
    else if (action == 'removed') {
      this.farm = undefined;
      if ('farm' in this.queryParams) delete this.queryParams['farm'];
    }
  }

  getReport() {
    this.state = 'fetchingReport';

    this.queryParams = {
      'start_date': moment(this.startDate).format('DD-MM-YYYY'),
      'end_date': moment(this.endDate).format('DD-MM-YYYY')
    }

    if (this.farm) this.queryParams['farm'] = this.farm.id;
    else this.queryParams['farm'] = 'all';

    this.tableConfig['queryParams'] = JSON.parse(JSON.stringify(this.queryParams));

    if (this.reportDataRequest) this.reportDataRequest.unsubscribe();

    this.reportDataRequest = this.rService
      .getPaymentsReport(this.queryParams)
      .subscribe(Result => {
        this.reportData = Result;

        if (this.farm) this.showSalesTeamSpecific = true;
        else this.showSalesTeamSpecific = false;

        this.state = 'fetchedReport';
      }, Err => {
        this.state = 'failedToFetchReport';
        this.reportData = new PaymentsReportSummary();
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
