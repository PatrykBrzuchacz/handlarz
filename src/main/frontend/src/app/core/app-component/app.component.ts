import {AfterViewChecked, ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { AuthService } from '../service';
import {MatDrawerContent} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  @ViewChild(MatDrawerContent) matDrawerContent;
  title = 'handlarz';

  contentWidth = '100%';

  constructor(private authService: AuthService, private cdr: ChangeDetectorRef) {
  }

  ngOnInit() {
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges()
  }

  isUser() {
    return this.authService.isUser();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isLogged() {
    return this.authService.isLogged();
  }
}
