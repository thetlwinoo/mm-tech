import { ChangeDetectorRef, Component, HostBinding, Input, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { merge, Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs/operators';

import { BoxNavigationItem } from '@box/types';
import { boxAnimations } from '@box/animations';
import { BoxNavigationService } from '@box/components/navigation/navigation.service';

@Component({
    selector   : 'box-nav-vertical-collapsable',
    templateUrl: './collapsable.component.html',
    styleUrls  : ['./collapsable.component.scss'],
    animations : boxAnimations
})
export class BoxNavVerticalCollapsableComponent implements OnInit, OnDestroy
{
    @Input()
    item: BoxNavigationItem;

    @HostBinding('class')
    classes = 'nav-collapsable nav-item';

    @HostBinding('class.open')
    public isOpen = false;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _boxNavigationService: BoxNavigationService,
        private _router: Router
    )
    {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void
    {
        this._router.events
            .pipe(
                filter(event => event instanceof NavigationEnd),
                takeUntil(this._unsubscribeAll)
            )
            .subscribe((event: NavigationEnd) => {
                if ( this.isUrlInChildren(this.item, event.urlAfterRedirects) )
                {
                    this.expand();
                }
                else
                {
                    this.collapse();
                }
            });

        this._boxNavigationService.onItemCollapsed
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(
                (clickedItem) => {
                    if ( clickedItem && clickedItem.children )
                    {
                        if ( this.isChildrenOf(this.item, clickedItem) )
                        {
                            return;
                        }

                        if ( this.isUrlInChildren(this.item, this._router.url) )
                        {
                            return;
                        }

                        if ( this.item !== clickedItem )
                        {
                            this.collapse();
                        }
                    }
                }
            );

        if ( this.isUrlInChildren(this.item, this._router.url) )
        {
            this.expand();
        }
        else
        {
            this.collapse();
        }

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
        // Unsubscribe from all subscriptions
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
    }

    toggleOpen(ev): void
    {
        ev.preventDefault();

        this.isOpen = !this.isOpen;

        this._boxNavigationService.onItemCollapsed.next(this.item);
        this._boxNavigationService.onItemCollapseToggled.next();
    }

    expand(): void
    {
        if ( this.isOpen )
        {
            return;
        }

        this.isOpen = true;

        this._changeDetectorRef.markForCheck();

        this._boxNavigationService.onItemCollapseToggled.next();
    }

    collapse(): void
    {
        if ( !this.isOpen )
        {
            return;
        }

        this.isOpen = false;

        this._changeDetectorRef.markForCheck();

        this._boxNavigationService.onItemCollapseToggled.next();
    }

    isChildrenOf(parent, item): boolean
    {
        if ( !parent.children )
        {
            return false;
        }

        if ( parent.children.indexOf(item) !== -1 )
        {
            return true;
        }

        for ( const children of parent.children )
        {
            if ( children.children )
            {
                return this.isChildrenOf(children, item);
            }
        }
    }

    isUrlInChildren(parent, url): boolean
    {
        if ( !parent.children )
        {
            return false;
        }

        for ( let i = 0; i < parent.children.length; i++ )
        {
            if ( parent.children[i].children )
            {
                if ( this.isUrlInChildren(parent.children[i], url) )
                {
                    return true;
                }
            }

            if ( parent.children[i].url === url || url.includes(parent.children[i].url) )
            {
                return true;
            }
        }

        return false;
    }

}
