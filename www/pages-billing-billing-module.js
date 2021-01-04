(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-billing-billing-module"],{

/***/ "./src/app/pages/billing/billing-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/billing/billing-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: BillingPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingPageRoutingModule", function() { return BillingPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _billing_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./billing.page */ "./src/app/pages/billing/billing.page.ts");




var routes = [
    {
        path: '',
        component: _billing_page__WEBPACK_IMPORTED_MODULE_3__["BillingPage"]
    }
];
var BillingPageRoutingModule = /** @class */ (function () {
    function BillingPageRoutingModule() {
    }
    BillingPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], BillingPageRoutingModule);
    return BillingPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/billing/billing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/billing/billing.module.ts ***!
  \*************************************************/
/*! exports provided: BillingPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingPageModule", function() { return BillingPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _billing_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./billing-routing.module */ "./src/app/pages/billing/billing-routing.module.ts");






var BillingPageModule = /** @class */ (function () {
    function BillingPageModule() {
    }
    BillingPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _billing_routing_module__WEBPACK_IMPORTED_MODULE_5__["BillingPageRoutingModule"]
            ],
            declarations: []
        })
    ], BillingPageModule);
    return BillingPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-billing-billing-module.js.map