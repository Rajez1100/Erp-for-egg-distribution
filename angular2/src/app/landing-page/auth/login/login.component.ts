import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GlobalsService, AuthService } from 'app/services';

@Component({
    selector: 'app-login',
    encapsulation: ViewEncapsulation.Emulated,
    templateUrl: './login.component.html',
    styleUrls: [
    ]
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loginError: string;
    process: string;

    constructor(
        private fb: FormBuilder,
        private authService: AuthService,
        private router: Router,
        private globals: GlobalsService) {

        // Building login form
        this.loginForm = this.fb.group({
            'username': ['', [Validators.required]],
            'password': ['', [Validators.required]]
        });
    }

    ngOnInit() { }

    // Login action
    login() {
        this.process = 'checking';
        let formValue = this.loginForm.value;

        this.authService.login(formValue.username, formValue.password)
            .subscribe(
            response => {
                this.loginError = null;

                this.authService.redirectToHome();
            },
            error => {
                this.process = null;
                this.handleError(error);
            }
            );
    }

    // Handeling errors
    handleError(error: any) {
        console.log(error);
        if (new RegExp('Unable to login').test(error)) {
            this.loginError = 'Invalid credentials';
        }
        else {
            this.loginError = error;
        }
    }
}
