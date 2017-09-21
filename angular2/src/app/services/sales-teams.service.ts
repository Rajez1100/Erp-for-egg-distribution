import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { GetApiurl } from 'app/functions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { SalesTeam } from 'app/classes';

@Injectable()
export class SalesTeamsService {

  constructor(
    private authHttp: AuthHttp
  ) { }

  // API call to get list of SalesTeams
  list(queryParams?: Object): Observable<SalesTeam[]> {
    let url: string = GetApiurl(`sales-teams/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => Response.json().forEach(R => new SalesTeam(R)))
      .catch(Err => Err);
  }

  // API call to get details of SalesTeam
  get(id: number, queryParams?: Object): Observable<SalesTeam> {
    let url: string = GetApiurl(`sales-teams/${id}/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => new SalesTeam(Response.json()))
      .catch(Err => Err);
  }

  // API call to create new SalesTeam
  create(data: SalesTeam, queryParams?: Object): Observable<SalesTeam> {
    let url: string = GetApiurl(`sales-teams/`, queryParams);

    return this.authHttp
      .post(url, JSON.stringify(data))
      .map(Response => new SalesTeam(Response.json()))
      .catch(Err => Err);
  }

  // API call to update SalesTeam
  update(id: number, data: SalesTeam, queryParams?: Object): Observable<SalesTeam> {
    let url: string = GetApiurl(`sales-teams/${id}/`, queryParams);

     return this.authHttp
      .put(url, JSON.stringify(data))
      .map(Response => new SalesTeam(Response.json()))
      .catch(Err => Err);
  }

  // API call to get delete SalesTeam
  delete(id: number, queryParams?: Object): Observable<any> {
    let url: string = GetApiurl(`sales-teams/`, queryParams);

    return this.authHttp
      .delete(url)
      .map(Response => Response.json())
      .catch(Err => Err);
  }
}
