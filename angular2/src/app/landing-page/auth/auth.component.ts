import { Component, OnInit, OnDestroy, ViewEncapsulation } from '@angular/core';
import { CompanyName } from 'app/parameters';

@Component({
    selector: 'app-auth',
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: './auth.component.html',
    styleUrls: [
    ]
})
export class AuthComponent implements OnInit {
    CompanyName: string = CompanyName[1];

    constructor() { }

    ngOnInit() {
    }

}
