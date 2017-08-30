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

    getNeededPhotoSize() {

        let clientWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        if (clientWidth <= 400) {
            return 400;
        } else if (clientWidth > 400 && clientWidth <= 768) {
            return 800;
        } else if (clientWidth > 768 && clientWidth <= 992) {
            return 1024;
        } else if (clientWidth > 992 && clientWidth <= 1200) {
            return 1280;
        } else if (clientWidth > 1200 && clientWidth <= 1480) {
            return 1440;
        } else if (clientWidth > 1480) {
            return 1600;
        } else {
            return null;
        }
    }

    getSinglePhoto() {

        let photoSize = this.getNeededPhotoSize() !== null ? this.getNeededPhotoSize() : 1600;

        this._ps.getSinglePhoto(this.albumId, this.photoId, photoSize).subscribe(
            res => {
                this.photo = res.data.entry;
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
