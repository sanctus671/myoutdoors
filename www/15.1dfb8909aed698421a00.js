(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"5F+P":function(t,n,o){"use strict";o.d(n,"a",(function(){return l}));var e=o("mrSG"),r=o("UxYa"),i=o("fXoL"),a=o("TEn/"),u=o("ri4K"),c=o("ohih"),s=o("ofXK");function p(t,n){1&t&&(i.Kb(0,"div",10),i.Ib(1,"ion-spinner",0),i.Jb())}function g(t,n){1&t&&(i.Kb(0,"span"),i.lc(1,"s"),i.Jb())}function b(t,n){if(1&t){var o=i.Lb();i.Kb(0,"ion-item"),i.Kb(1,"ion-label",11),i.Kb(2,"h2"),i.lc(3),i.Jb(),i.Kb(4,"p"),i.lc(5),i.kc(6,g,2,0,"span",12),i.Jb(),i.Jb(),i.Kb(7,"ion-button",13),i.Sb("click",(function(){i.ec(o);var t=n.$implicit;return i.Ub().joinGroup(t)})),i.lc(8," Join "),i.Jb(),i.Jb()}if(2&t){var e=n.$implicit;i.xb(3),i.mc(e.name),i.xb(2),i.nc(" ",e.participants.length," participant"),i.xb(1),i.Xb("ngIf",1!==e.participants.length)}}function f(t,n){if(1&t){var o=i.Lb();i.Kb(0,"div",14),i.Kb(1,"ion-button",2),i.Sb("click",(function(){return i.ec(o),i.Ub().loadMoreGroups()})),i.lc(2),i.Jb(),i.Jb()}if(2&t){var e=i.Ub();i.xb(2),i.nc("Load More (+",e.groups.count-50*e.page,")")}}var l=function(){function t(t,n,o,e,r,i,a){this.loadingController=t,this.alertController=n,this.modalController=o,this.navController=e,this.authenticationService=r,this.navParams=i,this.groupService=a,this.groups={data:[],count:0},this.loading=!0,this.search="",this.page=1,this.getGroups()}return t.prototype.ngOnInit=function(){},t.prototype.getGroups=function(){var t=this;this.groupService.getGroups(this.search,this.page).then((function(n){t.groups=n,t.loading=!1})).catch((function(){t.loading=!1}))},t.prototype.loadMoreGroups=function(){var t=this;this.page+=1,this.groupService.getGroups(this.search,this.page).then((function(n){t.groups.data.concat(n.data)}))},t.prototype.doSearch=function(){this.page=1,this.getGroups()},t.prototype.createGroup=function(){return Object(e.a)(this,void 0,void 0,(function(){var t,n=this;return Object(e.c)(this,(function(o){switch(o.label){case 0:return[4,this.modalController.create({component:r.a,componentProps:{}})];case 1:return(t=o.sent()).onDidDismiss().then((function(t){t&&t.data&&n.groupService.createGroup(t.data.group).then((function(t){n.join(t.id)}))})),[4,t.present()];case 2:return o.sent(),[2]}}))}))},t.prototype.joinGroup=function(t){var n=this;this.groupService.joinGroup(t.id).then((function(){n.join(t.id)}))},t.prototype.join=function(t){this.modalController.dismiss({group_id:t})},t.prototype.dismiss=function(){this.modalController.dismiss()},t.\u0275fac=function(n){return new(n||t)(i.Hb(a.J),i.Hb(a.a),i.Hb(a.L),i.Hb(a.M),i.Hb(u.a),i.Hb(a.N),i.Hb(c.a))},t.\u0275cmp=i.Bb({type:t,selectors:[["app-join-group"]],decls:15,vars:3,consts:[["color","primary"],["slot","start"],[3,"click"],["name","close"],["slot","end"],[1,"join-group"],["class","join-group__loading",4,"ngIf"],[1,"join-group__list"],[4,"ngFor","ngForOf"],["class","join_group__load-more",4,"ngIf"],[1,"join-group__loading"],[1,"ion-text-wrap"],[4,"ngIf"],["slot","end",3,"click"],[1,"join_group__load-more"]],template:function(t,n){1&t&&(i.Kb(0,"ion-header"),i.Kb(1,"ion-toolbar",0),i.Kb(2,"ion-buttons",1),i.Kb(3,"ion-button",2),i.Sb("click",(function(){return n.dismiss()})),i.Ib(4,"ion-icon",3),i.Jb(),i.Jb(),i.Kb(5,"ion-title"),i.lc(6,"Join Group"),i.Jb(),i.Kb(7,"ion-buttons",4),i.Kb(8,"ion-button",2),i.Sb("click",(function(){return n.createGroup()})),i.lc(9," Create Group "),i.Jb(),i.Jb(),i.Jb(),i.Jb(),i.Kb(10,"ion-content",5),i.kc(11,p,2,0,"div",6),i.Kb(12,"ion-list",7),i.kc(13,b,9,3,"ion-item",8),i.Jb(),i.kc(14,f,3,1,"div",9),i.Jb()),2&t&&(i.xb(11),i.Xb("ngIf",n.loading),i.xb(2),i.Xb("ngForOf",n.groups.data),i.xb(1),i.Xb("ngIf",n.groups.count>50*n.page))},directives:[a.o,a.G,a.h,a.g,a.p,a.F,a.k,s.j,a.u,s.i,a.D,a.r,a.t],styles:[".join-group[_ngcontent-%COMP%]   .join-group__loading[_ngcontent-%COMP%]{padding-top:40px;padding-bottom:60px;text-align:center}.join-group[_ngcontent-%COMP%]   .join-group__loading[_ngcontent-%COMP%]   ion-spinner[_ngcontent-%COMP%]{margin:0 auto;width:30px;height:30px}"]}),t}()},AyA4:function(t,n,o){"use strict";o.r(n),o.d(n,"JoinGroupPageModule",(function(){return g}));var e=o("ofXK"),r=o("3Pt+"),i=o("TEn/"),a=o("tyNb"),u=o("5F+P"),c=o("fXoL"),s=[{path:"",component:u.a}],p=function(){function t(){}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[a.j.forChild(s)],a.j]}),t}(),g=function(){function t(){}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(n){return new(n||t)},imports:[[e.b,r.a,i.H,p]]}),t}()},UxYa:function(t,n,o){"use strict";o.d(n,"a",(function(){return l}));var e=o("AytR"),r=o("fXoL"),i=o("tyNb"),a=o("B7Rs"),u=o("a/9d"),c=o("TEn/"),s=o("ri4K"),p=o("ofXK"),g=o("3Pt+");function b(t,n){1&t&&r.Ib(0,"ion-icon",16)}function f(t,n){if(1&t&&(r.Kb(0,"ion-avatar",17),r.Ib(1,"img",18),r.Jb()),2&t){var o=r.Ub();r.xb(1),r.Xb("src",o.group.image,r.gc)}}var l=function(){function t(t,n,o,e,r,i,a,u,c){this.router=t,this.transfer=n,this.camera=o,this.loadingController=e,this.alertController=r,this.modalController=i,this.navController=a,this.authenticationService=u,this.navParams=c,this.group={}}return t.prototype.ngOnInit=function(){},t.prototype.dismiss=function(){this.modalController.dismiss()},t.prototype.changeImage=function(){var t=this;this.camera.getPicture({sourceType:this.camera.PictureSourceType.PHOTOLIBRARY,destinationType:this.camera.DestinationType.FILE_URI,encodingType:this.camera.EncodingType.JPEG,quality:25}).then((function(n){var o;t.loadingController.create({message:"Your image is being uploaded. Please wait...",duration:2e4}).then((function(t){o=t,t.present()}));var r=t.transfer.create(),i={fileKey:"media_file",fileName:Math.random().toString(36).substring(2),params:{},mimeType:"image/jpeg"};r.upload(n,encodeURI(e.a.apiUrl+"/upload"),i).then((function(n){if(n.response){var e=JSON.parse(n.response);t.group.image=e.file}o.dismiss()}),(function(n){t.alertController.create({header:"Error",subHeader:"There was a problem uploading your image",message:JSON.stringify(n),buttons:[{text:"Dismiss",role:"cancel"}]}).then((function(t){t.present()})),o.dismiss()}))}),(function(t){}))},t.prototype.save=function(){this.modalController.dismiss(this.group)},t.\u0275fac=function(n){return new(n||t)(r.Hb(i.g),r.Hb(a.a),r.Hb(u.a),r.Hb(c.J),r.Hb(c.a),r.Hb(c.L),r.Hb(c.M),r.Hb(s.a),r.Hb(c.N))},t.\u0275cmp=r.Bb({type:t,selectors:[["app-create-group"]],decls:29,vars:5,consts:[["color","primary"],["slot","start"],[3,"click"],["name","close"],[1,"create-group"],[1,"create-group__form"],[1,"create-group__form__avatar"],["name","people",4,"ngIf"],["item-start","",4,"ngIf"],["color","primary",3,"click"],["position","floating"],["clearInput","","type","text",3,"ngModel","ngModelChange"],["slot","end",3,"ngModel","ngModelChange"],[3,"ngModel","ngModelChange"],[1,"create-group-footer"],["color","primary","expand","full",1,"create-group-footer__button",3,"click"],["name","people"],["item-start",""],[3,"src"]],template:function(t,n){1&t&&(r.Kb(0,"ion-header"),r.Kb(1,"ion-toolbar",0),r.Kb(2,"ion-buttons",1),r.Kb(3,"ion-button",2),r.Sb("click",(function(){return n.dismiss()})),r.Ib(4,"ion-icon",3),r.Jb(),r.Jb(),r.Kb(5,"ion-title"),r.lc(6,"Create Group"),r.Jb(),r.Jb(),r.Jb(),r.Kb(7,"ion-content",4),r.Kb(8,"ion-list",5),r.Kb(9,"ion-item",6),r.kc(10,b,1,0,"ion-icon",7),r.kc(11,f,2,1,"ion-avatar",8),r.Kb(12,"ion-button",9),r.Sb("click",(function(){return n.changeImage()})),r.lc(13,"Select Photo"),r.Jb(),r.Jb(),r.Kb(14,"ion-item"),r.Kb(15,"ion-label",10),r.lc(16,"Name"),r.Jb(),r.Kb(17,"ion-input",11),r.Sb("ngModelChange",(function(t){return n.group.name=t})),r.Jb(),r.Jb(),r.Kb(18,"ion-item"),r.Kb(19,"ion-label"),r.lc(20,"Public"),r.Jb(),r.Kb(21,"ion-checkbox",12),r.Sb("ngModelChange",(function(t){return n.group.public=t})),r.Jb(),r.Jb(),r.Kb(22,"ion-item"),r.Kb(23,"ion-label",10),r.lc(24,"Description"),r.Jb(),r.Kb(25,"ion-textarea",13),r.Sb("ngModelChange",(function(t){return n.group.description=t})),r.Jb(),r.Jb(),r.Jb(),r.Jb(),r.Kb(26,"ion-footer",14),r.Kb(27,"ion-button",15),r.Sb("click",(function(){return n.save()})),r.lc(28," Create "),r.Jb(),r.Jb()),2&t&&(r.xb(10),r.Xb("ngIf",!n.group.image),r.xb(1),r.Xb("ngIf",n.group.image),r.xb(6),r.Xb("ngModel",n.group.name),r.xb(4),r.Xb("ngModel",n.group.public),r.xb(4),r.Xb("ngModel",n.group.description))},directives:[c.o,c.G,c.h,c.g,c.p,c.F,c.k,c.u,c.r,p.j,c.t,c.q,c.R,g.d,g.g,c.i,c.b,c.E,c.n,c.d],styles:[".create-group[_ngcontent-%COMP%]   .create-group__form__avatar[_ngcontent-%COMP%]{margin-top:5px;margin-bottom:5px}.create-group[_ngcontent-%COMP%]   .create-group__form__avatar[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{width:20px;height:20px;padding:10px;border-radius:20px;background-color:#000;color:#fff;margin-bottom:5px}.create-group[_ngcontent-%COMP%]   .create-group__form__avatar[_ngcontent-%COMP%]   ion-avatar[_ngcontent-%COMP%]{margin-bottom:5px}.create-group[_ngcontent-%COMP%]   .create-group__form__avatar[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{margin-left:15px}"]}),t}()},ohih:function(t,n,o){"use strict";o.d(n,"a",(function(){return c}));var e=o("AytR"),r=o("2Vo4"),i=o("fXoL"),a=o("tk/3"),u=o("e8h1"),c=function(){function t(t,n){this.http=t,this.storage=n,this.currentGroup=new r.a({})}return t.prototype.getGroups=function(t,n){var o=this;return new Promise((function(r,i){o.storage.get("go_token").then((function(a){a?o.http.get(e.a.apiUrl+"/groups?token="+a+"&page="+n+"&search="+t).subscribe((function(t){o.storage.set("go_groups",t),r(t)}),(function(t){o.storage.get("go_groups").then((function(n){n?r(n):i(t)}))})):i()}))}))},t.prototype.getJoinedGroups=function(){var t=this;return new Promise((function(n,o){t.storage.get("go_token").then((function(r){r?t.http.get(e.a.apiUrl+"/groups?token="+r+"&joined=1").subscribe((function(o){t.storage.set("go_joinedgroups",o),n(o)}),(function(e){t.storage.get("go_joinedgroups").then((function(t){t?n(t):o(e)}))})):o()}))}))},t.prototype.getInvitedGroups=function(){var t=this;return new Promise((function(n,o){t.storage.get("go_token").then((function(r){r?t.http.get(e.a.apiUrl+"/groups?token="+r+"&invited=1").subscribe((function(o){t.storage.set("go_invitedgroups",o),n(o)}),(function(e){t.storage.get("go_invitedgroups").then((function(t){t?n(t):o(e)}))})):o()}))}))},t.prototype.getGroup=function(t){var n=this;return new Promise((function(o,r){n.storage.get("go_token").then((function(i){i?n.http.get(e.a.apiUrl+"/groups/"+t+"?token="+i).subscribe((function(e){n.storage.set("go_group"+t,e),o(e)}),(function(e){n.storage.get("go_group"+t).then((function(t){t?o(t):r(e)}))})):r()}))}))},t.prototype.createGroup=function(t){var n=this;return new Promise((function(o,r){n.storage.get("go_token").then((function(i){i?n.http.post(e.a.apiUrl+"/groups?token="+i,t).subscribe((function(t){o(t)}),(function(t){r(t)})):r()}))}))},t.prototype.editGroup=function(t){var n=this;return new Promise((function(o,r){n.storage.get("go_token").then((function(i){i?n.http.put(e.a.apiUrl+"/groups/"+t.id+"?token="+i,t).subscribe((function(t){o(t)}),(function(t){r(t)})):r()}))}))},t.prototype.joinGroup=function(t){var n=this;return new Promise((function(o,r){n.storage.get("go_token").then((function(i){i?n.http.post(e.a.apiUrl+"/joingroup?token="+i,{group_id:t}).subscribe((function(t){o(t)}),(function(t){r(t)})):r()}))}))},t.prototype.inviteUser=function(t){var n=this;return new Promise((function(o,r){n.storage.get("go_token").then((function(i){i?n.http.post(e.a.apiUrl+"/invitegroup?token="+i,t).subscribe((function(t){o(t)}),(function(t){r(t)})):r()}))}))},t.prototype.leaveGroup=function(t){var n=this;return new Promise((function(o,r){n.storage.get("go_token").then((function(i){i?n.http.post(e.a.apiUrl+"/leavegroup?token="+i,{group_id:t}).subscribe((function(t){o(t)}),(function(t){r(t)})):r()}))}))},t.prototype.getMessages=function(t){var n=this;return new Promise((function(o,r){n.storage.get("go_token").then((function(i){i?n.http.get(e.a.apiUrl+"/groupmessages/"+t+"?token="+i).subscribe((function(e){n.storage.set("go_messages"+t,e),o(e)}),(function(e){n.storage.get("go_messages"+t).then((function(t){t?o(t):r(e)}))})):r()}))}))},t.prototype.createMessage=function(t){var n=this;return new Promise((function(o,r){n.storage.get("go_token").then((function(i){i?n.http.post(e.a.apiUrl+"/groupmessages?token="+i,t).subscribe((function(t){o(t)}),(function(t){r(t)})):r()}))}))},t.prototype.subscribeCurrentGroup=function(){return this.currentGroup.asObservable()},t.prototype.getCurrentGroup=function(){var t=this;return new Promise((function(n,o){t.storage.get("go_currentgroup").then((function(t){t?n(t):o()}))}))},t.prototype.setCurrentGroup=function(t){this.storage.set("go_currentgroup",t),this.currentGroup.next(t)},t.\u0275fac=function(n){return new(n||t)(i.Ob(a.a),i.Ob(u.b))},t.\u0275prov=i.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()}}]);