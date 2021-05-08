import { NgModule } from '@angular/core';
import { UserManagmentComponent } from './components/user-managment/user-managment.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { SharedModule } from '@app/shared/shared.module';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';

@NgModule({
  declarations: [UserManagmentComponent, AdminLayoutComponent],
  imports: [
    SharedModule,
    AdminPanelRoutingModule,

  ],
  providers: [

  ],
  entryComponents: [
  ]
})
export class AdminPanelModule { }
