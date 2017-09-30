webpackJsonp([4],{

/***/ "../../../../../src/app/error/detail-not-found/detail-not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1\">\n\t\t<div class=\"error-container\">\n\t\t\t<h1 class=\"error-code\">404</h1>\n\t\t\t<p class=\"error-info\">\n                Oops, it seems the requested data is not found.\n\t\t\t</p>\n\t\t\t<p class=\"error-help mb\">\n\t\t\t\tIf you are sure it should exist, please contact the administrator: administrator@redingtoncloud.com\n\t\t\t</p>\n\t\t\t<form (ngSubmit)=\"searchResult()\" method=\"get\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input class=\"form-control input-no-border\" type=\"text\" placeholder=\"Search page\">\n\t\t\t\t</div>\n\t\t\t\t<button type=\"button\" class=\"btn btn-inverse\" (click)=\"goBack()\">\n                    <i class=\"fa fa-angle-double-left text-warning ml-xs\"></i>\n\t\t\t        Back \n\t\t\t    </button>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-inverse\">\n                    Search <i class=\"fa fa-search text-warning ml-xs\"></i>\n                </button>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/error/detail-not-found/detail-not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailNotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DetailNotFoundComponent = (function () {
    function DetailNotFoundComponent(location, route) {
        this.location = location;
        this.route = route;
    }
    DetailNotFoundComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.subscribe(function (data) {
            if (Object.keys(data).indexOf('details') >= 0)
                _this.details = data['details'];
        });
    };
    DetailNotFoundComponent.prototype.goBack = function () {
        this.location.back();
    };
    DetailNotFoundComponent.prototype.searchResult = function () {
        // this.router.navigate(['/app', 'extra', 'search']);
    };
    return DetailNotFoundComponent;
}());
DetailNotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-detail-not-found',
        template: __webpack_require__("../../../../../src/app/error/detail-not-found/detail-not-found.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object])
], DetailNotFoundComponent);

var _a, _b;
//# sourceMappingURL=detail-not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ErrorComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ErrorComponent = (function () {
    function ErrorComponent() {
    }
    return ErrorComponent;
}());
ErrorComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'error',
        styles: [__webpack_require__("../../../../../src/app/error/error.style.scss")],
        template: __webpack_require__("../../../../../src/app/error/error.template.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
        host: {
            class: 'error-page app'
        },
    })
], ErrorComponent);

//# sourceMappingURL=error.component.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__error_component__ = __webpack_require__("../../../../../src/app/error/error.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__permission_denied_permission_denied_component__ = __webpack_require__("../../../../../src/app/error/permission-denied/permission-denied.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/error/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__detail_not_found_detail_not_found_component__ = __webpack_require__("../../../../../src/app/error/detail-not-found/detail-not-found.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '', pathMatch: 'full' },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_4__error_component__["a" /* ErrorComponent */],
        children: [
            { path: 'not-found', component: __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__["a" /* NotFoundComponent */] },
            { path: 'denied', component: __WEBPACK_IMPORTED_MODULE_5__permission_denied_permission_denied_component__["a" /* PermissionDeniedComponent */] },
            { path: 'detail-not-found', component: __WEBPACK_IMPORTED_MODULE_7__detail_not_found_detail_not_found_component__["a" /* DetailNotFoundComponent */] }
        ]
    },
];
var ErrorModule = (function () {
    function ErrorModule() {
    }
    return ErrorModule;
}());
ErrorModule.routes = routes;
ErrorModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__error_component__["a" /* ErrorComponent */],
            __WEBPACK_IMPORTED_MODULE_5__permission_denied_permission_denied_component__["a" /* PermissionDeniedComponent */],
            __WEBPACK_IMPORTED_MODULE_6__not_found_not_found_component__["a" /* NotFoundComponent */],
            __WEBPACK_IMPORTED_MODULE_7__detail_not_found_detail_not_found_component__["a" /* DetailNotFoundComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["CommonModule"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormsModule"],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forChild(routes),
        ]
    })
], ErrorModule);

//# sourceMappingURL=error.module.js.map

/***/ }),

/***/ "../../../../../src/app/error/error.style.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/***********************************/\n/**          ERROR PAGE           **/\n/***********************************/\n.error-page {\n  background-color: lightgray; }\n\n.error-container {\n  padding-top: 5%;\n  text-align: center; }\n  .error-container > .btn {\n    padding-left: 35px;\n    padding-right: 35px; }\n\n.error-code {\n  margin: 20px;\n  font-size: 80px;\n  font-weight: normal;\n  color: grey; }\n\n.error-info {\n  font-size: 20px;\n  color: grey; }\n\n.error-help {\n  font-size: 14px; }\n\n.error-page .page-footer {\n  position: absolute;\n  bottom: 30px;\n  left: 0;\n  right: 0;\n  width: 100%;\n  font-size: small;\n  color: lightcyan;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/error/error.template.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<main id=\"content\" class=\"error-container\" role=\"main\">\n\t\t<router-outlet></router-outlet>\n\t</main>\n\n\t<footer class=\"page-footer\">\n\t\t2017 &copy; Redington India.\n\t</footer>\n</div>"

/***/ }),

/***/ "../../../../../src/app/error/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1\">\n\t\t<div class=\"error-container\">\n\t\t\t<h1 class=\"error-code\">404</h1>\n\t\t\t<p class=\"error-info\">\n\t\t\t\tOops, it seems that this page does not exist.\n\t\t\t</p>\n\t\t\t<p class=\"error-help mb\">\n\t\t\t\tIf you are sure it should, please contact the administrator: administrator@redingtoncloud.com\n\t\t\t</p>\n\t\t\t<form (ngSubmit)=\"searchResult()\" method=\"get\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<input class=\"form-control input-no-border\" type=\"text\" placeholder=\"Search Pages\">\n\t\t\t\t</div>\n\t\t\t\t<button type=\"button\" class=\"btn btn-inverse\" (click)=\"goBack()\">\n                    <i class=\"fa fa-angle-double-left text-warning ml-xs\"></i>\n\t\t\t        Back \n\t\t\t    </button>\n\t\t\t\t<button type=\"submit\" class=\"btn btn-inverse\">\n                    Search <i class=\"fa fa-search text-warning ml-xs\"></i>\n                </button>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/error/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NotFoundComponent = (function () {
    function NotFoundComponent(router) {
        this.router = router;
    }
    NotFoundComponent.prototype.searchResult = function () {
        // this.router.navigate(['/app', 'extra', 'search']);
    };
    NotFoundComponent.prototype.ngOnInit = function () { };
    return NotFoundComponent;
}());
NotFoundComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-not-found',
        template: __webpack_require__("../../../../../src/app/error/not-found/not-found.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None,
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], NotFoundComponent);

var _a;
//# sourceMappingURL=not-found.component.js.map

/***/ }),

/***/ "../../../../../src/app/error/permission-denied/permission-denied.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\t<div class=\"col-xl-4 col-md-6 col-xs-10 offset-xl-4 offset-md-3 offset-xs-1\">\n\t\t<div class=\"error-container\">\n\t\t\t<h1 class=\"error-code\">403</h1>\n\t\t\t<p class=\"error-info\">\n\t\t\t\tOops, it seems that you don't have permission to access this page.\n\t\t\t</p>\n\t\t\t<button type=\"button\" class=\"btn btn-inverse\" (click)=\"goBack()\">\n              <i class=\"fa fa-angle-double-left text-warning ml-xs\"></i>\n\t\t\t  Back \n\t\t\t</button>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/error/permission-denied/permission-denied.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionDeniedComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PermissionDeniedComponent = (function () {
    function PermissionDeniedComponent(location) {
        this.location = location;
    }
    PermissionDeniedComponent.prototype.ngOnInit = function () {
    };
    PermissionDeniedComponent.prototype.goBack = function () {
        this.location.back();
    };
    return PermissionDeniedComponent;
}());
PermissionDeniedComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-permission-denied',
        template: __webpack_require__("../../../../../src/app/error/permission-denied/permission-denied.component.html"),
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _a || Object])
], PermissionDeniedComponent);

var _a;
//# sourceMappingURL=permission-denied.component.js.map

/***/ })

});
//# sourceMappingURL=4.chunk.js.map