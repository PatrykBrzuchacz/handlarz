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
    data: {
      role: 'ROLE_USER'
    },
    canLoad: [AuthGuard],
    path: 'regular-clients',
    loadChildren: 'app/functionalities/regular-client/regular-client.module#RegularClientModule'
  },
  {
    data: {
      role: 'ROLE_USER'
    },
    canLoad: [AuthGuard],
    path: 'user-panel',
    loadChildren: 'app/functionalities/user-panel/user-panel.module#UserPanelModule'
  },
  {
    data: {
      role: 'ROLE_USER'
    },
    canLoad: [AuthGuard],
    path: 'external-shipments',
    loadChildren: 'app/functionalities/external-shipment/external-shipment.module#ExternalShipmentModule'
  },
  {
    data: {
      role: 'ROLE_USER'
    },
    canLoad: [AuthGuard],
    path: 'orders',
    loadChildren: 'app/functionalities/order/order.module#OrderModule'
  },
  {
    data: {
      role: 'ROLE_USER'
    },
    canLoad: [AuthGuard],
    path: 'warehouse-release',
    loadChildren: 'app/functionalities/warehouse-release/warehouse-release.module#WarehouseReleaseModule'
  },
  {
    data: {
      role: 'ROLE_USER'
    },
    canLoad: [AuthGuard],
    path: 'invoices',
    loadChildren: 'app/functionalities/invoice/invoice.module#InvoiceModule'
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
