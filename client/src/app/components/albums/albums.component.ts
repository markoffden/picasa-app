import {Component, OnInit} from '@angular/core';
import {PicasaService} from "../../shared/services/picasa.service";

@Component({
    selector: 'albums',
    templateUrl: 'albums.component.html'
})
export class AlbumsComponent implements OnInit {

    albums: any[] = null;

    userName: string = null;

    constructor(private _ps: PicasaService) {
    }

    ngOnInit() {

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
            }
        );
    }

}
