import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserManagmentComponent} from './components/user-managment/user-managment.component';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import {InvoiceAdminComponent} from './components/invoice-admin/invoice-admin.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users-management'
  }, {
    path: 'users-management',
    component: UserManagmentComponent,
  }, {
    path: 'subscription',
    component: SubscriptionComponent
  },
  {
    path: 'invoices-admin',
    component: InvoiceAdminComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule {
}
