import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'Roomy';
  user: User = null;

  constructor(private auth: AuthenticationService) {
    // console.log("const");
  }

  ngOnInit(): void {
    // console.log("subscribe");
    this.auth.user.subscribe(data => {
      this.user = data;
      // console.log("maj");
    });
  }

  onLogout(): void {
    this.auth.logout();
  }
}
