import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {AuthService} from "../services/auth.service";
import 'rxjs/add/operator/map';

@Injectable()
export class SignedInGuard implements CanActivate {

    constructor(private _auth: AuthService) {

    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        return this._auth.isSignedIn.map(res => res);
    }
}
