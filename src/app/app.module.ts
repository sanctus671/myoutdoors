import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule } from '@angular/common/http';

import { OneSignal } from '@ionic-native/onesignal/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { FileTransfer, FileUploadOptions, FileTransferObject } from '@ionic-native/file-transfer/ngx';
import { File } from '@ionic-native/file/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { Device } from '@ionic-native/device/ngx';
import {CrystalLightboxModule} from '@crystalui/angular-lightbox';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { DeviceOrientation } from '@ionic-native/device-orientation/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {ViewTrackPage} from './pages/view-track/view-track.page';
import {ViewPlacemarkPage} from './pages/view-placemark/view-placemark.page';
import {SearchPage} from './pages/search/search.page';
import {GroupsPage} from './pages/groups/groups.page';
import {ProfilePage} from './pages/profile/profile.page';
import {EditProfilePage} from './pages/edit-profile/edit-profile.page';
import {SettingsPage} from './pages/settings/settings.page';
import {LogsPage} from './pages/logs/logs.page';
import {BillingPage} from './pages/billing/billing.page';
import {EditLogPage} from './pages/edit-log/edit-log.page';
import {CreateLogPage} from './pages/create-log/create-log.page';
import {EditTrackPage} from './pages/edit-track/edit-track.page';
import {EditPlacemarkPage} from './pages/edit-placemark/edit-placemark.page';
import {CreatePlacemarkPage} from './pages/create-placemark/create-placemark.page';
import {GroupInvitesPage} from './pages/group-invites/group-invites.page';
import {JoinGroupPage} from './pages/join-group/join-group.page';
import {EditLayerPage} from './pages/edit-layer/edit-layer.page';
import {UpgradePage} from './pages/upgrade/upgrade.page';
import {CreateGroupPage} from './pages/create-group/create-group.page';
import {EditGroupPage} from './pages/edit-group/edit-group.page';
import {InviteUserPage} from './pages/invite-user/invite-user.page';
import {AddItemPage} from './pages/add-item/add-item.page';

@NgModule({
    declarations: [AppComponent, ViewTrackPage, ViewPlacemarkPage, SearchPage, ProfilePage, EditProfilePage, SettingsPage, LogsPage, BillingPage, EditLogPage, CreateLogPage,
    EditTrackPage, EditPlacemarkPage, GroupInvitesPage, JoinGroupPage, EditLayerPage, UpgradePage, CreateGroupPage, EditGroupPage, InviteUserPage, AddItemPage, GroupsPage,
    CreatePlacemarkPage],
    entryComponents: [ViewTrackPage, ViewPlacemarkPage, SearchPage, ProfilePage, EditProfilePage, SettingsPage, LogsPage, BillingPage, EditLogPage, CreateLogPage,
    EditTrackPage, EditPlacemarkPage, GroupInvitesPage, JoinGroupPage, EditLayerPage, UpgradePage, CreateGroupPage, EditGroupPage, InviteUserPage, AddItemPage, GroupsPage,
    CreatePlacemarkPage],
    imports: [
        BrowserModule,
        IonicModule.forRoot(),
        FormsModule,
        AppRoutingModule,
        IonicStorageModule.forRoot(),
        HttpClientModule,
        CrystalLightboxModule
    ],
    providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    OneSignal,
    Camera,
    FileTransfer,
    InAppBrowser,
    SocialSharing,
    Device,
    Geolocation,
    DeviceOrientation
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
