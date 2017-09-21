import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { GetApiurl } from 'app/functions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { EggCollection, EggCollectionFormData } from 'app/classes';

@Injectable()
export class EggCollectionsService {

  constructor(
    private authHttp: AuthHttp
  ) { }

  // API call to get list of EggCollections
  list(queryParams?: Object): Observable<EggCollection[]> {
    let url: string = GetApiurl(`egg-collections/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => Response.json().forEach(R => new EggCollection(R)))
      .catch(Err => Err);
  }

  // API call to get details of EggCollection
  get(id: number, queryParams?: Object): Observable<EggCollection> {
    let url: string = GetApiurl(`egg-collections/${id}/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => new EggCollection(Response.json()))
      .catch(Err => Err);
  }

  // API call to create new EggCollection
  create(data: EggCollection, queryParams?: Object): Observable<EggCollection> {
    let url: string = GetApiurl(`egg-collections/`, queryParams);

    return this.authHttp
      .post(url, JSON.stringify(data))
      .map(Response => new EggCollection(Response.json()))
      .catch(Err => Err);
  }

  // API call to update EggCollection
  update(id: number, data: EggCollection, queryParams?: Object): Observable<EggCollection> {
    let url: string = GetApiurl(`egg-collections/${id}/`, queryParams);

    return this.authHttp
      .put(url, JSON.stringify(data))
      .map(Response => new EggCollection(Response.json()))
      .catch(Err => Err);
  }

  // API call to get delete EggCollection
  delete(id: number, queryParams?: Object): Observable<any> {
    let url: string = GetApiurl(`egg-collections/`, queryParams);

    return this.authHttp
      .delete(url)
      .map(Response => Response.json())
      .catch(Err => Err);
  }

  // API call to get form data
  formData(queryParams?: Object): Observable<EggCollectionFormData> {
    let url: string = GetApiurl(`egg-collections/form-data/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => new EggCollectionFormData(Response.json()))
      .catch(Err => Err);
  }
}
