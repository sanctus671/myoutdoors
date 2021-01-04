(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-map-map-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.page.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.page.html ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" \n\n\n<ion-content class=\"map\" main >\n\n    <div class=\"map__container map__container--windy\" id=\"windy\" [ngStyle]=\"{'opacity':windyOpacity ? windyOpacity : 0}\" [ngClass]=\"{'map__container--windy-visible' : windyOpacity > 0}\"></div>\n    <div class=\"map__container\" id=\"map-container\" #mapContainerRef></div>   \n    \n      \n    \n    \n    <div class=\"map__actions\">\n        <ion-button shape=\"round\" fill=\"clear\" class=\"map__actions__action\" (click)=\"openProfile()\">\n            <ion-icon slot=\"icon-only\" name=\"person\"></ion-icon>\n        </ion-button>         \n        <ion-button shape=\"round\" fill=\"clear\" class=\"map__actions__action\" (click)=\"openLogs()\">\n            <ion-icon slot=\"icon-only\" name=\"book\"></ion-icon>\n        </ion-button>   \n        <ion-button shape=\"round\" fill=\"clear\" class=\"map__actions__action\" (click)=\"openSearch()\">\n            <ion-icon slot=\"icon-only\" name=\"search\"></ion-icon>\n        </ion-button>   \n        <ion-button shape=\"round\" fill=\"clear\" class=\"map__actions__action\" (click)=\"openLayers()\">\n            <ion-icon slot=\"icon-only\" name=\"layers\"></ion-icon>\n        </ion-button>        \n    </div>\n    \n\n    \n    <div class=\"map__map-layers-overlay\" *ngIf=\"showLayer || mapLayersOpened\" (click)=\"mapLayersOpened = false; showLayer = false\"></div>    \n    \n    <div class=\"map__layers\" [ngClass]=\"{'map__layers--opened' : mapLayersOpened}\">\n        <ion-header>\n             \n            \n            \n            <ion-toolbar color=\"primary\">            \n                <ion-buttons slot=\"start\">\n                    <ion-button (click)=\"mapLayersOpened = !mapLayersOpened\">\n                        <ion-icon name=\"close\"></ion-icon>\n                    </ion-button>          \n                </ion-buttons> \n                <ion-title>Layers</ion-title>\n            </ion-toolbar>\n        </ion-header>\n\n        <ion-content>\n\n            <ion-segment [(ngModel)]=\"activeGroupTab\">\n                <ion-segment-button value=\"myoutdoors\">\n                    <ion-label>My Outdoors</ion-label>\n                </ion-segment-button>\n                <ion-segment-button *ngIf=\"currentGroup && currentGroup.id\" value=\"group\">\n                    <ion-label>{{currentGroup.name}}</ion-label>\n                </ion-segment-button>\n                \n                <ion-segment-button *ngIf=\"!currentGroup.id\" value=\"private\">\n                    <ion-label>My Map</ion-label>\n                </ion-segment-button>                \n                \n     \n            </ion-segment>        \n\n            <ion-list *ngIf=\"activeGroupTab === 'myoutdoors'\">\n                    <ion-item *ngFor=\"let layer of defaultLayers\" (click)=\"viewLayer(layer)\">\n                        <ion-label>\n                            {{layer.name}}\n                        </ion-label>\n                        \n                        <ion-button slot=\"end\" fill=\"clear\" color=\"dark\" (click)=\"toggleLayerVisibility(layer, $event)\">\n                           <ion-icon [name]=\"layer.visible ? 'eye' : 'eye-off'\" slot=\"icon-only\"></ion-icon>  \n                        </ion-button>   \n                    </ion-item>              \n                \n                \n            </ion-list>\n            \n            \n            <ion-list *ngIf=\"activeGroupTab === 'group'\">\n                    <ion-item *ngFor=\"let layer of groupLayers\" (click)=\"viewLayer(layer)\">\n                        <ion-label>\n                            {{layer.name}}\n                        </ion-label>\n                        <ion-button slot=\"end\" fill=\"clear\" color=\"dark\" (click)=\"toggleLayerVisibility(layer, $event)\">\n                           <ion-icon [name]=\"layer.visible ? 'eye' : 'eye-off'\" slot=\"icon-only\"></ion-icon>  \n                        </ion-button>   \n                    </ion-item>              \n                \n                \n            </ion-list>          \n            \n            \n            <ion-list *ngIf=\"activeGroupTab === 'private'\">\n                    <ion-item *ngFor=\"let layer of privateLayers\" (click)=\"viewLayer(layer)\">\n                        <ion-label>\n                            {{layer.name}}\n                        </ion-label>\n                        <ion-button slot=\"end\" fill=\"clear\" color=\"dark\" (click)=\"toggleLayerVisibility(layer, $event)\">\n                           <ion-icon [name]=\"layer.visible ? 'eye' : 'eye-off'\" slot=\"icon-only\"></ion-icon>    \n                        </ion-button>   \n                    </ion-item>              \n                \n                \n            </ion-list>              \n            \n            \n        </ion-content>\n    </div>   \n    \n\n    <div class=\"map__layer\" [ngClass]=\"{'map__layer--opened' : showLayer}\">\n        <ion-header>\n             \n            \n            \n            <ion-toolbar color=\"primary\">    \n                \n                <ion-buttons slot=\"start\">\n                    <ion-button (click)=\"showLayer = !showLayer\">\n                        <ion-icon name=\"close\"></ion-icon>\n                    </ion-button>          \n                </ion-buttons> \n                \n                <ion-title (click)=\"editLayer(currentLayer)\">{{currentLayer.name}}</ion-title>\n                \n                <ion-buttons slot=\"end\">\n                    <ion-button (click)=\"shareLayer(currentLayer)\">\n                        Share\n                    </ion-button>                    \n                </ion-buttons>   \n                \n            </ion-toolbar>\n        </ion-header>\n\n         <ion-content>\n             \n             \n            <ion-list *ngIf=\"currentLayer.layer_items\">\n                    <ion-item *ngFor=\"let item of currentLayer.layer_items\" (click)=\"viewItem(item)\">\n                        <ion-icon name=\"location\" slot=\"start\" *ngIf=\"item.point_type\"></ion-icon>\n                        <ion-icon name=\"analytics\" slot=\"start\" *ngIf=\"!item.point_type\"></ion-icon>\n\n                        \n                        <ion-label>\n                            <h2>{{item.name}}</h2>\n                            <h3 *ngIf=\"item.profile\">Created by {{item.profile.name}}</h3>\n                            <p>\n                                Created {{formatFromNow(item.created_at)}}\n                            </p>                            \n                        </ion-label>                        \n                        \n                        \n                        <ion-button slot=\"end\" fill=\"clear\" color=\"dark\" *ngIf=\"item.point_type\" (click)=\"togglePlacemarkVisibility(item, $event)\">\n                           <ion-icon  [name]=\"item.visible ? 'eye' : 'eye-off'\" slot=\"icon-only\"></ion-icon>\n                        </ion-button>                           \n                        \n                        \n                        <ion-button slot=\"end\" fill=\"clear\" color=\"dark\" *ngIf=\"!item.point_type\" (click)=\"toggleTrackVisibility(item, $event)\">\n                           <ion-icon  [name]=\"item.visible ? 'eye' : 'eye-off'\" slot=\"icon-only\"></ion-icon>                        \n                        </ion-button>  \n                        \n                        \n                    </ion-item>       \n                 \n                \n                \n                \n            </ion-list>               \n             \n             \n        </ion-content>    \n    </div>\n    \n    \n    <div class=\"map__map-types-overlay\" *ngIf=\"mapTypesOpened\" (click)=\"mapTypesOpened = false\"></div>\n    <div class=\"map__map-types\" [ngClass]=\"{'map__map-types--opened' : mapTypesOpened}\">\n         \n          \n         \n         \n        \n        <div class=\"map__map-types__map-type\" *ngFor=\"let mapType of mapTypes; let i = index;\">\n\n            <div class=\"map__map-types__map-type__tile\" \n                 [ngStyle]=\"{'background-image' : 'url(' + mapType.image + ')'}\"\n                 [ngClass]=\"{'map__map-types__map-type__tile--selected' : mapType.visible}\"\n                 (click)=\"setVisibility(i)\">\n\n                <span>{{mapType.name}}</span>\n\n            </div>\n             \n            <ion-item class=\"map__map-types__map-type__slider\">\n                <ion-range color=\"primary\" min=\"0\" max=\"1\" step=\"0.1\" id=\"layer{{i}}-opacity\" [(ngModel)]=\"mapType.opacity\" (ionChange)=\"updateOpacity(i)\"></ion-range>    \n            </ion-item>             \n             \n\n        </div>\n\n    </div>    \n    \n    \n    <div class=\"map__recenter\" *ngIf=\"recenterActive\">\n        <ion-button color=\"light\" (click)=\"recenter()\">\n            <ion-icon slot=\"start\" name=\"navigate\"></ion-icon>\n            Re-center                      \n        </ion-button>          \n    </div>\n    \n    \n    <div class=\"map__secondary-actions\">\n        <ion-fab-button size=\"small\" color=\"light\" (click)=\"addPlacemark()\" [ngClass]=\"{'active':enableAddPlacemark}\"><ion-icon name=\"location\"></ion-icon></ion-fab-button>\n        \n        <ion-fab-button size=\"small\" color=\"light\" (click)=\"addTrack()\" [ngClass]=\"{'active':enableAddTrack}\"><ion-icon name=\"analytics\"></ion-icon></ion-fab-button>\n        \n    </div>\n   \n    \n    \n    \n    <div class=\"map__compass\">\n        \n        <div class=\"map__compass__direction map__compass__direction--north\">N</div>\n        <div class=\"map__compass__direction map__compass__direction--east\">E</div>\n        <div class=\"map__compass__direction map__compass__direction--south\">S</div>\n        <div class=\"map__compass__direction map__compass__direction--west\">W</div>\n        \n        <ion-icon id=\"compass-icon\" name=\"navigate-circle\" color=\"light\"></ion-icon>\n    </div>\n    \n \n\n</ion-content>\n\n\n\n<ion-footer>\n    <ion-segment color=\"primary\" class=\"map-tabs\">\n  \n\n        <ion-segment-button class=\"map-tabs__tab\" (click)=\"mapTypesOpened = !mapTypesOpened\" [ngClass]=\"{'map-tabs__tab--opened' : mapTypesOpened}\">\n            <ion-icon name=\"map\"></ion-icon>\n            <ion-label>Maps</ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"map-tabs__tab\" (click)=\"toggleTracking()\">\n            <ion-icon name=\"locate\" color=\"primary\"></ion-icon>\n            <ion-label>\n                <span *ngIf=\"!isTracking\">Track</span>\n                <span *ngIf=\"isTracking\">Stop</span>\n            </ion-label>\n        </ion-segment-button>\n\n        <ion-segment-button class=\"map-tabs__tab\"  (click)=\"openGroups()\">\n            <ion-icon name=\"people\"></ion-icon>\n            <ion-label>Groups</ion-label>\n        </ion-segment-button>        \n        \n        \n    </ion-segment>    \n    \n</ion-footer>\n\n\n<div id=\"currentposition-container\">\n    <div id=\"currentposition\">\n        <ion-icon name=\"caret-up\" color=\"light\"></ion-icon>\n    </div>\n</div>");

/***/ }),

/***/ "./src/app/pages/map/map-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/pages/map/map-routing.module.ts ***!
  \*************************************************/
/*! exports provided: MapPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageRoutingModule", function() { return MapPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./map.page */ "./src/app/pages/map/map.page.ts");




var routes = [
    {
        path: '',
        component: _map_page__WEBPACK_IMPORTED_MODULE_3__["MapPage"]
    }
];
var MapPageRoutingModule = /** @class */ (function () {
    function MapPageRoutingModule() {
    }
    MapPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
        })
    ], MapPageRoutingModule);
    return MapPageRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/map/map.module.ts":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.module.ts ***!
  \*****************************************/
/*! exports provided: MapPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPageModule", function() { return MapPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _map_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./map-routing.module */ "./src/app/pages/map/map-routing.module.ts");
/* harmony import */ var _map_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./map.page */ "./src/app/pages/map/map.page.ts");







var MapPageModule = /** @class */ (function () {
    function MapPageModule() {
    }
    MapPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
                _map_routing_module__WEBPACK_IMPORTED_MODULE_5__["MapPageRoutingModule"]
            ],
            declarations: [_map_page__WEBPACK_IMPORTED_MODULE_6__["MapPage"]]
        })
    ], MapPageModule);
    return MapPageModule;
}());



/***/ }),

/***/ "./src/app/pages/map/map.page.scss":
/*!*****************************************!*\
  !*** ./src/app/pages/map/map.page.scss ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".map {\n  --overflow: hidden;\n}\n.map .map__container {\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  z-index: 2;\n}\n.map .map__container.map__container--windy {\n  z-index: 1;\n  opacity: 0.5;\n}\n.map .map__container.map__container--windy #mobile-ovr-select {\n  right: 70px !important;\n}\n.map .map__container.map__container--windy #logo {\n  top: 5px !important;\n  margin-top: 0px !important;\n  left: 10px !important;\n}\n.map .map__container.map__container--windy #bottom {\n  bottom: 70px;\n}\n.map .map__container.map__container--windy #bottom #accumulations {\n  display: none;\n}\n.map .map__container.map__container--windy #embed-zoom {\n  display: none;\n}\n.map .map__container.map__container--windy-visible {\n  z-index: 3;\n}\n.map .map__container .ol-zoom, .map .map__container .ol-rotate {\n  display: none;\n}\n.map .map__container .ol-attribution {\n  opacity: 0;\n}\n.map .map__container .ol-overlaycontainer-stopevent {\n  display: none;\n}\n.map .map__secondary-actions {\n  position: absolute;\n  z-index: 4;\n  bottom: 15px;\n  right: 5px;\n}\n.map .map__secondary-actions ion-fab-button {\n  margin-top: 15px;\n  --ion-color-contrast:#ff7f00 !important;\n}\n.map .map__secondary-actions ion-fab-button.active {\n  --ion-color-base: #DADADA !important;\n}\n.map .map__compass {\n  position: absolute;\n  left: 20px;\n  top: 20px;\n  z-index: 2;\n}\n.map .map__compass .map__compass__direction {\n  color: white;\n  position: absolute;\n  width: 100%;\n  font-size: 10px;\n}\n.map .map__compass .map__compass__direction.map__compass__direction--north {\n  top: -14px;\n  left: 0px;\n  text-align: center;\n}\n.map .map__compass .map__compass__direction.map__compass__direction--east {\n  top: 14px;\n  right: -10px;\n  text-align: right;\n}\n.map .map__compass .map__compass__direction.map__compass__direction--south {\n  bottom: -11px;\n  left: 0px;\n  text-align: center;\n}\n.map .map__compass .map__compass__direction.map__compass__direction--west {\n  top: 14px;\n  left: -13px;\n  text-align: left;\n}\n.map .map__compass ion-icon {\n  width: 40px;\n  height: 40px;\n  transform: rotate(-45deg);\n}\n.map .map__actions {\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  z-index: 4;\n  background-color: white;\n  padding: 6px;\n  border-radius: 6px;\n}\n.map .map__actions .map__actions__action {\n  display: block;\n  font-size: 12px;\n  width: 36px;\n  height: 36px;\n  --padding-start: 0px;\n  --padding-end: 0px;\n}\n.map .map__actions .map__actions__action:not(:last-child) {\n  margin-bottom: 15px;\n}\n.map .map__actions .map__actions__action .button-native {\n  padding: 0px;\n}\n.map .map__map-layers-overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 3;\n}\n.map .map__layers {\n  width: 300px;\n  position: absolute;\n  right: -300px;\n  top: 0px;\n  height: 100%;\n  z-index: 9;\n  transition: right 200ms ease-in;\n  display: flex;\n  flex-direction: column;\n}\n.map .map__layers.map__layers--opened {\n  right: 0px;\n}\n.map .map__layers ion-content {\n  flex: 1;\n}\n.map .map__layer {\n  width: 300px;\n  position: absolute;\n  right: -300px;\n  top: 0px;\n  height: 100%;\n  z-index: 10;\n  transition: right 200ms ease-in;\n  display: flex;\n  flex-direction: column;\n}\n.map .map__layer.map__layer--opened {\n  right: 0px;\n}\n.map .map__layer ion-content {\n  flex: 1;\n}\n.map .map__map-types-overlay {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  z-index: 3;\n}\n.map .map__map-types {\n  position: absolute;\n  left: 0px;\n  z-index: 5;\n  background-color: white;\n  bottom: -300px;\n  transition: bottom 200ms ease-in;\n  width: 100%;\n  padding: 20px 10px;\n}\n.map .map__map-types.map__map-types--opened {\n  bottom: 0px;\n}\n.map .map__map-types .map__map-types__map-type {\n  display: flex;\n  align-items: center;\n  margin-bottom: 5px;\n  position: relative;\n}\n.map .map__map-types .map__map-types__map-type .map__map-types__map-type__tile {\n  background-color: white;\n  width: 60px;\n  height: 60px;\n  border-radius: 5px;\n  position: relative;\n  overflow: hidden;\n  background-size: cover;\n  background-position: center center;\n  cursor: pointer;\n  display: inline-block;\n}\n.map .map__map-types .map__map-types__map-type .map__map-types__map-type__tile.map__map-types__map-type__tile--selected:after {\n  content: \"\";\n  position: absolute;\n  left: 0px;\n  top: 0px;\n  width: calc(100% - 2px);\n  height: calc(100% - 2px);\n  border: 1px solid #ff7f00;\n  border-radius: 5px;\n}\n.map .map__map-types .map__map-types__map-type .map__map-types__map-type__tile span {\n  background-color: rgba(0, 0, 0, 0.7);\n  color: white;\n  position: absolute;\n  bottom: 0px;\n  left: 0px;\n  padding: 3px;\n  font-size: 9px;\n  width: 100%;\n  text-align: center;\n  display: block;\n}\n.map .map__map-types .map__map-types__map-type .map__map-types__map-type__slider {\n  display: inline-block;\n  flex: 1;\n  --border-color: transparent;\n  overflow: visible;\n}\n.map .map__map-types .map__map-types__map-type .map__map-types__map-type__slider ion-range {\n  padding: 0px;\n  overflow: visible;\n}\n.map .map__map-types .map__map-types__map-type .map__map-types__map-type__slider ion-range .range-slider {\n  overflow: visible;\n}\n.map__recenter {\n  z-index: 3;\n  position: absolute;\n  bottom: 10px;\n  left: 0px;\n  width: 100%;\n  text-align: center;\n}\n.map__recenter ion-button {\n  --ion-color-contrast: #ff7f00 !important;\n}\n.map-tabs .map-tabs__tab {\n  --indicator-height:0px;\n}\n.map-tabs .map-tabs__tab.segment-button-checked --color-checked {\n  color: #666666;\n}\n.map-tabs .map-tabs__tab.segment-button-checked ion-label {\n  color: #666666;\n}\n.map-tabs .map-tabs__tab.segment-button-checked ion-icon {\n  color: #666666;\n}\n.map-tabs .map-tabs__tab ion-label {\n  color: #666666;\n}\n.map-tabs .map-tabs__tab ion-icon {\n  color: #666666;\n}\n.map-tabs .map-tabs__tab.map-tabs__tab--opened ion-label {\n  color: #ff7f00;\n}\n.map-tabs .map-tabs__tab.map-tabs__tab--opened ion-icon {\n  color: #ff7f00;\n}\n#compass-icon {\n  transform-origin: center;\n  transition: transform 200ms ease;\n}\n#currentposition-container {\n  position: absolute;\n  top: 0px;\n  left: -100px;\n}\n#currentposition {\n  width: 15px;\n  height: 15px;\n  background-color: white;\n  border-radius: 7.5px;\n  border: 2px solid #ff7f00;\n  transform-origin: center;\n  transform-origin: center;\n  transition: transform 200ms ease;\n  overflow: visible;\n  position: relative;\n  display: block;\n}\n#currentposition ion-icon {\n  position: absolute;\n  font-size: 20px;\n  width: 18px;\n  height: 18px;\n  top: -19px;\n  left: -3.5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFwL21hcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxrQkFBQTtBQURKO0FBRUk7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBQVI7QUFFUTtFQUNJLFVBQUE7RUFDQSxZQUFBO0FBQVo7QUFHWTtFQUNJLHNCQUFBO0FBRGhCO0FBSVk7RUFDSSxtQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7QUFGaEI7QUFLWTtFQUNJLFlBQUE7QUFIaEI7QUFLWTtFQUNJLGFBQUE7QUFIaEI7QUFNWTtFQUNJLGFBQUE7QUFKaEI7QUFXUTtFQUNJLFVBQUE7QUFUWjtBQWFRO0VBQ0ksYUFBQTtBQVhaO0FBY1E7RUFDSSxVQUFBO0FBWlo7QUFlUTtFQUNJLGFBQUE7QUFiWjtBQWtCSTtFQUVJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0FBakJSO0FBbUJRO0VBQ0ksZ0JBQUE7RUFDQSx1Q0FBQTtBQWpCWjtBQW9CWTtFQUNRLG9DQUFBO0FBbEJwQjtBQTZCSTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBM0JSO0FBNEJRO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUExQmhCO0FBNEJZO0VBQ0ksVUFBQTtFQUNBLFNBQUE7RUFDQSxrQkFBQTtBQTFCaEI7QUE2Qlk7RUFDSSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0FBM0JoQjtBQThCWTtFQUNJLGFBQUE7RUFDQSxTQUFBO0VBQ0Esa0JBQUE7QUE1QmhCO0FBK0JZO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtBQTdCaEI7QUFvQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNJLHlCQUFBO0FBbENoQjtBQXdDSTtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUF0Q1I7QUF3Q1E7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQXRDWjtBQXdDWTtFQUNJLG1CQUFBO0FBdENoQjtBQXlDWTtFQUNJLFlBQUE7QUF2Q2hCO0FBK0NJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtBQTdDUjtBQWdESTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxRQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDRCwrQkFBQTtFQUNBLGFBQUE7RUFDQyxzQkFBQTtBQTlDUjtBQWdEUTtFQUNJLFVBQUE7QUE5Q1o7QUFpRFE7RUFDSSxPQUFBO0FBL0NaO0FBcURJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFFBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNELCtCQUFBO0VBQ0EsYUFBQTtFQUNDLHNCQUFBO0FBbkRSO0FBb0RRO0VBQ0ksVUFBQTtBQWxEWjtBQXFEUTtFQUNJLE9BQUE7QUFuRFo7QUF5REk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBdkRSO0FBMkRJO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGdDQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0FBekRSO0FBMkRRO0VBQ0ksV0FBQTtBQXpEWjtBQTZEUTtFQUNRLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7QUEzRGhCO0FBNkRZO0VBQ0ksdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EscUJBQUE7QUEzRGhCO0FBNkRnQjtFQUNJLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUEzRHBCO0FBOERnQjtFQUNJLG9DQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUE1RHBCO0FBaUVZO0VBQ0kscUJBQUE7RUFDQSxPQUFBO0VBQ0EsMkJBQUE7RUFDQSxpQkFBQTtBQS9EaEI7QUFnRWdCO0VBQ0ksWUFBQTtFQUNKLGlCQUFBO0FBOURoQjtBQWlFb0I7RUFDSixpQkFBQTtBQS9EaEI7QUE4RUE7RUFDSSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtBQTNFSjtBQTZFSTtFQUNZLHdDQUFBO0FBM0VoQjtBQWtGSTtFQUVJLHNCQUFBO0FBaEZSO0FBb0ZZO0VBQ0ksY0FBQTtBQWxGaEI7QUFxRlk7RUFDSSxjQUFBO0FBbkZoQjtBQXVGWTtFQUNJLGNBQUE7QUFyRmhCO0FBMEZRO0VBQ0ksY0FBQTtBQXhGWjtBQTRGUTtFQUNJLGNBQUE7QUExRlo7QUErRlk7RUFDSSxjQUFBO0FBN0ZoQjtBQWlHWTtFQUNJLGNBQUE7QUEvRmhCO0FBd0dBO0VBQ1Esd0JBQUE7RUFDSixnQ0FBQTtBQXJHSjtBQXdHQTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFyR0o7QUF3R0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSx5QkFBQTtFQUNBLHdCQUFBO0VBQ0Esd0JBQUE7RUFDQSxnQ0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBckdKO0FBc0dJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtBQXBHUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hcC9tYXAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG4ubWFwe1xyXG4gICAgLS1vdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgLm1hcF9fY29udGFpbmVye1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICB6LWluZGV4OjI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgJi5tYXBfX2NvbnRhaW5lci0td2luZHl7XHJcbiAgICAgICAgICAgIHotaW5kZXg6MTtcclxuICAgICAgICAgICAgb3BhY2l0eTowLjU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgI21vYmlsZS1vdnItc2VsZWN0e1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IDcwcHggIWltcG9ydGFudDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgI2xvZ297XHJcbiAgICAgICAgICAgICAgICB0b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICNib3R0b217XHJcbiAgICAgICAgICAgICAgICBib3R0b206NzBweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjYm90dG9tICNhY2N1bXVsYXRpb25ze1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAjZW1iZWQtem9vbXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgJi5tYXBfX2NvbnRhaW5lci0td2luZHktdmlzaWJsZXtcclxuICAgICAgICAgICAgei1pbmRleDozO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIFxyXG4gIFxyXG4gICAgICAgIC5vbC16b29tLCAub2wtcm90YXRle1xyXG4gICAgICAgICAgICBkaXNwbGF5Om5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC5vbC1hdHRyaWJ1dGlvbntcclxuICAgICAgICAgICAgb3BhY2l0eTowO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAub2wtb3ZlcmxheWNvbnRhaW5lci1zdG9wZXZlbnR7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6bm9uZTtcclxuICAgICAgICB9ICAgICAgICBcclxuICAgIH1cclxuICBcclxuICAgIFxyXG4gICAgLm1hcF9fc2Vjb25kYXJ5LWFjdGlvbnN7XHJcbiAgICAgICAgXHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHotaW5kZXg6IDQ7XHJcbiAgICAgICAgYm90dG9tOiAxNXB4O1xyXG4gICAgICAgIHJpZ2h0OiA1cHg7ICAgICBcclxuICAgICAgICBcclxuICAgICAgICBpb24tZmFiLWJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDoxNXB4O1xyXG4gICAgICAgICAgICAtLWlvbi1jb2xvci1jb250cmFzdDojZmY3ZjAwICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJi5hY3RpdmV7XHJcbiAgICAgICAgICAgICAgICAgICAgLS1pb24tY29sb3ItYmFzZTogI0RBREFEQSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIC5tYXBfX2NvbXBhc3N7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGxlZnQ6IDIwcHg7XHJcbiAgICAgICAgdG9wOiAyMHB4O1xyXG4gICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgLm1hcF9fY29tcGFzc19fZGlyZWN0aW9ue1xyXG4gICAgICAgICAgICBjb2xvcjp3aGl0ZTtcclxuICAgICAgICAgICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDoxMDAlO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJi5tYXBfX2NvbXBhc3NfX2RpcmVjdGlvbi0tbm9ydGh7XHJcbiAgICAgICAgICAgICAgICB0b3A6LTE0cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmLm1hcF9fY29tcGFzc19fZGlyZWN0aW9uLS1lYXN0e1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpyaWdodDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgJi5tYXBfX2NvbXBhc3NfX2RpcmVjdGlvbi0tc291dGh7XHJcbiAgICAgICAgICAgICAgICBib3R0b206LTExcHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAmLm1hcF9fY29tcGFzc19fZGlyZWN0aW9uLS13ZXN0e1xyXG4gICAgICAgICAgICAgICAgdG9wOjE0cHg7XHJcbiAgICAgICAgICAgICAgICBsZWZ0Oi0xM3B4O1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjpsZWZ0O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgd2lkdGg6IDQwcHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogNDBweDtcclxuICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuXHJcbiAgICAubWFwX19hY3Rpb25ze1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogMTBweDtcclxuICAgICAgICB0b3A6IDEwcHg7XHJcbiAgICAgICAgei1pbmRleDogNDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBwYWRkaW5nOiA2cHg7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC5tYXBfX2FjdGlvbnNfX2FjdGlvbntcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgd2lkdGg6IDM2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzZweDtcclxuICAgICAgICAgICAgLS1wYWRkaW5nLXN0YXJ0OiAwcHg7XHJcbiAgICAgICAgICAgIC0tcGFkZGluZy1lbmQ6IDBweDsgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICY6bm90KDpsYXN0LWNoaWxkKXsgICAgICBcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5idXR0b24tbmF0aXZle1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzowcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5tYXBfX21hcC1sYXllcnMtb3ZlcmxheXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWFwX19sYXllcnN7XHJcbiAgICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICByaWdodDogLTMwMHB4O1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB6LWluZGV4OiA5O1xyXG4gICAgICAgdHJhbnNpdGlvbjpyaWdodCAyMDBtcyBlYXNlLWluO1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgXHJcbiAgICAgICAgJi5tYXBfX2xheWVycy0tb3BlbmVke1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpb24tY29udGVudHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICAubWFwX19sYXllcntcclxuICAgICAgICB3aWR0aDogMzAwcHg7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHJpZ2h0OiAtMzAwcHg7XHJcbiAgICAgICAgdG9wOiAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwO1xyXG4gICAgICAgdHJhbnNpdGlvbjpyaWdodCAyMDBtcyBlYXNlLWluO1xyXG4gICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICYubWFwX19sYXllci0tb3BlbmVke1xyXG4gICAgICAgICAgICByaWdodDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpb24tY29udGVudHtcclxuICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9ICBcclxuICAgIFxyXG4gICAgXHJcbiAgICAubWFwX19tYXAtdHlwZXMtb3ZlcmxheXtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIHRvcDogMHB4O1xyXG4gICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICB6LWluZGV4OiAzO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIC5tYXBfX21hcC10eXBlc3tcclxuICAgICAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgICAgICBsZWZ0OjBweDtcclxuICAgICAgICB6LWluZGV4OjU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjp3aGl0ZTtcclxuICAgICAgICBib3R0b206IC0zMDBweDtcclxuICAgICAgICB0cmFuc2l0aW9uOmJvdHRvbSAyMDBtcyBlYXNlLWluO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTBweDtcclxuICAgICAgICBcclxuICAgICAgICAmLm1hcF9fbWFwLXR5cGVzLS1vcGVuZWR7XHJcbiAgICAgICAgICAgIGJvdHRvbTowcHg7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLm1hcF9fbWFwLXR5cGVzX19tYXAtdHlwZXtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgICAgIC5tYXBfX21hcC10eXBlc19fbWFwLXR5cGVfX3RpbGV7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6aGlkZGVuO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOmNvdmVyO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjpjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5tYXBfX21hcC10eXBlc19fbWFwLXR5cGVfX3RpbGUtLXNlbGVjdGVkOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB0b3A6IDBweDtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMnB4KTtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDJweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2ZmN2YwMDtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgICAgICAgICBib3R0b206IDBweDtcclxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogM3B4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogOXB4O1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jazsgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5tYXBfX21hcC10eXBlc19fbWFwLXR5cGVfX3NsaWRlcntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgZmxleDoxO1xyXG4gICAgICAgICAgICAgICAgLS1ib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6dmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIGlvbi1yYW5nZXtcclxuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzp2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIC5yYW5nZS1zbGlkZXJ7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzp2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4ubWFwX19yZWNlbnRlcntcclxuICAgIHotaW5kZXg6IDM7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIFxyXG4gICAgaW9uLWJ1dHRvbntcclxuICAgICAgICAgICAgICAgIC0taW9uLWNvbG9yLWNvbnRyYXN0OiAjZmY3ZjAwICFpbXBvcnRhbnQ7XHJcbiAgXHJcbiAgICB9XHJcbiAgICBcclxufVxyXG5cclxuLm1hcC10YWJze1xyXG4gICAgLm1hcC10YWJzX190YWJ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLS1pbmRpY2F0b3ItaGVpZ2h0OjBweDtcclxuICAgICAgICBcclxuICAgICAgICAmLnNlZ21lbnQtYnV0dG9uLWNoZWNrZWR7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAtLWNvbG9yLWNoZWNrZWR7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojNjY2NjY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpb24tbGFiZWx7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojNjY2NjY2O1xyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaW9uLWljb257XHJcbiAgICAgICAgICAgICAgICBjb2xvcjojNjY2NjY2O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgY29sb3I6IzY2NjY2NjtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgY29sb3I6IzY2NjY2NjtcclxuICAgICAgICB9ICBcclxuICAgICAgICBcclxuICAgICAgICAmLm1hcC10YWJzX190YWItLW9wZW5lZHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlvbi1sYWJlbHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZjdmMDA7XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpb24taWNvbntcclxuICAgICAgICAgICAgICAgIGNvbG9yOiNmZjdmMDA7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcblxyXG4jY29tcGFzcy1pY29ue1xyXG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcyBlYXNlO1xyXG59XHJcblxyXG4jY3VycmVudHBvc2l0aW9uLWNvbnRhaW5lcntcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgdG9wOjBweDtcclxuICAgIGxlZnQ6LTEwMHB4O1xyXG59XHJcblxyXG4jY3VycmVudHBvc2l0aW9ue1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDcuNXB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmN2YwMDtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IGNlbnRlcjsgICAgXHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXI7XHJcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXMgZWFzZTtcclxuICAgIG92ZXJmbG93OiB2aXNpYmxlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7ICAgIFxyXG4gICAgaW9uLWljb257XHJcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB3aWR0aDogMThweDtcclxuICAgICAgICBoZWlnaHQ6IDE4cHg7XHJcbiAgICAgICAgdG9wOiAtMTlweDtcclxuICAgICAgICBsZWZ0OiAtMy41cHg7XHJcbiAgICB9XHJcbiAgICBcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/map/map.page.ts":
/*!***************************************!*\
  !*** ./src/app/pages/map/map.page.ts ***!
  \***************************************/
/*! exports provided: MapPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapPage", function() { return MapPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _services_map_map_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/map/map.service */ "./src/app/services/map/map.service.ts");
/* harmony import */ var _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/authentication/authentication.service */ "./src/app/services/authentication/authentication.service.ts");
/* harmony import */ var _services_layer_layer_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/layer/layer.service */ "./src/app/services/layer/layer.service.ts");
/* harmony import */ var _services_group_group_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/group/group.service */ "./src/app/services/group/group.service.ts");
/* harmony import */ var _services_billing_billing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/billing/billing.service */ "./src/app/services/billing/billing.service.ts");
/* harmony import */ var _view_track_view_track_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view-track/view-track.page */ "./src/app/pages/view-track/view-track.page.ts");
/* harmony import */ var _view_placemark_view_placemark_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../view-placemark/view-placemark.page */ "./src/app/pages/view-placemark/view-placemark.page.ts");
/* harmony import */ var _create_placemark_create_placemark_page__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../create-placemark/create-placemark.page */ "./src/app/pages/create-placemark/create-placemark.page.ts");
/* harmony import */ var _search_search_page__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../search/search.page */ "./src/app/pages/search/search.page.ts");
/* harmony import */ var _groups_groups_page__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../groups/groups.page */ "./src/app/pages/groups/groups.page.ts");
/* harmony import */ var _profile_profile_page__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../profile/profile.page */ "./src/app/pages/profile/profile.page.ts");
/* harmony import */ var _upgrade_upgrade_page__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../upgrade/upgrade.page */ "./src/app/pages/upgrade/upgrade.page.ts");
/* harmony import */ var _edit_layer_edit_layer_page__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../edit-layer/edit-layer.page */ "./src/app/pages/edit-layer/edit-layer.page.ts");
/* harmony import */ var _add_item_add_item_page__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../add-item/add-item.page */ "./src/app/pages/add-item/add-item.page.ts");
/* harmony import */ var _logs_logs_page__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../logs/logs.page */ "./src/app/pages/logs/logs.page.ts");
/* harmony import */ var ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ol/interaction/Draw */ "./node_modules/ol/interaction/Draw.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @ionic-native/social-sharing/ngx */ "./node_modules/@ionic-native/social-sharing/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ionic-native/geolocation/ngx */ "./node_modules/@ionic-native/geolocation/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic-native/device-orientation/ngx */ "./node_modules/@ionic-native/device-orientation/__ivy_ngcc__/ngx/index.js");























var MapPage = /** @class */ (function () {
    function MapPage(mapService, menu, alertController, modalController, authenticationService, layerService, groupService, toastController, billingService, socialSharing, geolocation, deviceOrientation, loadingController) {
        var _this = this;
        this.mapService = mapService;
        this.menu = menu;
        this.alertController = alertController;
        this.modalController = modalController;
        this.authenticationService = authenticationService;
        this.layerService = layerService;
        this.groupService = groupService;
        this.toastController = toastController;
        this.billingService = billingService;
        this.socialSharing = socialSharing;
        this.geolocation = geolocation;
        this.deviceOrientation = deviceOrientation;
        this.loadingController = loadingController;
        this.mapTypes = this.mapService.getMapTypes();
        this.mapTypesOpened = false;
        this.defaultLayers = [];
        this.groupLayers = [];
        this.privateLayers = [];
        this.mapLayersOpened = false;
        this.activeGroupTab = "myoutdoors";
        this.currentLayer = {};
        this.currentPosition = {};
        this.getLayers();
        this.search = "";
        this.user = {};
        this.trackedCoordinates = [];
        this.isTracking = false;
        this.showingUpgrade = false;
        this.authenticationService.getUserData().subscribe(function (value) {
            _this.user = value;
            var compareDate = moment__WEBPACK_IMPORTED_MODULE_19__(_this.user.created_at).add(1, 'month');
            if (_this.user.permission !== "admin" &&
                ((!_this.user.stripe_id && moment__WEBPACK_IMPORTED_MODULE_19__().isAfter(compareDate)) ||
                    (_this.user.subscription && moment__WEBPACK_IMPORTED_MODULE_19__().isAfter(moment__WEBPACK_IMPORTED_MODULE_19__(_this.user.subscription.ends_at))))) {
                _this.showUpgrade();
            }
        });
        this.currentGroup = {};
        this.groupService.subscribeCurrentGroup().subscribe(function (data) {
            _this.currentGroup = data;
            _this.getGroupLayers();
        });
        this.groupService.getCurrentGroup().then(function (data) {
            if (data) {
                //set it
                var group = data;
                _this.groupService.setCurrentGroup(group);
                _this.getGroupLayers();
            }
            else {
                //get groups
                _this.groupService.getJoinedGroups().then(function (data) {
                    if (data && data.length && data.length > 0) {
                        _this.groupService.setCurrentGroup(data[0]);
                        _this.getGroupLayers();
                    }
                });
            }
        });
        var subscription = this.deviceOrientation.watchHeading({ frequency: 3000 }).subscribe(function (data) {
            console.log(data);
            var rotation = data.trueHeading;
            document.getElementById("compass-icon").style.transform = "rotate(" + (rotation - 45) + "deg)";
            if (_this.map) {
                var olView = _this.map.getView();
                var openLayersRotation = olView.getRotation();
                console.log(openLayersRotation);
                var locationRotation = rotation - openLayersRotation;
                document.getElementById("currentposition").style.transform = "rotate(" + locationRotation + "deg)";
            }
        });
    }
    MapPage.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.mapService.getMapConfig().then(function (map) {
                _this.map = map;
                _this.setMapEvents();
                _this.windy = _this.mapService.getWindyConfig();
                _this.recenter();
            });
        }, 500);
    };
    MapPage.prototype.clearDrawFeatures = function () {
        if (this.mapService.vectorSource) {
            this.mapService.vectorSource.clear();
        }
    };
    MapPage.prototype.addTrack = function () {
        var _this = this;
        if (this.enableAddPlacemark) {
            this.addPlacemark();
        }
        this.enableAddTrack = !this.enableAddTrack;
        if (this.enableAddTrack) {
            this.windyOpacity = 0;
            this.mapService.windyVisibility = 0;
            this.trackInteraction = new ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_18__["default"]({
                source: this.mapService.vectorSource,
                type: "LineString"
            });
            this.map.addInteraction(this.trackInteraction);
            this.trackInteraction.on('drawend', function (event) {
                var feat = event.feature;
                var geometry = feat.getGeometry();
                var coords = geometry.getCoordinates();
                var length = _this.mapService.getDistance(geometry.getLength());
                console.log(length);
                _this.alertController.create({
                    header: "Distance",
                    message: length,
                    buttons: [
                        {
                            text: 'Dismiss',
                            role: 'cancel'
                        }
                    ]
                }).then(function (el) {
                    el.present();
                    el.onDidDismiss().then(function () {
                        _this.map.removeInteraction(_this.trackInteraction);
                        _this.mapService.vectorSource.removeFeature(feat);
                    });
                });
                _this.enableAddTrack = !_this.enableAddTrack;
            });
        }
        else {
            this.map.removeInteraction(this.trackInteraction);
        }
    };
    MapPage.prototype.addPlacemark = function () {
        var _this = this;
        if (this.enableAddTrack) {
            this.addTrack();
        }
        this.enableAddPlacemark = !this.enableAddPlacemark;
        if (this.enableAddPlacemark) {
            this.windyOpacity = 0;
            this.mapService.windyVisibility = 0;
            this.placemarkInteraction = new ol_interaction_Draw__WEBPACK_IMPORTED_MODULE_18__["default"]({
                source: this.mapService.vectorSource,
                type: "Point"
            });
            this.map.addInteraction(this.placemarkInteraction);
            this.placemarkInteraction.on('drawend', function (event) {
                var feat = event.feature;
                var geometry = feat.getGeometry();
                var coords = geometry.getCoordinates();
                _this.showAddPlacemark(coords, feat);
            });
        }
        else {
            this.map.removeInteraction(this.placemarkInteraction);
        }
    };
    MapPage.prototype.showAddPlacemark = function (coords, feat) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _create_placemark_create_placemark_page__WEBPACK_IMPORTED_MODULE_10__["CreatePlacemarkPage"],
                            componentProps: { placemark: this.user.id }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data && data.data) {
                                console.log(data);
                                var placemark = data.data.placemark;
                                placemark.latitude = coords[0];
                                placemark.longitude = coords[1];
                                placemark.point_type = "placemark";
                                _this.layerService.createPlacemark(placemark).then(function (data) {
                                    feat.setId("placemark-" + data.id);
                                    _this.getLayers();
                                    _this.getGroupLayers();
                                    _this.mapService.showPlacemark(data);
                                });
                                _this.map.removeInteraction(_this.placemarkInteraction);
                                _this.enableAddPlacemark = !_this.enableAddPlacemark;
                            }
                            else {
                                console.log("remove feat");
                                _this.mapService.vectorSource.removeFeature(feat);
                                _this.map.removeInteraction(_this.placemarkInteraction);
                                _this.enableAddPlacemark = !_this.enableAddPlacemark;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.recenter = function () {
        var _this = this;
        this.recenterActive = false;
        if (this.currentPosition.latitude && this.currentPosition.longitude) {
            this.mapService.moveMapsLatLng(this.currentPosition.latitude, this.currentPosition.longitude);
        }
        this.geolocation.getCurrentPosition({ enableHighAccuracy: true }).then(function (resp) {
            if (resp && resp.coords) {
                _this.currentPosition = { latitude: resp.coords.latitude, longitude: resp.coords.longitude };
                _this.mapService.updateCurrentPosition({ latitude: resp.coords.latitude, longitude: resp.coords.longitude });
                if (!_this.mapService.leafletMap) {
                    _this.mapService.moveMapsNoAnimation(resp.coords.latitude, resp.coords.longitude);
                    setTimeout(function () {
                        _this.mapService.moveMapsLatLng(resp.coords.latitude, resp.coords.longitude);
                    }, 1000);
                }
                else {
                    _this.mapService.moveMapsLatLng(resp.coords.latitude, resp.coords.longitude);
                }
            }
        }).catch(function (error) {
            console.log('Error getting location', error);
        });
    };
    MapPage.prototype.watchLocation = function () {
        var _this = this;
        var watch = this.geolocation.watchPosition({ enableHighAccuracy: true });
        this.watchSubscription = watch.subscribe(function (data) {
            if (data && data.coords) {
                var watchDate = new Date();
                if (!_this.currentPositionTracked || ((watchDate.getTime() - _this.currentPositionTracked.getTime()) > 2000)) {
                    //update the users current position
                    _this.mapService.updateCurrentPosition({ latitude: data.coords.latitude, longitude: data.coords.longitude });
                    _this.mapService.moveMapsLatLng(data.coords.latitude, data.coords.longitude);
                    _this.currentPositionTracked = watchDate;
                }
                if (!_this.trackedPositionTracked || ((watchDate.getTime() - _this.trackedPositionTracked.getTime()) > 10000)) {
                    //track the users position
                    var convertedCoords = _this.mapService.convertLatLng({ latitude: data.coords.latitude, longitude: data.coords.longitude });
                    _this.trackedCoordinates.push({ latitude: convertedCoords[0], longitude: convertedCoords[1] });
                    _this.mapService.addTrackedPosition({ latitude: data.coords.latitude, longitude: data.coords.longitude });
                    _this.trackedPositionTracked = watchDate;
                }
            }
        });
    };
    MapPage.prototype.stopWatchLocation = function () {
        if (this.watchSubscription) {
            this.watchSubscription.unsubscribe();
        }
    };
    MapPage.prototype.toggleLayerVisibility = function (layer, ev) {
        ev.preventDefault();
        ev.stopPropagation();
        layer.visible = !layer.visible;
        if (layer.visible) {
            this.mapService.showLayer(layer);
        }
        else {
            this.mapService.hideLayer(layer);
        }
    };
    MapPage.prototype.toggleTrackVisibility = function (track, ev) {
        ev.preventDefault();
        ev.stopPropagation();
        track.visible = !track.visible;
        if (track.visible) {
            this.mapService.showTrack(track);
        }
        else {
            this.mapService.hideTrack(track);
        }
    };
    MapPage.prototype.togglePlacemarkVisibility = function (placemark, ev) {
        ev.preventDefault();
        ev.stopPropagation();
        placemark.visible = !placemark.visible;
        if (placemark.visible) {
            this.mapService.showPlacemark(placemark);
        }
        else {
            this.mapService.hidePlacemark(placemark);
        }
    };
    MapPage.prototype.getLayers = function () {
        var _this = this;
        this.layerService.getDefaultLayers().then(function (data) {
            _this.defaultLayers = data;
        });
        this.layerService.getPrivateLayers().then(function (data) {
            _this.privateLayers = data;
        });
    };
    MapPage.prototype.getGroupLayers = function () {
        var _this = this;
        this.layerService.getGroupLayers(this.currentGroup.id).then(function (data) {
            _this.groupLayers = data;
        });
    };
    MapPage.prototype.openProfile = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _profile_profile_page__WEBPACK_IMPORTED_MODULE_13__["ProfilePage"],
                            componentProps: { profile: this.user.id }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data) {
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.openLogs = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _logs_logs_page__WEBPACK_IMPORTED_MODULE_17__["LogsPage"],
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data) {
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.openSearch = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _search_search_page__WEBPACK_IMPORTED_MODULE_11__["SearchPage"],
                            componentProps: { search: this.search }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (data) {
                            if (data) {
                                //this.search = data.data;
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.openGroups = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _groups_groups_page__WEBPACK_IMPORTED_MODULE_12__["GroupsPage"],
                            componentProps: {}
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (result) {
                            var e_1, _a;
                            if (result && result.data && result.data.selectedLayer) {
                                try {
                                    for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(_this.groupLayers), _c = _b.next(); !_c.done; _c = _b.next()) {
                                        var layer = _c.value;
                                        if (layer.id === result.data.selectedLayer.layer_id) {
                                            _this.viewLayer(layer);
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
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.openLayers = function () {
        this.mapLayersOpened = !this.mapLayersOpened;
    };
    MapPage.prototype.viewLayer = function (layer) {
        var e_2, _a;
        var _this = this;
        this.showLayer = true;
        this.currentLayer = layer;
        if (!this.currentLayer.visible) {
        }
        this.currentLayer.layer_items = [];
        this.currentLayer.layer_items = this.currentLayer.layer_items.concat(this.currentLayer.tracks);
        this.currentLayer.layer_items = this.currentLayer.layer_items.concat(this.currentLayer.placemarks);
        //move map to layer location
        if (this.currentLayer.layer_items.length > 0) {
            try {
                for (var _b = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.currentLayer.layer_items), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    if (item.point_type) {
                        this.mapService.moveMaps(item.latitude, item.longitude);
                        break;
                    }
                    else if (item.points && item.points.length > 0) {
                        this.mapService.moveMaps(item.points[0].latitude, item.points[0].longitude);
                        break;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        //TODO: get any offline tracks and points
        this.layerService.getOfflinePlacemarks().then(function (placemarks) {
            _this.currentLayer.layer_items.concat(placemarks);
        }).catch(function () {
        });
        this.layerService.getOfflineTracks().then(function (tracks) {
            _this.currentLayer.layer_items.concat(tracks);
        }).catch(function () {
        });
    };
    MapPage.prototype.shareLayer = function (layer) {
        this.socialSharing
            .share("https://www.my-outdoors.co.nz/layer/" + layer.id, layer.name, null, "https://www.my-outdoors.co.nz/layer/" + layer.id) // Share via native share sheet
            .then(function (result) {
            // Success!
        }, function (err) {
            // An error occured. Show a message to the user
        });
    };
    MapPage.prototype.editLayer = function (layer) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var layerCopy, modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        layerCopy = {};
                        Object.assign(layerCopy, layer);
                        return [4 /*yield*/, this.modalController.create({
                                component: _edit_layer_edit_layer_page__WEBPACK_IMPORTED_MODULE_15__["EditLayerPage"],
                                componentProps: { layer: layerCopy }
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (result) {
                            if (result && result.data) {
                                Object.assign(layer, result.data.layer);
                                _this.layerService.updateLayer(result.data.layer).then(function () {
                                });
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.showUpgrade = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.showingUpgrade) {
                            return [2 /*return*/];
                        }
                        this.showingUpgrade = true;
                        return [4 /*yield*/, this.modalController.create({
                                component: _upgrade_upgrade_page__WEBPACK_IMPORTED_MODULE_14__["UpgradePage"],
                                componentProps: {}
                            })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (result) {
                            _this.showingUpgrade = false;
                            if (result && result.data) {
                                _this.billingService.upgrade(result.data.id).then(function (data) {
                                    _this.showToast('Thank you! Your account has been upgraded.');
                                }).catch(function () {
                                    _this.showToast('There was an error. Please try again.');
                                    _this.showUpgrade();
                                });
                            }
                            else {
                                _this.showUpgrade();
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.showToast = function (text) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var toast;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastController.create({
                            message: text,
                            duration: 10000
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.toggleTracking = function () {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var alert_1, length_1, modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.isTracking) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.alertController.create({
                                cssClass: 'my-custom-class',
                                header: 'Start Tracking',
                                message: 'You are about to start tracking your location via GPS. Are you sure you want to continue?',
                                buttons: [
                                    {
                                        text: 'Cancel',
                                        role: 'cancel',
                                        cssClass: 'secondary',
                                        handler: function (blah) {
                                        }
                                    }, {
                                        text: 'Yes',
                                        handler: function () {
                                            _this.isTracking = true;
                                            _this.watchLocation();
                                        }
                                    }
                                ]
                            })];
                    case 1:
                        alert_1 = _a.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 6];
                    case 3:
                        this.isTracking = false;
                        this.stopWatchLocation();
                        length_1 = 0;
                        return [4 /*yield*/, this.modalController.create({
                                component: _add_item_add_item_page__WEBPACK_IMPORTED_MODULE_16__["AddItemPage"],
                                componentProps: {
                                    distance: length_1
                                }
                            })];
                    case 4:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (result) {
                            if (result && result.data) {
                                var track = result.data.track;
                                var points = _this.trackedCoordinates;
                                track.points = points;
                                _this.layerService.createTrack(track).then(function (data) {
                                    _this.getLayers();
                                    _this.getGroupLayers();
                                    _this.mapService.showTrack(data);
                                    _this.trackedCoordinates = [];
                                    _this.mapService.vectorSource.clear();
                                });
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 5:
                        _a.sent();
                        _a.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.updateOpacity = function (updateIndex) {
        var _this = this;
        if (this.mapTypes[updateIndex].name === "Weather") {
            this.windyOpacity = this.mapTypes[updateIndex].visible ? this.mapTypes[updateIndex].opacity : 0;
            this.mapService.windyVisibility = this.windyOpacity;
        }
        this.map.getLayers().forEach(function (layer, i) {
            if (i === (updateIndex + 1)) {
                layer.setOpacity(_this.mapTypes[updateIndex].opacity);
            }
        });
    };
    MapPage.prototype.setVisibility = function (updateIndex) {
        var _this = this;
        this.mapTypes[updateIndex].visible = !this.mapTypes[updateIndex].visible;
        if (this.mapTypes[updateIndex].name === "Weather") {
            this.windyOpacity = this.mapTypes[updateIndex].visible ? this.mapTypes[updateIndex].opacity : 0;
            this.mapService.windyVisibility = this.windyOpacity;
        }
        this.map.getLayers().forEach(function (layer, i) {
            if (i === (updateIndex + 1)) {
                layer.setVisible(_this.mapTypes[updateIndex].visible);
            }
        });
    };
    MapPage.prototype.setMapEvents = function () {
        var _this = this;
        this.map.on('click', function (event) {
            _this.map.forEachFeatureAtPixel(event.pixel, function (feature, layer) {
                event.preventDefault();
                var featureId = feature.getId();
                if (featureId) {
                    var featureIdParts = featureId.split("-");
                    var itemType = featureIdParts[0];
                    var itemId = parseInt(featureIdParts[1]);
                    if (itemId && !isNaN(itemId)) {
                        var item = _this.getItemFromId(itemType, itemId);
                        _this.viewItem(item);
                    }
                }
            });
        });
        this.map.on('pointerdrag', function (event) {
            _this.recenterActive = true;
        });
    };
    MapPage.prototype.getItemFromId = function (itemType, id) {
        var e_3, _a, e_4, _b, e_5, _c, e_6, _d, e_7, _e, e_8, _f;
        try {
            for (var _g = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.defaultLayers), _h = _g.next(); !_h.done; _h = _g.next()) {
                var layer = _h.value;
                try {
                    for (var _j = (e_4 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(layer[itemType + "s"])), _k = _j.next(); !_k.done; _k = _j.next()) {
                        var item = _k.value;
                        if (item.id === id) {
                            return item;
                        }
                    }
                }
                catch (e_4_1) { e_4 = { error: e_4_1 }; }
                finally {
                    try {
                        if (_k && !_k.done && (_b = _j.return)) _b.call(_j);
                    }
                    finally { if (e_4) throw e_4.error; }
                }
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_h && !_h.done && (_a = _g.return)) _a.call(_g);
            }
            finally { if (e_3) throw e_3.error; }
        }
        try {
            for (var _l = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.privateLayers), _m = _l.next(); !_m.done; _m = _l.next()) {
                var layer = _m.value;
                try {
                    for (var _o = (e_6 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(layer[itemType + "s"])), _p = _o.next(); !_p.done; _p = _o.next()) {
                        var item = _p.value;
                        if (item.id === id) {
                            return item;
                        }
                    }
                }
                catch (e_6_1) { e_6 = { error: e_6_1 }; }
                finally {
                    try {
                        if (_p && !_p.done && (_d = _o.return)) _d.call(_o);
                    }
                    finally { if (e_6) throw e_6.error; }
                }
            }
        }
        catch (e_5_1) { e_5 = { error: e_5_1 }; }
        finally {
            try {
                if (_m && !_m.done && (_c = _l.return)) _c.call(_l);
            }
            finally { if (e_5) throw e_5.error; }
        }
        try {
            for (var _q = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(this.groupLayers), _r = _q.next(); !_r.done; _r = _q.next()) {
                var layer = _r.value;
                try {
                    for (var _s = (e_8 = void 0, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__values"])(layer[itemType + "s"])), _t = _s.next(); !_t.done; _t = _s.next()) {
                        var item = _t.value;
                        if (item.id === id) {
                            return item;
                        }
                    }
                }
                catch (e_8_1) { e_8 = { error: e_8_1 }; }
                finally {
                    try {
                        if (_t && !_t.done && (_f = _s.return)) _f.call(_s);
                    }
                    finally { if (e_8) throw e_8.error; }
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_r && !_r.done && (_e = _q.return)) _e.call(_q);
            }
            finally { if (e_7) throw e_7.error; }
        }
        return { color: "#ff7f00" };
    };
    MapPage.prototype.viewItem = function (item) {
        if (item.point_type) {
            this.viewPlacemark(item);
            this.mapService.moveMaps(item.latitude, item.longitude);
        }
        else if (item.id) {
            this.viewTrack(item);
            if (item.points && item.points.length > 0)
                this.mapService.moveMaps(item.points[0].latitude, item.points[0].longitude);
        }
    };
    MapPage.prototype.viewTrack = function (track) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _view_track_view_track_page__WEBPACK_IMPORTED_MODULE_8__["ViewTrackPage"],
                            componentProps: { track: track }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (result) {
                            if (result && result.data) {
                                var updatedTrack = result.data.track;
                                if (updatedTrack.edited) {
                                    var orginialColor = track.color;
                                    Object.assign(track, updatedTrack);
                                    if (orginialColor !== track.color && (track.visible || _this.currentLayer.visible)) {
                                        _this.mapService.hideTrack(track);
                                        _this.mapService.showTrack(track);
                                    }
                                    _this.layerService.updateTrack(updatedTrack).then(function () {
                                        _this.getLayers();
                                        _this.getGroupLayers();
                                    });
                                }
                                else if (updatedTrack.deleted) {
                                    _this.layerService.deleteTrack(track.id).then(function () {
                                        _this.mapService.hideTrack(track);
                                        _this.getLayers();
                                        _this.getGroupLayers();
                                        _this.showLayer = false;
                                    });
                                }
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.viewPlacemark = function (placemark) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function () {
            var modal;
            var _this = this;
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"])(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: _view_placemark_view_placemark_page__WEBPACK_IMPORTED_MODULE_9__["ViewPlacemarkPage"],
                            componentProps: { placemark: placemark }
                        })];
                    case 1:
                        modal = _a.sent();
                        modal.onDidDismiss()
                            .then(function (result) {
                            if (result && result.data) {
                                var updatedPlacemark = result.data.placemark;
                                if (updatedPlacemark.edited) {
                                    var orginialColor = placemark.color;
                                    Object.assign(placemark, updatedPlacemark);
                                    if (orginialColor !== placemark.color && (placemark.visible || _this.currentLayer.visible)) {
                                        _this.mapService.hidePlacemark(placemark);
                                        _this.mapService.showPlacemark(placemark);
                                    }
                                    _this.layerService.updatePlacemark(updatedPlacemark).then(function () {
                                        _this.getLayers();
                                        _this.getGroupLayers();
                                    });
                                }
                                else if (updatedPlacemark.deleted) {
                                    _this.layerService.deletePlacemark(placemark.id).then(function () {
                                        _this.mapService.hidePlacemark(placemark);
                                        _this.getLayers();
                                        _this.getGroupLayers();
                                        _this.showLayer = false;
                                    });
                                }
                            }
                        });
                        return [4 /*yield*/, modal.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MapPage.prototype.dismiss = function () {
        this.modalController.dismiss();
    };
    MapPage.prototype.formatFromNow = function (date) {
        return moment__WEBPACK_IMPORTED_MODULE_19__(date).from(moment__WEBPACK_IMPORTED_MODULE_19__());
    };
    MapPage.ctorParameters = function () { return [
        { type: _services_map_map_service__WEBPACK_IMPORTED_MODULE_3__["MapService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] },
        { type: _services_authentication_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _services_layer_layer_service__WEBPACK_IMPORTED_MODULE_5__["LayerService"] },
        { type: _services_group_group_service__WEBPACK_IMPORTED_MODULE_6__["GroupService"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"] },
        { type: _services_billing_billing_service__WEBPACK_IMPORTED_MODULE_7__["BillingService"] },
        { type: _ionic_native_social_sharing_ngx__WEBPACK_IMPORTED_MODULE_20__["SocialSharing"] },
        { type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_21__["Geolocation"] },
        { type: _ionic_native_device_orientation_ngx__WEBPACK_IMPORTED_MODULE_22__["DeviceOrientation"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] }
    ]; };
    MapPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-map',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./map.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/map/map.page.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./map.page.scss */ "./src/app/pages/map/map.page.scss")).default]
        })
    ], MapPage);
    return MapPage;
}());



/***/ })

}]);
//# sourceMappingURL=pages-map-map-module.js.map