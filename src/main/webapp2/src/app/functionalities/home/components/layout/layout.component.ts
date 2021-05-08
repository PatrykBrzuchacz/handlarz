import { MapsAPILoader } from '@agm/core';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material';

import { Observable, of } from 'rxjs';
import { catchError, delay, map, startWith, switchMap, tap } from 'rxjs/operators';
import { SidenavService } from '@app/shared/service/sidenav.service';

declare var google: any;

@Component({
  selector: 'app-home-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  @Input()
  isOpen: boolean;
  public geoCoder: any;

  selectedLocationControl = new FormControl();
  locations: Observable<any[]>;

  searchedLocations: any[];

  constructor(private sideNavService: SidenavService) {
  }

  ngOnInit() {
  }

}
