import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatPaginator } from '@angular/material';
import { DomSanitizer } from '@angular/platform-browser';
import { SubscriptionDto, UserDto } from '../../../../core/api-models';
import { SubscriptionService } from './subscription.service';
import { SubscriptionFormModalComponent } from './subscription-form-modal.component';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  displayedColumns: string[] = ['name', 'price', 'ordersCount', 'actions'];
  subscriptions: SubscriptionDto[] = [];

  constructor(private sanitizer: DomSanitizer,
              private subscriptionService: SubscriptionService,
              private dialog: MatDialog
  ) {
  }

  ngOnInit() {
    this.getAll();
  }

  private getAll() {
    this.subscriptionService.getAll().subscribe(it => {
      this.subscriptions = it;
    });
  }

  edit(subscription: SubscriptionDto) {
    const dialogRef = this.dialog.open(SubscriptionFormModalComponent, {
      width: '330px',
      height: '400px',
      data: subscription
    });

    dialogRef.afterClosed().subscribe(it => it && this.subscriptionService.update(it).subscribe(() => this.getAll()));
  }

  add() {
    const dialogRef = this.dialog.open(SubscriptionFormModalComponent, {
      width: '330px',
      height: '400px',
    });

    dialogRef.afterClosed().subscribe(it => it && this.subscriptionService.add(it).subscribe(() => this.getAll()));
  }

}
