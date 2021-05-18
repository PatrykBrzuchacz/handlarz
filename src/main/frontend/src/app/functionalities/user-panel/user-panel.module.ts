import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '../../shared/shared.module';
import {UserPanelComponent} from './components/user-panel/user-panel.component';


const routes: Routes = [
  {
    path: '',
    component: UserPanelComponent,
  }
];

@NgModule({
  declarations: [
    UserPanelComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
})
export class UserPanelModule {
}
