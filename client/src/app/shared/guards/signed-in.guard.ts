import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from "../services/auth.service";
import 'rxjs/add/operator/map';

@Injectable()
export class SignedInGuard implements CanActivate {

    constructor(private _auth: AuthService, private _router: Router) {

    }

    canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return this._auth.isSignedIn.map(
            res => {
                if (res) {
                    return true;
                } else {
                    this._router.navigate(['']);
                    return false;
                }
            }
        );
    }
}
