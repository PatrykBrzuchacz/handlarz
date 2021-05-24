import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarehouseReleaseComponent } from './components/warehouse-release/warehouse-release.component';
import {OrderService} from '../order/order.service';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {WarehouseReleaseModalComponent} from './components/warehouse-release/warehouse-release.modal.component';


const routes: Routes = [
  {
    path: '',
    component: WarehouseReleaseComponent,
  },

];

@NgModule({
  declarations: [WarehouseReleaseComponent, WarehouseReleaseModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [OrderService],
  entryComponents: [WarehouseReleaseModalComponent]
})
export class WarehouseReleaseModule { }
