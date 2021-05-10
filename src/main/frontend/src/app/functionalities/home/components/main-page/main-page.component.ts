import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../core/service';
import { SidenavService } from '../../../../shared/service/sidenav.service';
import { Router } from '@angular/router';
import { SubscriptionDto } from '../../../../core/api-models';
import { SubscriptionService } from '../../../admin-panel/components/subscription/subscription.service';
import { MatDialog } from '@angular/material';
import { RegisterDialogComponent } from '../../../../core/register-dialog/register-dialog.component';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  subscriptions: SubscriptionDto[] = [];

  constructor(private authService: AuthService,
              private sideNavService: SidenavService,
              private router: Router,
              private subscriptionService: SubscriptionService,
              private dialog: MatDialog) {
  }


  ngOnInit() {
    if (this.authService.isUser()) {
      this.router.navigate(['/products']);
    } else if (this.authService.isAdmin()) {
      this.router.navigate(['/admin-panel']);
    }
    this.subscriptionService.getAll().subscribe(it => this.subscriptions = it);
  }

  register() {
    this.dialog.open(RegisterDialogComponent, {
      width: '250px',
    });
  }
}
