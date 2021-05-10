import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth-guard';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: 'app/functionalities/home/home.module#HomeModule'
  },
  {
    data: {
      role: 'ROLE_ADMIN'
    },
    canLoad: [AuthGuard],
    path: 'admin-panel',
    loadChildren: 'app/functionalities/admin-panel/admin-panel.module#AdminPanelModule'
  },
  {
    data: {
      role: 'ROLE_USER'
    },
    canLoad: [AuthGuard],
    path: 'products',
    loadChildren: 'app/functionalities/product/product.module#ProductModule'
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
