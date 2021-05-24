import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OrderComponent} from './components/order/order.component';
import {RouterModule, Routes} from '@angular/router';
import {OrderModalComponent} from './components/order/order.modal.component';
import {OrderService} from './order.service';
import {SharedModule} from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
  },

];

@NgModule({
  declarations: [OrderComponent, OrderModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [OrderModalComponent],
  providers: [OrderService]
})
export class OrderModule {
}
