import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthenticationGuard implements CanActivate {

    private user: User = null;

    constructor(auth: AuthenticationService,
        private router: Router) {
        auth.user.subscribe(
            u => this.user = u
        );
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | Promise<boolean> | boolean {
        if (!this.user) {
            this.router.navigate(['/auth/login']);
        }

        return this.user !== null;
    }
}
