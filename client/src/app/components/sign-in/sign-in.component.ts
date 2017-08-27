import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";

@Component({
    selector: 'sign-in',
    templateUrl: 'sign-in.component.html'
})
export class SignInComponent implements OnInit {

    authUrl: string = this._auth.getAuthCodeUrl;

    constructor(private _auth: AuthService) {
    }

    ngOnInit() {
    }
}
