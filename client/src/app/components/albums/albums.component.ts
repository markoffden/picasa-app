import {Component, OnInit} from '@angular/core';
import {PicasaService} from "../../shared/services/picasa.service";

@Component({
    selector: 'albums',
    templateUrl: 'albums.component.html'
})
export class AlbumsComponent implements OnInit {

    albums: any[] = [];

    userName: string = null;

    loadingMore: boolean = false;

    constructor(private _ps: PicasaService) {
    }

    ngOnInit() {

        this.loadingMore = true;

        this._ps.getAlbums().subscribe(

            res => {
                this.albums = res.data.feed.entry.filter(
                    item => {
                        return item.title.$t.indexOf('Hangout') === -1;
                    }
                );
                this.userName = res.data.feed.gphoto$nickname.$t;
                console.log(res);
            },
            error => {
                console.log(error);
            },
            () => {
                this.loadingMore = false;
            }
        );
    }

}
