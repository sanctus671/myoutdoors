(window.webpackJsonp=window.webpackJsonp||[]).push([[66],{smMY:function(e,t,r){"use strict";r.r(t),r.d(t,"ion_reorder",(function(){return u})),r.d(t,"ion_reorder_group",(function(){return f}));var n=r("rePB"),o=r("o0o1"),s=r.n(o),i=r("HaE+"),l=r("1OyB"),a=r("vuIU"),c=r("sxy2"),h=r("N4tN"),d=r("2c9M"),u=function(){function e(t){Object(l.a)(this,e),Object(c.q)(this,t)}return Object(a.a)(e,[{key:"onClick",value:function(e){e.preventDefault(),e.stopImmediatePropagation()}},{key:"render",value:function(){var e=Object(h.b)(this),t="ios"===e?"reorder-three-outline":"reorder-two-sharp";return Object(c.l)(c.c,{class:e},Object(c.l)("slot",null,Object(c.l)("ion-icon",{name:t,lazy:!1,class:"reorder-icon",part:"icon"})))}}]),e}();u.style={ios:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:34px;opacity:0.4}",md:":host([slot]){display:none;line-height:0;z-index:100}.reorder-icon{display:block;font-size:22px}.reorder-icon{font-size:31px;opacity:0.3}"};var f=function(){function e(t){Object(l.a)(this,e),Object(c.q)(this,t),this.ionItemReorder=Object(c.i)(this,"ionItemReorder",7),this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.state=0,this.disabled=!0}var t;return Object(a.a)(e,[{key:"disabledChanged",value:function(){this.gesture&&this.gesture.enable(!this.disabled)}},{key:"connectedCallback",value:(t=Object(i.a)(s.a.mark((function e(){var t,n=this;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t=this.el.closest("ion-content"))){e.next=5;break}return e.next=4,t.getScrollElement();case 4:this.scrollEl=e.sent;case 5:return e.next=7,Promise.resolve().then(r.bind(null,"ItpF"));case 7:this.gesture=e.sent.createGesture({el:this.el,gestureName:"reorder",gesturePriority:110,threshold:0,direction:"y",passive:!1,canStart:function(e){return n.canStart(e)},onStart:function(e){return n.onStart(e)},onMove:function(e){return n.onMove(e)},onEnd:function(){return n.onEnd()}}),this.disabledChanged();case 9:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"disconnectedCallback",value:function(){this.onEnd(),this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"complete",value:function(e){return Promise.resolve(this.completeSync(e))}},{key:"canStart",value:function(e){if(this.selectedItemEl||0!==this.state)return!1;var t=e.event.target.closest("ion-reorder");if(!t)return!1;var r=m(t,this.el);return!!r&&(e.data=r,!0)}},{key:"onStart",value:function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data,r=this.cachedHeights;r.length=0;var n=this.el,o=n.children;if(o&&0!==o.length){for(var s=0,i=0;i<o.length;i++){var l=o[i];r.push(s+=l.offsetHeight),l.$ionIndex=i}var a=n.getBoundingClientRect();if(this.containerTop=a.top,this.containerBottom=a.bottom,this.scrollEl){var c=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=c.top+v,this.scrollElBottom=c.bottom-v}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=b(t),this.selectedItemHeight=t.offsetHeight,this.state=1,t.classList.add(g),Object(d.a)()}}},{key:"onMove",value:function(e){var t=this.selectedItemEl;if(t){var r=this.autoscroll(e.currentY),n=this.containerTop-r,o=Math.max(n,Math.min(e.currentY,this.containerBottom-r)),s=r+o-e.startY,i=this.itemIndexForTop(o-n);if(i!==this.lastToIndex){var l=b(t);this.lastToIndex=i,Object(d.b)(),this.reorderMove(l,i)}t.style.transform="translateY(".concat(s,"px)")}}},{key:"onEnd",value:function(){var e=this.selectedItemEl;if(this.state=2,e){var t=this.lastToIndex,r=b(e);t===r?this.completeSync():this.ionItemReorder.emit({from:r,to:t,complete:this.completeSync.bind(this)}),Object(d.e)()}else this.state=0}},{key:"completeSync",value:function(e){var t=this.selectedItemEl;if(t&&2===this.state){var r=this.el.children,n=r.length,o=this.lastToIndex,s=b(t);o===s||void 0!==e&&!0!==e||this.el.insertBefore(t,s<o?r[o+1]:r[o]),Array.isArray(e)&&(e=y(e,s,o));for(var i=0;i<n;i++)r[i].style.transform="";t.style.transition="",t.classList.remove(g),this.selectedItemEl=void 0,this.state=0}return e}},{key:"itemIndexForTop",value:function(e){var t=this.cachedHeights,r=0;for(r=0;r<t.length&&!(t[r]>e);r++);return r}},{key:"reorderMove",value:function(e,t){for(var r=this.selectedItemHeight,n=this.el.children,o=0;o<n.length;o++){var s=n[o].style,i="";o>e&&o<=t?i="translateY(".concat(-r,"px)"):o<e&&o>=t&&(i="translateY(".concat(r,"px)")),s.transform=i}}},{key:"autoscroll",value:function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-p:e>this.scrollElBottom&&(t=p),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial}},{key:"render",value:function(){var e,t=Object(h.b)(this);return Object(c.l)(c.c,{class:(e={},Object(n.a)(e,t,!0),Object(n.a)(e,"reorder-enabled",!this.disabled),Object(n.a)(e,"reorder-list-active",0!==this.state),e)})}},{key:"el",get:function(){return Object(c.m)(this)}}],[{key:"watchers",get:function(){return{disabled:["disabledChanged"]}}}]),e}(),b=function(e){return e.$ionIndex},m=function(e,t){for(var r;e;){if((r=e.parentElement)===t)return e;e=r}},v=60,p=10,g="reorder-selected",y=function(e,t,r){var n=e[t];return e.splice(t,1),e.splice(r,0,n),e.slice()};f.style=".reorder-list-active>*{-webkit-transition:-webkit-transform 300ms;transition:-webkit-transform 300ms;transition:transform 300ms;transition:transform 300ms, -webkit-transform 300ms;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none !important;transition:none !important;-webkit-box-shadow:0 0 10px rgba(0, 0, 0, 0.4);box-shadow:0 0 10px rgba(0, 0, 0, 0.4);opacity:0.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,  0,  0);transform:translate3d(0,  0,  0)}"}}]);