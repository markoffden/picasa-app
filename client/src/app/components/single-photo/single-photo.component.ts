import {Component, OnInit, OnDestroy} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PicasaService} from "../../shared/services/picasa.service";

@Component({
    selector: 'single-photo',
    templateUrl: 'single-photo.component.html'
})
export class SinglePhotoComponent implements OnInit, OnDestroy {

    isAlive: boolean = false;

    albumId: string;

    photoId: string;

    photo: any = null;

    constructor(private _ar: ActivatedRoute, private _ps: PicasaService) {
        this.isAlive = true;
    }

    ngOnInit() {
        this._ar.params.takeWhile(() => this.isAlive).subscribe(
            params => {
                this.albumId = params['albumId'];
                this.photoId = params['photoId'];
                this.getSinglePhoto();
            }
        );
    }

    getSinglePhoto() {

        this._ps.getSinglePhoto(this.albumId, this.photoId).subscribe(
            res => {
                this.photo = res.data.entry;
                console.log(res);
            },
            error => {
                console.log(error);
            }
        );
    };

    ngOnDestroy() {
        this.isAlive = false;
    }
}
