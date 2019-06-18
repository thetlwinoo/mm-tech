import { Directive, Input, OnInit, HostListener, OnDestroy, HostBinding } from '@angular/core';
import { MatSidenav } from '@angular/material';
import { MediaObserver } from '@angular/flex-layout';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BoxMatchMediaService } from '@box/services/match-media.service';
import { BoxMatSidenavHelperService } from '@box/directives/box-mat-sidenav/box-mat-sidenav.service';

@Directive({
    selector: '[boxMatSidenavHelper]'
})
export class BoxMatSidenavHelperDirective implements OnInit, OnDestroy
{
    @HostBinding('class.mat-is-locked-open')
    isLockedOpen: boolean;

    @Input()
    boxMatSidenavHelper: string;

    @Input()
    matIsLockedOpen: string;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _boxMatchMediaService: BoxMatchMediaService,
        private _boxMatSidenavHelperService: BoxMatSidenavHelperService,
        private _matSidenav: MatSidenav,
        private _mediaObserver: MediaObserver
    )
    {
        this.isLockedOpen = true;

        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void
    {
        this._boxMatSidenavHelperService.setSidenav(this.boxMatSidenavHelper, this._matSidenav);

        if ( this._mediaObserver.isActive(this.matIsLockedOpen) )
        {
            this.isLockedOpen = true;
            this._matSidenav.mode = 'side';
            this._matSidenav.toggle(true);
        }
        else
        {
            this.isLockedOpen = false;
            this._matSidenav.mode = 'over';
            this._matSidenav.toggle(false);
        }

        this._boxMatchMediaService.onMediaChange
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                if ( this._mediaObserver.isActive(this.matIsLockedOpen) )
                {
                    this.isLockedOpen = true;
                    this._matSidenav.mode = 'side';
                    this._matSidenav.toggle(true);
                }
                else
                {
                    this.isLockedOpen = false;
                    this._matSidenav.mode = 'over';
                    this._matSidenav.toggle(false);
                }
            });
    }

    ngOnDestroy(): void
    {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }
}

@Directive({
    selector: '[boxMatSidenavToggler]'
})
export class BoxMatSidenavTogglerDirective
{
    @Input()
    boxMatSidenavToggler: string;

    constructor(
        private _boxMatSidenavHelperService: BoxMatSidenavHelperService)
    {
    }

    @HostListener('click')
    onClick(): void
    {
        this._boxMatSidenavHelperService.getSidenav(this.boxMatSidenavToggler).toggle();
    }
}
