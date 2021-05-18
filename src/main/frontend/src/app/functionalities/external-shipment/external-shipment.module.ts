import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExternalShipmentComponent } from './components/external-shipment/external-shipment.component';
import {ExternalShipmentModalComponent} from './components/external-shipment/external-shipment.modal.component';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ExternalShipmentComponent,
  },
];


@NgModule({
  declarations: [ExternalShipmentComponent, ExternalShipmentModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  entryComponents: [
    ExternalShipmentModalComponent,
  ]
})
export class ExternalShipmentModule { }
