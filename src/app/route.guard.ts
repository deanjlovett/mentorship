import {
    CanActivate,
    ActivatedRouteSnapshot,
    RouterStateSnapshot,
    Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable()
export class AuthGuard implements CanActivate {
    // eslint-disable-next-line no-useless-constructor
    constructor(private apiService: ApiService, private router: Router) {
    }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {
        const isAuth = this.apiService.getIsAuth();
        if (!isAuth) {
            console.log('Not Logged In, routing to login: ', isAuth);
            void this.router.navigate(['/login']);
        }
        return isAuth;
    }
}
