(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-create-group-create-group-module"],{

/***/ "./src/app/pages/create-group/create-group-routing.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/create-group/create-group-routing.module.ts ***!
  \*******************************************************************/
/*! exports provided: CreateGroupPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupPageRoutingModule", function() { return CreateGroupPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _create_group_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-group.page */ "./src/app/pages/create-group/create-group.page.ts");




var routes = [
    {
        path: '',
        component: _create_group_page__WEBPACK_IMPORTED_MODULE_3__["CreateGroupPage"]
    }
];
var CreateGroupPageRoutingModule = /** @class */ (function () {
    function CreateGroupPageRoutingModule() {
    }
    CreateGroupPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], CreateGroupPageRoutingModule);
    return CreateGroupPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/create-group/create-group.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/pages/create-group/create-group.module.ts ***!
  \***********************************************************/
/*! exports provided: CreateGroupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateGroupPageModule", function() { return CreateGroupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _create_group_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-group-routing.module */ "./src/app/pages/create-group/create-group-routing.module.ts");






var CreateGroupPageModule = /** @class */ (function () {
    function CreateGroupPageModule() {
    }
    CreateGroupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _create_group_routing_module__WEBPACK_IMPORTED_MODULE_5__["CreateGroupPageRoutingModule"]
            ],
            declarations: []
        })
    ], CreateGroupPageModule);
    return CreateGroupPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-create-group-create-group-module.js.map