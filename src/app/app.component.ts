import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { TranslateService } from '@ngx-translate/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { BoxConfigService } from '@box/services/config.service';
import { BoxNavigationService } from '@box/components/navigation/navigation.service';
import { BoxSidebarService } from '@box/components/sidebar/sidebar.service';
import { BoxSplashScreenService } from '@box/services/splash-screen.service';
import { BoxTranslationLoaderService } from '@box/services/translation-loader.service';

import { navigation } from 'app/navigation/navigation';
import { locale as navigationEnglish } from 'app/navigation/i18n/en';
import { locale as navigationTurkish } from 'app/navigation/i18n/tr';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  boxConfig: any;
  navigation: any;

  private _unsubscribeAll: Subject<any>;

  constructor(
    @Inject(DOCUMENT) private document: any,
    private _boxConfigService: BoxConfigService,
    private _boxNavigationService: BoxNavigationService,
    private _boxSidebarService: BoxSidebarService,
    private _boxSplashScreenService: BoxSplashScreenService,
    private _boxTranslationLoaderService: BoxTranslationLoaderService,
    private _translateService: TranslateService,
    private _platform: Platform
  ) {
    this.navigation = navigation;

    this._boxNavigationService.register('main', this.navigation);

    this._boxNavigationService.setCurrentNavigation('main');

    this._translateService.addLangs(['en', 'tr']);

    this._translateService.setDefaultLang('en');

    this._boxTranslationLoaderService.loadTranslations(navigationEnglish, navigationTurkish);

    this._translateService.use('en');

    if (this._platform.ANDROID || this._platform.IOS) {
      this.document.body.classList.add('is-mobile');
    }

    this._unsubscribeAll = new Subject();
  }


  ngOnInit(): void {
    this._boxConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {

        this.boxConfig = config;

        if (this.boxConfig.layout.width === 'boxed') {
          this.document.body.classList.add('boxed');
        }
        else {
          this.document.body.classList.remove('boxed');
        }

        for (let i = 0; i < this.document.body.classList.length; i++) {
          const className = this.document.body.classList[i];

          if (className.startsWith('theme-')) {
            this.document.body.classList.remove(className);
          }
        }

        this.document.body.classList.add(this.boxConfig.colorTheme);
      });
  }

  ngOnDestroy(): void {
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  toggleSidebarOpen(key): void {
    this._boxSidebarService.getSidebar(key).toggleOpen();
  }
}
