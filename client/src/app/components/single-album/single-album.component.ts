import {Component, OnInit, OnDestroy, HostListener} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PicasaService} from "../../shared/services/picasa.service";

@Component({
    selector: 'single-album',
    templateUrl: 'single-album.component.html'
})
export class SingleAlbumComponent implements OnInit, OnDestroy {

    isAlive: boolean = false;

    albumId: string = null;

    albumTitle: string = null;

    resultsPerQuery: number = 24;

    currentResultsIndex: number = 1;

    photos: any[] = [];

    noMorePhotosToShow: boolean = false;

    allowScrollTrack: boolean = true;

    loadingMore: boolean = false;

    constructor(private _ar: ActivatedRoute, private _ps: PicasaService) {
        this.isAlive = true;
    }

    ngOnInit() {

        this._ar.params.takeWhile(() => this.isAlive).subscribe(
            params => {
                this.albumId = params['albumId'];
                this.getPhotos();
            }
        );
    }

    getPhotos() {

        if (!this.noMorePhotosToShow) {

            this.allowScrollTrack = false;
            this.loadingMore = true;

            this._ps.getAlbumContent(this.albumId, this.resultsPerQuery, this.currentResultsIndex).subscribe(
                res => {
                    console.log(res);
                    if (!this.albumTitle) { this.albumTitle = res.data.feed.title.$t }
                    if (res.data.feed.entry && res.data.feed.entry.length) {
                        this.photos = this.photos.concat(res.data.feed.entry);
                        this.currentResultsIndex = this.currentResultsIndex + res.data.feed.entry.length;
                    } else {
                        this.noMorePhotosToShow = true;
                    }
                },
                error => {
                    console.log(error);
                },
                () => {
                    this.allowScrollTrack = true;
                    this.loadingMore = false;
                }
            );
        }
    }

    @HostListener('window: scroll') checkIfTrackerInViewport() {

        if (this.allowScrollTrack) {

            let clientHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
            let scrollTrackerRect = document.getElementById('scroll-tracker').getBoundingClientRect();

            if (scrollTrackerRect.top <= clientHeight) {
                this.getPhotos();
            }
        }
    }

    ngOnDestroy() {
        this.isAlive = false;
    }
}
