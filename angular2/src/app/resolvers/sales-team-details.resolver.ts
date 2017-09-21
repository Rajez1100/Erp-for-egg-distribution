import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { SalesTeamsService } from 'app/services';
import { SalesTeam } from 'app/classes';

@Injectable()
export class SalesTeamdetailsResolver implements Resolve<SalesTeam> {
    constructor(private router: Router, private stService: SalesTeamsService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<SalesTeam> {

         let queryParams: Object = {};
        if ('queryParams' in route.data) Object.assign(queryParams, route.data['queryParams']);

        if ('id' in route.params) {
            return this.stService.get(route.params['id'], queryParams)
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