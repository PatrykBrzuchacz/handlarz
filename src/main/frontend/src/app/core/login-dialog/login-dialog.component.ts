import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material';

import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../service';
import { UserCredentials } from '../../shared/model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-dialog',
  templateUrl: './login-dialog.component.html',
  styleUrls: ['./login-dialog.component.scss']
})
export class LoginDialogComponent implements OnInit {

  public loginForm: FormGroup;
  loginFailed: boolean;

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private router: Router,
              public dialogRef: MatDialogRef<LoginDialogComponent>
  ) {
  }

  ngOnInit() {
    this.loginFailed = false;
    this.loginForm = new FormGroup({
      login: new FormControl(null),
      password: new FormControl(null),
    });
  }

  login() {
    this.authService
      .login(this.getUserCredentials())
      .subscribe(this.onSuccess, this.onFail);
  }

  private getUserCredentials(): UserCredentials {
    const formValue = this.loginForm.value;

    return {
      username: formValue.login,
      password: formValue.password
    };
  }

  private onSuccess = () => {
    this.toastr.success('Poprawnie zalogowano');
    this.router.navigateByUrl(this.authService.isAdmin() ? '/admin-panel/users-management' : '/products');
    this.dialogRef.close();
  };

  private onFail = (error: HttpErrorResponse) => {
    if (error.status === 403) {
      this.toastr.error('Podano nieprawidłowe dane', 'Błąd');
    }
    if (error.status === 401) {
      this.toastr.error('Konto jest nieaktywne');
    }
  };
}


