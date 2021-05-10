import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import {MatButtonModule} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {RouterModule} from '@angular/router';
import 'hammerjs';
import { AuthService, AccessTokenInterceptor } from './service';
import { SharedModule } from '../shared/shared.module';
import {AuthGuard} from './auth-guard';
import {SidenavComponent} from './sidenav/sidenav.component';
import {NavbarComponent} from './navbar/navbar.component';
import { SidenavAdminComponent } from './sidenav-admin/sidenav-admin.component';
import { LoginDialogComponent } from './login-dialog/login-dialog.component';
import { RegisterDialogComponent } from './register-dialog/register-dialog.component';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    NavbarComponent,
    SidenavAdminComponent,
    LoginDialogComponent,
    RegisterDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    SharedModule,
    HttpClientModule,
    RouterModule,
    ToastrModule.forRoot()
  ],
  providers: [
    AuthService,
    AuthGuard,
   { provide: HTTP_INTERCEPTORS,
    useClass: AccessTokenInterceptor,
    multi: true,
   }
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    LoginDialogComponent,
    RegisterDialogComponent
  ]
})
export class AppModule { }
