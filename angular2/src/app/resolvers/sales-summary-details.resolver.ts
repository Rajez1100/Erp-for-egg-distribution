import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SalesSummaryService } from 'app/services';
import { SalesSummary, SalesSummaryFormData } from 'app/classes';

@Injectable()
export class SalesSummarydetailsResolver implements Resolve<SalesSummary> {
    constructor(private router: Router, private ssService: SalesSummaryService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<SalesSummary> {

        let queryParams: Object = {};
        if ('queryParams' in route.data) Object.assign(queryParams, route.data['queryParams']);

        if ('id' in route.params) {
            return this.ssService.get(route.params['id'], queryParams)
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


@Injectable()
export class SalesSummaryFormDataResolver implements Resolve<SalesSummaryFormData> {
    constructor(private router: Router, private ssService: SalesSummaryService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<SalesSummaryFormData> {

        let queryParams: Object = {};
        if ('queryParams' in route.data) Object.assign(queryParams, route.data['queryParams']);

        return this.ssService.formData(queryParams)
            .map(Result => {
                return Result;
            })
            .catch(Error => {
                this.router.navigate(['/error/detail-not-found']);
                return null;
            })

    }
}