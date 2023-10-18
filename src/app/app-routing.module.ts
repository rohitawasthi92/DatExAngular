import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './containers';
import { Page404Component } from './views/pages/page404/page404.component';
import { Page500Component } from './views/pages/page500/page500.component';
import { LoginComponent } from './views/pages/login/login.component';
import { RegisterComponent } from './views/pages/register/register.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },

    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./views/home/home.module').then(m => m.HomeModule)
      },   
           
      { path: 'searchdatasets', loadChildren: () => import('./views/searchdatasets/searchdatasets.module').then(m => m.SearchdatasetsModule) },
      { path: 'querybuilder', loadChildren: () => import('./views/querybuilder/querybuilder.module').then(m => m.QuerybuilderModule) },
      { path: 'ExtractConfigure', loadChildren: () => import('./views/extract-configure/extract-configure.module').then(m => m.ExtractConfigureModule) },
      { path: 'subscription', loadChildren: () => import('./views/subscription/subscription.module').then(m => m.SubscriptionModule) },
      { path: 'viewextracts', loadChildren: () => import('./views/viewextracts/viewextracts.module').then(m => m.ViewextractsModule) },
      { path: 'viewsubscriptions', loadChildren: () => import('./views/viewsubscriptions/viewsubscriptions.module').then(m => m.ViewsubscriptionsModule) },
    
     
   
   
      {
        path: 'icons',
        loadChildren: () =>
          import('./views/icons/icons.module').then((m) => m.IconsModule)
      },
     
   
      {
        path: 'pages',
        loadChildren: () =>
          import('./views/pages/pages.module').then((m) => m.PagesModule)
      },
    ]
  },
  {
    path: '404',
    component: Page404Component,
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    component: Page500Component,
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    component: RegisterComponent,
    data: {
      title: 'Register Page'
    }
  },
  
 
 
  
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking'
      // relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
