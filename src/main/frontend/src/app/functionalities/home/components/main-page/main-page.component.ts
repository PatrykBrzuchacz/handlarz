import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import { Subscription } from 'rxjs';

import {AuthService} from '../../../../core/service';
import {SidenavService} from '../../../../shared/service/sidenav.service';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent implements OnInit {

  subscription: Subscription;
  isRegistered: boolean;
  tariffDto = [];

  constructor(private authService: AuthService,
              private sideNavService: SidenavService) {
  }


  ngOnInit() {

  }



  isLogged(): boolean {
    return this.authService.isLogged();
  }
}
