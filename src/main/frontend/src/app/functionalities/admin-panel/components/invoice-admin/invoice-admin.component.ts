import {Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator} from '@angular/material';
import {InvoiceType, UserDto} from '../../../../core/api-models';
import {ToastrService} from 'ngx-toastr';
import {AuthService} from '../../../../core/service';
import {UserService} from '../../../../shared/service/user.service';
import {InvoiceService} from '../../../invoice/invoice.service';

@Component({
  selector: 'app-invoice-admin',
  templateUrl: './invoice-admin.component.html',
  styleUrls: ['./invoice-admin.component.scss']
})
export class InvoiceAdminComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  documentNumber: string;
  invoiceType: InvoiceType;
  InvoiceType = InvoiceType;
  users = [];
  user: UserDto
  invoiceDataSource = [];
  displayedColumns: string[] = ['invoiceNumber', 'invoiceType', 'suborClient', 'createdDate', 'price', 'actions'];
  name: string;

  constructor(private invoiceService: InvoiceService,
              private dialog: MatDialog,
              private toastrSerivce: ToastrService,
              private authService: AuthService,
              private userService: UserService) {
  }

  ngOnInit() {
    this.getOrders();
    this.userService.getAllUnpaged().subscribe(it => {
      this.users = it;
    });
  }

  getOrders() {
    this.invoiceService.getAll({
      documentNumber: this.documentNumber,
      type: InvoiceType.ADMIN,
      user: this.user,
      pageSize: this.paginator.pageSize,
      pageNumber: this.paginator.pageIndex,
    })
      .subscribe(it => this.invoiceDataSource = it);
  }

  onPaginationChange() {
    this.getOrders();
  }

}
