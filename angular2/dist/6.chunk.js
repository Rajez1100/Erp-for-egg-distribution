webpackJsonp([6],{

/***/ "../../../../../src/app/portal/sales-summary/sales-summary-add-view-edit/sales-summary-add-view-edit.component.html":
/***/ (function(module, exports) {

module.exports = "<!--View Design-->\n<div *ngIf=\"mode == 'VIEW'\" class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"ibox float-e-margins\">\n\t\t\t\t<!--Title-->\n\t\t\t\t<div class=\"ibox-title\">\n\t\t\t\t\t<h5>Sales Details</h5>\n\t\t\t\t\t<div class=\"ibox-tools\">\n\t\t\t\t\t\t<div class=\"btn-group\">\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"initEditScreen()\" class=\"btn btn-white btn-sm\"><i class=\"fa fa-pen\"></i> Edit details </button>\n\t\t\t\t\t\t\t<button type=\"button\" (click)=\"back()\" class=\"btn btn-white btn-sm\"><i class=\"fa fa-pen\"></i> Back </button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t\t<!--Content-->\n\t\t\t\t<div class=\"ibox-content\">\n\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t<!--Col - 1 - Sale details view-->\n\t\t\t\t\t\t<div class=\"col-md-6 padding-left-35 b-r\">\n\t\t\t\t\t\t\t<!--Date-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Date</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-7 control-value colon-before\">{{details.date}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Sales Team-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Sales Team</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-7 control-value colon-before\">{{details.sales_team_name}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Damaged plates-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Damaged Trays</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-7 control-value colon-before\">{{details.damaged_plates}}&ensp;trays.</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Total Sold Trays-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Sold Trays</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-7 control-value colon-before\">{{details.total_plates}}&ensp;trays.</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Total Sale Cost-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Total Sale</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-7 control-value colon-before\">{{details.total_cost | Currency:2:currencyFormat:true}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<!--Cash Handovered-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Cash Handovered</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-7 control-value colon-before\">{{details.cash_handovered | Currency:2:currencyFormat:true}}</label>\n\t\t\t\t\t\t\t</div>\n              \t<!--Total Outstanding-->\n\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Total Outstanding</label>\n\t\t\t\t\t\t\t\t<label class=\"col-md-7 control-value colon-before\">{{details.total_outstanding | Currency:2:currencyFormat:true}}</label>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t<!--Col - 2 - sales rates details view-->\n\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t<h4>Sale Rates</h4>\n\t\t\t\t\t\t\t<ul class=\"sale-rates-list\">\n\t\t\t\t\t\t\t\t<li class=\"header\">\n\t\t\t\t\t\t\t\t\t<span class=\"width-30\">Rate</span>\n\t\t\t\t\t\t\t\t\t<span class=\"width-30\">Trays</span>\n\t\t\t\t\t\t\t\t\t<span class=\"width-30\">Cost</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t<li *ngFor=\"let rate of details.rates; let i = index;\">\n\t\t\t\t\t\t\t\t\t<span class=\"width-30\">{{rate.rate |  Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t<span class=\"width-30\">{{rate.no_of_plates}}</span>\n\t\t\t\t\t\t\t\t\t<span class=\"width-30\">{{rate.rate * rate.no_of_plates |  Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!--Edit Design-->\n<div *ngIf=\"mode == 'ADD' || mode == 'EDIT'\" class=\"wrapper wrapper-content animated fadeInRight\">\n\t<div class=\"row\">\n\t\t<div class=\"col-lg-12\">\n\t\t\t<div class=\"ibox float-e-margins\">\n\t\t\t\t<div class=\"ibox-title\">\n\t\t\t\t\t<h5>Provide Payment Details</h5>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"ibox-content\">\n\t\t\t\t\t<form *ngIf=\"form\" [formGroup]=\"form\" (ngSubmit)=\"save()\" role=\"form\">\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<!--Col - 1 - sales details form-->\n\t\t\t\t\t\t\t<div class=\"col-sm-6 b-r\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Date</label>\n\t\t\t\t\t\t\t\t\t<datetime id=\"datetimepicker1i\" name=\"date\" [timepicker]=\"false\" [datepicker]=\"datepickerOptions\" formControlName=\"date\"></datetime>\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.date\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Sales Team</label>\n\t\t\t\t\t\t\t\t\t<ng-select allowClear=\"true\" [items]=\"formData.sales_teams\" [multiple]=\"false\" (selected)=\"updateSalesTeam('changed', $event)\"\n\t\t\t\t\t\t\t\t\t\t(removed)=\"updateSalesTeam('removed', $event)\" [active]=\"selectedSalesTeam? [selectedSalesTeam]: []\" placeholder=\"Select sales team\">\n\t\t\t\t\t\t\t\t\t</ng-select>\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.sales_team\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Damaged Trays</label>\n\t\t\t\t\t\t\t\t\t<input type=\"number\" formControlName=\"damaged_plates\" placeholder=\"No of damaged trays\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.damaged_plates\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label>Cash Handovered</label>\n\t\t\t\t\t\t\t\t\t<input type=\"text\" formControlName=\"cash_handovered\" appCurrencyFormatter [currency]=\"currencyFormat\" placeholder=\"Submitted cash\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\">\n\t\t\t\t\t\t\t\t\t<control-messages [control]=\"form.controls.cash_handovered\"></control-messages>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--Total Sold Trays-->\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Sold Trays</label>\n\t\t\t\t\t\t\t\t\t<label class=\"col-md-7 control-value colon-before\">{{getTotalPlates()}}&ensp;trays.</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<!--Total Sale Cost-->\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Total Sale</label>\n\t\t\t\t\t\t\t\t\t<label class=\"col-md-7 control-value colon-before\">{{getTotalCost() | Currency:2:currencyFormat:true}}</label>\n\t\t\t\t\t\t\t\t</div>\n                <!--Total Outstanding-->\n\t\t\t\t\t\t\t\t<div class=\"form-group row\">\n\t\t\t\t\t\t\t\t\t<label class=\"col-md-4 control-label\">Total Outstanding</label>\n\t\t\t\t\t\t\t\t\t<label class=\"col-md-7 control-value colon-before\">{{ getTotalOutstanding() | Currency:2:currencyFormat:true}}</label>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t<!--Col - 2 - sales rates details form-->\n\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t<h4>Sale Rates</h4>\n\t\t\t\t\t\t\t\t<ul formArrayName=\"rates\" class=\"sale-rates-list\">\n\t\t\t\t\t\t\t\t\t<li class=\"header\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"width-20\">Rate</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"width-30\">Trays</span>\n                    <span class=\"width-30\">Cost</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"width-10\"><i (click)=\"addRate()\" class=\"fa fa-plus btn btn-default btn-sm\"></i></span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t\t<li [formGroupName]=\"i\" *ngFor=\"let rateForm of form.controls['rates'].controls; let i = index;\">\n\t\t\t\t\t\t\t\t\t\t<span class=\"width-20\">\n                      <input type=\"text\" formControlName=\"rate\" appCurrencyFormatter [currency]=\"currencyFormat\" placeholder=\"Sale rate\" class=\"form-control input-sm\">\n                    </span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"width-30\">\n                      <input type=\"number\" formControlName=\"no_of_plates\" placeholder=\"Trays sold\" class=\"form-control input-sm\">\n                    </span>\n                    <span class=\"width-30\">{{getCost(i) | Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t\t<span class=\"width-10\"><i (click)=\"removeRate(i)\" class=\"fa fa-times btn btn-default btn-sm\"></i></span>\n\t\t\t\t\t\t\t\t\t</li>\n\t\t\t\t\t\t\t\t</ul>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t<div class=\"col-lg-12 col-sm-12 text-right\">\n\t\t\t\t\t\t\t\t<span [hidden]=\"state != 'FailedToSave'\" class=\"text-danger\">Failed to save. Please try again ... </span>\n\n\t\t\t\t\t\t\t\t<button type=\"button\" [disabled]=\"state == 'saving'\" (click)=\"cancel()\" class=\"btn btn-sm btn-warning m-t-n-xs\"><strong>Cancel</strong></button>\n\n\t\t\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"!form.valid || state == 'saving'\" class=\"btn btn-sm btn-primary m-t-n-xs\">\n\t\t\t\t\t\t\t\t\t<strong [hidden]=\"state == 'saving'\">Save</strong>\n\t\t\t\t\t\t\t\t\t<strong [hidden]=\"state != 'saving'\">Saving <i class=\"fa fa-spinner fa-spin\"></i></strong>\n\t\t\t\t\t\t\t\t</button>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/portal/sales-summary/sales-summary-add-view-edit/sales-summary-add-view-edit.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_classes__ = __webpack_require__("../../../../../src/app/classes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__ = __webpack_require__("../../../../../src/app/portal/add-view-edit-interface/add-view-edit-interface.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesSummaryAddViewEditComponent; });
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






var SalesSummaryAddViewEditComponent = (function (_super) {
    __extends(SalesSummaryAddViewEditComponent, _super);
    function SalesSummaryAddViewEditComponent(ssService, arg1, arg2, arg3, arg4) {
        var _this = _super.call(this, arg1, arg2, arg3, arg4) || this;
        _this.ssService = ssService;
        return _this;
    }
    SalesSummaryAddViewEditComponent.prototype.getModelClass = function (data) {
        return new __WEBPACK_IMPORTED_MODULE_3_app_classes__["e" /* SalesSummary */](data);
    };
    SalesSummaryAddViewEditComponent.prototype.buildForm = function () {
        // Building form
        this.form = this.fb.group({
            'id': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'date': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'sales_team': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'damaged_plates': ['', []],
            'cash_handovered': ['', []],
            'rates': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormArray"]([
                this.buildRateForm()
            ])
        });
        this.subscribeEvents();
    };
    SalesSummaryAddViewEditComponent.prototype.buildRateForm = function (data) {
        var rateForm = this.fb.group({
            'id': ['', []],
            'rate': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
            'no_of_plates': ['', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]],
        });
        if (data) {
            rateForm.patchValue(data);
            if ('id' in data) {
                rateForm.controls['id'].setValidators([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required]);
                rateForm.controls['id'].updateValueAndValidity();
            }
        }
        return rateForm;
    };
    SalesSummaryAddViewEditComponent.prototype.addRate = function () {
        var rateArray = this.form.controls['rates'];
        rateArray.push(this.buildRateForm());
        rateArray.updateValueAndValidity();
    };
    SalesSummaryAddViewEditComponent.prototype.removeRate = function (index) {
        var rateArray = this.form.controls['rates'];
        if (rateArray.length > 1) {
            rateArray.removeAt(index);
            rateArray.updateValueAndValidity();
        }
    };
    SalesSummaryAddViewEditComponent.prototype.getFormValue = function () {
        var _this = this;
        var formValue = JSON.parse(JSON.stringify(this.details));
        // Dropdown options
        if (formValue.sales_team)
            this.selectedSalesTeam = { id: formValue.sales_team, text: formValue.sales_team_name };
        else
            this.selectedSalesTeam = null;
        // Formatting date
        if (formValue['date']) {
            var date = moment(formValue['date'], this.datepickerOptions['format'].toUpperCase());
            formValue['date'] = new Date(date.year(), date.month(), date.date());
        }
        else {
            formValue['date'] = new Date();
        }
        // Rates Array
        var ratesArray = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormArray"]([]);
        if (formValue['rates'].length == 0)
            ratesArray.push(this.buildRateForm());
        else {
            formValue['rates'].forEach(function (r) { return ratesArray.push(_this.buildRateForm(r)); });
        }
        this.form.setControl('rates', ratesArray);
        this.form.updateValueAndValidity();
        return formValue;
    };
    SalesSummaryAddViewEditComponent.prototype.save = function () {
        var _this = this;
        this.state = 'saving';
        var formValue = JSON.parse(JSON.stringify(this.form.value));
        var date = new Date(formValue['date']);
        formValue['date'] = String("0" + date.getDate()).slice(-2) + "-" + String("0" + (date.getMonth() + 1)).slice(-2) + "-" + date.getFullYear();
        formValue['damaged_plates'] = formValue['damaged_plates'] || 0;
        formValue['cash_handovered'] = formValue['cash_handovered'] || 0;
        formValue['rates'].map(function (r) {
            if (r['id'])
                return r;
            else {
                delete r['id'];
                return r;
            }
        });
        var queryParams = { form_data: true };
        if (this.mode == 'ADD') {
            this.ssService
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
            this.ssService
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
    SalesSummaryAddViewEditComponent.prototype.updateSalesTeam = function (action, event) {
        if (action == 'changed') {
            this.selectedSalesTeam = event;
            this.patchForm({ 'sales_team': event.id });
        }
        else if (action == 'removed') {
            this.selectedSalesTeam = null;
            this.patchForm({ 'sales_team': '' });
        }
    };
    SalesSummaryAddViewEditComponent.prototype.getTotalCost = function () {
        var formValue = this.form.value;
        var totalCost = 0;
        formValue['rates'].forEach(function (r) { return totalCost += parseFloat(r.rate) * parseFloat(r.no_of_plates); });
        return totalCost || 0;
    };
    SalesSummaryAddViewEditComponent.prototype.getTotalPlates = function () {
        var formValue = this.form.value;
        var totalPlates = 0;
        formValue['rates'].forEach(function (r) { return totalPlates += parseFloat(r.no_of_plates); });
        return totalPlates || 0;
    };
    SalesSummaryAddViewEditComponent.prototype.getCost = function (index) {
        var rates = this.form.value.rates;
        var cost = parseFloat(rates[index]['rate']) * parseFloat(rates[index]['no_of_plates']) || 0;
        return cost;
    };
    SalesSummaryAddViewEditComponent.prototype.getTotalOutstanding = function () {
        var formValue = this.form.value;
        return (this.getTotalCost() - parseFloat(formValue['cash_handovered'])) || 0;
    };
    return SalesSummaryAddViewEditComponent;
}(__WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["a" /* AddViewEditInterfaceComponent */]));
SalesSummaryAddViewEditComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sales-summary-add-view-edit',
        template: __webpack_require__("../../../../../src/app/portal/sales-summary/sales-summary-add-view-edit/sales-summary-add-view-edit.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_app_services__["k" /* SalesSummaryService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services__["k" /* SalesSummaryService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["b" /* arg1 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["b" /* arg1 */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["c" /* arg2 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["c" /* arg2 */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["d" /* arg3 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["d" /* arg3 */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["e" /* arg4 */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__add_view_edit_interface_add_view_edit_interface_component__["e" /* arg4 */]) === "function" && _e || Object])
], SalesSummaryAddViewEditComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=sales-summary-add-view-edit.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/sales-summary/sales-summary-list/sales-summary-list.component.html":
/***/ (function(module, exports) {

module.exports = "<app-ng2-table\n    [screenName]=\"tableConfig['screenName']\"\n    [fetchUrl]=\"tableConfig['fetchUrl']\"\n    [queryParams]=\"tableConfig['queryParams']\"\n    [columns]=\"tableConfig['columns']\"\n    [limit]=\"tableConfig['limit']\"\n    (event)=\"doTableEvent($event.data)\"\n    [addButtonInfo]=\"tableConfig['addButtonInfo']\"\n\n></app-ng2-table>"

/***/ }),

/***/ "../../../../../src/app/portal/sales-summary/sales-summary-list/sales-summary-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_functions__ = __webpack_require__("../../../../../src/app/functions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesSummaryListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SalesSummaryListComponent = (function () {
    function SalesSummaryListComponent(router) {
        this.router = router;
        this.tableConfig = {
            screenName: 'Sales',
            fetchUrl: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_app_functions__["a" /* GetApiurl */])('sales-summary/'),
            queryParams: {},
            columns: [
                { title: 'Date', name: 'date', sort: true },
                { title: 'Sales Team', name: 'sales_team_name', sort: true },
                { title: 'Trays Sold', name: 'total_plates', sort: false },
                { title: 'Cost', name: 'total_cost', sort: false, type: 'number', fraction: 2 },
                { title: 'Cash Collected', name: 'cash_handovered', sort: true, type: 'number', fraction: 2 },
                { title: 'Outstanding', name: 'total_outstanding', sort: false, type: 'number', fraction: 2 },
                { title: 'Actions', links: ['View', 'Edit'], }
            ],
            rows: [],
            limit: 10,
            addButtonInfo: { text: 'Add Sales', url: '/app/sales-summary/add' }
        };
    }
    SalesSummaryListComponent.prototype.ngOnInit = function () {
    };
    SalesSummaryListComponent.prototype.doTableEvent = function (event) {
        if (event.action == 'View')
            this.router.navigate(['/app', 'sales-summary', event.row.id, 'view']);
        else if (event.action == 'Edit')
            this.router.navigate(['/app', 'sales-summary', event.row.id, 'edit']);
    };
    return SalesSummaryListComponent;
}());
SalesSummaryListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sales-summary-list',
        template: __webpack_require__("../../../../../src/app/portal/sales-summary/sales-summary-list/sales-summary-list.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], SalesSummaryListComponent);

var _a;
//# sourceMappingURL=sales-summary-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/sales-summary/sales-summary.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesSummaryComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SalesSummaryComponent = (function () {
    function SalesSummaryComponent() {
    }
    SalesSummaryComponent.prototype.ngOnInit = function () {
    };
    return SalesSummaryComponent;
}());
SalesSummaryComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sales-summary',
        template: "<router-outlet></router-outlet>",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], SalesSummaryComponent);

//# sourceMappingURL=sales-summary.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/sales-summary/sales-summary.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_resolvers__ = __webpack_require__("../../../../../src/app/resolvers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sales_summary_list_sales_summary_list_component__ = __webpack_require__("../../../../../src/app/portal/sales-summary/sales-summary-list/sales-summary-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sales_summary_add_view_edit_sales_summary_add_view_edit_component__ = __webpack_require__("../../../../../src/app/portal/sales-summary/sales-summary-add-view-edit/sales-summary-add-view-edit.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sales_summary_component__ = __webpack_require__("../../../../../src/app/portal/sales-summary/sales-summary.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesSummaryModule", function() { return SalesSummaryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var salesSummaryRoutes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_7__sales_summary_component__["a" /* SalesSummaryComponent */],
        children: [
            { path: 'list', component: __WEBPACK_IMPORTED_MODULE_5__sales_summary_list_sales_summary_list_component__["a" /* SalesSummaryListComponent */] },
            {
                path: 'add',
                component: __WEBPACK_IMPORTED_MODULE_6__sales_summary_add_view_edit_sales_summary_add_view_edit_component__["a" /* SalesSummaryAddViewEditComponent */],
                resolve: { form_data: __WEBPACK_IMPORTED_MODULE_4_app_resolvers__["a" /* SalesSummaryFormDataResolver */] }
            },
            {
                path: ':id',
                canActivate: [__WEBPACK_IMPORTED_MODULE_3_app_services__["n" /* AuthGuardService */]],
                data: {
                    regex: { id: '[0-9]+' }
                },
                resolve: { details: __WEBPACK_IMPORTED_MODULE_4_app_resolvers__["c" /* SalesSummarydetailsResolver */], form_data: __WEBPACK_IMPORTED_MODULE_4_app_resolvers__["a" /* SalesSummaryFormDataResolver */] },
                children: [
                    { path: '', redirectTo: 'view', pathMatch: 'full' },
                    { path: 'view', component: __WEBPACK_IMPORTED_MODULE_6__sales_summary_add_view_edit_sales_summary_add_view_edit_component__["a" /* SalesSummaryAddViewEditComponent */] },
                    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_6__sales_summary_add_view_edit_sales_summary_add_view_edit_component__["a" /* SalesSummaryAddViewEditComponent */] }
                ]
            }
        ]
    }
];
var salesSummaryRouting = __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forChild(salesSummaryRoutes);
var SalesSummaryModule = (function () {
    function SalesSummaryModule() {
    }
    return SalesSummaryModule;
}());
SalesSummaryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2_app_shared__["a" /* SharedModule */],
            salesSummaryRouting
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__sales_summary_list_sales_summary_list_component__["a" /* SalesSummaryListComponent */], __WEBPACK_IMPORTED_MODULE_6__sales_summary_add_view_edit_sales_summary_add_view_edit_component__["a" /* SalesSummaryAddViewEditComponent */], __WEBPACK_IMPORTED_MODULE_7__sales_summary_component__["a" /* SalesSummaryComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_4_app_resolvers__["c" /* SalesSummarydetailsResolver */], __WEBPACK_IMPORTED_MODULE_4_app_resolvers__["a" /* SalesSummaryFormDataResolver */]]
    })
], SalesSummaryModule);

//# sourceMappingURL=sales-summary.module.js.map

/***/ })

});
//# sourceMappingURL=6.chunk.js.map