import { NgModule } from '@angular/core';
import { UserManagmentComponent } from './components/user-managment/user-managment.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import {SharedModule} from '../../shared/shared.module';

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
