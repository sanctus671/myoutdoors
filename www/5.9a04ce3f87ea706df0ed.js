(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{uxLX:function(n,o,i){"use strict";i.d(o,"a",(function(){return R}));var t=i("mrSG"),e=i("AytR"),r=i("fXoL"),a=i("tyNb"),c=i("B7Rs"),b=i("a/9d"),f=i("TEn/"),l=i("ri4K"),p=i("ofXK"),s=i("3Pt+");function g(n,o){1&n&&r.Ib(0,"ion-icon",20)}function u(n,o){if(1&n&&(r.Kb(0,"ion-avatar",21),r.Ib(1,"img",22),r.Jb()),2&n){var i=r.Wb();r.xb(1),r.Zb("src",i.profile.avatar,r.kc)}}function _(n,o){if(1&n&&(r.Kb(0,"ion-select-option",23),r.pc(1),r.Jb()),2&n){var i=o.$implicit;r.Zb("value",i),r.xb(1),r.qc(i)}}function d(n,o){if(1&n&&(r.Kb(0,"p",24),r.pc(1),r.Jb()),2&n){var i=r.Wb();r.xb(1),r.qc(i.profile.error)}}function h(n,o){1&n&&r.Ib(0,"ion-icon",25)}function m(n,o){1&n&&r.Ib(0,"ion-spinner")}var v=function(){function n(n,o,i,t,e,r,a,c,b){this.router=n,this.transfer=o,this.camera=i,this.loadingController=t,this.alertController=e,this.modalController=r,this.navController=a,this.authenticationService=c,this.navParams=b;var f=this.navParams.get("profile");this.profile=Object.assign({},f),this.countries=["New Zealand","Australia"]}return n.prototype.ngOnInit=function(){},n.prototype.dismiss=function(){this.modalController.dismiss()},n.prototype.changeImage=function(){var n=this;this.camera.getPicture({sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,quality:25}).then((function(o){var i;n.loadingController.create({message:"Your image is being uploaded. Please wait...",duration:2e4}).then((function(n){i=n,n.present()}));var t=n.transfer.create(),r={fileKey:"media_file",fileName:Math.random().toString(36).substring(2),params:{},mimeType:"image/jpeg"};t.upload(o,encodeURI(e.a.apiUrl+"/upload"),r).then((function(o){if(o.response){var t=JSON.parse(o.response);n.profile.avatar=t.file}i.dismiss()}),(function(o){n.alertController.create({header:"Error",subHeader:"There was a problem uploading your image",message:JSON.stringify(o),buttons:[{text:"Dismiss",role:"cancel"}]}).then((function(n){n.present()})),i.dismiss()}))}),(function(n){}))},n.prototype.save=function(){this.modalController.dismiss(this.profile)},n.\u0275fac=function(o){return new(o||n)(r.Hb(a.g),r.Hb(c.a),r.Hb(b.a),r.Hb(f.I),r.Hb(f.a),r.Hb(f.K),r.Hb(f.L),r.Hb(l.a),r.Hb(f.M))},n.\u0275cmp=r.Bb({type:n,selectors:[["app-edit-profile"]],decls:41,vars:12,consts:[["color","primary"],["slot","start"],[3,"click"],["name","close"],[1,"edit-profile"],[1,"edit-profile__form"],[1,"edit-profile__form__avatar"],["name","person",4,"ngIf"],["item-start","",4,"ngIf"],["color","primary",3,"click"],["position","floating"],["clearInput","","type","text",3,"ngModel","ngModelChange"],["placeholder","Select Date",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[3,"value",4,"ngFor","ngForOf"],["class","signup__form__error",4,"ngIf"],[1,"signup-footer"],["color","primary","expand","full",1,"signup-footer__button",3,"disabled","click"],["name","arrow-forward",4,"ngIf"],[4,"ngIf"],["name","person"],["item-start",""],[3,"src"],[3,"value"],[1,"signup__form__error"],["name","arrow-forward"]],template:function(n,o){1&n&&(r.Kb(0,"ion-header"),r.Kb(1,"ion-toolbar",0),r.Kb(2,"ion-buttons",1),r.Kb(3,"ion-button",2),r.Sb("click",(function(){return o.dismiss()})),r.Ib(4,"ion-icon",3),r.Jb(),r.Jb(),r.Kb(5,"ion-title"),r.pc(6,"Edit Profile"),r.Jb(),r.Jb(),r.Jb(),r.Kb(7,"ion-content",4),r.Kb(8,"ion-list",5),r.Kb(9,"ion-item",6),r.oc(10,g,1,0,"ion-icon",7),r.oc(11,u,2,1,"ion-avatar",8),r.Kb(12,"ion-button",9),r.Sb("click",(function(){return o.changeImage()})),r.pc(13,"Select Photo"),r.Jb(),r.Jb(),r.Kb(14,"ion-item"),r.Kb(15,"ion-label",10),r.pc(16,"Name"),r.Jb(),r.Kb(17,"ion-input",11),r.Sb("ngModelChange",(function(n){return o.profile.name=n})),r.Jb(),r.Jb(),r.Kb(18,"ion-item"),r.Kb(19,"ion-label",10),r.pc(20,"Gender"),r.Jb(),r.Kb(21,"ion-input",11),r.Sb("ngModelChange",(function(n){return o.profile.gender=n})),r.Jb(),r.Jb(),r.Kb(22,"ion-item"),r.Kb(23,"ion-label",10),r.pc(24,"Start Date"),r.Jb(),r.Kb(25,"ion-datetime",12),r.Sb("ngModelChange",(function(n){return o.profile.dob=n})),r.Jb(),r.Jb(),r.Kb(26,"ion-item"),r.Kb(27,"ion-label",10),r.pc(28,"Location"),r.Jb(),r.Kb(29,"ion-select",13),r.Sb("ngModelChange",(function(n){return o.profile.location=n})),r.oc(30,_,2,2,"ion-select-option",14),r.Jb(),r.Jb(),r.Kb(31,"ion-item"),r.Kb(32,"ion-label",10),r.pc(33,"Biography"),r.Jb(),r.Kb(34,"ion-textarea",13),r.Sb("ngModelChange",(function(n){return o.profile.biography=n})),r.Jb(),r.Jb(),r.oc(35,d,2,1,"p",15),r.Jb(),r.Jb(),r.Kb(36,"ion-footer",16),r.Kb(37,"ion-button",17),r.Sb("click",(function(){return o.save()})),r.pc(38," Save\xa0\xa0 "),r.oc(39,h,1,0,"ion-icon",18),r.oc(40,m,1,0,"ion-spinner",19),r.Jb(),r.Jb()),2&n&&(r.xb(10),r.Zb("ngIf",!o.profile.avatar),r.xb(1),r.Zb("ngIf",o.profile.avatar),r.xb(6),r.Zb("ngModel",o.profile.name),r.xb(4),r.Zb("ngModel",o.profile.gender),r.xb(4),r.Zb("ngModel",o.profile.dob),r.xb(4),r.Zb("ngModel",o.profile.location),r.xb(1),r.Zb("ngForOf",o.countries),r.xb(4),r.Zb("ngModel",o.profile.biography),r.xb(1),r.Zb("ngIf",o.profile.error),r.xb(2),r.Zb("disabled",o.profile.loading),r.xb(2),r.Zb("ngIf",!o.profile.loading),r.xb(1),r.Zb("ngIf",o.profile.loading))},directives:[f.o,f.F,f.h,f.g,f.p,f.E,f.k,f.u,f.r,p.j,f.t,f.q,f.Q,s.e,s.h,f.l,f.P,f.A,p.i,f.D,f.n,f.d,f.B,f.C],styles:[".edit-profile[_ngcontent-%COMP%]   .edit-profile__form__avatar[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}.edit-profile[_ngcontent-%COMP%]   .edit-profile__form__avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:20px;height:20px;padding:10px;border-radius:20px;background-color:#000;color:#fff;margin-bottom:5px}.edit-profile[_ngcontent-%COMP%]   .edit-profile__form__avatar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{margin-bottom:5px}.edit-profile[_ngcontent-%COMP%]   .edit-profile__form__avatar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-left:15px}"]}),n}(),P=i("nD9t"),C=i("wd/R"),M=i("tk/3"),O=i("e8h1"),x=function(){function n(n,o){this.http=n,this.storage=o}return n.prototype.getProfile=function(n){var o=this;return new Promise((function(i,t){o.storage.get("go_token").then((function(r){r?o.http.get(e.a.apiUrl+"/profiles/"+n+"?token="+r).subscribe((function(t){o.storage.set("go_profile"+n,t),i(t)}),(function(e){o.storage.get("go_profile"+n).then((function(n){n?i(n):t(e)}))})):t()}))}))},n.prototype.updateProfile=function(n){var o=this;return new Promise((function(i,t){o.storage.get("go_token").then((function(r){r?o.http.put(e.a.apiUrl+"/profiles/"+n.user_id+"?token="+r,n).subscribe((function(n){i(n)}),(function(n){t(n)})):t()}))}))},n.\u0275fac=function(o){return new(o||n)(r.Ob(M.a),r.Ob(O.b))},n.\u0275prov=r.Db({token:n,factory:n.\u0275fac,providedIn:"root"}),n}();function J(n,o){if(1&n){var i=r.Lb();r.Kb(0,"ion-buttons",10),r.Kb(1,"ion-button",3),r.Sb("click",(function(){return r.ic(i),r.Wb().editSettings()})),r.pc(2," Settings "),r.Jb(),r.Jb()}}function K(n,o){1&n&&(r.Kb(0,"div",11),r.Ib(1,"ion-spinner",1),r.Jb())}function I(n,o){if(1&n){var i=r.Lb();r.Kb(0,"ion-icon",16),r.Sb("click",(function(){return r.ic(i),r.Wb(2).editProfile()})),r.Jb()}}function y(n,o){if(1&n){var i=r.Lb();r.Kb(0,"ion-avatar",17),r.Sb("click",(function(){return r.ic(i),r.Wb(2).editProfile()})),r.Ib(1,"img",18),r.Jb()}if(2&n){var t=r.Wb(2);r.xb(1),r.Zb("src",t.profile.avatar,r.kc)}}function k(n,o){if(1&n){var i=r.Lb();r.Kb(0,"h1",3),r.Sb("click",(function(){return r.ic(i),r.Wb(2).editProfile()})),r.pc(1),r.Jb()}if(2&n){var t=r.Wb(2);r.xb(1),r.qc(t.profile.name)}}function S(n,o){if(1&n&&(r.Kb(0,"div",12),r.oc(1,I,1,0,"ion-icon",13),r.oc(2,y,2,1,"ion-avatar",14),r.oc(3,k,2,1,"h1",15),r.Jb()),2&n){var i=r.Wb();r.xb(1),r.Zb("ngIf",!i.profile||!i.profile.avatar),r.xb(1),r.Zb("ngIf",i.profile&&i.profile.avatar),r.xb(1),r.Zb("ngIf",i.profile.name)}}function Z(n,o){1&n&&(r.Kb(0,"a"),r.pc(1,"Change "),r.Ib(2,"ion-icon",26),r.Jb())}function w(n,o){if(1&n){var i=r.Lb();r.Kb(0,"div",23),r.Kb(1,"div",24),r.Sb("click",(function(){return r.ic(i),r.Wb(2).editProfile()})),r.Kb(2,"h5"),r.pc(3,"Name"),r.Jb(),r.oc(4,Z,3,0,"a",25),r.Jb(),r.Kb(5,"p"),r.pc(6),r.Jb(),r.Jb()}if(2&n){var t=r.Wb(2);r.xb(4),r.Zb("ngIf",t.user.id===t.profile.user_id),r.xb(2),r.rc(" ",t.profile.name," ")}}function W(n,o){1&n&&(r.Kb(0,"a"),r.pc(1,"Change "),r.Ib(2,"ion-icon",26),r.Jb())}function D(n,o){if(1&n){var i=r.Lb();r.Kb(0,"div",23),r.Kb(1,"div",24),r.Sb("click",(function(){return r.ic(i),r.Wb(2).editProfile()})),r.Kb(2,"h5"),r.pc(3,"Gender"),r.Jb(),r.oc(4,W,3,0,"a",25),r.Jb(),r.Kb(5,"p"),r.pc(6),r.Jb(),r.Jb()}if(2&n){var t=r.Wb(2);r.xb(4),r.Zb("ngIf",t.user.id===t.profile.user_id),r.xb(2),r.rc(" ",t.profile.gender," ")}}function L(n,o){1&n&&(r.Kb(0,"a"),r.pc(1,"Change "),r.Ib(2,"ion-icon",26),r.Jb())}function H(n,o){if(1&n){var i=r.Lb();r.Kb(0,"div",23),r.Kb(1,"div",24),r.Sb("click",(function(){return r.ic(i),r.Wb(2).editProfile()})),r.Kb(2,"h5"),r.pc(3,"Date of Birth"),r.Jb(),r.oc(4,L,3,0,"a",25),r.Jb(),r.Kb(5,"p"),r.pc(6),r.Jb(),r.Jb()}if(2&n){var t=r.Wb(2);r.xb(4),r.Zb("ngIf",t.user.id===t.profile.user_id),r.xb(2),r.rc(" ",t.formatDate(t.profile.dob)," ")}}function j(n,o){1&n&&(r.Kb(0,"a"),r.pc(1,"Change "),r.Ib(2,"ion-icon",26),r.Jb())}function T(n,o){if(1&n){var i=r.Lb();r.Kb(0,"div",27),r.Sb("click",(function(){return r.ic(i),r.Wb(2).editProfile()})),r.Kb(1,"div",28),r.Kb(2,"h5"),r.pc(3,"Location"),r.Jb(),r.oc(4,j,3,0,"a",25),r.Jb(),r.Kb(5,"p"),r.pc(6),r.Jb(),r.Jb()}if(2&n){var t=r.Wb(2);r.xb(4),r.Zb("ngIf",t.user.id===t.profile.user_id),r.xb(2),r.rc(" ",t.profile.location," ")}}function B(n,o){1&n&&(r.Kb(0,"a"),r.pc(1,"Change "),r.Ib(2,"ion-icon",26),r.Jb())}function E(n,o){if(1&n){var i=r.Lb();r.Kb(0,"div",27),r.Sb("click",(function(){return r.ic(i),r.Wb(2).editProfile()})),r.Kb(1,"div",28),r.Kb(2,"h5"),r.pc(3,"Biography"),r.Jb(),r.oc(4,B,3,0,"a",25),r.Jb(),r.Kb(5,"p"),r.pc(6),r.Jb(),r.Jb()}if(2&n){var t=r.Wb(2);r.xb(4),r.Zb("ngIf",t.user.id===t.profile.user_id),r.xb(2),r.rc(" ",t.profile.biography," ")}}function N(n,o){if(1&n&&(r.Kb(0,"div",19),r.Kb(1,"div",20),r.oc(2,w,7,2,"div",21),r.oc(3,D,7,2,"div",21),r.oc(4,H,7,2,"div",21),r.oc(5,T,7,2,"div",22),r.oc(6,E,7,2,"div",22),r.Jb(),r.Jb()),2&n){var i=r.Wb();r.xb(2),r.Zb("ngIf",i.profile.name),r.xb(1),r.Zb("ngIf",i.profile.gender),r.xb(1),r.Zb("ngIf",i.profile.dob),r.xb(1),r.Zb("ngIf",i.profile.location),r.xb(1),r.Zb("ngIf",i.profile.biography)}}var R=function(){function n(n,o,i,t){var e=this;this.authenticationService=n,this.modalController=o,this.navParams=i,this.profileService=t,this.loading=!0,this.user={profile:{}};var r=this.navParams.get("profile");this.profile={},this.authenticationService.getUserData().subscribe((function(n){e.user=n,console.log(e.user),e.user.id===r&&console.log(e.profile),e.getProfile(r)}))}return n.prototype.ngOnInit=function(){},n.prototype.getProfile=function(n){var o=this;this.profileService.getProfile(n).then((function(n){o.profile=n,o.loading=!1})).catch((function(){}))},n.prototype.updateProfile=function(){var n=this;this.authenticationService.updateProfile(this.user.profile).then((function(){n.authenticationService.retreiveUserData().then((function(){}))}))},n.prototype.editProfile=function(){return Object(t.a)(this,void 0,void 0,(function(){var n,o=this;return Object(t.c)(this,(function(i){switch(i.label){case 0:return this.user.id!==this.profile.user_id&&(this.user.profile.email=this.user.email),[4,this.modalController.create({component:v,componentProps:{profile:Object.assign({},this.user.profile)}})];case 1:return(n=i.sent()).onDidDismiss().then((function(n){n&&n.data&&(Object.assign(o.user.profile,n.data),o.user.email=o.user.profile.email,o.updateProfile())})),[4,n.present()];case 2:return i.sent(),[2]}}))}))},n.prototype.editSettings=function(){return Object(t.a)(this,void 0,void 0,(function(){var n,o=this;return Object(t.c)(this,(function(i){switch(i.label){case 0:return[4,this.modalController.create({component:P.a,componentProps:{}})];case 1:return(n=i.sent()).onDidDismiss().then((function(n){n&&n.data&&n.data.loggedOut&&o.dismiss()})),[4,n.present()];case 2:return i.sent(),[2]}}))}))},n.prototype.dismiss=function(){this.modalController.dismiss()},n.prototype.formatDate=function(n){return C(n).format("DD/MM/YYYY")},n.\u0275fac=function(o){return new(o||n)(r.Hb(l.a),r.Hb(f.K),r.Hb(f.M),r.Hb(x))},n.\u0275cmp=r.Bb({type:n,selectors:[["app-profile"]],decls:12,vars:4,consts:[[1,"ion-no-border"],["color","primary"],["slot","start"],[3,"click"],["name","close"],["slot","end",4,"ngIf"],["fullscreen","true",1,"profile"],["class","profile__loading",4,"ngIf"],["class","profile__header",4,"ngIf"],["class","profile__info",4,"ngIf"],["slot","end"],[1,"profile__loading"],[1,"profile__header"],["name","person",3,"click",4,"ngIf"],["item-start","",3,"click",4,"ngIf"],[3,"click",4,"ngIf"],["name","person",3,"click"],["item-start","",3,"click"],[3,"src"],[1,"profile__info"],[1,"profile__about"],["class","profile__about__item",4,"ngIf"],["class","profile__about__item",3,"click",4,"ngIf"],[1,"profile__about__item"],[1,"profile__about__item__title",3,"click"],[4,"ngIf"],["name","ios-arrow-forward","size","small"],[1,"profile__about__item",3,"click"],[1,"profile__about__item__title"]],template:function(n,o){1&n&&(r.Kb(0,"ion-header",0),r.Kb(1,"ion-toolbar",1),r.Kb(2,"ion-buttons",2),r.Kb(3,"ion-button",3),r.Sb("click",(function(){return o.dismiss()})),r.Ib(4,"ion-icon",4),r.Jb(),r.Jb(),r.Kb(5,"ion-title"),r.pc(6,"Profile"),r.Jb(),r.oc(7,J,3,0,"ion-buttons",5),r.Jb(),r.Jb(),r.Kb(8,"ion-content",6),r.oc(9,K,2,0,"div",7),r.oc(10,S,4,3,"div",8),r.oc(11,N,7,5,"div",9),r.Jb()),2&n&&(r.xb(7),r.Zb("ngIf",o.user.id===o.profile.user_id),r.xb(2),r.Zb("ngIf",o.loading),r.xb(1),r.Zb("ngIf",!o.loading),r.xb(1),r.Zb("ngIf",!o.loading))},directives:[f.o,f.F,f.h,f.g,f.p,f.E,p.j,f.k,f.C,f.d],styles:[".profile[_ngcontent-%COMP%]   .profile__loading[_ngcontent-%COMP%]{padding-top:40px;padding-bottom:60px;text-align:center}.profile[_ngcontent-%COMP%]   .profile__loading[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{margin:0 auto;width:30px;height:30px}.profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]{height:300px;background-color:#ff7f00;text-align:center;margin-bottom:0;color:#fff;padding-top:40px;position:relative;z-index:0}.profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{background-color:#fff;color:#000;width:80px;height:80px;font-size:80px;border-radius:55px;padding:15px}.profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{width:110px;height:110px;display:block;margin:0 auto}.profile[_ngcontent-%COMP%]   .profile__header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{margin-bottom:30px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]{top:-40px;background-color:#fff;z-index:1;position:relative;border-top-left-radius:10px;border-top-right-radius:10px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]{padding:10px 30px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{font-size:22px;text-transform:uppercase;font-weight:600;letter-spacing:3px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]   .profile__about__item[_ngcontent-%COMP%]{margin-top:25px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]   .profile__about__item[_ngcontent-%COMP%]   .profile__about__item__title[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{display:inline-block;margin:0}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]   .profile__about__item[_ngcontent-%COMP%]   .profile__about__item__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{float:right;color:#f25b26}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]   .profile__about__item[_ngcontent-%COMP%]   .profile__about__item__title[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{height:22px;vertical-align:top}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]   .profile__about__item[_ngcontent-%COMP%]   .profile__about__item__title[_ngcontent-%COMP%]   ion-toggle[_ngcontent-%COMP%]{float:right;margin-top:-10px}.profile[_ngcontent-%COMP%]   .profile__info[_ngcontent-%COMP%]   .profile__about[_ngcontent-%COMP%]   .profile__about__item[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{opacity:.7;margin:10px 0 0;font-size:14px}"]}),n}()}}]);