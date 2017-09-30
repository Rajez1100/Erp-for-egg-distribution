webpackJsonp([1],{

/***/ "../../../../../src/app/landing-page/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"lock-word animated fadeInDown\">\r\n    <!--<span class=\"first-word\">LOCKED</span><span>SCREEN</span>-->\r\n</div>\r\n    <div class=\"middle-box text-center loginscreen animated fadeInDown\">\r\n        <div>\r\n            <div class=\"m-b-md\">\r\n            <img alt=\"image\" class=\"img-circle circle-border\" src=\"assets/img/company_logo.png\">\r\n            </div>\r\n            <h3>Welcome to {{CompanyName}}</h3>\r\n            \r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ "../../../../../src/app/landing-page/auth/auth.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_parameters__ = __webpack_require__("../../../../../src/app/parameters.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthComponent = (function () {
    function AuthComponent() {
        this.CompanyName = __WEBPACK_IMPORTED_MODULE_1_app_parameters__["a" /* CompanyName */][1];
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    return AuthComponent;
}());
AuthComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-auth',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated,
        template: __webpack_require__("../../../../../src/app/landing-page/auth/auth.component.html"),
        styleUrls: []
    }),
    __metadata("design:paramtypes", [])
], AuthComponent);

//# sourceMappingURL=auth.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Login Form-->\r\n<form *ngIf=\"loginForm\" [formGroup]=\"loginForm\" (submit)=\"login()\" class=\"m-t\" role=\"form\">\r\n\t<div class=\"form-group\">\r\n\t\t<input type=\"text\" formControlName=\"username\" class=\"form-control\" placeholder=\"Username\">\r\n\t\t<control-messages [control]=\"loginForm.controls.username\"></control-messages>\r\n\t</div>\r\n\t<div class=\"form-group\">\r\n\t\t<input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n\t\t<control-messages [control]=\"loginForm.controls.password\"></control-messages>\r\n\t</div>\r\n\r\n\t<!--Error message-->\r\n\t<div class=\"login-error\">\r\n\t\t<div *ngIf=\"!loginError\" class=\"form-error\"> &ensp;</div>\r\n\t\t<div *ngIf=\"loginError\" class=\"form-error\">{{loginError}}</div>\r\n\t</div>\r\n\t<button type=\"submit\" [disabled]=\"!loginForm.valid || process == 'checking'\" class=\"btn btn-primary block full-width m-b\">\r\n\t\t<span *ngIf=\"process != 'checking'\"> Sign In </span>\r\n\t\t\t<span *ngIf=\"process == 'checking'\">\r\n\t\t\t\tSigning In\r\n\t\t\t<i class=\"fa fa-spinner fa-spin\"></i>\r\n\t\t</span>\t\r\n\t</button>\r\n\r\n\t<a [routerLink]=\"['/auth/password/reset']\"><small>Forgot password?</small></a>\r\n\t<!--<p class=\"text-muted text-center\"><small>Do not have an account?</small></p>\r\n\t<a class=\"btn btn-sm btn-white btn-block\" href=\"register.html\">Create an account</a>-->\r\n</form>"

/***/ }),

/***/ "../../../../../src/app/landing-page/auth/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = (function () {
    function LoginComponent(fb, authService, router, globals) {
        this.fb = fb;
        this.authService = authService;
        this.router = router;
        this.globals = globals;
        // Building login form
        this.loginForm = this.fb.group({
            'username': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]],
            'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required]]
        });
    }
    LoginComponent.prototype.ngOnInit = function () { };
    // Login action
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.process = 'checking';
        var formValue = this.loginForm.value;
        this.authService.login(formValue.username, formValue.password)
            .subscribe(function (response) {
            _this.loginError = null;
            _this.authService.redirectToHome();
        }, function (error) {
            _this.process = null;
            _this.handleError(error);
        });
    };
    // Handeling errors
    LoginComponent.prototype.handleError = function (error) {
        console.log(error);
        if (new RegExp('Unable to login').test(error)) {
            this.loginError = 'Invalid credentials';
        }
        else {
            this.loginError = error;
        }
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-login',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated,
        template: __webpack_require__("../../../../../src/app/landing-page/auth/login/login.component.html"),
        styleUrls: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services__["a" /* AuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3_app_services__["d" /* GlobalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services__["d" /* GlobalsService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/auth/password-reset-confirm/password-reset-confirm.component.html":
/***/ (function(module, exports) {

module.exports = "<!--User password reset Form-->\r\n<div *ngIf=\"token\">\r\n\t<p>Enter New Password</p>\r\n\t<form *ngIf=\"passwordResetForm\" [formGroup]=\"passwordResetForm\" (submit)=\"resetPassword()\">\r\n\t\t<div formGroupName=\"passwords\" class=\"\">\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input type=\"password\" formControlName=\"password\" class=\"form-control\" placeholder=\"Password\">\r\n\t\t\t\t<control-messages [control]=\"passwordResetForm.controls.passwords.controls.password\"></control-messages>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"form-group\">\r\n\t\t\t\t<input type=\"password\" formControlName=\"confirm_password\" class=\"form-control\" placeholder=\"Confirm password\">\r\n\t\t\t\t<control-messages [control]=\"passwordResetForm.controls.passwords.controls.confirm_password\"></control-messages>\r\n\t\t\t\t<control-messages [control]=\"passwordResetForm.controls.passwords\"></control-messages>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"login-error\">\r\n\t\t\t\t<div *ngIf=\"!resetError\">&ensp;</div>\r\n\t\t\t\t<div *ngIf=\"resetError\" class=\"form-error\">Failed to reset password. Please try again.</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<button type=\"submit\" [disabled]=\"!passwordResetForm.valid || process == 'reset_processing'\"  class=\"btn btn-primary block full-width m-b\">\r\n                    <span *ngIf=\"process != 'reset_processing'\"> Reset password &nbsp;</span>\r\n                        <span *ngIf=\"process == 'reset_processing'\">\r\n                            Resetting password &ensp;\r\n                        <i class=\"fa fa-spinner fa-spin\"></i>\r\n                    </span>\r\n                </button>\r\n\r\n\t\t\t<a [routerLink]=\"['/auth/login']\"><small>Remember password ? &ensp;Login here.</small></a>\r\n\t\t</div>\r\n\t</form>\r\n</div>\r\n\r\n<!--Display messages-->\r\n<div *ngIf=\"!token\" class=\"login_form_selection-display-block\">\r\n\t<h6 *ngIf=\"process == 'verification_processing'\" class=\"text-info padding-top-50\">\r\n\t\t<i class=\"fa fa-spinner fa-spin\"></i> &nbsp;Verification in process.\r\n\t</h6>\r\n\r\n\t<!--Link verfication error message-->\r\n\t<h6 *ngIf=\"process =='verification_failed'\" class=\"text-warning padding-top-50\">\r\n\t\t<i class=\"fa fa-exclamation-circle\"></i>&nbsp;{{ verificationError }}\r\n\t\t<br>\r\n\t\t<a [routerLink]=\"['/auth/password/reset']\" class=\"padding-left-20\">Get new reset link.</a>\r\n\t</h6>\r\n\r\n\t<!--Password reset success message-->\r\n\t<h6 *ngIf=\"process == 'reset_success'\" class=\"text-info padding-top-50\">\r\n\t\t<i class=\"fa fa-check-circle\"></i> &nbsp;Password changed successfully. Login with new credentials\r\n\t\t<a [routerLink]=\"['/auth/login']\">here</a>.\r\n\t</h6>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/landing-page/auth/password-reset-confirm/password-reset-confirm.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetConfirmComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PasswordResetConfirmComponent = (function () {
    function PasswordResetConfirmComponent(router, route, fb, authService) {
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.authService = authService;
        this.ngUnSubscribe = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        this.passwordResetForm = this.fb.group({
            'passwords': this.fb.group({
                'password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_app_directives__["a" /* ValidationService */].passwordValidator]],
                'confirm_password': ['', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_3_app_directives__["a" /* ValidationService */].passwordValidator]]
            }, { validator: __WEBPACK_IMPORTED_MODULE_3_app_directives__["a" /* ValidationService */].equalValidator })
        });
    }
    PasswordResetConfirmComponent.prototype.ngOnInit = function () {
        var _this = this;
        // Route query params subscription
        this.route.queryParams.takeUntil(this.ngUnSubscribe).subscribe(function (params) {
            if (Object.keys(params).indexOf('tk') < 0)
                _this.router.navigate(['error/not-found']);
            else {
                _this.verifToken(params['tk']);
            }
        });
    };
    // Verifying password reset token
    PasswordResetConfirmComponent.prototype.verifToken = function (token) {
        var _this = this;
        this.process = 'verifying';
        this.authService
            .verifyPasswordResetToken(token)
            .subscribe(function (Result) {
            _this.token = Result;
            _this.process = 'verification_success';
        }, function (Error) {
            _this.process = 'verification_failed';
            if (Error['status_code'] == 500) {
                _this.verificationError = Error['detail'];
            }
            else if (Object.keys(Error).indexOf('non_field_errors') >= 0) {
                _this.verificationError = Error['non_field_errors'].join(', ');
            }
        });
    };
    // Resetting password
    PasswordResetConfirmComponent.prototype.resetPassword = function () {
        var _this = this;
        if (this.passwordResetForm.valid) {
            this.process = 'reset_processing';
            this.authService
                .resetPassword(this.token, this.passwordResetForm.value['passwords']['password'])
                .subscribe(function (Result) {
                _this.token = null;
                _this.process = 'reset_success';
            }, function (Error) {
                _this.resetError = Error['detail'];
                _this.process = null;
                _this.passwordResetForm.reset();
            });
        }
    };
    // Unsubscribe subscriptions on component destroy
    PasswordResetConfirmComponent.prototype.ngOnDestroy = function () {
        this.ngUnSubscribe.next();
        this.ngUnSubscribe.complete();
    };
    return PasswordResetConfirmComponent;
}());
PasswordResetConfirmComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-password-reset-confirm',
        template: __webpack_require__("../../../../../src/app/landing-page/auth/password-reset-confirm/password-reset-confirm.component.html"),
        styleUrls: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4_app_services__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services__["a" /* AuthService */]) === "function" && _d || Object])
], PasswordResetConfirmComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=password-reset-confirm.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/auth/password-reset/password-reset.component.html":
/***/ (function(module, exports) {

module.exports = "<!--User details verification Form-->\r\n<div *ngIf=\"process != 'link_emailed'\">\r\n\t<p>Please Enter your Username and Email Address to reset password</p>\r\n\r\n\t<form *ngIf=\"verificationForm\" [formGroup]=\"verificationForm\" (submit)=\"generateResetLink()\" class=\"m-t\" role=\"form\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<input type=\"text\" formControlName=\"username\" class=\"form-control rounded-right\" placeholder=\"Username\">\r\n\t\t\t<control-messages [control]=\"verificationForm.controls.username\"></control-messages>\r\n\t\t</div>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<input type=\"email\" formControlName=\"email\" class=\"form-control\" placeholder=\"Email\">\r\n\t\t\t<control-messages [control]=\"verificationForm.controls.email\"></control-messages>\r\n\t\t</div>\r\n\r\n\t\t<!--Error message-->\r\n\t\t<div class=\"login-error\">\r\n\t\t\t<div *ngIf=\"!verificationError\">&ensp;</div>\r\n\t\t\t<div *ngIf=\"verificationError\" class=\"form-error\">{{ verificationError['msg'] }}</div>\r\n\t\t</div>\r\n\r\n\t\t<button type=\"submit\" [disabled]=\"!verificationForm.valid || process == 'checking'\" class=\"btn btn-primary block full-width m-b\">\r\n\t\t<span *ngIf=\"process != 'checking'\">Reset Password</span>\r\n\t\t\t<span *ngIf=\"process == 'checking'\">\r\n\t\t\t\tProcessing\r\n\t\t\t<i class=\"fa fa-spinner fa-spin\"></i>\r\n\t\t</span>\t\r\n\t</button>\r\n\r\n\t\t<a [routerLink]=\"['/auth/login']\"><small>Remember password ? &ensp;Login here.</small></a>\r\n\t\t<!--<p class=\"text-muted text-center\"><small>Do not have an account?</small></p>\r\n\t<a class=\"btn btn-sm btn-white btn-block\" href=\"register.html\">Create an account</a>-->\r\n\t</form>\r\n\r\n</div>\r\n\r\n<!--Success message-->\r\n<div *ngIf=\"process == 'link_emailed'\" class=\"login_form_selection-display-block\">\r\n\t<h6 class=\"padding-top-50\">\r\n\t\t<i class=\"fa fa-check-circle\"></i>&nbsp;Link to reset password has been sent to {{ verificationSuccess['email'] }}.\r\n\t</h6>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/landing-page/auth/password-reset/password-reset.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_directives__ = __webpack_require__("../../../../../src/app/directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PasswordResetComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PasswordResetComponent = (function () {
    function PasswordResetComponent(fb, authService) {
        this.fb = fb;
        this.authService = authService;
    }
    PasswordResetComponent.prototype.ngOnInit = function () {
        // Building details verification form 
        this.verificationForm = this.fb.group({
            'username': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'email': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required, __WEBPACK_IMPORTED_MODULE_2_app_directives__["a" /* ValidationService */].emailValidator]]
        });
    };
    PasswordResetComponent.prototype.generateResetLink = function () {
        var _this = this;
        this.process = 'checking';
        this.verificationError = null;
        if (this.verificationForm.valid) {
            var details = this.verificationForm.value;
            this.authService
                .generatePasswordResetLink(details['username'], details['email'])
                .subscribe(function (Result) {
                _this.process = "link_emailed";
                _this.verificationSuccess = Result;
            }, function (Error) {
                if (Error['status_code'] == 500) {
                    if (new RegExp("Username", "g").test(Error['detail'])) {
                        _this.verificationError = {
                            target: 'username',
                            msg: Error['detail']
                        };
                    }
                    else if (new RegExp("Email", "g").test(Error['detail'])) {
                        _this.verificationError = {
                            target: 'email',
                            msg: Error['detail']
                        };
                    }
                    else {
                        _this.verificationError = {
                            target: 'undefined',
                            msg: Error['detail']
                        };
                    }
                }
                _this.process = null;
            });
        }
    };
    return PasswordResetComponent;
}());
PasswordResetComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-password-reset',
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].Emulated,
        template: __webpack_require__("../../../../../src/app/landing-page/auth/password-reset/password-reset.component.html"),
        styleUrls: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services__["a" /* AuthService */]) === "function" && _b || Object])
], PasswordResetComponent);

var _a, _b;
//# sourceMappingURL=password-reset.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n\t<div class=\"navbar-header\">\n\t\t<img src=\"../../../assets/img/logo.png\">\n\t</div>\n\t<span style=\"float: right\">\n        <label>Home</label>\n        <label style=\"margin-left: 10px; cursor: pointer\">Cloud services</label>\n        <label style=\"margin-left: 10px; cursor: pointer\">Join us</label>\n        <label [routerLink]=\" ['/login'] \" style=\"margin-left: 10px; cursor: pointer\">Sign in</label>\n        <label [routerLink]=\" ['/registration'] \" style=\"margin-left: 10px; cursor: pointer\">Become a partner</label>\n    </span>\n</div>\n<form #form=\"ngForm\">\n    <app-locality-select property=\"district\" disabled></app-locality-select>\n</form>"

/***/ }),

/***/ "../../../../../src/app/landing-page/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/landing-page/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing-page/home/home.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    return LandingPageComponent;
}());
LandingPageComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-landing-page',
        template: __webpack_require__("../../../../../src/app/landing-page/landing-page.component.html"),
        styles: [__webpack_require__("../../../../../src/app/landing-page/landing-page.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], LandingPageComponent);

//# sourceMappingURL=landing-page.component.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing_page_routing__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home_component__ = __webpack_require__("../../../../../src/app/landing-page/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_auth_component__ = __webpack_require__("../../../../../src/app/landing-page/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__auth_login_login_component__ = __webpack_require__("../../../../../src/app/landing-page/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__auth_password_reset_password_reset_component__ = __webpack_require__("../../../../../src/app/landing-page/auth/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__auth_password_reset_confirm_password_reset_confirm_component__ = __webpack_require__("../../../../../src/app/landing-page/auth/password-reset-confirm/password-reset-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var LandingPageModule = (function () {
    function LandingPageModule() {
    }
    return LandingPageModule;
}());
LandingPageModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_2__landing_page_routing__["a" /* LandingPageRouting */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["ReactiveFormsModule"],
            __WEBPACK_IMPORTED_MODULE_10_app_shared__["a" /* SharedModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__auth_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_3__landing_page_component__["a" /* LandingPageComponent */],
            __WEBPACK_IMPORTED_MODULE_5__home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_6__auth_auth_component__["a" /* AuthComponent */],
            __WEBPACK_IMPORTED_MODULE_8__auth_password_reset_password_reset_component__["a" /* PasswordResetComponent */],
            __WEBPACK_IMPORTED_MODULE_8__auth_password_reset_password_reset_component__["a" /* PasswordResetComponent */],
            __WEBPACK_IMPORTED_MODULE_9__auth_password_reset_confirm_password_reset_confirm_component__["a" /* PasswordResetConfirmComponent */]
        ],
        providers: []
    })
], LandingPageModule);

//# sourceMappingURL=landing-page.module.js.map

/***/ }),

/***/ "../../../../../src/app/landing-page/landing-page.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__landing_page_component__ = __webpack_require__("../../../../../src/app/landing-page/landing-page.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__ = __webpack_require__("../../../../../src/app/landing-page/auth/auth.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__auth_login_login_component__ = __webpack_require__("../../../../../src/app/landing-page/auth/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__auth_password_reset_password_reset_component__ = __webpack_require__("../../../../../src/app/landing-page/auth/password-reset/password-reset.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__auth_password_reset_confirm_password_reset_confirm_component__ = __webpack_require__("../../../../../src/app/landing-page/auth/password-reset-confirm/password-reset-confirm.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home_component__ = __webpack_require__("../../../../../src/app/landing-page/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPageRouting; });








var LandingPageRoutes = [
    { path: '', redirectTo: 'auth/login', pathMatch: 'full' },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__landing_page_component__["a" /* LandingPageComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_7_app_services__["o" /* AuthRedirectorService */]],
        children: [
            { path: 'home', component: __WEBPACK_IMPORTED_MODULE_6__home_home_component__["a" /* HomeComponent */] },
            {
                path: 'auth',
                component: __WEBPACK_IMPORTED_MODULE_2__auth_auth_component__["a" /* AuthComponent */],
                children: [
                    { path: '', redirectTo: 'login', pathMatch: 'full' },
                    // Login Page
                    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_3__auth_login_login_component__["a" /* LoginComponent */] },
                    {
                        path: 'password/reset',
                        children: [
                            { path: '', component: __WEBPACK_IMPORTED_MODULE_4__auth_password_reset_password_reset_component__["a" /* PasswordResetComponent */] },
                            { path: 'confirm', component: __WEBPACK_IMPORTED_MODULE_5__auth_password_reset_confirm_password_reset_confirm_component__["a" /* PasswordResetConfirmComponent */] }
                        ]
                    }
                ]
            }
        ]
    }
];
var LandingPageRouting = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(LandingPageRoutes);
//# sourceMappingURL=landing-page.routing.js.map

/***/ })

});
//# sourceMappingURL=1.chunk.js.map