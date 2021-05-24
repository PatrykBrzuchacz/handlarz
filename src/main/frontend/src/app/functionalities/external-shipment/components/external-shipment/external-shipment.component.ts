import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator} from '@angular/material';
import {AuthService} from '../../../../core/service';
import {ProductDto} from '../../../../core/api-models';
import {ExternalShipmentModalComponent} from './external-shipment.modal.component';
import {ExternalShipmentService} from '../../external-shipment.service';
import {ProductService} from '../../../product/components/product.service';

@Component({
  selector: 'app-external-shipment',
  templateUrl: './external-shipment.component.html',
  styleUrls: ['./external-shipment.component.scss']
})
export class ExternalShipmentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  loading: boolean;
  documentNumber: string;
  product: ProductDto;
  products = [];

  externalShipmentDataSource = [];
  displayedColumns: string[] = ['documentNr', 'productName', 'issueDate', 'admissionDate', 'price', 'amount'];

  constructor(private externalShipmentService: ExternalShipmentService,
              private dialog: MatDialog,
              private authService: AuthService, private productService: ProductService) {
  }

  ngOnInit() {
    this.getExternalShipments();
    this.productService.getAllUnpaged().subscribe(it => {
      this.products = it;
    });
  }

  getExternalShipments() {
    this.loading = true;
    this.externalShipmentService.getAll({
      username: this.authService.getUsername(),
      pageSize: this.paginator.pageSize,
      pageNumber: this.paginator.pageIndex,
      product: this.product,
      documentNumber: this.documentNumber
    })
      .subscribe(it => {
        this.externalShipmentDataSource = it;
        this.loading = false;
      });
  }

  onPaginationChange() {
    this.getExternalShipments();
  }

  add() {
    const dialogRef = this.dialog.open(ExternalShipmentModalComponent, {
      width: '450px',
    });

    dialogRef.afterClosed().subscribe(it => {
      it.username = this.authService.getUsername();
      this.externalShipmentService.add(it).subscribe(() => this.getExternalShipments());
    });
  }

  edit(product: ProductDto) {
    const dialogRef = this.dialog.open(ExternalShipmentModalComponent, {
      width: '450px',
      data: product
    });

    dialogRef.afterClosed().subscribe(it => {
      it.username = this.authService.getUsername();
      this.externalShipmentService.update(it).subscribe(() => this.getExternalShipments());
    });
  }
}
