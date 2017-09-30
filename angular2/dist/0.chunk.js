webpackJsonp([0],{

/***/ "../../../../../src/app/portal/add-view-edit-interface/add-view-edit-interface.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__angular_router__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_1__angular_router__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddViewEditInterfaceComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Dummy = (function () {
    function Dummy(data) {
        this.id = '';
    }
    return Dummy;
}());
var AddViewEditInterfaceComponent = (function () {
    function AddViewEditInterfaceComponent(_location, route, router, fb) {
        this._location = _location;
        this.route = route;
        this.router = router;
        this.fb = fb;
        this.ngUnSubcribe = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.mode = 'VIEW';
        this.formData = {};
        this.currencyFormat = 'INR';
        this.datepickerOptions = {
            autoclose: true,
            todayHighlight: true,
            format: 'dd-mm-yyyy',
            icon: 'fa fa-calendar'
        };
        this.buildForm();
    }
    AddViewEditInterfaceComponent.prototype.ngOnInit = function () {
    };
    AddViewEditInterfaceComponent.prototype.ngOnDestroy = function () {
        this.ngUnSubcribe.next();
        this.ngUnSubcribe.complete();
    };
    AddViewEditInterfaceComponent.prototype.getModelClass = function (data) {
        return new Dummy(data);
    };
    AddViewEditInterfaceComponent.prototype.buildForm = function () {
        // Building form
        this.form = this.fb.group({});
        this.subscribeEvents();
    };
    AddViewEditInterfaceComponent.prototype.subscribeEvents = function () {
        var _this = this;
        // Route params
        this.route.params.takeUntil(this.ngUnSubcribe).subscribe(function (params) {
            var route = _this.route.snapshot;
            _this.path = route.url[0].path;
            if (!('id' in params)) {
                if ('form_data' in route.data)
                    _this.formData = route.data.form_data;
                else
                    _this.formData = {};
                _this.initAddScreen();
            }
            else {
                if (route.data.details)
                    _this.details = route.data.details;
                else
                    _this.details = _this.getModelClass();
                if ('form_data' in route.data)
                    _this.formData = route.data.form_data;
                else
                    _this.formData = {};
                switch (route.url[0].path.toLocaleUpperCase()) {
                    case 'VIEW':
                        _this.initViewScreen();
                        break;
                    case 'EDIT':
                        _this.initEditScreen();
                        break;
                }
            }
        });
    };
    AddViewEditInterfaceComponent.prototype.getFormValue = function () {
        return this.details;
    };
    AddViewEditInterfaceComponent.prototype.initAddScreen = function () {
        this.mode = 'ADD';
        this.details = this.getModelClass();
        this.form.patchValue(this.getFormValue());
        this.form.controls['id'].setValidators([]);
        this.form.controls['id'].updateValueAndValidity();
    };
    AddViewEditInterfaceComponent.prototype.initViewScreen = function () {
        this.mode = 'VIEW';
        this.form.reset();
        this.form.updateValueAndValidity();
    };
    AddViewEditInterfaceComponent.prototype.initEditScreen = function () {
        this.mode = 'EDIT';
        this.form.patchValue(this.getFormValue());
        this.form.controls['id'].setValidators([__WEBPACK_IMPORTED_MODULE_3__angular_forms__["Validators"].required]);
        this.form.controls['id'].updateValueAndValidity();
    };
    AddViewEditInterfaceComponent.prototype.patchForm = function (value) {
        this.form.patchValue(value);
        this.form.updateValueAndValidity();
    };
    AddViewEditInterfaceComponent.prototype.save = function () {
        this.state = 'saving';
    };
    AddViewEditInterfaceComponent.prototype.cancel = function () {
        this.state = null;
        if (this.path == 'add' || this.path == 'edit')
            this.back();
        else
            this.initViewScreen();
    };
    AddViewEditInterfaceComponent.prototype.back = function () {
        this._location.back();
    };
    return AddViewEditInterfaceComponent;
}());
AddViewEditInterfaceComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-add-view-edit-interface',
        template: ''
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_forms__["FormBuilder"]) === "function" && _d || Object])
], AddViewEditInterfaceComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=add-view-edit-interface.component.js.map

/***/ }),

/***/ "../../../../../src/app/resolvers/demand-transfer-details.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemandTransferdetailsResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DemandTransferFormDataResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemandTransferdetailsResolver = (function () {
    function DemandTransferdetailsResolver(router, dtService) {
        this.router = router;
        this.dtService = dtService;
    }
    DemandTransferdetailsResolver.prototype.resolve = function (route) {
        var _this = this;
        var queryParams = {};
        if ('queryParams' in route.data)
            Object.assign(queryParams, route.data['queryParams']);
        if ('id' in route.params) {
            return this.dtService.get(route.params['id'], queryParams)
                .map(function (Result) {
                return Result;
            })
                .catch(function (Error) {
                _this.router.navigate(['/error/detail-not-found']);
                return null;
            });
        }
        else {
            this.router.navigate(['/error/detail-not-found']);
            return null;
        }
    };
    return DemandTransferdetailsResolver;
}());
DemandTransferdetailsResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services__["j" /* DemandTransfersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services__["j" /* DemandTransfersService */]) === "function" && _b || Object])
], DemandTransferdetailsResolver);

var DemandTransferFormDataResolver = (function () {
    function DemandTransferFormDataResolver(router, dtService) {
        this.router = router;
        this.dtService = dtService;
    }
    DemandTransferFormDataResolver.prototype.resolve = function (route) {
        var _this = this;
        var queryParams = {};
        if ('queryParams' in route.data)
            Object.assign(queryParams, route.data['queryParams']);
        return this.dtService.formData(queryParams)
            .map(function (Result) {
            return Result;
        })
            .catch(function (Error) {
            _this.router.navigate(['/error/detail-not-found']);
            return null;
        });
    };
    return DemandTransferFormDataResolver;
}());
DemandTransferFormDataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_app_services__["j" /* DemandTransfersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services__["j" /* DemandTransfersService */]) === "function" && _d || Object])
], DemandTransferFormDataResolver);

var _a, _b, _c, _d;
//# sourceMappingURL=demand-transfer-details.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/resolvers/egg-collection-details.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EggCollectiondetailsResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return EggCollectionFormDataResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EggCollectiondetailsResolver = (function () {
    function EggCollectiondetailsResolver(router, ecService) {
        this.router = router;
        this.ecService = ecService;
    }
    EggCollectiondetailsResolver.prototype.resolve = function (route) {
        var _this = this;
        var queryParams = {};
        if ('queryParams' in route.data)
            Object.assign(queryParams, route.data['queryParams']);
        if ('id' in route.params) {
            return this.ecService.get(route.params['id'], queryParams)
                .map(function (Result) {
                return Result;
            })
                .catch(function (Error) {
                _this.router.navigate(['/error/detail-not-found']);
                return null;
            });
        }
        else {
            this.router.navigate(['/error/detail-not-found']);
            return null;
        }
    };
    return EggCollectiondetailsResolver;
}());
EggCollectiondetailsResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services__["i" /* EggCollectionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services__["i" /* EggCollectionsService */]) === "function" && _b || Object])
], EggCollectiondetailsResolver);

var EggCollectionFormDataResolver = (function () {
    function EggCollectionFormDataResolver(router, ecService) {
        this.router = router;
        this.ecService = ecService;
    }
    EggCollectionFormDataResolver.prototype.resolve = function (route) {
        var _this = this;
        var queryParams = {};
        if ('queryParams' in route.data)
            Object.assign(queryParams, route.data['queryParams']);
        return this.ecService.formData(queryParams)
            .map(function (Result) {
            return Result;
        })
            .catch(function (Error) {
            _this.router.navigate(['/error/detail-not-found']);
            return null;
        });
    };
    return EggCollectionFormDataResolver;
}());
EggCollectionFormDataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_app_services__["i" /* EggCollectionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services__["i" /* EggCollectionsService */]) === "function" && _d || Object])
], EggCollectionFormDataResolver);

var _a, _b, _c, _d;
//# sourceMappingURL=egg-collection-details.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/resolvers/egg-farm-details.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EggFarmdetailsResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EggFarmdetailsResolver = (function () {
    function EggFarmdetailsResolver(router, farmService) {
        this.router = router;
        this.farmService = farmService;
    }
    EggFarmdetailsResolver.prototype.resolve = function (route) {
        var _this = this;
        var queryParams = {};
        if ('queryParams' in route.data)
            Object.assign(queryParams, route.data['queryParams']);
        if ('id' in route.params) {
            return this.farmService.get(route.params['id'], queryParams)
                .map(function (Result) {
                return Result;
            })
                .catch(function (Error) {
                _this.router.navigate(['/error/detail-not-found']);
                return null;
            });
        }
        else {
            this.router.navigate(['/error/detail-not-found']);
            return null;
        }
    };
    return EggFarmdetailsResolver;
}());
EggFarmdetailsResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services__["g" /* EggFarmsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services__["g" /* EggFarmsService */]) === "function" && _b || Object])
], EggFarmdetailsResolver);

var _a, _b;
//# sourceMappingURL=egg-farm-details.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/resolvers/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__egg_farm_details_resolver__ = __webpack_require__("../../../../../src/app/resolvers/egg-farm-details.resolver.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_0__egg_farm_details_resolver__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sales_team_details_resolver__ = __webpack_require__("../../../../../src/app/resolvers/sales-team-details.resolver.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_1__sales_team_details_resolver__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__egg_collection_details_resolver__ = __webpack_require__("../../../../../src/app/resolvers/egg-collection-details.resolver.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_2__egg_collection_details_resolver__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_2__egg_collection_details_resolver__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__demand_transfer_details_resolver__ = __webpack_require__("../../../../../src/app/resolvers/demand-transfer-details.resolver.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_3__demand_transfer_details_resolver__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_3__demand_transfer_details_resolver__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payment_details_resolver__ = __webpack_require__("../../../../../src/app/resolvers/payment-details.resolver.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_4__payment_details_resolver__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__payment_details_resolver__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sales_summary_details_resolver__ = __webpack_require__("../../../../../src/app/resolvers/sales-summary-details.resolver.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__sales_summary_details_resolver__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__sales_summary_details_resolver__["a"]; });






//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/resolvers/payment-details.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return PaymentdetailsResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentFormDataResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaymentdetailsResolver = (function () {
    function PaymentdetailsResolver(router, paymentService) {
        this.router = router;
        this.paymentService = paymentService;
    }
    PaymentdetailsResolver.prototype.resolve = function (route) {
        var _this = this;
        var queryParams = {};
        if ('queryParams' in route.data)
            Object.assign(queryParams, route.data['queryParams']);
        if ('id' in route.params) {
            return this.paymentService.get(route.params['id'], queryParams)
                .map(function (Result) {
                return Result;
            })
                .catch(function (Error) {
                _this.router.navigate(['/error/detail-not-found']);
                return null;
            });
        }
        else {
            this.router.navigate(['/error/detail-not-found']);
            return null;
        }
    };
    return PaymentdetailsResolver;
}());
PaymentdetailsResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services__["l" /* PaymentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services__["l" /* PaymentsService */]) === "function" && _b || Object])
], PaymentdetailsResolver);

var PaymentFormDataResolver = (function () {
    function PaymentFormDataResolver(router, paymentService) {
        this.router = router;
        this.paymentService = paymentService;
    }
    PaymentFormDataResolver.prototype.resolve = function (route) {
        var _this = this;
        var queryParams = {};
        if ('queryParams' in route.data)
            Object.assign(queryParams, route.data['queryParams']);
        return this.paymentService.formData(queryParams)
            .map(function (Result) {
            return Result;
        })
            .catch(function (Error) {
            _this.router.navigate(['/error/detail-not-found']);
            return null;
        });
    };
    return PaymentFormDataResolver;
}());
PaymentFormDataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_app_services__["l" /* PaymentsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services__["l" /* PaymentsService */]) === "function" && _d || Object])
], PaymentFormDataResolver);

var _a, _b, _c, _d;
//# sourceMappingURL=payment-details.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/resolvers/sales-summary-details.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SalesSummarydetailsResolver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesSummaryFormDataResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalesSummarydetailsResolver = (function () {
    function SalesSummarydetailsResolver(router, ssService) {
        this.router = router;
        this.ssService = ssService;
    }
    SalesSummarydetailsResolver.prototype.resolve = function (route) {
        var _this = this;
        var queryParams = {};
        if ('queryParams' in route.data)
            Object.assign(queryParams, route.data['queryParams']);
        if ('id' in route.params) {
            return this.ssService.get(route.params['id'], queryParams)
                .map(function (Result) {
                return Result;
            })
                .catch(function (Error) {
                _this.router.navigate(['/error/detail-not-found']);
                return null;
            });
        }
        else {
            this.router.navigate(['/error/detail-not-found']);
            return null;
        }
    };
    return SalesSummarydetailsResolver;
}());
SalesSummarydetailsResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services__["k" /* SalesSummaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services__["k" /* SalesSummaryService */]) === "function" && _b || Object])
], SalesSummarydetailsResolver);

var SalesSummaryFormDataResolver = (function () {
    function SalesSummaryFormDataResolver(router, ssService) {
        this.router = router;
        this.ssService = ssService;
    }
    SalesSummaryFormDataResolver.prototype.resolve = function (route) {
        var _this = this;
        var queryParams = {};
        if ('queryParams' in route.data)
            Object.assign(queryParams, route.data['queryParams']);
        return this.ssService.formData(queryParams)
            .map(function (Result) {
            return Result;
        })
            .catch(function (Error) {
            _this.router.navigate(['/error/detail-not-found']);
            return null;
        });
    };
    return SalesSummaryFormDataResolver;
}());
SalesSummaryFormDataResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_app_services__["k" /* SalesSummaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services__["k" /* SalesSummaryService */]) === "function" && _d || Object])
], SalesSummaryFormDataResolver);

var _a, _b, _c, _d;
//# sourceMappingURL=sales-summary-details.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/resolvers/sales-team-details.resolver.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesTeamdetailsResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalesTeamdetailsResolver = (function () {
    function SalesTeamdetailsResolver(router, stService) {
        this.router = router;
        this.stService = stService;
    }
    SalesTeamdetailsResolver.prototype.resolve = function (route) {
        var _this = this;
        var queryParams = {};
        if ('queryParams' in route.data)
            Object.assign(queryParams, route.data['queryParams']);
        if ('id' in route.params) {
            return this.stService.get(route.params['id'], queryParams)
                .map(function (Result) {
                return Result;
            })
                .catch(function (Error) {
                _this.router.navigate(['/error/detail-not-found']);
                return null;
            });
        }
        else {
            this.router.navigate(['/error/detail-not-found']);
            return null;
        }
    };
    return SalesTeamdetailsResolver;
}());
SalesTeamdetailsResolver = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services__["h" /* SalesTeamsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services__["h" /* SalesTeamsService */]) === "function" && _b || Object])
], SalesTeamdetailsResolver);

var _a, _b;
//# sourceMappingURL=sales-team-details.resolver.js.map

/***/ }),

/***/ "../../../../../src/app/shared/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__shared_module__["a"]; });

//# sourceMappingURL=index.js.map

/***/ })

});
//# sourceMappingURL=0.chunk.js.map