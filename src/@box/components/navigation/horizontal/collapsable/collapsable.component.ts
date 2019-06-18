import { Component, HostBinding, HostListener, Input, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { boxAnimations } from '@box/animations';
import { BoxConfigService } from '@box/services/config.service';

@Component({
    selector   : 'box-nav-horizontal-collapsable',
    templateUrl: './collapsable.component.html',
    styleUrls  : ['./collapsable.component.scss'],
    animations : boxAnimations
})
export class BoxNavHorizontalCollapsableComponent implements OnInit, OnDestroy
{
    boxConfig: any;
    isOpen = false;

    @HostBinding('class')
    classes = 'nav-collapsable nav-item';

    @Input()
    item: any;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _boxConfigService: BoxConfigService
    )
    {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void
    {
        this._boxConfigService.config
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(
                (config) => {
                    this.boxConfig = config;
                }
            );
    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    @HostListener('mouseenter')
    open(): void
    {
        this.isOpen = true;
    }

    @HostListener('mouseleave')
    close(): void
    {
        this.isOpen = false;
    }
}
