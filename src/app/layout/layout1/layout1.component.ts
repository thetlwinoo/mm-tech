import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BoxConfigService } from '@box/services/config.service';
import { navigation } from 'app/navigation/navigation';

@Component({
  selector: 'layout-1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class Layout1Component implements OnInit, OnDestroy {

  boxConfig: any;
  navigation: any;

  private _unsubscribeAll: Subject<any>;

  constructor(
    private _boxConfigService: BoxConfigService
  ) {
    this.navigation = navigation;

    this._unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this._boxConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.boxConfig = config;
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

}
