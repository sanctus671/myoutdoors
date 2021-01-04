(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-forgot-password-forgot-password-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/login\"></ion-back-button>\n        </ion-buttons>     \n        <ion-title>Reset Password</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"signup\">\n    \n    \n    <ion-list class=\"signup__form\">\n        \n        \n        <ion-item>\n            <ion-label position=\"floating\">Email *</ion-label>\n            <ion-input clearInput type=\"email\" [(ngModel)]=\"user.email\"></ion-input>\n        </ion-item>\n\n        \n        <p class=\"signup__form__error\" *ngIf=\"user.error\">{{user.error}}</p>\n\n    </ion-list>  \n    \n    \n</ion-content>\n\n\n<ion-footer class=\"signup-footer\">\n\n    <ion-button color='primary' expand=\"full\" class=\"signup-footer__button\" [disabled]=\"user.loading\" (click)=\"resetPassword()\">\n        Reset Password\n        <ion-spinner *ngIf=\"user.loading\"></ion-spinner>\n    </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.module.ts ***!
  \*****************************************************************/
/*! exports provided: ForgotPasswordPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPageModule", function() { return ForgotPasswordPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forgot-password.page */ "./src/app/pages/forgot-password/forgot-password.page.ts");







var routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]
    }
];
var ForgotPasswordPageModule = /** @class */ (function () {
    function ForgotPasswordPageModule() {
    }
    ForgotPasswordPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_6__["ForgotPasswordPage"]]
        })
    ], ForgotPasswordPageModule);
    return ForgotPasswordPageModule;
}());



/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.page.scss":
/*!*****************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".signup .signup__form .signup__form__error {\n  color: red;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: Center;\n}\n.signup .signup__form .signup__form__login {\n  margin-top: 40px;\n  text-align: Center;\n}\n.signup-footer {\n  background-color: white;\n}\n.signup-footer:before {\n  display: none;\n}\n.signup-footer .signup-footer__button ion-spinner {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTVk7RUFDSSxVQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFMaEI7QUFTWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFQaEI7QUFlQTtFQUNJLHVCQUFBO0FBWko7QUFjSTtFQUNJLGFBQUE7QUFaUjtBQWlCWTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBZmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lnbnVwe1xyXG5cclxuXHJcbiAgICAuc2lnbnVwX19mb3Jte1xyXG5cclxuXHJcbiAgICAgICAgICAgIC5zaWdudXBfX2Zvcm1fX2Vycm9ye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4OyAgIFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpDZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAuc2lnbnVwX19mb3JtX19sb2dpbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NDBweDsgIFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpDZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIFxyXG59XHJcblxyXG4uc2lnbnVwLWZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6d2hpdGU7XHJcbiAgICBcclxuICAgICY6YmVmb3Jle1xyXG4gICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgIC5zaWdudXAtZm9vdGVyX19idXR0b257XHJcblxyXG4gICAgICAgICAgICBpb24tc3Bpbm5lcntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG59Il19 */");

/***/ }),

/***/ "./src/app/pages/forgot-password/forgot-password.page.ts":
/*!***************************************************************!*\
  !*** ./src/app/pages/forgot-password/forgot-password.page.ts ***!
  \***************************************************************/
/*! exports provided: ForgotPasswordPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordPage", function() { return ForgotPasswordPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");




var ForgotPasswordPage = /** @class */ (function () {
    function ForgotPasswordPage(authService, toastController) {
        this.authService = authService;
        this.toastController = toastController;
        this.user = { email: "", loading: false };
    }
    ForgotPasswordPage.prototype.ngOnInit = function () {
    };
    ForgotPasswordPage.prototype.resetPassword = function () {
        var _this = this;
        this.user.loading = true;
        this.user.error = "";
        //alert("Registering... Press ok to continue");
        this.authService.resetPassword(this.user).then(function () {
            //alert("Registration successful");
            _this.user.loading = false;
            _this.user.email = "";
            _this.toastController.create({
                message: 'Link sent to reset your password!',
                duration: 2000
            }).then(function (toast) {
                toast.present();
            });
        }).catch(function (e) {
            //alert("Registration failed. Press ok to see error. Screenshot this screen and send to me please.");
            //alert(JSON.stringify(e));
            _this.user.loading = false;
            if (e && e.error) {
                if (e.error.error.errors) {
                    for (var index in e.error.error.errors) {
                        var error = e.error.error.errors[index];
                        _this.user.error = _this.user.error + error + " ";
                    }
                }
                else {
                    _this.user.error = e.error.error.message;
                }
            }
            else {
                _this.user.error = e.message;
            }
        });
    };
    ForgotPasswordPage.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ToastController"] }
    ]; };
    ForgotPasswordPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-forgot-password',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot-password.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/forgot-password/forgot-password.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot-password.page.scss */ "./src/app/pages/forgot-password/forgot-password.page.scss")).default]
        })
    ], ForgotPasswordPage);
    return ForgotPasswordPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-forgot-password-forgot-password-module.js.map