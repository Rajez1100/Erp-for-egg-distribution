import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EggFarmsService } from 'app/services';
import { EggFarm } from 'app/classes';

@Injectable()
export class EggFarmdetailsResolver implements Resolve<EggFarm> {
    constructor(private router: Router, private farmService: EggFarmsService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<EggFarm> {

         let queryParams: Object = {};
        if ('queryParams' in route.data) Object.assign(queryParams, route.data['queryParams']);

        if ('id' in route.params) {
            return this.farmService.get(route.params['id'], queryParams)
                .map(Result => {
                    return Result;
                })
                .catch(Error => {
                    this.router.navigate(['/error/detail-not-found']);
                    return null;
                })
        }
        else {
            this.router.navigate(['/error/detail-not-found']);
            return null;
        }

    }
}