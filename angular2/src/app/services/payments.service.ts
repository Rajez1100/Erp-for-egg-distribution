import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { GetApiurl } from 'app/functions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Payment, PaymentFormData } from 'app/classes';

@Injectable()
export class PaymentsService {

  constructor(
    private authHttp: AuthHttp
  ) { }

  // API call to get list of Payments
  list(queryParams?: Object): Observable<Payment[]> {
    let url: string = GetApiurl(`payments/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => Response.json().forEach(R => new Payment(R)))
      .catch(Err => Err);
  }

  // API call to get details of Payment
  get(id: number, queryParams?: Object): Observable<Payment> {
    let url: string = GetApiurl(`payments/${id}/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => new Payment(Response.json()))
      .catch(Err => Err);
  }

  // API call to create new Payment
  create(data: Payment, queryParams?: Object): Observable<Payment> {
    let url: string = GetApiurl(`payments/`, queryParams);

    return this.authHttp
      .post(url, JSON.stringify(data))
      .map(Response => new Payment(Response.json()))
      .catch(Err => Err);
  }

  // API call to update Payment
  update(id: number, data: Payment, queryParams?: Object): Observable<Payment> {
    let url: string = GetApiurl(`payments/${id}/`, queryParams);

     return this.authHttp
      .put(url, JSON.stringify(data))
      .map(Response => new Payment(Response.json()))
      .catch(Err => Err);
  }

  // API call to get delete Payment
  delete(id: number, queryParams?: Object): Observable<any> {
    let url: string = GetApiurl(`payments/`, queryParams);

    return this.authHttp
      .delete(url)
      .map(Response => Response.json())
      .catch(Err => Err);
  }

  // API call to get form data
  formData(queryParams?: Object): Observable<PaymentFormData> {
    let url: string = GetApiurl(`payments/form-data/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => new PaymentFormData(Response.json()))
      .catch(Err => Err);
  }
}
