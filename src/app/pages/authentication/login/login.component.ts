import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('password', { static: false })
  passwd: ElementRef;

  constructor(private auth: AuthenticationService) { }

  ngOnInit() {
  }

  onLogin(email: string, e: any) {

    /*console.log(email, this.passwd.nativeElement.value);
    // appel serveur
    const user = { email, name: email };
    sessionStorage.setItem('USER', JSON.stringify(user));*/
    this.auth.login(email, this.passwd.nativeElement.value);
  }

}
