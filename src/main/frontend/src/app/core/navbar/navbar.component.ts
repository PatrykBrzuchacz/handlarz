import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import { AuthService } from '../service';
import { LoginDialogComponent } from '../login-dialog/login-dialog.component';
import { RegisterDialogComponent } from '../register-dialog/register-dialog.component';
import { Router } from '@angular/router';
import { UserDto } from '../api-models';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  loggedUser: UserDto;

  constructor(public authService: AuthService, private router: Router, public dialog: MatDialog, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  loginDialog() {
    this.dialog.open(LoginDialogComponent, {
      width: '250px',
      data: {}
    });

  }

  registerDialog() {
    this.dialog.open(RegisterDialogComponent, {
      width: '250px',
      data: {}
    });
  }

  isLogged() {
    return this.authService.isLogged();
  }

  logout() {
    this.authService.logout();
    this.router.navigateByUrl('/home');
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  getUsername() {
    return this.authService.getUsername();
  }
}




