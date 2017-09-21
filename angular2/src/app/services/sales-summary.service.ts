import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { GetApiurl } from 'app/functions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SalesSummary, SalesSummaryFormData } from 'app/classes';

@Injectable()
export class SalesSummaryService {

  constructor(
    private authHttp: AuthHttp
  ) { }

  // API call to get list of SalesSummarys
  list(queryParams?: Object): Observable<SalesSummary[]> {
    let url: string = GetApiurl(`sales-summary/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => Response.json().forEach(R => new SalesSummary(R)))
      .catch(Err => Err);
  }

  // API call to get details of SalesSummary
  get(id: number, queryParams?: Object): Observable<SalesSummary> {
    let url: string = GetApiurl(`sales-summary/${id}/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => new SalesSummary(Response.json()))
      .catch(Err => Err);
  }

  // API call to create new SalesSummary
  create(data: SalesSummary, queryParams?: Object): Observable<SalesSummary> {
    let url: string = GetApiurl(`sales-summary/`, queryParams);

    return this.authHttp
      .post(url, JSON.stringify(data))
      .map(Response => new SalesSummary(Response.json()))
      .catch(Err => Err);
  }

  // API call to update SalesSummary
  update(id: number, data: SalesSummary, queryParams?: Object): Observable<SalesSummary> {
    let url: string = GetApiurl(`sales-summary/${id}/`, queryParams);

     return this.authHttp
      .put(url, JSON.stringify(data))
      .map(Response => new SalesSummary(Response.json()))
      .catch(Err => Err);
  }

  // API call to get delete SalesSummary
  delete(id: number, queryParams?: Object): Observable<any> {
    let url: string = GetApiurl(`sales-summary/`, queryParams);

    return this.authHttp
      .delete(url)
      .map(Response => Response.json())
      .catch(Err => Err);
  }

  // API call to get form data
  formData(queryParams?: Object): Observable<SalesSummaryFormData> {
    let url: string = GetApiurl(`sales-summary/form-data/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => new SalesSummaryFormData(Response.json()))
      .catch(Err => Err);
  }
}
