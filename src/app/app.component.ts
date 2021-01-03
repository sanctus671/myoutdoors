import {fetch as fetchPolyfill} from 'whatwg-fetch';
window.fetch = fetchPolyfill;

import { Component, NgZone } from '@angular/core';

import { Platform, NavController, LoadingController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { Router, RouterEvent, NavigationEnd } from '@angular/router';
import { AuthenticationService } from './services/authentication/authentication.service';
import { LayerService } from './services/layer/layer.service';
import { OneSignal } from '@ionic-native/onesignal/ngx';

import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';

declare const cordova: any;

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent {
    
    public user:any;
    
    constructor(
        public platform: Platform, private splashScreen: SplashScreen, private statusBar: StatusBar, 
        private authenticationService: AuthenticationService, private router: Router, public storage: Storage, 
        private oneSignal: OneSignal, private navController:NavController, public loadingController: LoadingController, 
        private ngZone: NgZone, public menu: MenuController, private layerService:LayerService) {

        this.initializeApp();
        
        this.authenticationService.getUserData().subscribe(value => {
            
            this.ngZone.run(() => {  
                
                this.user = value;
                this.savePushId();
            
            });
            
        }); 
    }

    initializeApp() {
        this.platform.ready().then(() => {

            this.statusBar.styleDefault();
            if (this.platform.is("android")) {
               this.statusBar.backgroundColorByHexString("#000000");
               this.statusBar.styleLightContent();
            }
            else{
               this.statusBar.styleLightContent();
            }
            
            
            if (this.platform.is('cordova')){

                this.oneSignal.startInit("558d2439-8296-4351-b62c-6fef6cfeee7d", "356756097763");

                this.oneSignal.handleNotificationReceived().subscribe((data) => {
                    data.payload.additionalData["title"] = data.payload.title;
                    let pushData = data.payload.additionalData;                   
                });                



                this.oneSignal.handleNotificationOpened().subscribe((data) => {
                    if (!data.notification.isAppInFocus){
                        let pushData = data.notification.payload.additionalData;

                    }
                });

                this.oneSignal.endInit();    


                cordova.plugins.stripe.setPublishableKey('pk_live_51HCy5eFLLeWNjbSovArWJb6gFvDeAJR1otgvIwTAFMU2VyBrVyGkZzfQrS44r4BKoApBjrs0JQbu1LumVekcrtFN00MLnXKeon');
   


            } 
            
            
            
            this.authenticationService.retreiveUserData().then(() => {});        


            this.authenticationService.authState.subscribe(state => {
                if (state) {
                    this.router.navigate(['']);
                } else {
                    this.router.navigate(['login']);
                }
            });     


            setTimeout(() => {this.splashScreen.hide(); },500);
            
            
            this.layerService.syncOfflineData();
            

        });           

    }
    

    
    
    savePushId(){
        this.oneSignal.getIds().then((data) => {
            if (data.userId){
                //save
                this.authenticationService.savePushId(data.userId).then(() => {});
            }
        }).catch((e) => {
            //console.log(e);
        });        
    }     
    
    
    
}
