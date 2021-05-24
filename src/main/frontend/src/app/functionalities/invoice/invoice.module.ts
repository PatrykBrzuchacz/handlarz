import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {InvoiceService} from './invoice.service';
import {InvoiceModalComponent} from './components/invoice/invoice-modal.component';
import {InvoiceComponent} from './components/invoice/invoice.component';

const routes: Routes = [
  {
    path: '',
    component: InvoiceComponent,
  },

];
@NgModule({
  declarations: [InvoiceComponent, InvoiceModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  providers: [InvoiceService],
  entryComponents: [InvoiceModalComponent]
})
export class InvoiceModule { }
