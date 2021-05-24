import {Component, OnInit, ViewChild} from '@angular/core';
import {ProductDto, SubscriptionDto} from '../../../../core/api-models';
import {MatDialog, MatPaginator} from '@angular/material';
import {ProductService} from '../product.service';
import {RegisterDialogComponent} from '../../../../core/register-dialog/register-dialog.component';
import {ProductFormModalComponent} from './product-form-modal.component';
import {AuthService} from '../../../../core/service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  productDataSource = [];
  displayedColumns: string[] = ['name', 'manufacturer', 'ean', 'sku', 'vat', 'price', 'amount', 'actions'];
  name: string;

  constructor(private productService: ProductService,
              private dialog: MatDialog,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAll({
      username: this.authService.getUsername(),
      pageSize: this.paginator.pageSize,
      pageNumber: this.paginator.pageIndex,
      name: this.name,
    })
      .subscribe(it => this.productDataSource = it);
  }

  onPaginationChange() {
    this.getProducts();
  }

  add() {
    const dialogRef = this.dialog.open(ProductFormModalComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(it => {
      it.username = this.authService.getUsername();
      this.productService.add(it).subscribe(() => this.getProducts());
    });
  }

  edit(product: ProductDto) {
    const dialogRef = this.dialog.open(ProductFormModalComponent, {
      width: '450px',
      data: product
    });

    dialogRef.afterClosed().subscribe(it => {
      it.username = this.authService.getUsername();
      this.productService.update(it).subscribe(() => this.getProducts());
    });
  }
}
