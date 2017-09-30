webpackJsonp([9],{

/***/ "../../../../../src/app/portal/egg-collections/egg-collections-add-view-edit/egg-collections-add-view-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--View Design-->\n<div *ngIf=\"mode == 'VIEW'\" class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-7\">\n\t\t\t<div class=\"ibox float-e-margins\">\n\t\t\t\t<!--Title-->\n\t\t\t\t<div class=\"ibox-title\">\n\t\t\t\t\t<h5>Purchase Details</h5>\n\t\t\t\t\t<div class=\"ibox-tools\">\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"initEditScreen()\" class=\"btn btn-white btn-sm\"><i class=\"fa fa-pen\"></i> Edit details </button>\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"back()\" class=\"btn btn-white btn-sm\"><i class=\"fa fa-pen\"></i> Back </button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--Content-->\n\t\t\t\t<div class=\"ibox-content\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12 padding-left-35\">\n\t\t\t\t\t\t\t<!--Date-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-3 control-label\">Date</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-8 control-value colon-before\">{{details.date}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Farm-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-3 control-label\">Farm</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-8 control-value colon-before\">{{details.farm_name}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Rate-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-3 control-label\">Rate</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-8 control-value colon-before\">{{details.rate |  Currency:2:currencyFormat:true}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Sales Team-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-3 control-label\">Sales Team</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-8 control-value colon-before\">{{details.sales_team_name}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Trays-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-3 control-label\">Trays</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-8 control-value colon-before\">{{details.no_of_plates}}&ensp;trays.</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!--Edit Design-->\n<div *ngIf=\"mode == 'ADD' || mode == 'EDIT'\" class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-6\">\n\t\t\t<div class=\"ibox float-e-margins\">\n\t\t\t\t<div class=\"ibox-title\">\n\t\t\t\t\t<h5>Provide Purchase Details</h5>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibox-content\">\n\t\t\t\t\t<form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"save()\" role=\"form\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Date</label>\n\t\t\t\t\t\t\t\t\t<datetime id=\"datetimepicker1i\" name=\"date\" [timepicker]=\"false\" [datepicker]=\"datepickerOptions\" formControlName=\"date\"></datetime>\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.date\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Farm</label>\n\t\t\t\t\t\t\t\t\t<ng-select allowClear=\"true\" [items]=\"formData.farms\" [multiple]=\"false\" (selected)=\"updateFarm('changed', $event)\" (removed)=\"updateFarm('removed', $event)\"\n\t\t\t\t\t\t\t\t\t\t[active]=\"selectedFarm? [selectedFarm]: []\" placeholder=\"Select farm\">\n\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.farm\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Rate</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"rate\" appCurrencyFormatter [currency]=\"currencyFormat\" placeholder=\"Rate of an egg tray\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\">\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.rate\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Sales Team</label>\n\t\t\t\t\t\t\t\t\t<ng-select allowClear=\"true\" [items]=\"formData.sales_teams\" [multiple]=\"false\" (selected)=\"updateSalesTeam('changed', $event)\"\n\t\t\t\t\t\t\t\t\t\t(removed)=\"updateSalesTeam('removed', $event)\" [active]=\"selectedSalesTeam? [selectedSalesTeam]: []\" placeholder=\"Select sales team\">\n\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.sales_team\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Trays</label>\n\t\t\t\t\t\t\t\t\t<input type=\"number\" formControlName=\"no_of_plates\" placeholder=\"No of trays\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.no_of_plates\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12 col-sm-12 text-right\">\n\t\t\t\t\t\t\t\t<span [hidden]=\"state != 'FailedToSave'\" class=\"text-danger\">Failed to save. Please try again ... </span>\n\n\t\t\t\t\t\t\t\t<button type=\"button\" [disabled]=\"state == 'saving'\" (click)=\"cancel()\" class=\"btn btn-sm btn-warning m-t-n-xs\"><strong>Cancel</strong></button>\n\n\t\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"!form.valid || state == 'saving'\" class=\"btn btn-sm btn-primary m-t-n-xs\">\n\t\t\t\t\t\t\t\t\t<strong [hidden]=\"state == 'saving'\">Save</strong>\n\t\t\t\t\t\t\t\t\t<strong [hidden]=\"state != 'saving'\">Saving <i class=\"fa fa-spinner fa-spin\"></i></strong>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/portal/egg-collections/egg-collections-add-view-edit/egg-collections-add-view-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_classes__ = __webpack_require__("../../../../../src/app/classes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__ = __webpack_require__("../../../../../src/app/portal/add-view-edit-interface/add-view-edit-interface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EggCollectionsAddViewEditComponent; });
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






var EggCollectionsAddViewEditComponent = (function (_super) {
    __extends(EggCollectionsAddViewEditComponent, _super);
    function EggCollectionsAddViewEditComponent(ecService, arg1, arg2, arg3, arg4) {
        var _this = _super.call(this, arg1, arg2, arg3, arg4) || this;
        _this.ecService = ecService;
        return _this;
    }
    EggCollectionsAddViewEditComponent.prototype.getModelClass = function (data) {
        return new __WEBPACK_IMPORTED_MODULE_3_app_classes__["i" /* EggCollection */](data);
    };
    EggCollectionsAddViewEditComponent.prototype.buildForm = function () {
        // Building form
        this.form = this.fb.group({
            'id': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'date': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'farm': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'rate': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'sales_team': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'no_of_plates': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
        });
        this.subscribeEvents();
    };
    EggCollectionsAddViewEditComponent.prototype.getFormValue = function () {
        var formValue = JSON.parse(JSON.stringify(this.details));
        if (formValue.farm)
            this.selectedFarm = { id: formValue.farm, text: formValue.farm_name };
        else
            this.selectedFarm = null;
        if (formValue.sales_team)
            this.selectedSalesTeam = { id: formValue.sales_team, text: formValue.sales_team_name };
        else
            this.selectedSalesTeam = null;
        if (formValue['date']) {
            var date = moment(formValue['date'], this.datepickerOptions['format'].toUpperCase());
            formValue['date'] = new Date(date.year(), date.month(), date.date());
        }
        else {
            formValue['date'] = new Date();
        }
        return formValue;
    };
    EggCollectionsAddViewEditComponent.prototype.save = function () {
        var _this = this;
        this.state = 'saving';
        var formValue = this.form.value;
        var date = new Date(formValue['date']);
        formValue['date'] = String("0" + date.getDate()).slice(-2) + "-" + String("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear();
        var queryParams = { form_data: true };
        if (this.mode == 'ADD') {
            this.ecService
                .create(formValue, queryParams)
                .subscribe(function (Result) {
                _this.details = Result;
                _this.state = 'saved';
                _this.initViewScreen();
            }, function (Err) {
                _this.state = 'FailedToSave';
            });
        }
        else if (this.mode == 'EDIT') {
            this.ecService
                .update(formValue['id'], formValue, queryParams)
                .subscribe(function (Result) {
                _this.details = Result;
                _this.state = 'saved';
                _this.initViewScreen();
            }, function (Err) {
                _this.state = 'FailedToSave';
            });
        }
    };
    EggCollectionsAddViewEditComponent.prototype.updateFarm = function (action, event) {
        if (action == 'changed') {
            this.selectedFarm = event;
            this.patchForm({ 'farm': event.id });
        }
        else if (action == 'removed') {
            this.selectedFarm = null;
            this.patchForm({ 'farm': '' });
        }
    };
    EggCollectionsAddViewEditComponent.prototype.updateSalesTeam = function (action, event) {
        if (action == 'changed') {
            this.selectedSalesTeam = event;
            this.patchForm({ 'sales_team': event.id });
        }
        else if (action == 'removed') {
            this.selectedSalesTeam = null;
            this.patchForm({ 'sales_team': '' });
        }
    };
    return EggCollectionsAddViewEditComponent;
}(__WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["a" /* AddViewEditInterfaceComponent */]));
EggCollectionsAddViewEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-egg-collections-add-view-edit',
        template: __webpack_require__("../../../../../src/app/portal/egg-collections/egg-collections-add-view-edit/egg-collections-add-view-edit.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_app_services__["i" /* EggCollectionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services__["i" /* EggCollectionsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["b" /* arg1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["b" /* arg1 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["c" /* arg2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["c" /* arg2 */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["d" /* arg3 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["d" /* arg3 */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["e" /* arg4 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["e" /* arg4 */]) === "function" && _e || Object])
], EggCollectionsAddViewEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=egg-collections-add-view-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/egg-collections/egg-collections-list/egg-collections-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ng2-table\n    [screenName]=\"tableConfig['screenName']\"\n    [fetchUrl]=\"tableConfig['fetchUrl']\"\n    [queryParams]=\"tableConfig['queryParams']\"\n    [columns]=\"tableConfig['columns']\"\n    [limit]=\"tableConfig['limit']\"\n    (event)=\"doTableEvent($event.data)\"\n    [addButtonInfo]=\"tableConfig['addButtonInfo']\"\n\n></app-ng2-table>"

/***/ }),

/***/ "../../../../../src/app/portal/egg-collections/egg-collections-list/egg-collections-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_functions__ = __webpack_require__("../../../../../src/app/functions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EggCollectionsListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EggCollectionsListComponent = (function () {
    function EggCollectionsListComponent(router) {
        this.router = router;
        this.tableConfig = {
            screenName: 'Egg Purchases',
            fetchUrl: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_app_functions__["a" /* GetApiurl */])('egg-collections/'),
            queryParams: {},
            columns: [
                { title: 'Date', name: 'date', sort: true },
                { title: 'Farm', name: 'farm_name', sort: true },
                { title: 'Rate', name: 'rate', sort: true, type: 'number', fraction: 2 },
                { title: 'Sales Team', name: 'sales_team_name', sort: true },
                { title: 'Trays', name: 'no_of_plates', sort: true },
                { title: 'Actions', links: ['View', 'Edit'], }
            ],
            rows: [],
            limit: 10,
            addButtonInfo: { text: 'Add Purchase', url: '/app/egg-collections/add' }
        };
    }
    EggCollectionsListComponent.prototype.ngOnInit = function () {
    };
    EggCollectionsListComponent.prototype.doTableEvent = function (event) {
        if (event.action == 'View')
            this.router.navigate(['/app', 'egg-collections', event.row.id, 'view']);
        else if (event.action == 'Edit')
            this.router.navigate(['/app', 'egg-collections', event.row.id, 'edit']);
    };
    return EggCollectionsListComponent;
}());
EggCollectionsListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-egg-collections-list',
        template: __webpack_require__("../../../../../src/app/portal/egg-collections/egg-collections-list/egg-collections-list.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], EggCollectionsListComponent);

var _a;
//# sourceMappingURL=egg-collections-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/egg-collections/egg-collections.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EggCollectionsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EggCollectionsComponent = (function () {
    function EggCollectionsComponent() {
    }
    EggCollectionsComponent.prototype.ngOnInit = function () {
    };
    return EggCollectionsComponent;
}());
EggCollectionsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-egg-collections',
        template: '<router-outlet></router-outlet>',
        styles: []
    }),
    __metadata("design:paramtypes", [])
], EggCollectionsComponent);

//# sourceMappingURL=egg-collections.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/egg-collections/egg-collections.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_resolvers__ = __webpack_require__("../../../../../src/app/resolvers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__egg_collections_component__ = __webpack_require__("../../../../../src/app/portal/egg-collections/egg-collections.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__egg_collections_list_egg_collections_list_component__ = __webpack_require__("../../../../../src/app/portal/egg-collections/egg-collections-list/egg-collections-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__egg_collections_add_view_edit_egg_collections_add_view_edit_component__ = __webpack_require__("../../../../../src/app/portal/egg-collections/egg-collections-add-view-edit/egg-collections-add-view-edit.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EggCollectionsModule", function() { return EggCollectionsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var eggCollectionsRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__egg_collections_component__["a" /* EggCollectionsComponent */],
        children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_6__egg_collections_list_egg_collections_list_component__["a" /* EggCollectionsListComponent */] },
            {
                path: 'add',
                component: __WEBPACK_IMPORTED_MODULE_7__egg_collections_add_view_edit_egg_collections_add_view_edit_component__["a" /* EggCollectionsAddViewEditComponent */],
                resolve: { form_data: __WEBPACK_IMPORTED_MODULE_4_app_resolvers__["g" /* EggCollectionFormDataResolver */] }
            },
            {
                path: ':id',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_services__["n" /* AuthGuardService */]],
                data: {
                    regex: { id: '[0-9]+' }
                },
                resolve: { details: __WEBPACK_IMPORTED_MODULE_4_app_resolvers__["h" /* EggCollectiondetailsResolver */], form_data: __WEBPACK_IMPORTED_MODULE_4_app_resolvers__["g" /* EggCollectionFormDataResolver */] },
                children: [
                    { path: '', redirectTo: 'view', pathMatch: 'full' },
                    { path: 'view', component: __WEBPACK_IMPORTED_MODULE_7__egg_collections_add_view_edit_egg_collections_add_view_edit_component__["a" /* EggCollectionsAddViewEditComponent */] },
                    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_7__egg_collections_add_view_edit_egg_collections_add_view_edit_component__["a" /* EggCollectionsAddViewEditComponent */] }
                ]
            }
        ]
    }
];
var eggCollectionsRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(eggCollectionsRoutes);
var EggCollectionsModule = (function () {
    function EggCollectionsModule() {
    }
    return EggCollectionsModule;
}());
EggCollectionsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_app_shared__["a" /* SharedModule */],
            eggCollectionsRouting
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__egg_collections_component__["a" /* EggCollectionsComponent */], __WEBPACK_IMPORTED_MODULE_6__egg_collections_list_egg_collections_list_component__["a" /* EggCollectionsListComponent */], __WEBPACK_IMPORTED_MODULE_7__egg_collections_add_view_edit_egg_collections_add_view_edit_component__["a" /* EggCollectionsAddViewEditComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4_app_resolvers__["h" /* EggCollectiondetailsResolver */], __WEBPACK_IMPORTED_MODULE_4_app_resolvers__["g" /* EggCollectionFormDataResolver */]]
    })
], EggCollectionsModule);

//# sourceMappingURL=egg-collections.module.js.map

/***/ })

});
//# sourceMappingURL=9.chunk.js.map