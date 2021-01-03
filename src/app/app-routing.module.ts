import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from './services/authentication/auth-guard.service';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'map',
        pathMatch: 'full',
        canActivate: [AuthGuardService]
    },
    {
      path: 'map',
      loadChildren: () => import('./pages/map/map.module').then(m => m.MapPageModule),
        canActivate: [AuthGuardService]
    },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'signup', loadChildren: './pages/signup/signup.module#SignupPageModule' },
  { path: 'forgot-password', loadChildren: './pages/forgot-password/forgot-password.module#ForgotPasswordPageModule' },
  {
    path: 'groups',
    loadChildren: () => import('./pages/groups/groups.module').then( m => m.GroupsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'logs',
    loadChildren: () => import('./pages/logs/logs.module').then( m => m.LogsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'billing',
    loadChildren: () => import('./pages/billing/billing.module').then( m => m.BillingPageModule)
  },
  {
    path: 'create-log',
    loadChildren: () => import('./pages/create-log/create-log.module').then( m => m.CreateLogPageModule)
  },
  {
    path: 'edit-log',
    loadChildren: () => import('./pages/edit-log/edit-log.module').then( m => m.EditLogPageModule)
  },
  {
    path: 'edit-track',
    loadChildren: () => import('./pages/edit-track/edit-track.module').then( m => m.EditTrackPageModule)
  },
  {
    path: 'edit-placemark',
    loadChildren: () => import('./pages/edit-placemark/edit-placemark.module').then( m => m.EditPlacemarkPageModule)
  },
  {
    path: 'group-invites',
    loadChildren: () => import('./pages/group-invites/group-invites.module').then( m => m.GroupInvitesPageModule)
  },
  {
    path: 'join-group',
    loadChildren: () => import('./pages/join-group/join-group.module').then( m => m.JoinGroupPageModule)
  },
  {
    path: 'edit-layer',
    loadChildren: () => import('./pages/edit-layer/edit-layer.module').then( m => m.EditLayerPageModule)
  },
  {
    path: 'upgrade',
    loadChildren: () => import('./pages/upgrade/upgrade.module').then( m => m.UpgradePageModule)
  },
  {
    path: 'create-group',
    loadChildren: () => import('./pages/create-group/create-group.module').then( m => m.CreateGroupPageModule)
  },
  {
    path: 'invite-user',
    loadChildren: () => import('./pages/invite-user/invite-user.module').then( m => m.InviteUserPageModule)
  },
  {
    path: 'edit-group',
    loadChildren: () => import('./pages/edit-group/edit-group.module').then( m => m.EditGroupPageModule)
  },
  {
    path: 'add-item',
    loadChildren: () => import('./pages/add-item/add-item.module').then( m => m.AddItemPageModule)
  },
  {
    path: 'create-placemark',
    loadChildren: () => import('./pages/create-placemark/create-placemark.module').then( m => m.CreatePlacemarkPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
