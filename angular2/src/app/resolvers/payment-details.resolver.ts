import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PaymentsService } from 'app/services';
import { Payment, PaymentFormData } from 'app/classes';

@Injectable()
export class PaymentdetailsResolver implements Resolve<Payment> {
    constructor(private router: Router, private paymentService: PaymentsService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Payment> {

        let queryParams: Object = {};
        if ('queryParams' in route.data) Object.assign(queryParams, route.data['queryParams']);

        if ('id' in route.params) {
            return this.paymentService.get(route.params['id'], queryParams)
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
export class PaymentFormDataResolver implements Resolve<PaymentFormData> {
    constructor(private router: Router, private paymentService: PaymentsService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<PaymentFormData> {

        let queryParams: Object = {};
        if ('queryParams' in route.data) Object.assign(queryParams, route.data['queryParams']);

        return this.paymentService.formData(queryParams)
            .map(Result => {
                return Result;
            })
            .catch(Error => {
                this.router.navigate(['/error/detail-not-found']);
                return null;
            })

    }
}