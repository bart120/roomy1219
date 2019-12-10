import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  @ViewChild('password', { static: false })
  passwd: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  onLogin(email: string, e: any) {

    console.log(email, this.passwd.nativeElement.value);
  }

}
