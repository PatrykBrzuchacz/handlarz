import {Component, OnInit, ViewChild} from '@angular/core';
import {RegularClientService} from '../../regular-client.service';
import {MatDialog, MatPaginator} from '@angular/material';
import {AuthService} from '../../../../core/service';
import {RegularClientFormModal} from './regular-client-form.modal';
import {RegularClientDto} from '../../../../core/api-models';

@Component({
  selector: 'app-regular-client',
  templateUrl: './regular-client.component.html',
  styleUrls: ['./regular-client.component.scss']
})
export class RegularClientComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;

  clientDataSource = [];
  displayedColumns: string[] = ['name', 'companyName', 'NIP', 'city', 'contact', 'actions'];

  constructor(private service: RegularClientService,
              private dialog: MatDialog,
              private authService: AuthService) {
  }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.service.getAll({
      username: this.authService.getUsername(),
      pageSize: this.paginator.pageSize,
      pageNumber: this.paginator.pageIndex
    })
      .subscribe(it => this.clientDataSource = it);
  }

  onPaginationChange() {
    this.getClients();
  }

  add() {
    const dialogRef = this.dialog.open(RegularClientFormModal, {
      width: '800px',
    });

    dialogRef.afterClosed().subscribe(it => {
      it.username = this.authService.getUsername();
      this.service.add(it).subscribe(() => this.getClients());
    });
  }

  edit(regularClientDto: RegularClientDto) {
    const dialogRef = this.dialog.open(RegularClientFormModal, {
      width: '800px',
      data: regularClientDto
    });

    dialogRef.afterClosed().subscribe(it => {
      it.username = this.authService.getUsername();
      this.service.update(it).subscribe(() => this.getClients());
    });
  }
}
