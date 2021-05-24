import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator} from '@angular/material';
import {OrderDto, OrderStatus, RegularClientDto} from '../../../../core/api-models';
import {ToastrService} from 'ngx-toastr';
import {WarehouseReleaseModalComponent} from './warehouse-release.modal.component';
import {OrderService} from '../../../order/order.service';
import {RegularClientService} from '../../../regular-client/regular-client.service';
import {AuthService} from '../../../../core/service';

@Component({
  selector: 'app-warehouse-release',
  templateUrl: './warehouse-release.component.html',
  styleUrls: ['./warehouse-release.component.scss']
})
export class WarehouseReleaseComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  documentNumber: string;
  clients = [];
  client: RegularClientDto;
  ordersDataSource = [];
  displayedColumns: string[] = ['documentNumber', 'client', 'price', 'createdDate', 'actions'];
  name: string;

  constructor(private orderService: OrderService,
              private dialog: MatDialog,
              private toastrSerivce: ToastrService,
              private clientService: RegularClientService,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.getOrders();
    this.clientService.getAllUnpaged().subscribe(it => {
      this.clients = it;
    });
  }

  getOrders() {
    this.orderService.getAll({
      orderStatus: OrderStatus.ACCEPTED,
      client: this.client,
      username: this.authService.getUsername(),
      documentNumber: this.documentNumber,
      pageSize: this.paginator.pageSize,
      pageNumber: this.paginator.pageIndex,
    })
      .subscribe(it => this.ordersDataSource = it);
  }

  onPaginationChange() {
    this.getOrders();
  }

  edit(order: OrderDto) {
    const dialogRef = this.dialog.open(WarehouseReleaseModalComponent, {
      width: '800px',
      data: order
    });
  }

  compareByFullName(f1: any, f2: any) {
    return f1 && f2 && f1.firstName === f2.firstName && f1.lastName === f2.lastName;
  }
}
