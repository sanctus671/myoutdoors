(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{IEcJ:function(t,n,e){"use strict";e.d(n,"a",(function(){return g}));var i=e("AytR"),a=e("fXoL"),o=e("tyNb"),r=e("B7Rs"),c=e("a/9d"),s=e("TEn/"),l=e("ri4K"),m=e("3Pt+"),p=e("ofXK");function b(t,n){1&t&&a.Ib(0,"ion-icon",12)}function u(t,n){if(1&t&&(a.Kb(0,"ion-avatar",13),a.Ib(1,"img",14),a.Jb()),2&t){var e=a.Ub();a.xb(1),a.Xb("src",e.placemark.image,a.gc)}}var g=function(){function t(t,n,e,i,a,o,r,c,s){this.router=t,this.transfer=n,this.camera=e,this.loadingController=i,this.alertController=a,this.modalController=o,this.navController=r,this.authenticationService=c,this.navParams=s,this.placemark={};var l=this.navParams.get("placemark");this.placemark=Object.assign({},l)}return t.prototype.ngOnInit=function(){},t.prototype.changeImage=function(){var t=this;this.camera.getPicture({sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,quality:25}).then((function(n){var e;t.loadingController.create({message:"Your image is being uploaded. Please wait...",duration:2e4}).then((function(t){e=t,t.present()}));var a=t.transfer.create(),o={fileKey:"media_file",fileName:Math.random().toString(36).substring(2),params:{},mimeType:"image/jpeg"};a.upload(n,encodeURI(i.a.apiUrl+"/upload"),o).then((function(n){if(n.response){var i=JSON.parse(n.response);t.placemark.image=i.file}e.dismiss()}),(function(n){t.alertController.create({header:"Error",subHeader:"There was a problem uploading your image",message:JSON.stringify(n),buttons:[{text:"Dismiss",role:"cancel"}]}).then((function(t){t.present()})),e.dismiss()}))}),(function(t){}))},t.prototype.dismiss=function(){this.modalController.dismiss()},t.prototype.update=function(){this.modalController.dismiss({placemark:this.placemark})},t.\u0275fac=function(n){return new(n||t)(a.Hb(o.g),a.Hb(r.a),a.Hb(c.a),a.Hb(s.J),a.Hb(s.a),a.Hb(s.L),a.Hb(s.M),a.Hb(l.a),a.Hb(s.N))},t.\u0275cmp=a.Bb({type:t,selectors:[["app-edit-placemark"]],decls:20,vars:3,consts:[["color","primary"],["slot","start"],[3,"click"],["name","close"],["position","floating"],["clearInput","","type","text",3,"ngModel","ngModelChange"],[1,"edit-placemark-image"],["name","home",4,"ngIf"],["item-start","",4,"ngIf"],["color","primary",3,"click"],[1,"edit-layer-footer"],["color","primary","expand","full",1,"edit-layer-footer__button",3,"click"],["name","home"],["item-start",""],[3,"src"]],template:function(t,n){1&t&&(a.Kb(0,"ion-header"),a.Kb(1,"ion-toolbar",0),a.Kb(2,"ion-buttons",1),a.Kb(3,"ion-button",2),a.Sb("click",(function(){return n.dismiss()})),a.Ib(4,"ion-icon",3),a.Jb(),a.Jb(),a.Kb(5,"ion-title"),a.lc(6,"Edit Placemark"),a.Jb(),a.Jb(),a.Jb(),a.Kb(7,"ion-content"),a.Kb(8,"ion-item"),a.Kb(9,"ion-label",4),a.lc(10,"Name"),a.Jb(),a.Kb(11,"ion-input",5),a.Sb("ngModelChange",(function(t){return n.placemark.name=t})),a.Jb(),a.Jb(),a.Kb(12,"ion-item",6),a.kc(13,b,1,0,"ion-icon",7),a.kc(14,u,2,1,"ion-avatar",8),a.Kb(15,"ion-button",9),a.Sb("click",(function(){return n.changeImage()})),a.lc(16,"Select Image"),a.Jb(),a.Jb(),a.Jb(),a.Kb(17,"ion-footer",10),a.Kb(18,"ion-button",11),a.Sb("click",(function(){return n.update()})),a.lc(19," Update "),a.Jb(),a.Jb()),2&t&&(a.xb(11),a.Xb("ngModel",n.placemark.name),a.xb(2),a.Xb("ngIf",!n.placemark.image),a.xb(1),a.Xb("ngIf",n.placemark.image))},directives:[s.o,s.G,s.h,s.g,s.p,s.F,s.k,s.r,s.t,s.q,s.R,m.d,m.g,p.j,s.n,s.d],styles:[".edit-placemark-image[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}.edit-placemark-image[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:20px;height:20px;padding:10px;border-radius:20px;background-color:#000;color:#fff;margin-bottom:5px}.edit-placemark-image[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{margin-bottom:5px}.edit-placemark-image[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-left:15px}"]}),t}()},z5KQ:function(t,n,e){"use strict";e.r(n),e.d(n,"EditPlacemarkPageModule",(function(){return p}));var i=e("ofXK"),a=e("3Pt+"),o=e("TEn/"),r=e("tyNb"),c=e("IEcJ"),s=e("fXoL"),l=[{path:"",component:c.a}],m=function(){function t(){}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(n){return new(n||t)},imports:[[r.j.forChild(l)],r.j]}),t}(),p=function(){function t(){}return t.\u0275mod=s.Fb({type:t}),t.\u0275inj=s.Eb({factory:function(n){return new(n||t)},imports:[[i.b,a.a,o.H,m]]}),t}()}}]);