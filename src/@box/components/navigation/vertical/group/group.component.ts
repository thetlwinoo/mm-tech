import { ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BoxNavigationItem } from '@box/types';
import { BoxNavigationService } from '@box/components/navigation/navigation.service';

@Component({
    selector   : 'box-nav-vertical-group',
    templateUrl: './group.component.html',
    styleUrls  : ['./group.component.scss']
})
export class BoxNavVerticalGroupComponent implements OnInit, OnDestroy
{
    @HostBinding('class')
    classes = 'nav-group nav-item';

    @Input()
    item: BoxNavigationItem;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _boxNavigationService: BoxNavigationService
    )
    {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void
    {
        merge(
            this._boxNavigationService.onNavigationItemAdded,
            this._boxNavigationService.onNavigationItemUpdated,
            this._boxNavigationService.onNavigationItemRemoved
        ).pipe(takeUntil(this._unsubscribeAll))
         .subscribe(() => {
             this._changeDetectorRef.markForCheck();
         });
    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

}
