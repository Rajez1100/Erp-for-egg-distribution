import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { GetApiurl } from 'app/functions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { PaymentsReportSummary, DailyReportSummary } from 'app/classes';

@Injectable()
export class ReportsService {

  constructor(
    private authHttp: AuthHttp
  ) { }

  // API call to get sales report summary
  getSalesReport(queryParams?: Object): Observable<any> {
    let url: string = GetApiurl(`reports/sales/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => Response.json())
      .catch(Err => Err);
  }

  // API call to get weekly collections/payments summary
  getPaymentsReport(queryParams?: Object): Observable<any> {
    let url: string = GetApiurl(`reports/payments/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => new PaymentsReportSummary(Response.json()))
      .catch(Err => Err);
  }

  // API call to get daily sales summary
  getDailyReport(queryParams?: Object): Observable<any> {
    let url: string = GetApiurl(`reports/sales/daily/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => new DailyReportSummary(Response.json()))
      .catch(Err => Err);
  }

}
