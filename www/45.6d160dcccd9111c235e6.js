(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{"0Pbj":function(o,t,n){"use strict";n.r(t),n.d(t,"ion_button",(function(){return v})),n.d(t,"ion_icon",(function(){return k}));var i,r=n("rePB"),e=n("1OyB"),a=n("vuIU"),c=n("sxy2"),s=n("N4tN"),l=n("gHap"),d=n("sPtc"),b=function(o,t,n,i,r){return n="ios"===(n&&p(n))?"ios":"md",i&&"ios"===n?o=p(i):r&&"md"===n?o=p(r):(o||!t||h(t)||(o=t),g(o)&&(o=p(o))),g(o)&&""!==o.trim()?""!==o.replace(/[a-z]|-|\d/gi,"")?null:o:null},u=function(o){return g(o)&&(o=o.trim(),h(o))?o:null},h=function(o){return o.length>0&&/(\/|\.)/.test(o)},g=function(o){return"string"==typeof o},p=function(o){return o.toLowerCase()},v=function(){function o(t){var n=this;Object(e.a)(this,o),Object(c.q)(this,t),this.ionFocus=Object(c.i)(this,"ionFocus",7),this.ionBlur=Object(c.i)(this,"ionBlur",7),this.inItem=!1,this.inListHeader=!1,this.inToolbar=!1,this.buttonType="button",this.disabled=!1,this.routerDirection="forward",this.strong=!1,this.type="button",this.handleClick=function(o){if("button"===n.type)Object(d.d)(n.href,o,n.routerDirection,n.routerAnimation);else if(Object(l.h)(n.el)){var t=n.el.closest("form");if(t){o.preventDefault();var i=document.createElement("button");i.type=n.type,i.style.display="none",t.appendChild(i),i.click(),i.remove()}}},this.onFocus=function(){n.ionFocus.emit()},this.onBlur=function(){n.ionBlur.emit()}}return Object(a.a)(o,[{key:"componentWillLoad",value:function(){this.inToolbar=!!this.el.closest("ion-buttons"),this.inListHeader=!!this.el.closest("ion-list-header"),this.inItem=!!this.el.closest("ion-item")||!!this.el.closest("ion-item-divider")}},{key:"render",value:function(){var o,t=Object(s.b)(this),n=this.buttonType,i=this.disabled,e=this.size,a=this.href,l=this.color,b=this.expand,u=this.hasIconOnly,h=this.shape,g=this.strong,p=void 0===e&&this.inItem?"small":e,v=void 0===a?"button":"a",f="button"===v?{type:this.type}:{download:this.download,href:a,rel:this.rel,target:this.target},m=this.fill;return void 0===m&&(m=this.inToolbar||this.inListHeader?"clear":"solid"),Object(c.l)(c.c,{onClick:this.handleClick,"aria-disabled":i?"true":null,class:Object(d.a)(l,(o={},Object(r.a)(o,t,!0),Object(r.a)(o,n,!0),Object(r.a)(o,"".concat(n,"-").concat(b),void 0!==b),Object(r.a)(o,"".concat(n,"-").concat(p),void 0!==p),Object(r.a)(o,"".concat(n,"-").concat(h),void 0!==h),Object(r.a)(o,"".concat(n,"-").concat(m),!0),Object(r.a)(o,"".concat(n,"-strong"),g),Object(r.a)(o,"in-toolbar",Object(d.c)("ion-toolbar",this.el)),Object(r.a)(o,"in-toolbar-color",Object(d.c)("ion-toolbar[color]",this.el)),Object(r.a)(o,"button-has-icon-only",u),Object(r.a)(o,"button-disabled",i),Object(r.a)(o,"ion-activatable",!0),Object(r.a)(o,"ion-focusable",!0),o))},Object(c.l)(v,Object.assign({},f,{class:"button-native",part:"native",disabled:i,onFocus:this.onFocus,onBlur:this.onBlur}),Object(c.l)("span",{class:"button-inner"},Object(c.l)("slot",{name:"icon-only"}),Object(c.l)("slot",{name:"start"}),Object(c.l)("slot",null),Object(c.l)("slot",{name:"end"})),"md"===t&&Object(c.l)("ion-ripple-effect",{type:this.rippleType})))}},{key:"hasIconOnly",get:function(){return!!this.el.querySelector('ion-icon[slot="icon-only"]')}},{key:"rippleType",get:function(){return(void 0===this.fill||"clear"===this.fill)&&this.hasIconOnly&&this.inToolbar?"unbounded":"bounded"}},{key:"el",get:function(){return Object(c.m)(this)}}]),o}();v.style={ios:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:10px;--padding-top:0;--padding-bottom:0;--padding-start:1em;--padding-end:1em;--transition:background-color, opacity 100ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:2.8em;font-size:16px;font-weight:500;letter-spacing:-0.03em}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:var(--ion-color-primary-shade, #3171e0);--background-focused:var(--ion-color-primary-shade, #3171e0);--background-hover:var(--ion-color-primary-tint, #4c8dff);--background-activated-opacity:1;--background-focused-opacity:1;--background-hover-opacity:1}:host(.button-outline){--border-radius:10px;--border-width:1px;--border-style:solid;--background-activated:var(--ion-color-primary, #3880ff);--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;--color-activated:var(--ion-color-primary-contrast, #fff)}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:transparent;--background-focused-opacity:.1;font-size:17px;font-weight:normal;letter-spacing:0}:host(.button-large){--border-radius:12px;--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--border-radius:6px;--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-strong){font-weight:600}:host(.button-clear.ion-activated){opacity:0.4}:host(.button-outline.ion-activated.ion-color) .button-native{color:var(--ion-color-contrast)}:host(.button-outline.ion-activated.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-activated) .button-native::after{background:var(--ion-color-shade)}:host(.button-outline.ion-focused.ion-color) .button-native,:host(.button-clear.ion-focused.ion-color) .button-native{color:var(--ion-color-base)}:host(.button-outline.ion-focused.ion-color) .button-native::after,:host(.button-clear.ion-focused.ion-color) .button-native::after{background:var(--ion-color-base)}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-shade)}@media (any-hover: hover){:host(.button-clear:hover),:host(.button-outline:hover){opacity:0.6}:host(.button-clear.ion-color:hover) .button-native,:host(.button-outline.ion-color:hover) .button-native{color:var(--ion-color-base)}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:transparent}:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-tint)}:host(:hover.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native::after{background:#fff;opacity:0.1}}',md:':host{--overflow:hidden;--ripple-color:currentColor;--border-width:initial;--border-color:initial;--border-style:initial;--color-activated:var(--color);--color-focused:var(--color);--color-hover:var(--color);--box-shadow:none;display:inline-block;width:auto;color:var(--color);font-family:var(--ion-font-family, inherit);text-align:center;text-decoration:none;text-overflow:ellipsis;white-space:nowrap;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;vertical-align:top;vertical-align:-webkit-baseline-middle;pointer-events:auto;-webkit-font-kerning:none;font-kerning:none}:host(.button-disabled){cursor:default;opacity:0.5;pointer-events:none}:host(.button-solid){--background:var(--ion-color-primary, #3880ff);--color:var(--ion-color-primary-contrast, #fff)}:host(.button-outline){--border-color:var(--ion-color-primary, #3880ff);--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-clear){--border-width:0;--background:transparent;--color:var(--ion-color-primary, #3880ff)}:host(.button-block){display:block}:host(.button-block) .button-native{margin-left:0;margin-right:0;display:block;width:100%;clear:both;contain:content}:host(.button-block) .button-native::after{clear:both}:host(.button-full){display:block}:host(.button-full) .button-native{margin-left:0;margin-right:0;display:block;width:100%;contain:content}:host(.button-full:not(.button-round)) .button-native{border-radius:0;border-right-width:0;border-left-width:0}.button-native{border-radius:var(--border-radius);-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-indent:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;display:block;position:relative;width:100%;height:100%;-webkit-transition:var(--transition);transition:var(--transition);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);outline:none;background:var(--background);line-height:1;-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);contain:layout style;cursor:pointer;opacity:var(--opacity);overflow:var(--overflow);z-index:0;-webkit-box-sizing:border-box;box-sizing:border-box;-webkit-appearance:none;-moz-appearance:none;appearance:none}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.button-native{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}.button-native::-moz-focus-inner{border:0}.button-inner{display:-ms-flexbox;display:flex;position:relative;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;width:100%;height:100%;z-index:1}::slotted(ion-icon){font-size:1.4em;pointer-events:none}::slotted(ion-icon[slot=start]){margin-left:-0.3em;margin-right:0.3em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:-0.3em;margin-inline-start:-0.3em;-webkit-margin-end:0.3em;margin-inline-end:0.3em}}::slotted(ion-icon[slot=end]){margin-left:0.3em;margin-right:-0.2em;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){::slotted(ion-icon[slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:0.3em;margin-inline-start:0.3em;-webkit-margin-end:-0.2em;margin-inline-end:-0.2em}}::slotted(ion-icon[slot=icon-only]){font-size:1.8em}ion-ripple-effect{color:var(--ripple-color)}.button-native::after{left:0;right:0;top:0;bottom:0;position:absolute;content:"";opacity:0}:host(.ion-activated){color:var(--color-activated)}:host(.ion-activated) .button-native::after{background:var(--background-activated);opacity:var(--background-activated-opacity)}:host(.ion-focused){color:var(--color-focused)}:host(.ion-focused) .button-native::after{background:var(--background-focused);opacity:var(--background-focused-opacity)}@media (any-hover: hover){:host(:hover){color:var(--color-hover)}:host(:hover) .button-native::after{background:var(--background-hover);opacity:var(--background-hover-opacity)}}:host(.button-solid.ion-color) .button-native{background:var(--ion-color-base);color:var(--ion-color-contrast)}:host(.button-outline.ion-color) .button-native{border-color:var(--ion-color-base);background:transparent;color:var(--ion-color-base)}:host(.button-clear.ion-color) .button-native{background:transparent;color:var(--ion-color-base)}:host(.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{color:var(--ion-toolbar-color, var(--color))}:host(.button-outline.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{border-color:var(--ion-toolbar-color, var(--color, var(--border-color)))}:host(.button-solid.in-toolbar:not(.ion-color):not(.in-toolbar-color)) .button-native{background:var(--ion-toolbar-color, var(--background));color:var(--ion-toolbar-background, var(--color))}:host{--border-radius:4px;--padding-top:0;--padding-bottom:0;--padding-start:1.1em;--padding-end:1.1em;--transition:box-shadow 280ms cubic-bezier(.4, 0, .2, 1),\n                background-color 15ms linear,\n                color 15ms linear;margin-left:2px;margin-right:2px;margin-top:4px;margin-bottom:4px;height:36px;font-size:14px;font-weight:500;letter-spacing:0.06em;text-transform:uppercase}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.button-solid){--background-activated:transparent;--background-hover:var(--ion-color-primary-contrast, #fff);--background-focused:var(--ion-color-primary-contrast, #fff);--background-activated-opacity:0;--background-focused-opacity:.24;--background-hover-opacity:.08;--box-shadow:0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12)}:host(.button-solid.ion-activated){--box-shadow:0 5px 5px -3px rgba(0, 0, 0, 0.2), 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12)}:host(.button-outline){--border-width:2px;--border-style:solid;--box-shadow:none;--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-outline.ion-activated.ion-color) .button-native{background:transparent}:host(.button-clear){--background-activated:transparent;--background-focused:var(--ion-color-primary, #3880ff);--background-hover:var(--ion-color-primary, #3880ff);--background-activated-opacity:0;--background-focused-opacity:.12;--background-hover-opacity:.04}:host(.button-round){--border-radius:64px;--padding-top:0;--padding-start:26px;--padding-end:26px;--padding-bottom:0}:host(.button-large){--padding-top:0;--padding-start:1em;--padding-end:1em;--padding-bottom:0;height:2.8em;font-size:20px}:host(.button-small){--padding-top:0;--padding-start:0.9em;--padding-end:0.9em;--padding-bottom:0;height:2.1em;font-size:13px}:host(.button-strong){font-weight:bold}::slotted(ion-icon[slot=icon-only]){padding-left:0;padding-right:0;padding-top:0;padding-bottom:0}:host(.button-solid.ion-color.ion-focused) .button-native::after{background:var(--ion-color-contrast);opacity:0.24}:host(.button-clear.ion-color.ion-focused) .button-native::after,:host(.button-outline.ion-color.ion-focused) .button-native::after{background:var(--ion-color-base);opacity:0.12}@media (any-hover: hover){:host(.button-solid.ion-color:hover) .button-native::after{background:var(--ion-color-contrast);opacity:0.08}:host(.button-clear.ion-color:hover) .button-native::after,:host(.button-outline.ion-color:hover) .button-native::after{background:var(--ion-color-base);opacity:0.04}}'};var f=new Map,m=new Map,k=function(){function o(t){Object(e.a)(this,o),Object(c.q)(this,t),this.isVisible=!1,this.mode=y(),this.lazy=!1}return Object(a.a)(o,[{key:"connectedCallback",value:function(){var o=this;this.waitUntilVisible(this.el,"50px",(function(){o.isVisible=!0,o.loadIcon()}))}},{key:"disconnectedCallback",value:function(){this.io&&(this.io.disconnect(),this.io=void 0)}},{key:"waitUntilVisible",value:function(o,t,n){var i=this;if(this.lazy&&"undefined"!=typeof window&&window.IntersectionObserver){var r=this.io=new window.IntersectionObserver((function(o){o[0].isIntersecting&&(r.disconnect(),i.io=void 0,n())}),{rootMargin:t});r.observe(o)}else n()}},{key:"loadIcon",value:function(){var o=this;if(this.isVisible){var t=function(o){var t,n=u(o.src);if(n)return n;if(n=b(o.name,o.icon,o.mode,o.ios,o.md))return t=n,function(){if("undefined"==typeof window)return new Map;if(!i){var o=window;o.Ionicons=o.Ionicons||{},i=o.Ionicons.map=o.Ionicons.map||new Map}return i}().get(t)||Object(c.o)("svg/".concat(t,".svg"));if(o.icon){if(n=u(o.icon))return n;if(n=u(o.icon[o.mode]))return n}return null}(this);t&&(f.has(t)?this.svgContent=f.get(t):function(o){var t=m.get(o);if(!t){if("undefined"==typeof fetch)return f.set(o,""),Promise.resolve();t=fetch(o).then((function(t){if(t.ok)return t.text().then((function(t){f.set(o,function(o){if(o&&"undefined"!=typeof document){var t=document.createElement("div");t.innerHTML=o;for(var n=t.childNodes.length-1;n>=0;n--)"svg"!==t.childNodes[n].nodeName.toLowerCase()&&t.removeChild(t.childNodes[n]);var i=t.firstElementChild;if(i&&"svg"===i.nodeName.toLowerCase()){var r=i.getAttribute("class")||"";if(i.setAttribute("class",(r+" s-ion-icon").trim()),function o(t){if(1===t.nodeType){if("script"===t.nodeName.toLowerCase())return!1;for(var n=0;n<t.attributes.length;n++){var i=t.attributes[n].value;if(g(i)&&0===i.toLowerCase().indexOf("on"))return!1}for(var r=0;r<t.childNodes.length;r++)if(!o(t.childNodes[r]))return!1}return!0}(i))return t.innerHTML}}return""}(t))}));f.set(o,"")})),m.set(o,t)}return t}(t).then((function(){return o.svgContent=f.get(t)})))}if(!this.ariaLabel){var n=b(this.name,this.icon,this.mode,this.ios,this.md);n&&(this.ariaLabel=n.replace(/\-/g," "))}}},{key:"render",value:function(){var o,t=this.mode||"md",n=this.flipRtl||this.ariaLabel&&(this.ariaLabel.indexOf("arrow")>-1||this.ariaLabel.indexOf("chevron")>-1)&&!1!==this.flipRtl;return Object(c.l)(c.c,{role:"img",class:Object.assign(Object.assign(Object(r.a)({},t,!0),w(this.color)),(o={},Object(r.a)(o,"icon-".concat(this.size),!!this.size),Object(r.a)(o,"flip-rtl",!!n&&"rtl"===this.el.ownerDocument.dir),o))},this.svgContent?Object(c.l)("div",{class:"icon-inner",innerHTML:this.svgContent}):Object(c.l)("div",{class:"icon-inner"}))}},{key:"el",get:function(){return Object(c.m)(this)}}],[{key:"assetsDirs",get:function(){return["svg"]}},{key:"watchers",get:function(){return{name:["loadIcon"],src:["loadIcon"],icon:["loadIcon"]}}}]),o}(),y=function(){return"undefined"!=typeof document&&document.documentElement.getAttribute("mode")||"md"},w=function(o){return o?Object(r.a)({"ion-color":!0},"ion-color-".concat(o),!0):null};k.style=":host{display:inline-block;width:1em;height:1em;contain:strict;fill:currentColor;-webkit-box-sizing:content-box !important;box-sizing:content-box !important}:host .ionicon{stroke:currentColor}.ionicon-fill-none{fill:none}.ionicon-stroke-width{stroke-width:32px;stroke-width:var(--ionicon-stroke-width, 32px)}.icon-inner,.ionicon,svg{display:block;height:100%;width:100%}:host(.flip-rtl) .icon-inner{-webkit-transform:scaleX(-1);transform:scaleX(-1)}:host(.icon-small){font-size:18px !important}:host(.icon-large){font-size:32px !important}:host(.ion-color){color:var(--ion-color-base) !important}:host(.ion-color-primary){--ion-color-base:var(--ion-color-primary, #3880ff)}:host(.ion-color-secondary){--ion-color-base:var(--ion-color-secondary, #0cd1e8)}:host(.ion-color-tertiary){--ion-color-base:var(--ion-color-tertiary, #f4a942)}:host(.ion-color-success){--ion-color-base:var(--ion-color-success, #10dc60)}:host(.ion-color-warning){--ion-color-base:var(--ion-color-warning, #ffce00)}:host(.ion-color-danger){--ion-color-base:var(--ion-color-danger, #f14141)}:host(.ion-color-light){--ion-color-base:var(--ion-color-light, #f4f5f8)}:host(.ion-color-medium){--ion-color-base:var(--ion-color-medium, #989aa2)}:host(.ion-color-dark){--ion-color-base:var(--ion-color-dark, #222428)}"}}]);