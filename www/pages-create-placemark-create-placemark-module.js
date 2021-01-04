(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-placemark-create-placemark-module"],{

/***/ "./src/app/pages/create-placemark/create-placemark-routing.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pages/create-placemark/create-placemark-routing.module.ts ***!
  \***************************************************************************/
/*! exports provided: CreatePlacemarkPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlacemarkPageRoutingModule", function() { return CreatePlacemarkPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_placemark_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-placemark.page */ "./src/app/pages/create-placemark/create-placemark.page.ts");




var routes = [
    {
        path: '',
        component: _create_placemark_page__WEBPACK_IMPORTED_MODULE_3__["CreatePlacemarkPage"]
    }
];
var CreatePlacemarkPageRoutingModule = /** @class */ (function () {
    function CreatePlacemarkPageRoutingModule() {
    }
    CreatePlacemarkPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CreatePlacemarkPageRoutingModule);
    return CreatePlacemarkPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/create-placemark/create-placemark.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/create-placemark/create-placemark.module.ts ***!
  \*******************************************************************/
/*! exports provided: CreatePlacemarkPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreatePlacemarkPageModule", function() { return CreatePlacemarkPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_placemark_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-placemark-routing.module */ "./src/app/pages/create-placemark/create-placemark-routing.module.ts");






var CreatePlacemarkPageModule = /** @class */ (function () {
    function CreatePlacemarkPageModule() {
    }
    CreatePlacemarkPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _create_placemark_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreatePlacemarkPageRoutingModule"]
            ],
            declarations: []
        })
    ], CreatePlacemarkPageModule);
    return CreatePlacemarkPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-create-placemark-create-placemark-module.js.map