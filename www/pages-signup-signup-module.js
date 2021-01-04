(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-signup-signup-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header >\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-back-button defaultHref=\"/login\"></ion-back-button>\n        </ion-buttons>     \n        <ion-title>Sign Up</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"signup\">\n    \n    \n    <ion-list class=\"signup__form\">\n        \n        \n        <ion-item [ngClass]=\"{'invalidItem' : !user.email && this.user.error}\">\n            <ion-label position=\"floating\">Email *</ion-label>\n            <ion-input clearInput type=\"email\" [(ngModel)]=\"user.email\"></ion-input>\n        </ion-item>\n        \n        <ion-item [ngClass]=\"{'invalidItem' : !user.name && this.user.error}\">\n            <ion-label position=\"floating\">Name *</ion-label>\n            <ion-input clearInput type=\"text\" [(ngModel)]=\"user.name\"></ion-input>\n        </ion-item>        \n\n\n        \n        \n        \n        <ion-item>\n            <ion-label position=\"floating\">Password</ion-label>\n            <ion-input clearInput type=\"password\" [(ngModel)]=\"user.password\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label position=\"floating\">Confirm Password</ion-label>\n            <ion-input clearInput type=\"password\" [(ngModel)]=\"user.confirm_password\"></ion-input>\n        </ion-item>\n\n        \n        <ion-item no-lines  no-padding class=\"custom-checkbox\">\n            <ion-label>I agree to the Get Outdoors <a (click)=\"openTos($event)\">Terms and Conditions</a></ion-label>\n            <ion-checkbox name=\"agree\" [(ngModel)]=\"user.tos\" checked=\"true\" required></ion-checkbox>\n        </ion-item>     \n\n        \n        <p class=\"signup__form__error\" *ngIf=\"user.error\">{{user.error}}</p>\n\n    </ion-list>  \n    \n    \n</ion-content>\n\n\n<ion-footer class=\"signup-footer\">\n\n    <ion-button color='primary' expand=\"full\" class=\"signup-footer__button\" [disabled]=\"user.loading\" (click)=\"signup()\">\n        Get Started&nbsp;&nbsp;\n        <ion-icon name=\"arrow-forward\" *ngIf=\"!user.loading\"></ion-icon>\n        <ion-spinner *ngIf=\"user.loading\"></ion-spinner>\n    </ion-button>\n</ion-footer>\n");

/***/ }),

/***/ "./src/app/pages/signup/signup.module.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.module.ts ***!
  \***********************************************/
/*! exports provided: SignupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _signup_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./signup.page */ "./src/app/pages/signup/signup.page.ts");







var routes = [
    {
        path: '',
        component: _signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]
    }
];
var SignupPageModule = /** @class */ (function () {
    function SignupPageModule() {
    }
    SignupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_signup_page__WEBPACK_IMPORTED_MODULE_6__["SignupPage"]]
        })
    ], SignupPageModule);
    return SignupPageModule;
}());



/***/ }),

/***/ "./src/app/pages/signup/signup.page.scss":
/*!***********************************************!*\
  !*** ./src/app/pages/signup/signup.page.scss ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".invalidItem {\n  --full-highlight-height: calc(var(--highlight-height) * var(--show-full-highlight));\n  --inset-highlight-height: calc(var(--highlight-height) * var(--show-inset-highlight));\n  --border-color: var(--ion-item-border-color,var(--ion-border-color,red));\n}\n\n.signup .signup__form .signup__form__error {\n  color: red;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: Center;\n}\n\n.signup .signup__form .signup__form__login {\n  margin-top: 40px;\n  text-align: Center;\n}\n\n.signup .custom-checkbox ion-checkbox {\n  position: relative;\n}\n\n.signup .custom-checkbox ion-label {\n  white-space: normal;\n  padding-left: 15px;\n  padding-right: 15px;\n}\n\n.signup-footer {\n  background-color: white;\n}\n\n.signup-footer:before {\n  display: none;\n}\n\n.signup-footer .signup-footer__button ion-spinner {\n  font-size: 14px;\n  width: 14px;\n  height: 14px;\n  margin-left: 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQSxtRkFBQTtFQUNBLHFGQUFBO0VBQ0Esd0VBQUE7QUFDQTs7QUFRWTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUxoQjs7QUFTWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFQaEI7O0FBZUU7RUFDRSxrQkFBQTtBQWJKOztBQWdCRTtFQUNJLG1CQUFBO0VBQ0Ysa0JBQUE7RUFDQSxtQkFBQTtBQWRKOztBQW9CQTtFQUNJLHVCQUFBO0FBakJKOztBQW1CSTtFQUNJLGFBQUE7QUFqQlI7O0FBc0JZO0VBQ0ksZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFwQmhCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvc2lnbnVwL3NpZ251cC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW52YWxpZEl0ZW0ge1xyXG4tLWZ1bGwtaGlnaGxpZ2h0LWhlaWdodDogY2FsYyh2YXIoLS1oaWdobGlnaHQtaGVpZ2h0KSAqIHZhcigtLXNob3ctZnVsbC1oaWdobGlnaHQpKTtcclxuLS1pbnNldC1oaWdobGlnaHQtaGVpZ2h0OiBjYWxjKHZhcigtLWhpZ2hsaWdodC1oZWlnaHQpICogdmFyKC0tc2hvdy1pbnNldC1oaWdobGlnaHQpKTtcclxuLS1ib3JkZXItY29sb3I6IHZhcigtLWlvbi1pdGVtLWJvcmRlci1jb2xvcix2YXIoLS1pb24tYm9yZGVyLWNvbG9yLHJlZCkpO1xyXG59XHJcblxyXG4uc2lnbnVwe1xyXG5cclxuXHJcbiAgICAuc2lnbnVwX19mb3Jte1xyXG5cclxuXHJcbiAgICAgICAgICAgIC5zaWdudXBfX2Zvcm1fX2Vycm9ye1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHJlZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4OyAgIFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpDZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgICAgICAuc2lnbnVwX19mb3JtX19sb2dpbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6NDBweDsgIFxyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpDZW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuLmN1c3RvbS1jaGVja2JveCB7ICAgIFxyXG4gIGlvbi1jaGVja2JveCB7XHJcbiAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICB9XHJcbiAgXHJcbiAgaW9uLWxhYmVse1xyXG4gICAgICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gICAgcGFkZGluZy1yaWdodDogMTVweDtcclxuICB9XHJcbn0gICAgICAgIFxyXG4gICAgXHJcbn1cclxuXHJcbi5zaWdudXAtZm9vdGVye1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgIFxyXG4gICAgJjpiZWZvcmV7XHJcbiAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAgICAgLnNpZ251cC1mb290ZXJfX2J1dHRvbntcclxuXHJcbiAgICAgICAgICAgIGlvbi1zcGlubmVye1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4OyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgXHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/pages/signup/signup.page.ts":
/*!*********************************************!*\
  !*** ./src/app/pages/signup/signup.page.ts ***!
  \*********************************************/
/*! exports provided: SignupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPage", function() { return SignupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/in-app-browser/ngx */ "./node_modules/@ionic-native/in-app-browser/__ivy_ngcc__/ngx/index.js");




var SignupPage = /** @class */ (function () {
    function SignupPage(authService, iab) {
        this.authService = authService;
        this.iab = iab;
        this.user = { email: "", password: "", error: "", city: "", country: "New Zealand", latitude: -36.866667, longitude: 174.766667, loading: false, tos: true };
        this.cities = [];
        this.countries = ["New Zealand", "Australia"];
    }
    SignupPage.prototype.ngOnInit = function () {
    };
    SignupPage.prototype.signup = function () {
        var _this = this;
        this.user.loading = true;
        this.user.error = "";
        if (!this.user.email || !this.user.first_name || !this.user.last_name) {
            this.user.loading = false;
            this.user.error = "Required fields not filled in. ";
        }
        if (!this.user.tos) {
            this.user.loading = false;
            this.user.error = "Please accept the Terms and Conditions";
        }
        //alert("Registering... Press ok to continue");
        this.authService.register(this.user).then(function () {
            //alert("Registration successful");
            _this.user.loading = false;
            //this.authService.getUserData();
            _this.authService.retreiveUserData().then(function () {
                //alert("Retreived user data");
            }).catch(function () {
                //alert("Failed to retreive user data");
            });
        }).catch(function (e) {
            //alert("Registration failed. Press ok to see error. Screenshot this screen and send to me please.");
            //alert(JSON.stringify(e));
            _this.user.loading = false;
            if (e && e.error) {
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
    SignupPage.prototype.cityChanged = function () {
        var e_1, _a;
        try {
            for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.cities), _c = _b.next(); !_c.done; _c = _b.next()) {
                var city = _c.value;
                if (city.city === this.user.city) {
                    this.user.latitude = city.lat;
                    this.user.longitidue = city.lng;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    SignupPage.prototype.openTos = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.iab.create("https://my-outdoors.co.nz/terms-and-conditions", '_system');
    };
    SignupPage.ctorParameters = function () { return [
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_3__["InAppBrowser"] }
    ]; };
    SignupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/signup/signup.page.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.page.scss */ "./src/app/pages/signup/signup.page.scss")).default]
        })
    ], SignupPage);
    return SignupPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-signup-signup-module.js.map