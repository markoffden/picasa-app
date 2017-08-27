import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {ApiService} from "./api.service";
import {Subject, BehaviorSubject} from "rxjs";
import {Router} from "@angular/router";

@Injectable()
export class AuthService {

    isSignedIn: Subject<boolean> = new BehaviorSubject<boolean>(false);

    getAuthCodeUrl: string = 'https://accounts.google.com/o/oauth2/v2/auth' +
        '?redirect_uri=' + environment.signInRedirectUrl +
        '&prompt=consent' +
        '&response_type=code' +
        '&client_id=' + environment.clientId +
        '&scope=https://picasaweb.google.com/data' +
        '&access_type=offline';

    constructor(private _api: ApiService, private _router: Router) {
        this.checkAuthProgress();
    }

    checkAuthProgress() {
        let currentUrl = window.location.href;
        if (currentUrl.indexOf('code=') > -1) {
            let authCode = decodeURIComponent(currentUrl.substring(currentUrl.indexOf('code=') + 5));
            this.retrieveTokens(authCode);
        } else {
            this.checkIfSignedIn();
        }
    }

    retrieveTokens(code: string) {
        this._api.post('retrieve-access-token', code).subscribe(
            res => {
                let data = res.data;
                this.setAccessToken(data.access_token);
                this.setAccessTokenExpires(data.expires_in);
                this.isSignedIn.next(true);
                this._router.navigate(['albums']);
            },
            error => {
                console.log(error);
            }
        );
    }

    setAccessToken(token: string): void {
        localStorage.setItem(environment.accessTokenStorageKey, token);
    };

    getAccessToken(): string {
        return localStorage.getItem(environment.accessTokenStorageKey);
    }

    setAccessTokenExpires(time: number): void {
        let tokenExpires = String((new Date()).setSeconds(time - 60));
        localStorage.setItem(environment.accessTokenExpiresKey, tokenExpires);
    }

    getAccessTokenExpires(): number {
        return Number(localStorage.getItem(environment.accessTokenExpiresKey));
    }

    isAccessTokenStillValid(): boolean {
        if (this.getAccessTokenExpires() !== null) {
            return (new Date(this.getAccessTokenExpires())) > new Date();
        }
        return false;
    }

    checkIfSignedIn(): void {
        this.isSignedIn.next(this.getAccessToken() !== null && this.isAccessTokenStillValid());
    }
}
