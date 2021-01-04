(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content class=\"login\">\n    \n    <div>\n    \n        <div class=\"login__header\">\n\n            <img class=\"login__header__logo\" src=\"assets/logo-light.png\" />\n\n        </div>\n\n\n\n\n        <form (ngSubmit)=\"login()\">\n            <ion-list class=\"login__form\">\n                <ion-item>\n                    <ion-label position=\"floating\">Email</ion-label>\n                    <ion-input type=\"email\" [(ngModel)]=\"user.email\" name=\"email\"></ion-input>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label position=\"floating\">Password</ion-label>\n                    <ion-input type=\"password\" [(ngModel)]=\"user.password\" name=\"password\"></ion-input>\n                </ion-item>\n\n\n                <ion-button color=\"primary\" class=\"login__form__login-button\" type=\"submit\" [disabled]=\"user.loading\">\n                    Login\n                    <ion-spinner *ngIf=\"user.loading\"></ion-spinner>\n                </ion-button>\n\n                <p class=\"login__form__error\" *ngIf=\"user.error\">{{user.error}}</p>\n\n\n                <p class=\"login__form__forgot-password\"><a [routerLink]=\"['/forgot-password']\" routerDirection=\"forward\">Forgot Password?</a></p>\n\n                <p class=\"login__form__sign-up\">Don't have an account? <a [routerLink]=\"['/signup']\" routerDirection=\"forward\">Sign up</a></p>\n\n\n\n            </ion-list>\n        </form>\n        \n    </div>\n    \n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/pages/login/login.module.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.page */ "./src/app/pages/login/login.page.ts");







var routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
    }
];
var LoginPageModule = /** @class */ (function () {
    function LoginPageModule() {
    }
    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());



/***/ }),

/***/ "./src/app/pages/login/login.page.scss":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login > div, .login #background-content {\n  color: White;\n  text-align: center;\n  background-image: url('bg.jpg');\n  background-size: cover;\n  background-position: center center;\n  background-attachment: fixed;\n  min-height: 100%;\n}\n.login .login__header {\n  padding-top: 80px;\n  padding-bottom: 80px;\n}\n.login .login__header .login__header__logo {\n  max-width: 200px;\n}\n.login ion-list.login__form {\n  background: transparent;\n  max-width: 280px;\n  margin: 0 auto;\n}\n.login ion-list.login__form ion-item {\n  --ion-background-color:transparent;\n  --border-color: rgba(255,255,255,0.13);\n  color: white;\n}\n.login .login__form__login-button {\n  margin-top: 30px;\n}\n.login .login__form__login-button ion-spinner {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  margin-left: 5px;\n}\n.login .login__form__error {\n  color: red;\n  font-size: 12px;\n  line-height: 16px;\n}\n.login .login__form__forgot-password {\n  font-size: 13px;\n  margin: 0px;\n  margin-top: 15px;\n}\n.login .login__form__forgot-password a {\n  color: white;\n  text-decoration: none;\n}\n.login .login__form__sign-up {\n  margin-top: 80px;\n}\n.login .login__form__sign-up a {\n  text-decoration: none;\n  font-weight: 600;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtFQUNBLGtDQUFBO0VBRUEsNEJBQUE7RUFDQSxnQkFBQTtBQUZSO0FBT0k7RUFDSSxpQkFBQTtFQUNBLG9CQUFBO0FBTFI7QUFNUTtFQUNJLGdCQUFBO0FBSlo7QUFVSTtFQUNJLHVCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBUlI7QUFVUTtFQUNJLGtDQUFBO0VBQ0Esc0NBQUE7RUFDQSxZQUFBO0FBUlo7QUFhSTtFQUNJLGdCQUFBO0FBWFI7QUFhUTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0FBWFo7QUFlSTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFiUjtBQWdCSTtFQUNJLGVBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFkUjtBQWVRO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0FBYlo7QUFrQkk7RUFDSSxnQkFBQTtBQWhCUjtBQWlCUTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUFmWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbntcclxuICAgIFxyXG4gICAgJiA+IGRpdiwgI2JhY2tncm91bmQtY29udGVudHtcclxuICAgICAgICBjb2xvcjpXaGl0ZTtcclxuICAgICAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vYXNzZXRzL2JnLmpwZyk7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICBcclxuICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9naW5fX2hlYWRlcntcclxuICAgICAgICBwYWRkaW5nLXRvcDo4MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOjgwcHg7XHJcbiAgICAgICAgLmxvZ2luX19oZWFkZXJfX2xvZ297XHJcbiAgICAgICAgICAgIG1heC13aWR0aDoyMDBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbiAgICBpb24tbGlzdC5sb2dpbl9fZm9ybXtcclxuICAgICAgICBiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O1xyXG4gICAgICAgIG1heC13aWR0aDoyODBweDtcclxuICAgICAgICBtYXJnaW46MCBhdXRvO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1pdGVte1xyXG4gICAgICAgICAgICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAtLWJvcmRlci1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjEzKTtcclxuICAgICAgICAgICAgY29sb3I6d2hpdGU7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9naW5fX2Zvcm1fX2xvZ2luLWJ1dHRvbntcclxuICAgICAgICBtYXJnaW4tdG9wOjMwcHg7XHJcblxyXG4gICAgICAgIGlvbi1zcGlubmVye1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAubG9naW5fX2Zvcm1fX2Vycm9ye1xyXG4gICAgICAgIGNvbG9yOiByZWQ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4OyAgICAgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubG9naW5fX2Zvcm1fX2ZvcmdvdC1wYXNzd29yZHtcclxuICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgICAgICBhe1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAubG9naW5fX2Zvcm1fX3NpZ24tdXB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDo4MHB4O1xyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDo2MDA7XHJcbiAgICAgICAgfVxyXG4gICAgfSAgICBcclxuICAgIFxyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/login/login.page.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");



var LoginPage = /** @class */ (function () {
    function LoginPage(authService) {
        this.authService = authService;
        this.user = { email: "", password: "", error: "", loading: false };
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        this.user.loading = true;
        this.user.error = "";
        this.user.email = this.user.email.trim();
        this.authService.login(this.user).then(function (token) {
            _this.user.loading = false;
            _this.authService.retreiveUserData().then(function () { });
        }).catch(function (e) {
            _this.user.loading = false;
            if (e && (e.status === 401 || e.status === 403)) {
                _this.user.error = "Incorrect email or password";
            }
            else if (e && e.status === 422) {
                for (var index in e.error.error.errors) {
                    var error = e.error.error.errors[index];
                    _this.user.error = _this.user.error + error + " ";
                }
            }
            else {
                _this.user.error = e.message;
            }
        });
    };
    LoginPage.prototype.signup = function () {
        //this.navCtrl.push(SignupPage);
    };
    LoginPage.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.page.scss */ "./src/app/pages/login/login.page.scss")).default]
        })
    ], LoginPage);
    return LoginPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-login-login-module.js.map