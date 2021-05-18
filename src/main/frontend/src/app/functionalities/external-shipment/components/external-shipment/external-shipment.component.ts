import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator} from '@angular/material';
import {AuthService} from '../../../../core/service';
import {ProductDto} from '../../../../core/api-models';
import {ExternalShipmentModalComponent} from './external-shipment.modal.component';
import {ExternalShipmentService} from '../../external-shipment.service';

@Component({
  selector: 'app-external-shipment',
  templateUrl: './external-shipment.component.html',
  styleUrls: ['./external-shipment.component.scss']
})
export class ExternalShipmentComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  loading: boolean;

  externalShipmentDataSource = [];
  displayedColumns: string[] = ['documentNr', 'productName', 'issueDate', 'admissionDate', 'price', 'amount'];

  constructor(private externalShipmentService: ExternalShipmentService,
              private dialog: MatDialog,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.getExternalShipments();
  }

  getExternalShipments() {
    this.loading = true;
    this.externalShipmentService.getAll({
      username: this.authService.getUsername(),
      pageSize: this.paginator.pageSize,
      pageNumber: this.paginator.pageIndex
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
