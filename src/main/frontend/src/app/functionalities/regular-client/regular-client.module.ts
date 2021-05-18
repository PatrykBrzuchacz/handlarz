import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RegularClientComponent} from './components/regular-client/regular-client.component';
import {RouterModule, Routes} from '@angular/router';
import {RegularClientFormModal} from './components/regular-client/regular-client-form.modal';
import {SharedModule} from '../../shared/shared.module';


const routes: Routes = [
  {
    path: '',
    component: RegularClientComponent,
  }
];

@NgModule({
  declarations: [
    RegularClientComponent,
    RegularClientFormModal
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
     SharedModule
  ],
  entryComponents: [
    RegularClientFormModal
  ]
})
export class RegularClientModule {
}
