import { Injectable } from '@angular/core';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SidenavService {

  private resource = new Subject<boolean>();

  sidenavOpened = this.resource.asObservable();

  setSidenavOpened(opened: boolean) {
    this.resource.next(opened);
  }
}
