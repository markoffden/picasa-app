import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: '[photo-list-item]',
    templateUrl: 'photo-list-item.component.html'
})
export class PhotoListItemComponent implements OnInit {

    @Input() photo: any;

    constructor() {
    }

    ngOnInit() {
    }

}
