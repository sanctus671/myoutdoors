(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ion-backdrop.entry.js ***!
  \*****************************************************************/
/*! exports provided: ion_backdrop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ion_backdrop", function() { return Backdrop; });
/* harmony import */ var D_Taylor_Documents_Websites_getoutdoors_mobile_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var D_Taylor_Documents_Websites_getoutdoors_mobile_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var D_Taylor_Documents_Websites_getoutdoors_mobile_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _index_92848855_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index-92848855.js */ "./node_modules/@ionic/core/dist/esm/index-92848855.js");
/* harmony import */ var _ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ionic-global-23e7365a.js */ "./node_modules/@ionic/core/dist/esm/ionic-global-23e7365a.js");
/* harmony import */ var _gesture_controller_89173521_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gesture-controller-89173521.js */ "./node_modules/@ionic/core/dist/esm/gesture-controller-89173521.js");






var backdropIosCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";
var backdropMdCss = ":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}";

var Backdrop = /*#__PURE__*/function () {
  function Backdrop(hostRef) {
    Object(D_Taylor_Documents_Websites_getoutdoors_mobile_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__["default"])(this, Backdrop);

    Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_3__["r"])(this, hostRef);
    this.ionBackdropTap = Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_3__["e"])(this, "ionBackdropTap", 7);
    this.blocker = _gesture_controller_89173521_js__WEBPACK_IMPORTED_MODULE_5__["G"].createBlocker({
      disableScroll: true
    });
    /**
     * If `true`, the backdrop will be visible.
     */

    this.visible = true;
    /**
     * If `true`, the backdrop will can be clicked and will emit the `ionBackdropTap` event.
     */

    this.tappable = true;
    /**
     * If `true`, the backdrop will stop propagation on tap.
     */

    this.stopPropagation = true;
  }

  Object(D_Taylor_Documents_Websites_getoutdoors_mobile_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_2__["default"])(Backdrop, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      if (this.stopPropagation) {
        this.blocker.block();
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      this.blocker.unblock();
    }
  }, {
    key: "onMouseDown",
    value: function onMouseDown(ev) {
      this.emitTap(ev);
    }
  }, {
    key: "emitTap",
    value: function emitTap(ev) {
      if (this.stopPropagation) {
        ev.preventDefault();
        ev.stopPropagation();
      }

      if (this.tappable) {
        this.ionBackdropTap.emit();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _class;

      var mode = Object(_ionic_global_23e7365a_js__WEBPACK_IMPORTED_MODULE_4__["b"])(this);
      return Object(_index_92848855_js__WEBPACK_IMPORTED_MODULE_3__["h"])(_index_92848855_js__WEBPACK_IMPORTED_MODULE_3__["H"], {
        tabindex: "-1",
        class: (_class = {}, Object(D_Taylor_Documents_Websites_getoutdoors_mobile_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, mode, true), Object(D_Taylor_Documents_Websites_getoutdoors_mobile_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'backdrop-hide', !this.visible), Object(D_Taylor_Documents_Websites_getoutdoors_mobile_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_class, 'backdrop-no-tappable', !this.tappable), _class)
      });
    }
  }]);

  return Backdrop;
}();

Backdrop.style = {
  ios: backdropIosCss,
  md: backdropMdCss
};


/***/ })

}]);
//# sourceMappingURL=5.js.map