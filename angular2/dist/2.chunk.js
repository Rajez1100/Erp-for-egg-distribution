webpackJsonp([2],{

/***/ "../../../../../src/app/portal/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper wrapper-content animated fadeInRight\">\n\n\t<div class=\"row\">\n\t\t<div class=\"col-md-12 text-center\">\n\n\t\t\t<div class=\"lock-word\">\n\t\t\t\t<span>Welcome To {{companyName[1]}}</span>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/portal/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_parameters__ = __webpack_require__("../../../../../src/app/parameters.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent() {
        this.companyName = __WEBPACK_IMPORTED_MODULE_1_app_parameters__["a" /* CompanyName */];
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/portal/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portal/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/nav-bar/nav-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-static-top border-bottom\" role=\"navigation\" style=\"margin-bottom: 0\">\n\t<div class=\"navbar-header\">\n\t\t<a class=\"navbar-minimalize minimalize-styl-2 btn btn-primary \" href=\"javascript:void(0)\"><i class=\"fa fa-bars\"></i> </a>\n\t\t<!--<form role=\"search\" class=\"navbar-form-custom\" action=\"search_results.html\">\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<input type=\"text\" placeholder=\"Search for something...\" class=\"form-control\" name=\"top-search\" id=\"top-search\">\n\t\t\t</div>\n\t\t</form>-->\n\t</div>\n\t<ul class=\"nav navbar-top-links navbar-right\">\n\t\t<li>\n\t\t\t<a id=\"fullscreen-toggler\" href=\"javascript:void(0);\" toggleFullscreen>\n\t\t\t\t<i class=\"fa fa-expand\"></i>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<span class=\"m-r-sm text-muted welcome-message\">{{user.first_name}} {{user.last_name}} &ensp;</span>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a href=\"javascript:void(0);\" (click)=\"logout()\">\n\t\t\t\t<i class=\"fa fa-sign-out\"></i> Log out\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n\n</nav>"

/***/ }),

/***/ "../../../../../src/app/portal/nav-bar/nav-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_classes__ = __webpack_require__("../../../../../src/app/classes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavBarComponent = (function () {
    function NavBarComponent(gs, authService) {
        var _this = this;
        this.gs = gs;
        this.authService = authService;
        this.ngUnSubscribe = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        this.user = new __WEBPACK_IMPORTED_MODULE_2_app_classes__["m" /* User */]();
        // User details subscription
        this.gs.user$.takeUntil(this.ngUnSubscribe).subscribe(function (user) {
            if (user)
                _this.user = user;
            else
                _this.user = new __WEBPACK_IMPORTED_MODULE_2_app_classes__["m" /* User */]();
        });
    }
    NavBarComponent.prototype.ngOnInit = function () {
    };
    NavBarComponent.prototype.logout = function () {
        this.authService.logout();
    };
    NavBarComponent.prototype.ngOnDestroy = function () {
        this.ngUnSubscribe.next();
        this.ngUnSubscribe.complete();
    };
    NavBarComponent.prototype.ngAfterViewInit = function () {
        console.log(document.getElementById('fullscreen-toggler'));
        setTimeout(function () {
            document.getElementById('fullscreen-toggler').click();
        }, 1000);
    };
    return NavBarComponent;
}());
NavBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-nav-bar',
        template: __webpack_require__("../../../../../src/app/portal/nav-bar/nav-bar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_app_services__["d" /* GlobalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services__["d" /* GlobalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_app_services__["a" /* AuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_app_services__["a" /* AuthService */]) === "function" && _b || Object])
], NavBarComponent);

var _a, _b;
//# sourceMappingURL=nav-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/portal.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/portal/portal.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"wrapper\">\n\t<app-side-bar inspinia-initialize></app-side-bar>\n\n\t<div id=\"page-wrapper\" class=\"gray-bg dashbard-1\">\n\t\t<div class=\"row\">\n\t\t\t<app-nav-bar></app-nav-bar>\n\t\t</div>\n\n\t\t<!--<div class=\"row wrapper border-bottom white-bg page-heading\">\n\t\t\t<div class=\"col-lg-10\">\n\t\t\t\t<h2></h2>\n\t\t\t\t<ol class=\"breadcrumb\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a href=\"index.html\">Home</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a>Tables</a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class=\"active\">\n\t\t\t\t\t\t<strong>Static Tables</strong>\n\t\t\t\t\t</li>\n\t\t\t\t</ol>\n\t\t\t</div>\n\t\t\t<div class=\"col-lg-2\">\n\n\t\t\t</div>\n\t\t</div>-->\n\n\t\t<div class=\"fixed-scroll\">\n\t\t\t<router-outlet></router-outlet>\n\t\t</div>\n\t</div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/portal/portal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PortalComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortalComponent = (function () {
    function PortalComponent() {
    }
    PortalComponent.prototype.ngOnInit = function () {
    };
    return PortalComponent;
}());
PortalComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-portal',
        template: __webpack_require__("../../../../../src/app/portal/portal.component.html"),
        styles: [__webpack_require__("../../../../../src/app/portal/portal.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PortalComponent);

//# sourceMappingURL=portal.component.js.map

/***/ }),

/***/ "../../../../../src/app/portal/portal.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__portal_component__ = __webpack_require__("../../../../../src/app/portal/portal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__portal_routing__ = __webpack_require__("../../../../../src/app/portal/portal.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/portal/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__ = __webpack_require__("../../../../../src/app/portal/nav-bar/nav-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__side_bar_side_bar_component__ = __webpack_require__("../../../../../src/app/portal/side-bar/side-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__side_bar_inspinia_initiator__ = __webpack_require__("../../../../../src/app/portal/side-bar/inspinia.initiator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__add_view_edit_interface_add_view_edit_interface_component__ = __webpack_require__("../../../../../src/app/portal/add-view-edit-interface/add-view-edit-interface.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortalModule", function() { return PortalModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var PortalModule = (function () {
    function PortalModule() {
    }
    return PortalModule;
}());
PortalModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__portal_routing__["a" /* PORTAL_ROUTING */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__portal_component__["a" /* PortalComponent */],
            __WEBPACK_IMPORTED_MODULE_4__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_5__nav_bar_nav_bar_component__["a" /* NavBarComponent */],
            __WEBPACK_IMPORTED_MODULE_6__side_bar_side_bar_component__["a" /* SideBarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__side_bar_inspinia_initiator__["a" /* InspiniaInitiator */],
            __WEBPACK_IMPORTED_MODULE_8__add_view_edit_interface_add_view_edit_interface_component__["a" /* AddViewEditInterfaceComponent */]
        ],
        providers: []
    })
], PortalModule);

//# sourceMappingURL=portal.module.js.map

/***/ }),

/***/ "../../../../../src/app/portal/portal.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__portal_component__ = __webpack_require__("../../../../../src/app/portal/portal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/portal/dashboard/dashboard.component.ts");
/* unused harmony export PORTAL_ROUTES */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PORTAL_ROUTING; });



var PORTAL_ROUTES = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__portal_component__["a" /* PortalComponent */],
        children: [
            {
                path: 'dashboard',
                component: __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */]
            },
            {
                path: 'egg-farms',
                loadChildren: './egg-farms/egg-farms.module#EggFarmsModule'
            },
            {
                path: 'sales-teams',
                loadChildren: './sales-teams/sales-teams.module#SalesTeamsModule'
            },
            {
                path: 'egg-collections',
                loadChildren: './egg-collections/egg-collections.module#EggCollectionsModule'
            },
            {
                path: 'demand-transfers',
                loadChildren: './demand-transfers/demand-transfers.module#DemandTransfersModule'
            },
            {
                path: 'payments',
                loadChildren: './payments/payments.module#PaymentsModule'
            },
            {
                path: 'sales-summary',
                loadChildren: './sales-summary/sales-summary.module#SalesSummaryModule'
            },
            {
                path: 'reports',
                loadChildren: './reports/reports.module#ReportsModule'
            }
        ]
    }
];
var PORTAL_ROUTING = __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forChild(PORTAL_ROUTES);
//# sourceMappingURL=portal.routing.js.map

/***/ }),

/***/ "../../../../../src/app/portal/side-bar/inspinia.initiator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InspiniaInitiator; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InspiniaInitiator = (function () {
    function InspiniaInitiator(el_ref) {
        this.el_ref = el_ref;
    }
    InspiniaInitiator.prototype.ngAfterViewInit = function () {
        var self = this;
        this.element = this.el_ref.nativeElement;
        /*
        *
        *   INSPINIA - Responsive Admin Theme
        *   version 2.4
        *
        */
        // Add body-small class if window less than 768px
        if (jQuery(self.element).width() < 769) {
            jQuery('body').addClass('body-small');
        }
        else {
            jQuery('body').removeClass('body-small');
        }
        // MetsiMenu
        jQuery('#side-menu').metisMenu();
        // Collapse ibox function
        jQuery('.collapse-link').click(function () {
            var ibox = jQuery(self.element).closest('div.ibox');
            var button = jQuery(self.element).find('i');
            var content = ibox.find('div.ibox-content');
            content.slideToggle(200);
            button.toggleClass('fa-chevron-up').toggleClass('fa-chevron-down');
            ibox.toggleClass('').toggleClass('border-bottom');
            setTimeout(function () {
                ibox.resize();
                ibox.find('[id^=map-]').resize();
            }, 50);
        });
        // Close ibox function
        jQuery('.close-link').click(function () {
            var content = jQuery(self.element).closest('div.ibox');
            content.remove();
        });
        // Fullscreen ibox function
        jQuery('.fullscreen-link').click(function () {
            var ibox = jQuery(self.element).closest('div.ibox');
            var button = jQuery(self.element).find('i');
            jQuery('body').toggleClass('fullscreen-ibox-mode');
            button.toggleClass('fa-expand').toggleClass('fa-compress');
            ibox.toggleClass('fullscreen');
            setTimeout(function () {
                jQuery(window).trigger('resize');
            }, 100);
        });
        // Close menu in canvas mode
        jQuery('.close-canvas-menu').click(function () {
            jQuery("body").toggleClass("mini-navbar");
            self.SmoothlyMenu();
        });
        // Run menu of canvas
        jQuery('body.canvas-menu .sidebar-collapse').slimScroll({
            height: '100%',
            railOpacity: 0.9
        });
        // Open close right sidebar
        jQuery('.right-sidebar-toggle').click(function () {
            jQuery('#right-sidebar').toggleClass('sidebar-open');
        });
        // Initialize slimscroll for right sidebar
        jQuery('.sidebar-container').slimScroll({
            height: '100%',
            railOpacity: 0.4,
            wheelStep: 10
        });
        // Open close small chat
        jQuery('.open-small-chat').click(function () {
            jQuery(self.element).children().toggleClass('fa-comments').toggleClass('fa-remove');
            jQuery('.small-chat-box').toggleClass('active');
        });
        // Initialize slimscroll for small chat
        jQuery('.small-chat-box .content').slimScroll({
            height: '234px',
            railOpacity: 0.4
        });
        // Small todo handler
        jQuery('.check-link').click(function () {
            var button = jQuery(self.element).find('i');
            var label = jQuery(self.element).next('span');
            button.toggleClass('fa-check-square').toggleClass('fa-square-o');
            label.toggleClass('todo-completed');
            return false;
        });
        // Append config box / Only for demo purpose
        // Uncomment on server mode to enable XHR calls
        //jQuery.get("skin-config.html", function (data) {
        //    if (!jQuery('body').hasClass('no-skin-config'))
        //        jQuery('body').append(data);
        //});
        // Minimalize menu
        jQuery('.navbar-minimalize').click(function () {
            jQuery("body").toggleClass("mini-navbar");
            self.SmoothlyMenu();
        });
        // Tooltips demo
        // jQuery('.tooltip-demo').tooltip({
        //     selector: "[data-toggle=tooltip]",
        //     container: "body"
        // });
        // Move modal to body
        // Fix Bootstrap backdrop issu with animation.css
        jQuery('.modal').appendTo("body");
        // Full height of sidebar
        function fix_height() {
            var heightWithoutNavbar = jQuery("body > #wrapper").height() - 61;
            jQuery(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");
            var navbarHeigh = jQuery('nav.navbar-default').height();
            var wrapperHeigh = jQuery('#page-wrapper').height();
            if (navbarHeigh > wrapperHeigh) {
                jQuery('#page-wrapper').css("min-height", navbarHeigh + "px");
            }
            if (navbarHeigh < wrapperHeigh) {
                jQuery('#page-wrapper').css("min-height", jQuery(window).height() + "px");
            }
            if (jQuery('body').hasClass('fixed-nav')) {
                if (navbarHeigh > wrapperHeigh) {
                    jQuery('#page-wrapper').css("min-height", navbarHeigh - 60 + "px");
                }
                else {
                    jQuery('#page-wrapper').css("min-height", jQuery(window).height() - 60 + "px");
                }
            }
        }
        fix_height();
        // Fixed Sidebar
        jQuery(window).bind("load", function () {
            if (jQuery("body").hasClass('fixed-sidebar')) {
                jQuery('.sidebar-collapse').slimScroll({
                    height: '100%',
                    railOpacity: 0.9
                });
            }
        });
        // Move right sidebar top after scroll
        jQuery(window).scroll(function () {
            if (jQuery(window).scrollTop() > 0 && !jQuery('body').hasClass('fixed-nav')) {
                jQuery('#right-sidebar').addClass('sidebar-top');
            }
            else {
                jQuery('#right-sidebar').removeClass('sidebar-top');
            }
        });
        jQuery(window).bind("load resize scroll", function () {
            if (!jQuery("body").hasClass('body-small')) {
                fix_height();
            }
        });
        // jQuery("[data-toggle=popover]")
        //     .popover();
        // Add slimscroll to element
        jQuery('.full-height-scroll').slimscroll({
            height: '100%'
        });
        // Minimalize menu when screen is less than 768px
        jQuery(window).bind("resize", function () {
            if (jQuery(self.element).width() < 769) {
                jQuery('body').addClass('body-small');
            }
            else {
                jQuery('body').removeClass('body-small');
            }
        });
        // Local Storage functions
        // Set proper body class and plugins based on user configuration
        if (this.localStorageSupport) {
            var collapse = localStorage.getItem("collapse_menu");
            var fixedsidebar = localStorage.getItem("fixedsidebar");
            var fixednavbar = localStorage.getItem("fixednavbar");
            var boxedlayout = localStorage.getItem("boxedlayout");
            var fixedfooter = localStorage.getItem("fixedfooter");
            var body = jQuery('body');
            if (fixedsidebar == 'on') {
                body.addClass('fixed-sidebar');
                jQuery('.sidebar-collapse').slimScroll({
                    height: '100%',
                    railOpacity: 0.9
                });
            }
            if (collapse == 'on') {
                if (body.hasClass('fixed-sidebar')) {
                    if (!body.hasClass('body-small')) {
                        body.addClass('mini-navbar');
                    }
                }
                else {
                    if (!body.hasClass('body-small')) {
                        body.addClass('mini-navbar');
                    }
                }
            }
            if (fixednavbar == 'on') {
                jQuery(".navbar-static-top").removeClass('navbar-static-top').addClass('navbar-fixed-top');
                body.addClass('fixed-nav');
            }
            if (boxedlayout == 'on') {
                body.addClass('boxed-layout');
            }
            if (fixedfooter == 'on') {
                jQuery(".footer").addClass('fixed');
            }
        }
    };
    // check if browser support HTML5 local storage
    InspiniaInitiator.prototype.localStorageSupport = function () {
        return (('localStorage' in window) && window['localStorage'] !== null);
    };
    // For demo purpose - animation css script
    InspiniaInitiator.prototype.animationHover = function (element, animation) {
        element = jQuery(element);
        element.hover(function () {
            element.addClass('animated ' + animation);
        }, function () {
            //wait for animation to finish before removing classes
            window.setTimeout(function () {
                element.removeClass('animated ' + animation);
            }, 2000);
        });
    };
    InspiniaInitiator.prototype.SmoothlyMenu = function () {
        jQuery('body').removeClass('body-small');
        if (!jQuery('body').hasClass('mini-navbar') || jQuery('body').hasClass('body-small')) {
            // Hide menu in order to smoothly turn on when maximize menu
            jQuery('#side-menu').hide();
            // For smoothly turn on menu
            setTimeout(function () {
                jQuery('#side-menu').fadeIn(400);
            }, 200);
        }
        else if (jQuery('body').hasClass('fixed-sidebar')) {
            jQuery('#side-menu').hide();
            setTimeout(function () {
                jQuery('#side-menu').fadeIn(400);
            }, 100);
        }
        else {
            // Remove all inline style from jquery fadeIn function to reset menu state
            jQuery('#side-menu').removeAttr('style');
        }
    };
    // Dragable panels
    InspiniaInitiator.prototype.WinMove = function () {
        var element = "[class*=col]";
        var handle = ".ibox-title";
        var connect = "[class*=col]";
        jQuery(element).sortable({
            handle: handle,
            connectWith: connect,
            tolerance: 'pointer',
            forcePlaceholderSize: true,
            opacity: 0.8
        })
            .disableSelection();
    };
    return InspiniaInitiator;
}());
InspiniaInitiator = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
        selector: '[inspinia-initialize]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object])
], InspiniaInitiator);

var _a;
//# sourceMappingURL=inspinia.initiator.js.map

/***/ }),

/***/ "../../../../../src/app/portal/side-bar/side-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar-default navbar-static-side\" role=\"navigation\">\n\t<div class=\"sidebar-collapse\">\n\t\t<ul class=\"nav metismenu\" id=\"side-menu\">\n\t\t\t<li class=\"nav-header\">\n\t\t\t\t<div class=\"dropdown profile-element\">\n\t\t\t\t\t<span>\n                       <img alt=\"image\" class=\"img-circle\" src=\"assets/img/company_logo.png\" />\n\n\t\t\t\t\t   <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"javascript:void(0);\">\n                         <span class=\"clear\"> \n\t\t\t\t\t\t\t<span class=\"block m-t-xs\"> <strong class=\"font-bold\">{{companyName}}</strong>\n                            </span>\n\t\t\t\t\t</span>\n\t\t\t\t\t</a>\n\n\t\t\t\t\t</span>\n\t\t\t\t</div>\n\n\t\t\t\t<div class=\"logo-element\">\n\t\t\t\t\t{{companyShortName}}\n\t\t\t\t</div>\n\t\t\t</li>\n\t\t\t<li class=\"active\">\n\t\t\t\t<a [routerLink]=\"['/app', 'dashboard']\"><i class=\"fa fa-th-large\"></i> <span class=\"nav-label\">Dashboard</span></a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a [routerLink]=\"['/app', 'egg-farms']\"><i class=\"fa fa-pagelines\"></i> <span class=\"nav-label\">Farms</span></a>\n\t\t\t</li>\n\t\t\t<li>\n\t\t\t\t<a [routerLink]=\"['/app', 'sales-teams']\"><i class=\"fa fa-group\"></i> <span class=\"nav-label\">Sales Teams</span></a>\n\t\t\t</li>\n\n\t\t\t<!--Purchase/Sales-->\n\t\t\t<li>\n\t\t\t\t<a><i class=\"fa fa-truck\"></i> <span class=\"nav-label\">Sales</span> <span class=\"fa arrow\"></span></a>\n\t\t\t\t<ul class=\"nav nav-second-level collapse\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a [routerLink]=\"['/app', 'egg-collections']\"><span class=\"nav-label\">Purchase</span></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a [routerLink]=\"['/app', 'demand-transfers']\"><span class=\"nav-label\">Demand Transfers</span></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a [routerLink]=\"['/app', 'payments']\"> <span class=\"nav-label\">Payments</span></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a [routerLink]=\"['/app', 'sales-summary']\"><span class=\"nav-label\">Sales</span></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t\t<!--Reports-->\n\t\t\t<li>\n\t\t\t\t<a><i class=\"fa fa-pie-chart\"></i> <span class=\"nav-label\">Reports</span> <span class=\"fa arrow\"></span></a>\n\t\t\t\t<ul class=\"nav nav-second-level collapse\">\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a [routerLink]=\"['/app', 'reports', 'sales', 'period']\"> <span class=\"nav-label\">Sales Report</span></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a [routerLink]=\"['/app', 'reports', 'sales', 'weekly']\"> <span class=\"nav-label\">Weekly Sales Report</span></a>\n\t\t\t\t\t</li>\n\t\t\t\t\t<li>\n\t\t\t\t\t\t<a [routerLink]=\"['/app', 'reports', 'payments']\"><span class=\"nav-label\">Payments Report</span></a>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</li>\n\t\t</ul>\n\t</div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/portal/side-bar/side-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services__ = __webpack_require__("../../../../../src/app/services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_classes__ = __webpack_require__("../../../../../src/app/classes/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_parameters__ = __webpack_require__("../../../../../src/app/parameters.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__ = __webpack_require__("../../../../rxjs/add/operator/takeUntil.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_takeUntil__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SideBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SideBarComponent = (function () {
    function SideBarComponent(gs, el_ref, _location, router) {
        var _this = this;
        this.gs = gs;
        this.el_ref = el_ref;
        this._location = _location;
        this.router = router;
        this.ngUnSubscribe = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        this.user = new __WEBPACK_IMPORTED_MODULE_4_app_classes__["m" /* User */]();
        this.companyName = __WEBPACK_IMPORTED_MODULE_5_app_parameters__["a" /* CompanyName */][1];
        this.companyShortName = __WEBPACK_IMPORTED_MODULE_5_app_parameters__["a" /* CompanyName */][0];
        // User details subscription
        this.gs.user$.takeUntil(this.ngUnSubscribe).subscribe(function (user) {
            if (user)
                _this.user = user;
            else
                _this.user = new __WEBPACK_IMPORTED_MODULE_4_app_classes__["m" /* User */]();
        });
    }
    SideBarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_2__angular_router__["d" /* NavigationEnd */]; })
            .takeUntil(this.ngUnSubscribe)
            .subscribe(function (event) {
            _this.changeActiveNavigationItem(_this._location);
        });
    };
    SideBarComponent.prototype.ngAfterViewInit = function () {
        this.$el = jQuery(this.el_ref.nativeElement);
        this.changeActiveNavigationItem(this._location);
    };
    SideBarComponent.prototype.changeActiveNavigationItem = function (location) {
        var path = location.path().split('?')[0];
        var pathAsArray = path.split('/');
        var count = pathAsArray.length - 1;
        for (var index = count; index > 1; index--) {
            var pathToCheck = pathAsArray.join('/');
            var $newActiveLink = this.$el.find('a[href="' + pathToCheck + '"]');
            if ($newActiveLink.length == 1 || pathToCheck.indexOf('dashboard') != -1) {
                this.$el.find('#side-menu .active').removeClass('active');
                // collapse .collapse only if new and old active links belong to different .collapse
                if (!$newActiveLink.is('.active > .collapse > li > a')) {
                    this.$el.find('.active .active').closest('.collapse').collapse('hide');
                }
                $newActiveLink.closest('li').addClass('active')
                    .parents('li').addClass('active');
                // uncollapse parent
                $newActiveLink.closest('.collapse').addClass('in').css('height', '')
                    .siblings('a[data-toggle=collapse]').removeClass('collapsed');
                break;
            }
            pathAsArray.pop();
        }
    };
    SideBarComponent.prototype.ngOnDestroy = function () {
        this.ngUnSubscribe.next();
        this.ngUnSubscribe.complete();
    };
    return SideBarComponent;
}());
SideBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-side-bar',
        template: __webpack_require__("../../../../../src/app/portal/side-bar/side-bar.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services__["d" /* GlobalsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services__["d" /* GlobalsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _d || Object])
], SideBarComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=side-bar.component.js.map

/***/ })

});
//# sourceMappingURL=2.chunk.js.map