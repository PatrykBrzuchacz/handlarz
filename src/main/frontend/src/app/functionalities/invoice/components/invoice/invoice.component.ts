import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator} from '@angular/material';
import {InvoiceDto, InvoiceType, OrderDto, OrderStatus, RegularClientDto} from '../../../../core/api-models';
import {ToastrService} from 'ngx-toastr';
import {InvoiceService} from '../../invoice.service';
import {InvoiceModalComponent} from './invoice-modal.component';
import {AuthService} from '../../../../core/service';
import {RegularClientService} from '../../../regular-client/regular-client.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  @ViewChild(MatPaginator) paginator: MatPaginator;
  documentNumber: string;
  invoiceType: InvoiceType;
  InvoiceType = InvoiceType;
  clients = [];
  client: RegularClientDto
  invoiceDataSource = [];
  displayedColumns: string[] = ['invoiceNumber', 'invoiceType', 'suborClient', 'createdDate', 'price', 'actions'];
  name: string;

  constructor(private invoiceService: InvoiceService,
              private dialog: MatDialog,
              private toastrSerivce: ToastrService,
              private authService: AuthService,private clientService: RegularClientService) {
  }

  ngOnInit() {
    this.getOrders();
    this.clientService.getAllUnpaged().subscribe(it => {
      this.clients = it;
    });
  }

  getOrders() {
    this.invoiceService.getAll({
      documentNumber: this.documentNumber,
      type: this.invoiceType,
      username: this.authService.getUsername(),
      client: this.client,
      pageSize: this.paginator.pageSize,
      pageNumber: this.paginator.pageIndex,
    })
      .subscribe(it => this.invoiceDataSource = it);
  }

  onPaginationChange() {
    this.getOrders();
  }

  edit(invoice: InvoiceDto) {
    const dialogRef = this.dialog.open(InvoiceModalComponent, {
      width: '800px',
      data: invoice
    });
  }

}
