import { NgModule } from '@angular/core';
import { UserManagmentComponent } from './components/user-managment/user-managment.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SubscriptionFormModalComponent } from './components/subscription/subscription-form-modal.component';
import { InvoiceAdminComponent } from './components/invoice-admin/invoice-admin.component';

@NgModule({
  declarations: [UserManagmentComponent, AdminLayoutComponent, SubscriptionComponent, SubscriptionFormModalComponent, InvoiceAdminComponent],
  imports: [
    SharedModule,
    AdminPanelRoutingModule,
  ],
  providers: [
  ],
  entryComponents: [SubscriptionFormModalComponent]
})
export class AdminPanelModule {
}
