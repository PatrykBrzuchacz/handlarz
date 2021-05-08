import { AgmMap, MapsAPILoader } from '@agm/core';
import { Component, OnInit, ViewChild, ViewEncapsulation, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { Subscription, Observable, of } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '@app/core/service';
import { DialogService } from '@app/shared/service/dialog.service';
import { SidenavService } from '@app/shared/service/sidenav.service';
import { FormControl } from '@angular/forms';
import { delay, startWith, switchMap, map, catchError, tap } from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MainPageComponent implements OnInit {

  subscription: Subscription;
  isRegistered: boolean;

  constructor(private authService: AuthService,
              private toastr: ToastrService,
              private sideNavService: SidenavService) {
  }


  ngOnInit() {

  }



  isLogged(): boolean {
    return this.authService.isLogged();
  }
}
