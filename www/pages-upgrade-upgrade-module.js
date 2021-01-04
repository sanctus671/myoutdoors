(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-upgrade-upgrade-module"],{

/***/ "./src/app/pages/upgrade/upgrade-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/upgrade/upgrade-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UpgradePageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradePageRoutingModule", function() { return UpgradePageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _upgrade_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upgrade.page */ "./src/app/pages/upgrade/upgrade.page.ts");




var routes = [
    {
        path: '',
        component: _upgrade_page__WEBPACK_IMPORTED_MODULE_3__["UpgradePage"]
    }
];
var UpgradePageRoutingModule = /** @class */ (function () {
    function UpgradePageRoutingModule() {
    }
    UpgradePageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], UpgradePageRoutingModule);
    return UpgradePageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/upgrade/upgrade.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/upgrade/upgrade.module.ts ***!
  \*************************************************/
/*! exports provided: UpgradePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradePageModule", function() { return UpgradePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _upgrade_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./upgrade-routing.module */ "./src/app/pages/upgrade/upgrade-routing.module.ts");






var UpgradePageModule = /** @class */ (function () {
    function UpgradePageModule() {
    }
    UpgradePageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _upgrade_routing_module__WEBPACK_IMPORTED_MODULE_5__["UpgradePageRoutingModule"]
            ],
            declarations: []
        })
    ], UpgradePageModule);
    return UpgradePageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-upgrade-upgrade-module.js.map