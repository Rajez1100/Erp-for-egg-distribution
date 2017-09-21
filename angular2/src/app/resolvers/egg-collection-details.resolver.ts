import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { EggCollectionsService } from 'app/services';
import { EggCollection, EggCollectionFormData } from 'app/classes';

@Injectable()
export class EggCollectiondetailsResolver implements Resolve<EggCollection> {
    constructor(private router: Router, private ecService: EggCollectionsService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<EggCollection> {

        let queryParams: Object = {};
        if ('queryParams' in route.data) Object.assign(queryParams, route.data['queryParams']);

        if ('id' in route.params) {
            return this.ecService.get(route.params['id'], queryParams)
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
export class EggCollectionFormDataResolver implements Resolve<EggCollectionFormData> {
    constructor(private router: Router, private ecService: EggCollectionsService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<EggCollectionFormData> {

        let queryParams: Object = {};
        if ('queryParams' in route.data) Object.assign(queryParams, route.data['queryParams']);

        return this.ecService.formData(queryParams)
            .map(Result => {
                return Result;
            })
            .catch(Error => {
                this.router.navigate(['/error/detail-not-found']);
                return null;
            })
    }
}