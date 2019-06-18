import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation } from '@angular/core';
import { merge, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BoxNavigationService } from '@box/components/navigation/navigation.service';

@Component({
    selector: 'box-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxNavigationComponent implements OnInit {
    @Input()
    layout = 'vertical';

    @Input()
    navigation: any;

    private _unsubscribeAll: Subject<any>;

    constructor(
        private _changeDetectorRef: ChangeDetectorRef,
        private _boxNavigationService: BoxNavigationService
    ) {
        this._unsubscribeAll = new Subject();
    }

    ngOnInit(): void {
        this.navigation = this.navigation || this._boxNavigationService.getCurrentNavigation();

        this._boxNavigationService.onNavigationChanged
            .pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {

                this.navigation = this._boxNavigationService.getCurrentNavigation();

                this._changeDetectorRef.markForCheck();
            });

        merge(
            this._boxNavigationService.onNavigationItemAdded,
            this._boxNavigationService.onNavigationItemUpdated,
            this._boxNavigationService.onNavigationItemRemoved
        ).pipe(takeUntil(this._unsubscribeAll))
            .subscribe(() => {
                this._changeDetectorRef.markForCheck();
            });
    }
}
