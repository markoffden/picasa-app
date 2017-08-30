import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";

@Injectable()
export class ErrorService {

    constructor(private _auth: AuthService) {
    }

    handleErrorRes(error) {
        if (error.status == 403) {
            this._auth.logOut();
        }
        console.log(error);
    }
}
