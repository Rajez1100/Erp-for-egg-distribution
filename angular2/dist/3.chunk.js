webpackJsonp([3],{

/***/ "../../../../../src/app/portal/reports/daily/daily.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  daily works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/portal/reports/daily/daily.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_classes__ = __webpack_require__("../../../../../src/app/classes/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DailyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var DailyComponent = (function () {
    function DailyComponent(route, rService) {
        this.route = route;
        this.rService = rService;
        this.ngUnSubcribe = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.queryParams = {};
        this.summary = new __WEBPACK_IMPORTED_MODULE_5_app_classes__["b" /* DailyReportSummary */]();
        this.currencyFormat = 'INR';
    }
    DailyComponent.prototype.ngOnInit = function () {
        this.date = new Date();
    };
    DailyComponent.prototype.ngOnDestroy = function () {
        this.ngUnSubcribe.next();
        this.ngUnSubcribe.complete();
    };
    DailyComponent.prototype.weekChanged = function (event) {
        this.date = event;
        this.queryParams['date'] = moment(event).format('DD-MM-YYYY');
        this.getReport();
    };
    DailyComponent.prototype.getReport = function () {
        var _this = this;
        this.state = 'fetchingReport';
        if (this.reportDataRequest)
            this.reportDataRequest.unsubscribe();
        this.reportDataRequest = this.rService
            .getDailyReport(this.queryParams)
            .subscribe(function (Result) {
            _this.summary = new __WEBPACK_IMPORTED_MODULE_5_app_classes__["b" /* DailyReportSummary */](Result['summary']);
            _this.state = 'fetchedReport';
            console.log(_this.summary);
        }, function (Err) {
            _this.state = 'failedToFetchReport';
            _this.summary = new __WEBPACK_IMPORTED_MODULE_5_app_classes__["b" /* DailyReportSummary */]();
        });
    };
    DailyComponent.prototype.ngAfterViewInit = function () {
        var pie = document.getElementById('stocked');
        setTimeout(function () {
            c3.generate({
                bindto: '#stocked',
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 50, 20, 10, 40, 15, 25]
                    ],
                    colors: {
                        data1: '#1ab394',
                        data2: '#BABABA'
                    },
                    type: 'bar',
                    groups: [
                        ['data1', 'data2']
                    ]
                }
            });
        }, 3000);
    };
    return DailyComponent;
}());
DailyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-daily',
        template: __webpack_require__("../../../../../src/app/portal/reports/daily/daily.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services__["m" /* ReportsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services__["m" /* ReportsService */]) === "function" && _b || Object])
], DailyComponent);

var _a, _b;
//# sourceMappingURL=daily.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/reports/payments-report/payments-report.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight padding-bottom-0\">\n\t<div class=\"ibox-content m-b-sm border-bottom\">\n\t\t<div class=\"row\">\n\t\t\t<!--Start date-->\n\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"control-label\" for=\"start_date_input\">Start Date</label>\n\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<datetime [(ngModel)]=\"startDate\" id=\"datetimepicker1\" name=\"date\" [timepicker]=\"false\" [datepicker]=\"datepickerOptions\"></datetime>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--End date-->\n\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"control-label\" for=\"end_date_input\">End Date</label>\n\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<datetime [(ngModel)]=\"endDate\" id=\"datetimepicker2\" name=\"date\" [timepicker]=\"false\" [datepicker]=\"datepickerOptions\"></datetime>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<!--Farm-->\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"control-label\" for=\"farm_input\">Farm</label>\n\t\t\t\t\t<ng-select allowClear=\"true\" id=\"farm_input\" [items]=\"farms\" [multiple]=\"false\" (selected)=\"farmChanged('changed', $event)\"\n\t\t\t\t\t\t(removed)=\"farmChanged('removed', $event)\" placeholder=\"Select farm\">\n\t\t\t\t\t</ng-select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-2\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"control-label\" for=\"generate-btn\" style=\"width: 100%;\">&ensp;</label>\n\t\t\t\t\t<button (click)=\"getReport()\" id=\"generate-btn\" type=\"button\" class=\"btn btn-info btn-sm\">\n\t\t\t\t\t\t<span [hidden]=\"state == 'fetchingReport'\">Generate Report</span>\n\t\t\t\t\t\t<span [hidden]=\"state != 'fetchingReport'\">Generating Report <i class=\"fa fa-spinner fa-spin\"></i></span>\n\t\t\t\t\t</button>&ensp;\n\t\t\t\t\t<span [hidden]=\"state != 'failedToFetchReport'\" class=\"text-danger\">Failed to generate. Try again ...</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n\n<!--Summary-->\n<div class=\"wrapper wrapper-content animated fadeInUp padding-bottom-0\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"ibox\">\n\t\t\t\t<div class=\"ibox-content\">\n\t\t\t\t\t<h2>Summary</h2>\n\n\t\t\t\t\t<div class=\"clients-list padded extra-pad-for-lg\">\n\t\t\t\t\t\t<table class=\"table table-striped table-hover\">\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<!--Purchased plates-->\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"client-avatar\"></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Purchased Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{reportData['summary']['plates_collection__sum'] | Currency:0:currencyFormat:false}} trays.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Purchase Cost</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{reportData['summary']['cost_collection__sum'] | Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<!--Payment/ Balance-->\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"client-avatar\"></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Paid Amount</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{reportData['summary']['cost_payment__sum'] | Currency:0:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Remaining Amount</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\"><span [ngClass]=\"{'label-danger': reportData['summary']['cost_balance__sum'] > 0, 'label-primary': reportData['summary']['cost_balance__sum'] <= 0}\" class=\"label font-13\">{{reportData['summary']['cost_balance__sum'] | Currency:2:currencyFormat:true}}</span>\n                          </span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!--List view-->\n<app-ng2-table\n\t[screenName]=\"tableConfig['screenName']\"\n\t[fetchUrl]=\"tableConfig['fetchUrl']\"\n\t[queryParams]=\"tableConfig['queryParams']\"\n\t[columns]=\"tableConfig['columns']\"\n\t[limit]=\"tableConfig['limit']\"\n\t(event)=\"doTableEvent($event.data)\"\n\t[addButtonInfo]=\"tableConfig['addButtonInfo']\"\n\n></app-ng2-table>\n"

/***/ }),

/***/ "../../../../../src/app/portal/reports/payments-report/payments-report.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_classes__ = __webpack_require__("../../../../../src/app/classes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_functions__ = __webpack_require__("../../../../../src/app/functions.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentsReportComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PaymentsReportComponent = (function () {
    function PaymentsReportComponent(route, rService) {
        var _this = this;
        this.route = route;
        this.rService = rService;
        this.ngUnSubcribe = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.farms = [];
        this.queryParams = {};
        this.reportData = new __WEBPACK_IMPORTED_MODULE_5_app_classes__["a" /* PaymentsReportSummary */]();
        this.currencyFormat = 'INR';
        this.showSalesTeamSpecific = false;
        this.datepickerOptions = {
            autoclose: true,
            todayHighlight: true,
            format: 'dd-mm-yyyy',
            icon: 'fa fa-calendar',
            todayBtn: 'linked'
        };
        this.tableConfig = {
            screenName: 'List Report',
            fetchUrl: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_app_functions__["a" /* GetApiurl */])('reports/collections-and-payments/'),
            queryParams: {},
            columns: [
                { title: 'Date', name: 'date', sort: true },
                { title: 'Farm', name: 'farm_name', sort: false },
                { title: 'Trays Purchased', name: 'plates_collection', sort: true, type: 'number', fraction: 2 },
                { title: 'Purchase Cost', name: 'cost_collection', sort: true, type: 'number', fraction: 2 },
                { title: 'Paid Amount', name: 'cost_payment', sort: true, type: 'number', fraction: 2 }
            ],
            rows: [],
            limit: 10
        };
        // Route params
        this.route.data.takeUntil(this.ngUnSubcribe).subscribe(function (data) {
            if ('form_data' in data)
                _this.farms = data['form_data']['farms'];
            else
                _this.farms = [];
        });
    }
    PaymentsReportComponent.prototype.ngOnInit = function () {
        var today = new Date();
        this.endDate = today;
        this.startDate = moment(today).days('0')._d;
        this.getReport();
    };
    PaymentsReportComponent.prototype.ngOnDestroy = function () {
        this.ngUnSubcribe.next();
        this.ngUnSubcribe.complete();
    };
    PaymentsReportComponent.prototype.farmChanged = function (action, event) {
        if (action == 'changed') {
            this.farm = event;
            this.queryParams['farm'] = event['id'];
        }
        else if (action == 'removed') {
            this.farm = undefined;
            if ('farm' in this.queryParams)
                delete this.queryParams['farm'];
        }
    };
    PaymentsReportComponent.prototype.getReport = function () {
        var _this = this;
        this.state = 'fetchingReport';
        this.queryParams = {
            'start_date': moment(this.startDate).format('DD-MM-YYYY'),
            'end_date': moment(this.endDate).format('DD-MM-YYYY')
        };
        if (this.farm)
            this.queryParams['farm'] = this.farm.id;
        else
            this.queryParams['farm'] = 'all';
        this.tableConfig['queryParams'] = JSON.parse(JSON.stringify(this.queryParams));
        if (this.reportDataRequest)
            this.reportDataRequest.unsubscribe();
        this.reportDataRequest = this.rService
            .getPaymentsReport(this.queryParams)
            .subscribe(function (Result) {
            _this.reportData = Result;
            if (_this.farm)
                _this.showSalesTeamSpecific = true;
            else
                _this.showSalesTeamSpecific = false;
            _this.state = 'fetchedReport';
        }, function (Err) {
            _this.state = 'failedToFetchReport';
            _this.reportData = new __WEBPACK_IMPORTED_MODULE_5_app_classes__["a" /* PaymentsReportSummary */]();
        });
    };
    PaymentsReportComponent.prototype.ngAfterViewInit = function () {
        var pie = document.getElementById('stocked');
        setTimeout(function () {
            c3.generate({
                bindto: '#stocked',
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 50, 20, 10, 40, 15, 25]
                    ],
                    colors: {
                        data1: '#1ab394',
                        data2: '#BABABA'
                    },
                    type: 'bar',
                    groups: [
                        ['data1', 'data2']
                    ]
                }
            });
        }, 3000);
    };
    return PaymentsReportComponent;
}());
PaymentsReportComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-payments-report',
        template: __webpack_require__("../../../../../src/app/portal/reports/payments-report/payments-report.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services__["m" /* ReportsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services__["m" /* ReportsService */]) === "function" && _b || Object])
], PaymentsReportComponent);

var _a, _b;
//# sourceMappingURL=payments-report.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/reports/reports.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ReportsComponent = (function () {
    function ReportsComponent() {
    }
    ReportsComponent.prototype.ngOnInit = function () {
    };
    return ReportsComponent;
}());
ReportsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-reports',
        template: "\n    <router-outlet></router-outlet>\n  ",
        styles: []
    }),
    __metadata("design:paramtypes", [])
], ReportsComponent);

//# sourceMappingURL=reports.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/reports/reports.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_shared__ = __webpack_require__("../../../../../src/app/shared/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_resolvers__ = __webpack_require__("../../../../../src/app/resolvers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__reports_routing__ = __webpack_require__("../../../../../src/app/portal/reports/reports.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__reports_component__ = __webpack_require__("../../../../../src/app/portal/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__weekly_weekly_component__ = __webpack_require__("../../../../../src/app/portal/reports/weekly/weekly.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__payments_report_payments_report_component__ = __webpack_require__("../../../../../src/app/portal/reports/payments-report/payments-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__daily_daily_component__ = __webpack_require__("../../../../../src/app/portal/reports/daily/daily.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__sales_sales_component__ = __webpack_require__("../../../../../src/app/portal/reports/sales/sales.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReportsModule", function() { return ReportsModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ReportsModule = (function () {
    function ReportsModule() {
    }
    return ReportsModule;
}());
ReportsModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_app_shared__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_4__reports_routing__["a" /* REPORTS_ROUTING */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_5__reports_component__["a" /* ReportsComponent */], __WEBPACK_IMPORTED_MODULE_6__weekly_weekly_component__["a" /* WeeklyComponent */], __WEBPACK_IMPORTED_MODULE_7__payments_report_payments_report_component__["a" /* PaymentsReportComponent */], __WEBPACK_IMPORTED_MODULE_8__daily_daily_component__["a" /* DailyComponent */], __WEBPACK_IMPORTED_MODULE_9__sales_sales_component__["a" /* SalesComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_2_app_services__["m" /* ReportsService */],
            __WEBPACK_IMPORTED_MODULE_3_app_resolvers__["a" /* SalesSummaryFormDataResolver */],
            __WEBPACK_IMPORTED_MODULE_3_app_resolvers__["b" /* PaymentFormDataResolver */]
        ]
    })
], ReportsModule);

//# sourceMappingURL=reports.module.js.map

/***/ }),

/***/ "../../../../../src/app/portal/reports/reports.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_resolvers__ = __webpack_require__("../../../../../src/app/resolvers/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__reports_component__ = __webpack_require__("../../../../../src/app/portal/reports/reports.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__weekly_weekly_component__ = __webpack_require__("../../../../../src/app/portal/reports/weekly/weekly.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__payments_report_payments_report_component__ = __webpack_require__("../../../../../src/app/portal/reports/payments-report/payments-report.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__daily_daily_component__ = __webpack_require__("../../../../../src/app/portal/reports/daily/daily.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sales_sales_component__ = __webpack_require__("../../../../../src/app/portal/reports/sales/sales.component.ts");
/* unused harmony export REPORTS_ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return REPORTS_ROUTING; });







var REPORTS_ROUTES = [
    { path: '', redirectTo: 'sales', pathMatch: 'full' },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__reports_component__["a" /* ReportsComponent */],
        children: [
            {
                path: 'sales',
                children: [
                    { path: '', redirectTo: 'weekly', pathMatch: 'full' },
                    {
                        path: 'daily',
                        component: __WEBPACK_IMPORTED_MODULE_5__daily_daily_component__["a" /* DailyComponent */],
                    },
                    {
                        path: 'weekly',
                        component: __WEBPACK_IMPORTED_MODULE_3__weekly_weekly_component__["a" /* WeeklyComponent */],
                        resolve: { form_data: __WEBPACK_IMPORTED_MODULE_1_app_resolvers__["a" /* SalesSummaryFormDataResolver */] }
                    },
                    {
                        path: 'period',
                        component: __WEBPACK_IMPORTED_MODULE_6__sales_sales_component__["a" /* SalesComponent */],
                        resolve: { form_data: __WEBPACK_IMPORTED_MODULE_1_app_resolvers__["a" /* SalesSummaryFormDataResolver */] }
                    },
                ]
            },
            {
                path: 'payments',
                component: __WEBPACK_IMPORTED_MODULE_4__payments_report_payments_report_component__["a" /* PaymentsReportComponent */],
                resolve: { form_data: __WEBPACK_IMPORTED_MODULE_1_app_resolvers__["b" /* PaymentFormDataResolver */] }
            },
        ]
    }
];
var REPORTS_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(REPORTS_ROUTES);
//# sourceMappingURL=reports.routing.js.map

/***/ }),

/***/ "../../../../../src/app/portal/reports/sales/sales.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight padding-bottom-0\">\n\t<div class=\"ibox-content m-b-sm border-bottom\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"control-label\" for=\"start_date_input\">Start Date</label>\n\t\t\t\t\t<datetime [(ngModel)]=\"startDate\" id=\"start_date_input\" [timepicker]=\"false\" [datepicker]=\"datepickerOptions\"></datetime>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"control-label\" for=\"end_date_input\">End Date</label>\n\t\t\t\t\t<datetime [(ngModel)]=\"endDate\" id=\"end_date_input\" [timepicker]=\"false\" [datepicker]=\"datepickerOptions\"></datetime>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"control-label\" for=\"sales_team_input\">Sales Team</label>\n\t\t\t\t\t<ng-select allowClear=\"true\" id=\"sales_team_input\" [items]=\"salesTeams\" [multiple]=\"false\" (selected)=\"salesTeamChanged('changed', $event)\"\n\t\t\t\t\t\t(removed)=\"salesTeamChanged('removed', $event)\" placeholder=\"Select sales team\">\n\t\t\t\t\t</ng-select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-3\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"control-label\" for=\"generate-btn\" style=\"width: 100%;\">&ensp;</label>\n\t\t\t\t\t<button (click)=\"getReport()\" id=\"generate-btn\" type=\"button\" class=\"btn btn-info btn-sm\">\n\t\t\t\t\t\t<span [hidden]=\"state == 'fetchingReport'\">Generate Report</span>\n\t\t\t\t\t\t<span [hidden]=\"state != 'fetchingReport'\">Generating Report <i class=\"fa fa-spinner fa-spin\"></i></span>\n\t\t\t\t\t</button>&ensp;\n\t\t\t\t\t<span [hidden]=\"state != 'failedToFetchReport'\" class=\"text-danger\">Failed to generate. Try again ...</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!--Summary-->\n<div class=\"wrapper wrapper-content animated fadeInUp\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"ibox\">\n\t\t\t\t<div class=\"ibox-content\">\n\t\t\t\t\t<h2>Summary</h2>\n\n\t\t\t\t\t<div class=\"clients-list padded extra-pad-for-lg\">\n\t\t\t\t\t\t<table class=\"table table-striped table-hover\">\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<!--Purchase-->\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"client-avatar\"></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Purchased Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['purchased_plates'] | Currency:0:currencyFormat:false}} trays.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Purchase Cost</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['cost_purchased'] | Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<!--Damages-->\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"client-avatar\"></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Damaged Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['damaged_plates'] | Currency:0:currencyFormat:false}} trays.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Estimated Cost of Damaged Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['cost_damaged'] | Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<!--Sales-->\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"client-avatar\"></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Sold Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['sold_plates'] | Currency:0:currencyFormat:false}} trays.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Cost of Sold Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['cost_sales'] | Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<!--Unsold-->\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"client-avatar\"></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Unsold Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['unsold_plates'] | Currency:0:currencyFormat:false}} trays.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Estimated Cost of Unsold Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['cost_unsold'] | Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<!--Transfer Out-->\n\t\t\t\t\t\t\t\t<tr *ngIf=\"showSalesTeamSpecific\">\n\t\t\t\t\t\t\t\t\t<td class=\"client-avatar\"></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Outward Transfered Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['transfer_out_plates'] | Currency:0:currencyFormat:false}} trays.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Estimated Cost of Out Trans Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['cost_transfer_out'] | Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<!--Transfer In-->\n\t\t\t\t\t\t\t\t<tr *ngIf=\"showSalesTeamSpecific\">\n\t\t\t\t\t\t\t\t\t<td class=\"client-avatar\"></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Inward Transfered Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['transfer_in_plates'] | Currency:0:currencyFormat:false}} trays.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Estimated Cost of In Trans Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['cost_transfer_in'] | Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<br/>\n\n\t\t\t\t\t\t<table class=\"table table-striped text-center\">\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"display-label\">Sales</td>\n\t\t\t\t\t\t\t\t\t<td class=\"display-label\">Amount Collected</td>\n\t\t\t\t\t\t\t\t\t<td class=\"display-label\">Outstanding</td>\n\t\t\t\t\t\t\t\t\t<td [innerText]=\"summary['cost_profit'] >= 0 ? 'Profit': 'Loss'\" class=\"display-label\"></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>{{summary['cost_sales'] | Currency:2:currencyFormat:true}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{summary['cost_collected'] | Currency:2:currencyFormat:true}}</td>\n\t\t\t\t\t\t\t\t\t<td><span class=\"label label-warning font-13\">{{summary['cost_outstanding'] | Currency:2:currencyFormat:true}}</span></td>\n\t\t\t\t\t\t\t\t\t<td><span [ngClass]=\"{'label-primary': summary['cost_profit'] >= 0, 'label-danger':summary['cost_profit'] < 0}\" class=\"label font-13\">{{summary['cost_profit'] | Currency:2:currencyFormat:true}}</span></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/portal/reports/sales/sales.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_classes__ = __webpack_require__("../../../../../src/app/classes/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SalesComponent = (function () {
    function SalesComponent(route, rService) {
        var _this = this;
        this.route = route;
        this.rService = rService;
        this.ngUnSubcribe = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.salesTeams = [];
        this.queryParams = {};
        this.summary = new __WEBPACK_IMPORTED_MODULE_5_app_classes__["n" /* SalesReportSummary */]();
        this.currencyFormat = 'INR';
        this.showSalesTeamSpecific = false;
        this.datepickerOptions = {
            autoclose: true,
            todayHighlight: true,
            format: 'dd-mm-yyyy',
            icon: 'fa fa-calendar',
            todayBtn: 'linked'
        };
        // Route params
        this.route.data.takeUntil(this.ngUnSubcribe).subscribe(function (data) {
            if ('form_data' in data)
                _this.salesTeams = data['form_data']['sales_teams'];
            else
                _this.salesTeams = [];
        });
    }
    SalesComponent.prototype.ngOnInit = function () {
        this.startDate = new Date();
        this.endDate = new Date();
        this.getReport();
    };
    SalesComponent.prototype.ngOnDestroy = function () {
        this.ngUnSubcribe.next();
        this.ngUnSubcribe.complete();
    };
    SalesComponent.prototype.salesTeamChanged = function (action, event) {
        if (action == 'changed') {
            this.salesTeam = event;
            this.queryParams['sales_team'] = event['id'];
        }
        else if (action == 'removed') {
            this.salesTeam = undefined;
            if ('sales_team' in this.queryParams)
                delete this.queryParams['sales_team'];
        }
    };
    SalesComponent.prototype.getReport = function () {
        var _this = this;
        this.state = 'fetchingReport';
        this.queryParams['start'] = moment(this.startDate).format('DD-MM-YYYY');
        this.queryParams['end'] = moment(this.endDate).format('DD-MM-YYYY');
        if (this.reportDataRequest)
            this.reportDataRequest.unsubscribe();
        this.reportDataRequest = this.rService
            .getSalesReport(this.queryParams)
            .subscribe(function (Result) {
            _this.summary = new __WEBPACK_IMPORTED_MODULE_5_app_classes__["n" /* SalesReportSummary */](Result['summary']);
            if (_this.salesTeam)
                _this.showSalesTeamSpecific = true;
            else
                _this.showSalesTeamSpecific = false;
            _this.state = 'fetchedReport';
        }, function (Err) {
            _this.state = 'failedToFetchReport';
            _this.summary = new __WEBPACK_IMPORTED_MODULE_5_app_classes__["n" /* SalesReportSummary */]();
        });
    };
    SalesComponent.prototype.ngAfterViewInit = function () {
        var pie = document.getElementById('stocked');
        setTimeout(function () {
            c3.generate({
                bindto: '#stocked',
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 50, 20, 10, 40, 15, 25]
                    ],
                    colors: {
                        data1: '#1ab394',
                        data2: '#BABABA'
                    },
                    type: 'bar',
                    groups: [
                        ['data1', 'data2']
                    ]
                }
            });
        }, 3000);
    };
    return SalesComponent;
}());
SalesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-sales',
        template: __webpack_require__("../../../../../src/app/portal/reports/sales/sales.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services__["m" /* ReportsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services__["m" /* ReportsService */]) === "function" && _b || Object])
], SalesComponent);

var _a, _b;
//# sourceMappingURL=sales.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/reports/weekly/weekly.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight padding-bottom-0\">\n\t<div class=\"ibox-content m-b-sm border-bottom\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"control-label\" for=\"week_input\">Week</label>\n\n\t\t\t\t\t<div class=\"input-group\">\n\t\t\t\t\t\t<input class=\"form-control\" appWeekPicker (weekChanged)=\"weekChanged($event)\" type=\"text\" id=\"week_input\" placeholder=\"Select Week\">\n\t\t\t\t\t\t<div class=\"input-group-addon\">\n\t\t\t\t\t\t\t<span class=\"fa fa-calendar\" class=\"fa fa-calendar\"></span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"control-label\" for=\"sales_team_input\">Sales Team</label>\n\t\t\t\t\t<ng-select allowClear=\"true\" id=\"sales_team_input\" [items]=\"salesTeams\" [multiple]=\"false\" (selected)=\"salesTeamChanged('changed', $event)\"\n\t\t\t\t\t\t(removed)=\"salesTeamChanged('removed', $event)\" placeholder=\"Select sales team\">\n\t\t\t\t\t</ng-select>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t<label class=\"control-label\" for=\"generate-btn\" style=\"width: 100%;\">&ensp;</label>\n\t\t\t\t\t<button (click)=\"getReport()\" id=\"generate-btn\" type=\"button\" class=\"btn btn-info btn-sm\">\n\t\t\t\t\t\t<span [hidden]=\"state == 'fetchingReport'\">Generate Report</span>\n\t\t\t\t\t\t<span [hidden]=\"state != 'fetchingReport'\">Generating Report <i class=\"fa fa-spinner fa-spin\"></i></span>\n\t\t\t\t\t</button>&ensp;\n\t\t\t\t\t<span [hidden]=\"state != 'failedToFetchReport'\" class=\"text-danger\">Failed to generate. Try again ...</span>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n<!--Summary-->\n<div class=\"wrapper wrapper-content animated fadeInUp\">\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12\">\n\t\t\t<div class=\"ibox\">\n\t\t\t\t<div class=\"ibox-content\">\n\t\t\t\t\t<h2>Summary</h2>\n\n\t\t\t\t\t<div class=\"clients-list padded extra-pad-for-lg\">\n\t\t\t\t\t\t<table class=\"table table-striped table-hover\">\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<!--Purchase-->\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"client-avatar\"></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Purchased Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['purchased_plates'] | Currency:0:currencyFormat:false}} trays.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Purchase Cost</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['cost_purchased'] | Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<!--Damages-->\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"client-avatar\"></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Damaged Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['damaged_plates'] | Currency:0:currencyFormat:false}} trays.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Estimated Cost of Damaged Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['cost_damaged'] | Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<!--Sales-->\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"client-avatar\"></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Sold Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['sold_plates'] | Currency:0:currencyFormat:false}} trays.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Cost of Sold Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['cost_sales'] | Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<!--Unsold-->\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"client-avatar\"></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Unsold Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['unsold_plates'] | Currency:0:currencyFormat:false}} trays.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Estimated Cost of Unsold Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['cost_unsold'] | Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<!--Transfer Out-->\n\t\t\t\t\t\t\t\t<tr *ngIf=\"showSalesTeamSpecific\">\n\t\t\t\t\t\t\t\t\t<td class=\"client-avatar\"></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Outward Transfered Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['transfer_out_plates'] | Currency:0:currencyFormat:false}} trays.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Estimated Cost of Out Trans Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['cost_transfer_out'] | Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\n\t\t\t\t\t\t\t\t<!--Transfer In-->\n\t\t\t\t\t\t\t\t<tr *ngIf=\"showSalesTeamSpecific\">\n\t\t\t\t\t\t\t\t\t<td class=\"client-avatar\"></td>\n\t\t\t\t\t\t\t\t\t<td>\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Inward Transfered Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['transfer_in_plates'] | Currency:0:currencyFormat:false}} trays.</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-md-6\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-7 display-label\">Estimated Cost of In Trans Eggs</span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span class=\"col-xs-5 colon-before\">{{summary['cost_transfer_in'] | Currency:2:currencyFormat:true}}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t\t<br/>\n\n\t\t\t\t\t\t<table class=\"table table-striped text-center\">\n\t\t\t\t\t\t\t<tbody>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td class=\"display-label\">Sales</td>\n\t\t\t\t\t\t\t\t\t<td class=\"display-label\">Amount Collected</td>\n\t\t\t\t\t\t\t\t\t<td class=\"display-label\">Outstanding</td>\n\t\t\t\t\t\t\t\t\t<td [innerText]=\"summary['cost_profit'] >= 0 ? 'Profit': 'Loss'\" class=\"display-label\"></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t<td>{{summary['cost_sales'] | Currency:2:currencyFormat:true}}</td>\n\t\t\t\t\t\t\t\t\t<td>{{summary['cost_collected'] | Currency:2:currencyFormat:true}}</td>\n\t\t\t\t\t\t\t\t\t<td><span class=\"label label-warning font-13\">{{summary['cost_outstanding'] | Currency:2:currencyFormat:true}}</span></td>\n\t\t\t\t\t\t\t\t\t<td><span [ngClass]=\"{'label-primary': summary['cost_profit'] >= 0, 'label-danger':summary['cost_profit'] < 0}\" class=\"label font-13\">{{summary['cost_profit'] | Currency:2:currencyFormat:true}}</span></td>\n\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t</tbody>\n\t\t\t\t\t\t</table>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/portal/reports/weekly/weekly.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_classes__ = __webpack_require__("../../../../../src/app/classes/index.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WeeklyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WeeklyComponent = (function () {
    function WeeklyComponent(route, rService) {
        var _this = this;
        this.route = route;
        this.rService = rService;
        this.ngUnSubcribe = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Subject__["Subject"]();
        this.salesTeams = [];
        this.queryParams = {};
        this.summary = new __WEBPACK_IMPORTED_MODULE_5_app_classes__["n" /* SalesReportSummary */]();
        this.currencyFormat = 'INR';
        this.showSalesTeamSpecific = false;
        // Route params
        this.route.data.takeUntil(this.ngUnSubcribe).subscribe(function (data) {
            if ('form_data' in data)
                _this.salesTeams = data['form_data']['sales_teams'];
            else
                _this.salesTeams = [];
        });
    }
    WeeklyComponent.prototype.ngOnInit = function () {
        var today = new Date();
        this.queryParams['start'] = moment(today).days(0).format('DD-MM-YYYY');
        this.queryParams['end'] = moment(today).days(6).format('DD-MM-YYYY');
        this.getReport();
    };
    WeeklyComponent.prototype.ngOnDestroy = function () {
        this.ngUnSubcribe.next();
        this.ngUnSubcribe.complete();
    };
    WeeklyComponent.prototype.weekChanged = function (event) {
        this.week = event;
        this.queryParams['start'] = moment(event[0]).format('DD-MM-YYYY');
        this.queryParams['end'] = moment(event[1]).format('DD-MM-YYYY');
    };
    WeeklyComponent.prototype.salesTeamChanged = function (action, event) {
        if (action == 'changed') {
            this.salesTeam = event;
            this.queryParams['sales_team'] = event['id'];
        }
        else if (action == 'removed') {
            this.salesTeam = undefined;
            if ('sales_team' in this.queryParams)
                delete this.queryParams['sales_team'];
        }
    };
    WeeklyComponent.prototype.getReport = function () {
        var _this = this;
        this.state = 'fetchingReport';
        if (this.reportDataRequest)
            this.reportDataRequest.unsubscribe();
        this.reportDataRequest = this.rService
            .getSalesReport(this.queryParams)
            .subscribe(function (Result) {
            _this.summary = new __WEBPACK_IMPORTED_MODULE_5_app_classes__["n" /* SalesReportSummary */](Result['summary']);
            if (_this.salesTeam)
                _this.showSalesTeamSpecific = true;
            else
                _this.showSalesTeamSpecific = false;
            _this.state = 'fetchedReport';
        }, function (Err) {
            _this.state = 'failedToFetchReport';
            _this.summary = new __WEBPACK_IMPORTED_MODULE_5_app_classes__["n" /* SalesReportSummary */]();
        });
    };
    WeeklyComponent.prototype.ngAfterViewInit = function () {
        var pie = document.getElementById('stocked');
        setTimeout(function () {
            c3.generate({
                bindto: '#stocked',
                data: {
                    columns: [
                        ['data1', 30, 200, 100, 400, 150, 250],
                        ['data2', 50, 20, 10, 40, 15, 25]
                    ],
                    colors: {
                        data1: '#1ab394',
                        data2: '#BABABA'
                    },
                    type: 'bar',
                    groups: [
                        ['data1', 'data2']
                    ]
                }
            });
        }, 3000);
    };
    return WeeklyComponent;
}());
WeeklyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-weekly',
        template: __webpack_require__("../../../../../src/app/portal/reports/weekly/weekly.component.html"),
        styles: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_app_services__["m" /* ReportsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services__["m" /* ReportsService */]) === "function" && _b || Object])
], WeeklyComponent);

var _a, _b;
//# sourceMappingURL=weekly.component.js.map

/***/ })

});
//# sourceMappingURL=3.chunk.js.map