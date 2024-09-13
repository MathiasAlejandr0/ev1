import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full'
  },
  
  {
    path: 'intro',
    loadChildren: () => import('./pages/intro/intro.module').then( m => m.IntroPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'user-home',
    loadChildren: () => import('./pages/user-home/user-home.module').then( m => m.UserHomePageModule)
  },
  {
    path: 'cambio-pass',
    loadChildren: () => import('./pages/cambio-pass/cambio-pass.module').then( m => m.CambioPassPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
