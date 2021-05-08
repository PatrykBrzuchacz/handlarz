import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

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

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    SharedModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AuthService,
    AuthGuard,
   { provide: HTTP_INTERCEPTORS,
    useClass: AccessTokenInterceptor,
    multi: true,
   }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
