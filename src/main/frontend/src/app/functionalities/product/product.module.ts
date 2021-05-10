import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { SharedModule } from '../../shared/shared.module';
import { ProductFormModalComponent } from './components/product/product-form-modal.component';

const routes: Routes = [
  {
    path: '',
    component: ProductComponent,
  },

];

@NgModule({
  declarations: [ProductComponent, ProductFormModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ],
  entryComponents: [
    ProductFormModalComponent
  ]
})
export class ProductModule {
}
