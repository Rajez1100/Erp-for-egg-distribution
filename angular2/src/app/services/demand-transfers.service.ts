import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { GetApiurl } from 'app/functions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { DemandTransfer, DemandTransferFormData } from 'app/classes';

@Injectable()
export class DemandTransfersService {

  constructor(
    private authHttp: AuthHttp
  ) { }

  // API call to get list of DemandTransfers
  list(queryParams?: Object): Observable<DemandTransfer[]> {
    let url: string = GetApiurl(`demand-transfers/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => Response.json().forEach(R => new DemandTransfer(R)))
      .catch(Err => Err);
  }

  // API call to get details of DemandTransfer
  get(id: number, queryParams?: Object): Observable<DemandTransfer> {
    let url: string = GetApiurl(`demand-transfers/${id}/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => new DemandTransfer(Response.json()))
      .catch(Err => Err);
  }

  // API call to create new DemandTransfer
  create(data: DemandTransfer, queryParams?: Object): Observable<DemandTransfer> {
    let url: string = GetApiurl(`demand-transfers/`, queryParams);

    return this.authHttp
      .post(url, JSON.stringify(data))
      .map(Response => new DemandTransfer(Response.json()))
      .catch(Err => Err);
  }

  // API call to update DemandTransfer
  update(id: number, data: DemandTransfer, queryParams?: Object): Observable<DemandTransfer> {
    let url: string = GetApiurl(`demand-transfers/${id}/`, queryParams);

     return this.authHttp
      .put(url, JSON.stringify(data))
      .map(Response => new DemandTransfer(Response.json()))
      .catch(Err => Err);
  }

  // API call to get delete DemandTransfer
  delete(id: number, queryParams?: Object): Observable<any> {
    let url: string = GetApiurl(`demand-transfers/`, queryParams);

    return this.authHttp
      .delete(url)
      .map(Response => Response.json())
      .catch(Err => Err);
  }

    // API call to get form data
  formData(queryParams?: Object): Observable<DemandTransferFormData> {
    let url: string = GetApiurl(`demand-transfers/form-data/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => new DemandTransferFormData(Response.json()))
      .catch(Err => Err);
  }
}
