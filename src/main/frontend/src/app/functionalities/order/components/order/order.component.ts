import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator} from '@angular/material';
import {AuthService} from '../../../../core/service';
import {OrderChangeStatusDto, OrderDto, OrderStatus, RegularClientDto} from '../../../../core/api-models';
import {OrderService} from '../../order.service';
import {OrderModalComponent} from './order.modal.component';
import {HttpErrorResponse} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';
import {RegularClientService} from '../../../regular-client/regular-client.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  documentNumber: string;

  ordersDataSource = [];
  displayedColumns: string[] = ['documentNumber', 'client', 'price', 'createdDate', 'status', 'actions'];
  name: string;
  OrderStatus = OrderStatus;
  clients = [];
  client: RegularClientDto;
  orderStatus: OrderStatus;

  constructor(private orderService: OrderService,
              private dialog: MatDialog,
              private authService: AuthService,
              private toastrSerivce: ToastrService,
              private clientService: RegularClientService) {
  }

  ngOnInit() {
    this.getOrders();
    this.clientService.getAllUnpaged().subscribe(it => {
      this.clients = it;
    });
  }

  getOrders() {
    this.orderService.getAll({
      documentNumber: this.documentNumber,
      pageSize: this.paginator.pageSize,
      pageNumber: this.paginator.pageIndex,
      client: this.client,
      username: this.authService.getUsername(),
      orderStatus: this.orderStatus
    })
      .subscribe(it => this.ordersDataSource = it);
  }

  onPaginationChange() {
    this.getOrders();
  }

  add() {
    const dialogRef = this.dialog.open(OrderModalComponent, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(it => {
      if (it) {
        it.username = this.authService.getUsername();
        this.orderService.add(it).subscribe(() => this.getOrders(), (err: HttpErrorResponse) => {
          if (err.status === 418) {
            this.toastrSerivce.error('Nie udało się stworzyć zamówienia, brak wystarczającej liczby produktów.');
          }
          if(err.status === 409) {
            this.toastrSerivce.error('Przed stworzeniem zamówienia, wybierz odpowiednią subskrypcje!.');
          }
          if(err.status === 410) {
            this.toastrSerivce.error('Limit zamówień na ten miesiąc dla konta z twoją subskrypcją został przekroczony!.');
          }
        });
      }
    });
  }

  edit(order: OrderDto) {
    const dialogRef = this.dialog.open(OrderModalComponent, {
      width: '800px',
      data: order
    });
  }

  changeStatus(status: OrderStatus, id: number) {
    this.orderService.changeStatus({orderStatus: status, orderId: id} as OrderChangeStatusDto).subscribe(it=> {
      this.getOrders();
    });
  }

  compareByFullName(f1: any, f2: any) {
    return f1 && f2 && f1.firstName === f2.firstName && f1.lastName === f2.lastName;
  }
}
