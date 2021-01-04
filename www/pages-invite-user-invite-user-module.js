(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-invite-user-invite-user-module"],{

/***/ "./src/app/pages/invite-user/invite-user-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/invite-user/invite-user-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: InviteUserPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteUserPageRoutingModule", function() { return InviteUserPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _invite_user_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./invite-user.page */ "./src/app/pages/invite-user/invite-user.page.ts");




var routes = [
    {
        path: '',
        component: _invite_user_page__WEBPACK_IMPORTED_MODULE_3__["InviteUserPage"]
    }
];
var InviteUserPageRoutingModule = /** @class */ (function () {
    function InviteUserPageRoutingModule() {
    }
    InviteUserPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], InviteUserPageRoutingModule);
    return InviteUserPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/invite-user/invite-user.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/invite-user/invite-user.module.ts ***!
  \*********************************************************/
/*! exports provided: InviteUserPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteUserPageModule", function() { return InviteUserPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _invite_user_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./invite-user-routing.module */ "./src/app/pages/invite-user/invite-user-routing.module.ts");






var InviteUserPageModule = /** @class */ (function () {
    function InviteUserPageModule() {
    }
    InviteUserPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _invite_user_routing_module__WEBPACK_IMPORTED_MODULE_5__["InviteUserPageRoutingModule"]
            ],
            declarations: []
        })
    ], InviteUserPageModule);
    return InviteUserPageModule;
}());



/***/ })

}]);
//# sourceMappingURL=pages-invite-user-invite-user-module.js.map