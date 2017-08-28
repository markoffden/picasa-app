import {Injectable} from '@angular/core';
import {ApiService} from "./api.service";

@Injectable()
export class PicasaService {

    constructor(private _api: ApiService) {
    }

    getAlbums() {
        return this._api.get('albums');
    }

    getAlbumContent(id: string, resultsNum: number, currIndex: number) {
        return this._api.get(`albums/${id}/${resultsNum}/${currIndex}`);
    }
}
