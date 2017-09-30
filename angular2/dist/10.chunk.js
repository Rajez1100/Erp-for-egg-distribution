webpackJsonp([10],{

/***/ "../../../../../src/app/portal/demand-transfers/demand-transfers-add-view-edit/demand-transfers-add-view-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--View Design-->\n<div *ngIf=\"mode == 'VIEW'\" class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-7\">\n\t\t\t<div class=\"ibox float-e-margins\">\n\t\t\t\t<!--Title-->\n\t\t\t\t<div class=\"ibox-title\">\n\t\t\t\t\t<h5>Demand Transfer Details</h5>\n\t\t\t\t\t<div class=\"ibox-tools\">\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"initEditScreen()\" class=\"btn btn-white btn-sm\"><i class=\"fa fa-pen\"></i> Edit details </button>\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"back()\" class=\"btn btn-white btn-sm\"><i class=\"fa fa-pen\"></i> Back </button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--Content-->\n\t\t\t\t<div class=\"ibox-content\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<div class=\"col-md-12 padding-left-35\">\n\t\t\t\t\t\t\t<!--Date-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-3 control-label\">Date</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-8 control-value colon-before\">{{details.date}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Transfer From-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-3 control-label\">Transfer From</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-8 control-value colon-before\">{{details.transfer_from_name}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--To Sales Team-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-3 control-label\">Transfer To</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-8 control-value colon-before\">{{details.transfer_to_name}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Trays-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-3 control-label\">Trays</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-8 control-value colon-before\">{{details.no_of_plates}}&ensp;trays.</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!--Edit Design-->\n<div *ngIf=\"mode == 'ADD' || mode == 'EDIT'\" class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-6\">\n\t\t\t<div class=\"ibox float-e-margins\">\n\t\t\t\t<div class=\"ibox-title\">\n\t\t\t\t\t<h5>Provide Demand Transfer Details</h5>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibox-content\">\n\t\t\t\t\t<form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"save()\" role=\"form\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-sm-12\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Date</label>\n\t\t\t\t\t\t\t\t\t<datetime id=\"datetimepicker1i\" name=\"date\" [timepicker]=\"false\" [datepicker]=\"datepickerOptions\" formControlName=\"date\"></datetime>\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.date\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Transfer From</label>\n\t\t\t\t\t\t\t\t\t<ng-select allowClear=\"true\" [items]=\"formData.sales_teams\" [multiple]=\"false\" (selected)=\"updateFromSt('changed', $event)\" (removed)=\"updateFromSt('removed', $event)\"\n\t\t\t\t\t\t\t\t\t\t[active]=\"selectedFromSt? [selectedFromSt]: []\" placeholder=\"Select from sales team\">\n\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.transfer_from\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Transfer To</label>\n\t\t\t\t\t\t\t\t\t<ng-select allowClear=\"true\" [items]=\"formData.sales_teams\" [multiple]=\"false\" (selected)=\"updateToSt('changed', $event)\"\n\t\t\t\t\t\t\t\t\t\t(removed)=\"updateToSt('removed', $event)\" [active]=\"selectedToSt? [selectedToSt]: []\" placeholder=\"Select to sales team\">\n\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.transfer_to\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Trays</label>\n\t\t\t\t\t\t\t\t\t<input type=\"number\" formControlName=\"no_of_plates\" placeholder=\"No of trays\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.no_of_plates\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12 col-sm-12 text-right\">\n\t\t\t\t\t\t\t\t<span [hidden]=\"state != 'FailedToSave'\" class=\"text-danger\">Failed to save. Please try again ... </span>\n\n\t\t\t\t\t\t\t\t<button type=\"button\" [disabled]=\"state == 'saving'\" (click)=\"cancel()\" class=\"btn btn-sm btn-warning m-t-n-xs\"><strong>Cancel</strong></button>\n\n\t\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"!form.valid || state == 'saving'\" class=\"btn btn-sm btn-primary m-t-n-xs\">\n\t\t\t\t\t\t\t\t\t<strong [hidden]=\"state == 'saving'\">Save</strong>\n\t\t\t\t\t\t\t\t\t<strong [hidden]=\"state != 'saving'\">Saving <i class=\"fa fa-spinner fa-spin\"></i></strong>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/portal/demand-transfers/demand-transfers-add-view-edit/demand-transfers-add-view-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_classes__ = __webpack_require__("../../../../../src/app/classes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__ = __webpack_require__("../../../../../src/app/portal/add-view-edit-interface/add-view-edit-interface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemandTransfersAddViewEditComponent; });
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






var DemandTransfersAddViewEditComponent = (function (_super) {
    __extends(DemandTransfersAddViewEditComponent, _super);
    function DemandTransfersAddViewEditComponent(dtService, arg1, arg2, arg3, arg4) {
        var _this = _super.call(this, arg1, arg2, arg3, arg4) || this;
        _this.dtService = dtService;
        return _this;
    }
    DemandTransfersAddViewEditComponent.prototype.getModelClass = function (data) {
        return new __WEBPACK_IMPORTED_MODULE_3_app_classes__["g" /* DemandTransfer */](data);
    };
    DemandTransfersAddViewEditComponent.prototype.buildForm = function () {
        // Building form
        this.form = this.fb.group({
            'id': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'date': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'transfer_from': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'transfer_to': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'no_of_plates': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
        });
        this.subscribeEvents();
    };
    DemandTransfersAddViewEditComponent.prototype.getFormValue = function () {
        var formValue = JSON.parse(JSON.stringify(this.details));
        if (formValue.transfer_from)
            this.selectedFromSt = { id: formValue.transfer_from, text: formValue.transfer_from_name };
        else
            this.selectedFromSt = null;
        if (formValue.transfer_to)
            this.selectedToSt = { id: formValue.transfer_to, text: formValue.transfer_to_name };
        else
            this.selectedToSt = null;
        if (formValue['date']) {
            var date = moment(formValue['date'], this.datepickerOptions['format'].toUpperCase());
            formValue['date'] = new Date(date.year(), date.month(), date.date());
        }
        else {
            formValue['date'] = new Date();
        }
        return formValue;
    };
    DemandTransfersAddViewEditComponent.prototype.save = function () {
        var _this = this;
        this.state = 'saving';
        var formValue = this.form.value;
        var date = new Date(formValue['date']);
        formValue['date'] = String("0" + date.getDate()).slice(-2) + "-" + String("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear();
        var queryParams = { form_data: true };
        if (this.mode == 'ADD') {
            this.dtService
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
            this.dtService
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
    DemandTransfersAddViewEditComponent.prototype.updateFromSt = function (action, event) {
        if (action == 'changed') {
            this.selectedFromSt = event;
            this.patchForm({ 'transfer_from': event.id });
        }
        else if (action == 'removed') {
            this.selectedFromSt = null;
            this.patchForm({ 'transfer_from': '' });
        }
    };
    DemandTransfersAddViewEditComponent.prototype.updateToSt = function (action, event) {
        if (action == 'changed') {
            this.selectedToSt = event;
            this.patchForm({ 'transfer_to': event.id });
        }
        else if (action == 'removed') {
            this.selectedToSt = null;
            this.patchForm({ 'transfer_to': '' });
        }
    };
    return DemandTransfersAddViewEditComponent;
}(__WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["a" /* AddViewEditInterfaceComponent */]));
DemandTransfersAddViewEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-demand-transfers-add-view-edit',
        template: __webpack_require__("../../../../../src/app/portal/demand-transfers/demand-transfers-add-view-edit/demand-transfers-add-view-edit.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_app_services__["j" /* DemandTransfersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services__["j" /* DemandTransfersService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["b" /* arg1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["b" /* arg1 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["c" /* arg2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["c" /* arg2 */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["d" /* arg3 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["d" /* arg3 */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["e" /* arg4 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["e" /* arg4 */]) === "function" && _e || Object])
], DemandTransfersAddViewEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=demand-transfers-add-view-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/demand-transfers/demand-transfers-list/demand-transfers-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ng2-table class=\"col-lg-10\"\n    [screenName]=\"tableConfig['screenName']\"\n    [fetchUrl]=\"tableConfig['fetchUrl']\"\n    [queryParams]=\"tableConfig['queryParams']\"\n    [columns]=\"tableConfig['columns']\"\n    [limit]=\"tableConfig['limit']\"\n    (event)=\"doTableEvent($event.data)\"\n    [addButtonInfo]=\"tableConfig['addButtonInfo']\"\n\n></app-ng2-table>"

/***/ }),

/***/ "../../../../../src/app/portal/demand-transfers/demand-transfers-list/demand-transfers-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_functions__ = __webpack_require__("../../../../../src/app/functions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemandTransfersListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DemandTransfersListComponent = (function () {
    function DemandTransfersListComponent(router) {
        this.router = router;
        this.tableConfig = {
            screenName: 'Demand Transfers',
            fetchUrl: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_app_functions__["a" /* GetApiurl */])('demand-transfers/'),
            queryParams: {},
            columns: [
                { title: 'Date', name: 'date', sort: true },
                { title: 'Transfer From', name: 'transfer_from_name', sort: true },
                { title: 'Transfer To', name: 'transfer_to_name', sort: true },
                { title: 'Trays', name: 'no_of_plates', sort: true },
                { title: 'Actions', links: ['View', 'Edit'], }
            ],
            rows: [],
            limit: 10,
            addButtonInfo: { text: 'Add Transfer', url: '/app/demand-transfers/add' }
        };
    }
    DemandTransfersListComponent.prototype.ngOnInit = function () {
    };
    DemandTransfersListComponent.prototype.doTableEvent = function (event) {
        if (event.action == 'View')
            this.router.navigate(['/app', 'demand-transfers', event.row.id, 'view']);
        else if (event.action == 'Edit')
            this.router.navigate(['/app', 'demand-transfers', event.row.id, 'edit']);
    };
    return DemandTransfersListComponent;
}());
DemandTransfersListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-demand-transfers-list',
        template: __webpack_require__("../../../../../src/app/portal/demand-transfers/demand-transfers-list/demand-transfers-list.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], DemandTransfersListComponent);

var _a;
//# sourceMappingURL=demand-transfers-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/demand-transfers/demand-transfers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DemandTransfersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DemandTransfersComponent = (function () {
    function DemandTransfersComponent() {
    }
    DemandTransfersComponent.prototype.ngOnInit = function () {
    };
    return DemandTransfersComponent;
}());
DemandTransfersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-demand-transfers',
        template: '<router-outlet></router-outlet>',
        styles: []
    }),
    __metadata("design:paramtypes", [])
], DemandTransfersComponent);

//# sourceMappingURL=demand-transfers.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/demand-transfers/demand-transfers.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_resolvers__ = __webpack_require__("../../../../../src/app/resolvers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__demand_transfers_component__ = __webpack_require__("../../../../../src/app/portal/demand-transfers/demand-transfers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__demand_transfers_list_demand_transfers_list_component__ = __webpack_require__("../../../../../src/app/portal/demand-transfers/demand-transfers-list/demand-transfers-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__demand_transfers_add_view_edit_demand_transfers_add_view_edit_component__ = __webpack_require__("../../../../../src/app/portal/demand-transfers/demand-transfers-add-view-edit/demand-transfers-add-view-edit.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemandTransfersModule", function() { return DemandTransfersModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var demandTransfersRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_5__demand_transfers_component__["a" /* DemandTransfersComponent */],
        children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_6__demand_transfers_list_demand_transfers_list_component__["a" /* DemandTransfersListComponent */] },
            {
                path: 'add',
                component: __WEBPACK_IMPORTED_MODULE_7__demand_transfers_add_view_edit_demand_transfers_add_view_edit_component__["a" /* DemandTransfersAddViewEditComponent */],
                resolve: { form_data: __WEBPACK_IMPORTED_MODULE_4_app_resolvers__["e" /* DemandTransferFormDataResolver */] }
            },
            {
                path: ':id',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_services__["n" /* AuthGuardService */]],
                data: {
                    regex: { id: '[0-9]+' }
                },
                resolve: { details: __WEBPACK_IMPORTED_MODULE_4_app_resolvers__["f" /* DemandTransferdetailsResolver */], form_data: __WEBPACK_IMPORTED_MODULE_4_app_resolvers__["e" /* DemandTransferFormDataResolver */] },
                children: [
                    { path: '', redirectTo: 'view', pathMatch: 'full' },
                    { path: 'view', component: __WEBPACK_IMPORTED_MODULE_7__demand_transfers_add_view_edit_demand_transfers_add_view_edit_component__["a" /* DemandTransfersAddViewEditComponent */] },
                    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_7__demand_transfers_add_view_edit_demand_transfers_add_view_edit_component__["a" /* DemandTransfersAddViewEditComponent */] }
                ]
            }
        ]
    }
];
var demandTransfersRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(demandTransfersRoutes);
var DemandTransfersModule = (function () {
    function DemandTransfersModule() {
    }
    return DemandTransfersModule;
}());
DemandTransfersModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_app_shared__["a" /* SharedModule */],
            demandTransfersRouting
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__demand_transfers_component__["a" /* DemandTransfersComponent */], __WEBPACK_IMPORTED_MODULE_6__demand_transfers_list_demand_transfers_list_component__["a" /* DemandTransfersListComponent */], __WEBPACK_IMPORTED_MODULE_7__demand_transfers_add_view_edit_demand_transfers_add_view_edit_component__["a" /* DemandTransfersAddViewEditComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4_app_resolvers__["f" /* DemandTransferdetailsResolver */], __WEBPACK_IMPORTED_MODULE_4_app_resolvers__["e" /* DemandTransferFormDataResolver */]]
    })
], DemandTransfersModule);

//# sourceMappingURL=demand-transfers.module.js.map

/***/ })

});
//# sourceMappingURL=10.chunk.js.map