import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'handlarz';


  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  isUser() {
    return this.authService.isUser();
  }

  isAdmin() {
    return this.authService.isAdmin();
  }

  isLogged() {
    return this.authService.isLogged()
  }
}
