import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { DemandTransfersService } from 'app/services';
import { DemandTransfer, DemandTransferFormData } from 'app/classes';

@Injectable()
export class DemandTransferdetailsResolver implements Resolve<DemandTransfer> {
    constructor(private router: Router, private dtService: DemandTransfersService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<DemandTransfer> {

        let queryParams: Object = {};
        if ('queryParams' in route.data) Object.assign(queryParams, route.data['queryParams']);

        if ('id' in route.params) {
            return this.dtService.get(route.params['id'], queryParams)
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
export class DemandTransferFormDataResolver implements Resolve<DemandTransferFormData> {
    constructor(private router: Router, private dtService: DemandTransfersService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<DemandTransferFormData> {

        let queryParams: Object = {};
        if ('queryParams' in route.data) Object.assign(queryParams, route.data['queryParams']);

        return this.dtService.formData(queryParams)
            .map(Result => {
                return Result;
            })
            .catch(Error => {
                this.router.navigate(['/error/detail-not-found']);
                return null;
            })
    }
}