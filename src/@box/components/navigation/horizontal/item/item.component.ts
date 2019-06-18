import { Component, HostBinding, Input } from '@angular/core';

@Component({
    selector   : 'box-nav-horizontal-item',
    templateUrl: './item.component.html',
    styleUrls  : ['./item.component.scss']
})
export class BoxNavHorizontalItemComponent
{
    @HostBinding('class')
    classes = 'nav-item';

    @Input()
    item: any;

    constructor()
    {

    }
}
