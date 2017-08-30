import {Component, OnInit} from '@angular/core';
import {PicasaService} from "../../shared/services/picasa.service";
import {ErrorService} from "../../shared/services/error.service";

@Component({
    selector: 'albums',
    templateUrl: 'albums.component.html'
})
export class AlbumsComponent implements OnInit {

    albums: any[] = [];

    userName: string = null;

    loadingMore: boolean = false;

    constructor(private _ps: PicasaService, private _es: ErrorService) {
    }

    ngOnInit() {

        this.loadingMore = true;

        this._ps.getAlbums().subscribe(

            res => {
                this.userName = res.data.feed.gphoto$nickname.$t;
                if (res.data.feed.entry) {
                    this.albums = res.data.feed.entry.filter(
                        item => {
                            return item.title.$t.indexOf('Hangout') === -1;
                        }
                    );
                }
            },
            error => {
                this._es.handleErrorRes(error);
            },
            () => {
                this.loadingMore = false;
            }
        );
    }
}
