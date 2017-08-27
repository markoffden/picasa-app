import {Injectable} from '@angular/core';
import {environment} from "../../../environments/environment";
import {Http, Headers, Request, RequestOptions, RequestMethod, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

    constructor(private _http: Http) {

    }

    get(url: string) {
        return this.request(url, RequestMethod.Get);
    }

    post(url: string, body: Object) {
        return this.request(url, RequestMethod.Post, body);
    }

    patch(url: string, body: Object) {
        return this.request(url, RequestMethod.Patch, body);
    }

    delete(url: string) {
        return this.request(url, RequestMethod.Delete);
    }

    request(url: string, method: RequestMethod, body?: Object) {

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        if (localStorage.getItem(environment.accessTokenStorageKey) !== null) {
            headers.append('Authorization', `Bearer ${localStorage.getItem(environment.accessTokenStorageKey)}`);
        }

        const requestOptions = new RequestOptions({
            url: `${environment.apiUrl}/${url}`,
            method: method,
            headers: headers
        });

        if (body) {
            requestOptions.body = JSON.stringify({
                data: body
            });
        }

        const request = new Request(requestOptions);

        return this._http.request(request).map(
            (res: Response) => res.json()
        );
    }
}
