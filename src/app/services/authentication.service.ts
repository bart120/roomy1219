import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    private _user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

    get user(): Observable<User> {
        return this._user.asObservable();
    }

    constructor(private router: Router) {
        const u = JSON.parse(sessionStorage.getItem('USER'));
        if (u !== null) {
            this._user.next(u);
            // console.log("next");
        }
    }

    login(login: string, password: string): void {
        const u: User = { email: login, name: login };
        this._user.next(u);
        sessionStorage.setItem('USER', JSON.stringify(u));

    }

    logout(): void {
        this._user.next(null);
        sessionStorage.removeItem('USER');
        this.router.navigate(['/home']);
    }
}
