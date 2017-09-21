import { Injectable } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { GetApiurl } from 'app/functions';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { EggFarm } from 'app/classes';

@Injectable()
export class EggFarmsService {

  constructor(
    private authHttp: AuthHttp
  ) { }

  // API call to get list of EggFarms
  list(queryParams?: Object): Observable<EggFarm[]> {
    let url: string = GetApiurl(`egg-farms/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => Response.json().forEach(R => new EggFarm(R)))
      .catch(Err => Err);
  }

  // API call to get details of EggFarm
  get(id: number, queryParams?: Object): Observable<EggFarm> {
    let url: string = GetApiurl(`egg-farms/${id}/`, queryParams);

    return this.authHttp
      .get(url)
      .map(Response => new EggFarm(Response.json()))
      .catch(Err => Err);
  }

  // API call to create new EggFarm
  create(data: EggFarm, queryParams?: Object): Promise<EggFarm> {
    let url: string = GetApiurl(`egg-farms/`, queryParams);

    return new Promise((resolve, reject) => {
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();

      Object.keys(data).forEach(property => {
        formData.append(property, data[property]);
      });

      xhr.open('POST', url, true);
      xhr.setRequestHeader('Authorization', 'JWT ' + localStorage.getItem('id_token'));
      xhr.send(formData);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (new RegExp('^2[0-9]{2}$').test(xhr.status.toString())) {
            resolve(new EggFarm(JSON.parse(xhr.responseText)));
          } else {
            reject(JSON.parse(xhr.responseText));
          }
        }
      }
    });
  }

  // API call to update EggFarm
  update(id: number, data: EggFarm, queryParams?: Object): Promise<EggFarm> {
    let url: string = GetApiurl(`egg-farms/${id}/`, queryParams);

    return new Promise((resolve, reject) => {
      let formData: any = new FormData();
      let xhr = new XMLHttpRequest();

      Object.keys(data).forEach(property => {
        formData.append(property, data[property]);
      });

      xhr.open('PUT', url, true);
      xhr.setRequestHeader('Authorization', 'JWT ' + localStorage.getItem('id_token'));
      xhr.send(formData);
      xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
          if (new RegExp('^2[0-9]{2}$').test(xhr.status.toString())) {
            resolve(new EggFarm(JSON.parse(xhr.responseText)));
          } else {
            reject(JSON.parse(xhr.responseText));
          }
        }
      }
    });
  }

  // API call to get delete EggFarm
  delete(id: number, queryParams?: Object): Observable<any> {
    let url: string = GetApiurl(`egg-farms/`, queryParams);

    return this.authHttp
      .delete(url)
      .map(Response => Response.json())
      .catch(Err => Err);
  }
}
