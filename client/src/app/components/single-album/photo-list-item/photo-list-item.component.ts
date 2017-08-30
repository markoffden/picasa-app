import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: '[photo-list-item]',
    templateUrl: 'photo-list-item.component.html'
})
export class PhotoListItemComponent implements OnInit {

    @Input() photo: any;

    showTooltip: boolean = false;

    constructor() {
    }

    ngOnInit() {
    }

    enableTooltip() {

        this.showTooltip = true;
        setTimeout(() => {

            let thisTooltip: HTMLElement = <HTMLElement>document.getElementsByClassName('photo-tooltip')[0];
            let thisTooltipContent: HTMLElement = <HTMLElement>document.getElementsByClassName('photo-tooltip-content')[0];
            let currScreenWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
            let currScreenHeight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);

            if (thisTooltip) {

                let thisTooltipContentRect = thisTooltipContent.getBoundingClientRect();

                // check if going on over edges on the sides
                if (thisTooltipContentRect.left < 30) {
                    thisTooltip.classList.add('edge-left');
                } else if (thisTooltipContentRect.right > currScreenWidth) {
                    thisTooltip.classList.add('edge-right');
                } else {
                    thisTooltip.classList.add('edge-safe');
                }

                // check if going over edge at the bottom
                if (thisTooltipContentRect.bottom >= currScreenHeight) {
                    thisTooltip.classList.add('bottom-unsafe');
                } else {
                    thisTooltip.classList.add('bottom-safe');
                }
            }

        }, 0);
    }

    disableTooltip() {
        this.showTooltip = false;
    }
}
