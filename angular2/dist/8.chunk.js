webpackJsonp([8],{

/***/ "../../../../../src/app/portal/egg-farms/egg-farm-add-view-edit/egg-farm-add-view-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--View Design-->\n<div *ngIf=\"mode == 'VIEW'\" class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"ibox product-detail ibox-title-border\">\n\t\t\t\t<div class=\"ibox-content\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<!--Col 1-->\n\t\t\t\t\t\t<div class=\"col-md-5\">\n\t\t\t\t\t\t\t<div class=\"img-container\">\n\t\t\t\t\t\t\t\t<div [hidden]=\"details.logo && details.logo != ''\" class=\"image-imitation\">[FARM LOGO]</div>\n\t\t\t\t\t\t\t\t<img [hidden]=\"!details.logo || details.logo == ''\" [src]=\"details.logo\" alt=\"Farm logo\" class=\"img-responsive\" />\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<!--Col 2-->\n\t\t\t\t\t\t<div class=\"col-md-7\">\n\t\t\t\t\t\t\t<!--Name-->\n\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t<h2 class=\"col-lg-8 font-bold m-b-xs\"> {{details.name}}</h2>\n\t\t\t\t\t\t\t\t<div class=\"col-lg-4 text-right padding-right-\">\n\t\t\t\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"initEditScreen()\" class=\"btn btn-white btn-sm\"><i class=\"fa fa-pen\"></i> Edit details </button>\n\t\t\t\t\t\t\t\t\t\t<button type=\"button\" (click)=\"back()\" class=\"btn btn-white btn-sm\"><i class=\"fa fa-pen\"></i> Back </button>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<hr>\n\n\t\t\t\t\t\t\t<!--Description-->\n\t\t\t\t\t\t\t<h4>Description</h4>\n\t\t\t\t\t\t\t<ul class=\"unstyled\">\n\t\t\t\t\t\t\t\t<li [innerText]=\"details.description\"></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t<!--Address-->\n\t\t\t\t\t\t\t<h4>Address</h4>\n\t\t\t\t\t\t\t<ul class=\"unstyled\">\n\t\t\t\t\t\t\t\t<li [innerText]=\"details.address\"></li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!--Edit Design-->\n<div *ngIf=\"mode == 'ADD' || mode == 'EDIT'\" class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"ibox float-e-margins\">\n\t\t\t\t<div class=\"ibox-title\">\n\t\t\t\t\t<h5>Provide Farm Details</h5>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibox-content\">\n\t\t\t\t\t<form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"save()\" role=\"form\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6 b-r\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Name</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"name\" placeholder=\"Provide farm name\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.name\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Description</label>\n\t\t\t\t\t\t\t\t\t<textarea formControlName=\"description\" placeholder=\"Provide description\" class=\"form-control\"></textarea>\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.description\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Address</label>\n\t\t\t\t\t\t\t\t\t<textarea formControlName=\"address\" placeholder=\"Provide farm address\" rows=\"5\" class=\"form-control\"></textarea>\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.address\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<h4>Farm Logo</h4>\n\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<div class=\"text-center img-container\">\n\t\t\t\t\t\t\t\t\t\t<div [hidden]=\"logoUrl && logoUrl != ''\" class=\"image-imitation\">[FARM LOGO]</div>\n\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"logoUrl && logoUrl != ''\" [src]=\"logoUrl\" alt=\"Farm Logo\" class=\"img-responsive\" />\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t<input type=\"file\" formControlName=\"logo\" appValidateFileInput maxSize=\"1024\" [validTypes]=\"['.png', '.jpg', '.gif']\" [fileRequired]=\"false\"\n\t\t\t\t\t\t\t\t\t\t(fileUrls)=\"logoUrl = $event[0]\" />\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.logo\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12 col-sm-12 text-right\">\n\t\t\t\t\t\t\t\t<span [hidden]=\"state != 'FailedToSave'\" class=\"text-danger\">Failed to save. Please try again ... </span>\n\n\t\t\t\t\t\t\t\t<button type=\"button\" [disabled]=\"state == 'saving'\" (click)=\"cancel()\" class=\"btn btn-sm btn-warning m-t-n-xs\"><strong>Cancel</strong></button>\n\n\t\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"!form.valid || state == 'saving'\" class=\"btn btn-sm btn-primary m-t-n-xs\">\n                                    <strong [hidden]=\"state == 'saving'\">Save</strong>\n                                    <strong [hidden]=\"state != 'saving'\">Saving <i class=\"fa fa-spinner fa-spin\"></i></strong>\n                                </button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/portal/egg-farms/egg-farm-add-view-edit/egg-farm-add-view-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_classes__ = __webpack_require__("../../../../../src/app/classes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__ = __webpack_require__("../../../../../src/app/portal/add-view-edit-interface/add-view-edit-interface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EggFarmAddViewEditComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var EggFarmAddViewEditComponent = (function (_super) {
    __extends(EggFarmAddViewEditComponent, _super);
    function EggFarmAddViewEditComponent(farmsService, arg1, arg2, arg3, arg4) {
        var _this = _super.call(this, arg1, arg2, arg3, arg4) || this;
        _this.farmsService = farmsService;
        return _this;
    }
    EggFarmAddViewEditComponent.prototype.getModelClass = function (data) {
        return new __WEBPACK_IMPORTED_MODULE_3_app_classes__["l" /* EggFarm */](data);
    };
    EggFarmAddViewEditComponent.prototype.buildForm = function () {
        // Building form
        this.form = this.fb.group({
            'id': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'name': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'description': [''],
            'address': [''],
            'logo': ['']
        });
        this.subscribeEvents();
    };
    EggFarmAddViewEditComponent.prototype.getFormValue = function () {
        var formValue = JSON.parse(JSON.stringify(this.details));
        if (this.details.logo) {
            this.logoUrl = this.details.logo;
            delete formValue['logo'];
        }
        return formValue;
    };
    EggFarmAddViewEditComponent.prototype.save = function () {
        var _this = this;
        this.state = 'saving';
        var formValue = this.form.value;
        if (formValue.logo)
            formValue.logo = formValue['logo'][0];
        else
            delete formValue['logo'];
        if (this.mode == 'ADD') {
            this.farmsService
                .create(formValue)
                .then(function (Result) {
                _this.details = Result;
                _this.state = 'saved';
                _this.initViewScreen();
            })
                .catch(function (Err) {
                _this.state = 'FailedToSave';
            });
        }
        else if (this.mode == 'EDIT') {
            this.farmsService
                .update(formValue['id'], formValue)
                .then(function (Result) {
                _this.details = Result;
                _this.state = 'saved';
                _this.initViewScreen();
            })
                .catch(function (Err) {
                _this.state = 'FailedToSave';
            });
        }
    };
    return EggFarmAddViewEditComponent;
}(__WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["a" /* AddViewEditInterfaceComponent */]));
EggFarmAddViewEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-egg-farm-add-view-edit',
        template: __webpack_require__("../../../../../src/app/portal/egg-farms/egg-farm-add-view-edit/egg-farm-add-view-edit.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_app_services__["g" /* EggFarmsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services__["g" /* EggFarmsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["b" /* arg1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["b" /* arg1 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["c" /* arg2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["c" /* arg2 */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["d" /* arg3 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["d" /* arg3 */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["e" /* arg4 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["e" /* arg4 */]) === "function" && _e || Object])
], EggFarmAddViewEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=egg-farm-add-view-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/egg-farms/egg-farms-list/egg-farms-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ng2-table\n    [screenName]=\"tableConfig['screenName']\"\n    [fetchUrl]=\"tableConfig['fetchUrl']\"\n    [queryParams]=\"tableConfig['queryParams']\"\n    [columns]=\"tableConfig['columns']\"\n    [limit]=\"tableConfig['limit']\"\n    (event)=\"doTableEvent($event.data)\"\n    [addButtonInfo]=\"tableConfig['addButtonInfo']\"\n\n></app-ng2-table>"

/***/ }),

/***/ "../../../../../src/app/portal/egg-farms/egg-farms-list/egg-farms-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_functions__ = __webpack_require__("../../../../../src/app/functions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EggFarmsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EggFarmsListComponent = (function () {
    function EggFarmsListComponent(router, eggFarmsService) {
        this.router = router;
        this.eggFarmsService = eggFarmsService;
        this.tableConfig = {
            screenName: 'Egg Farms',
            fetchUrl: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_app_functions__["a" /* GetApiurl */])('egg-farms/'),
            queryParams: {},
            columns: [
                { title: 'Name', name: 'name', sort: true },
                { title: 'Description', name: 'description', sort: false },
                { title: 'Actions', links: ['View', 'Edit'], }
            ],
            rows: [],
            limit: 10,
            addButtonInfo: { text: 'Add Farm', url: '/app/egg-farms/add' }
        };
    }
    EggFarmsListComponent.prototype.ngOnInit = function () {
    };
    EggFarmsListComponent.prototype.doTableEvent = function (event) {
        if (event.action == 'View')
            this.router.navigate(['/app', 'egg-farms', event.row.id, 'view']);
        else if (event.action == 'Edit')
            this.router.navigate(['/app', 'egg-farms', event.row.id, 'edit']);
    };
    return EggFarmsListComponent;
}());
EggFarmsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-egg-farms-list',
        template: __webpack_require__("../../../../../src/app/portal/egg-farms/egg-farms-list/egg-farms-list.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services__["g" /* EggFarmsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services__["g" /* EggFarmsService */]) === "function" && _b || Object])
], EggFarmsListComponent);

var _a, _b;
//# sourceMappingURL=egg-farms-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/egg-farms/egg-farms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EggFarmsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EggFarmsComponent = (function () {
    function EggFarmsComponent() {
    }
    EggFarmsComponent.prototype.ngOnInit = function () {
    };
    return EggFarmsComponent;
}());
EggFarmsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-egg-farms',
        template: '<router-outlet></router-outlet>'
    }),
    __metadata("design:paramtypes", [])
], EggFarmsComponent);

//# sourceMappingURL=egg-farms.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/egg-farms/egg-farms.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_resolvers__ = __webpack_require__("../../../../../src/app/resolvers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__egg_farms_component__ = __webpack_require__("../../../../../src/app/portal/egg-farms/egg-farms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__egg_farms_list_egg_farms_list_component__ = __webpack_require__("../../../../../src/app/portal/egg-farms/egg-farms-list/egg-farms-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__egg_farm_add_view_edit_egg_farm_add_view_edit_component__ = __webpack_require__("../../../../../src/app/portal/egg-farms/egg-farm-add-view-edit/egg-farm-add-view-edit.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EggFarmsModule", function() { return EggFarmsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var eggFarmsRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__egg_farms_component__["a" /* EggFarmsComponent */],
        children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_6__egg_farms_list_egg_farms_list_component__["a" /* EggFarmsListComponent */] },
            { path: 'add', component: __WEBPACK_IMPORTED_MODULE_7__egg_farm_add_view_edit_egg_farm_add_view_edit_component__["a" /* EggFarmAddViewEditComponent */] },
            {
                path: ':id',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_services__["n" /* AuthGuardService */]],
                data: {
                    regex: { id: '[0-9]+' }
                },
                resolve: { details: __WEBPACK_IMPORTED_MODULE_4_app_resolvers__["j" /* EggFarmdetailsResolver */] },
                children: [
                    { path: '', redirectTo: 'view', pathMatch: 'full' },
                    { path: 'view', component: __WEBPACK_IMPORTED_MODULE_7__egg_farm_add_view_edit_egg_farm_add_view_edit_component__["a" /* EggFarmAddViewEditComponent */] },
                    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_7__egg_farm_add_view_edit_egg_farm_add_view_edit_component__["a" /* EggFarmAddViewEditComponent */] }
                ]
            }
        ]
    }
];
var eggFarmsRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(eggFarmsRoutes);
var EggFarmsModule = (function () {
    function EggFarmsModule() {
    }
    return EggFarmsModule;
}());
EggFarmsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_app_shared__["a" /* SharedModule */],
            eggFarmsRouting
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__egg_farms_component__["a" /* EggFarmsComponent */], __WEBPACK_IMPORTED_MODULE_6__egg_farms_list_egg_farms_list_component__["a" /* EggFarmsListComponent */], __WEBPACK_IMPORTED_MODULE_7__egg_farm_add_view_edit_egg_farm_add_view_edit_component__["a" /* EggFarmAddViewEditComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4_app_resolvers__["j" /* EggFarmdetailsResolver */]]
    })
], EggFarmsModule);

//# sourceMappingURL=egg-farms.module.js.map

/***/ })

});
//# sourceMappingURL=8.chunk.js.map