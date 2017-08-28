import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: '[album-list-item]',
    templateUrl: 'album-list-item.component.html'
})
export class AlbumListItemComponent implements OnInit {

    @Input() album: any = null;

    constructor() {
    }

    ngOnInit() {
    }

}
