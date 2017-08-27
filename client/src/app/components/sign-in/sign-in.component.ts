import {Component, OnInit, OnDestroy} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
    selector: 'sign-in',
    templateUrl: 'sign-in.component.html'
})
export class SignInComponent implements OnInit, OnDestroy {

    isAlive: boolean = false;

    authUrl: string = this._auth.getAuthCodeUrl;

    constructor(private _auth: AuthService, private _router: Router) {
        this.isAlive = true;
    }

    ngOnInit() {
        this._auth.isSignedIn.takeWhile(() => this.isAlive).subscribe(
            res => {
                if (res) {
                    this._router.navigate(['albums']);
                }
            }
        );
    }

    ngOnDestroy() {
        this.isAlive = false;
    }
}
