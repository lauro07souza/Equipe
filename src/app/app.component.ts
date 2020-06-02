import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { Platform } from '@angular/cdk/platform';
import { navigation } from 'app/navigation/navigation';
import { TranslateService } from '@ngx-translate/core';
import { FuseConfigService } from '@arch/services/config.service';

import { FuseSidebarService } from '@arch/components/sidebar/sidebar.service';
import { FuseSplashScreenService } from '@arch/services/splash-screen.service';
import { Component, Inject, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { FuseNavigationService } from '@arch/components/navigation/navigation.service';
import { FuseTranslationLoaderService } from '@arch/services/translation-loader.service';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  fuseConfig: any;
  navigation: any;

  // Private
  private _unsubscribeAll: Subject<any>;

  /**
   * Constructor
   *
   * @param {DOCUMENT} document
   * @param {FuseConfigService} _fuseConfigService
   * @param {FuseNavigationService} _fuseNavigationService
   * @param {FuseSidebarService} _fuseSidebarService
   * @param {FuseSplashScreenService} _fuseSplashScreenService
   * @param {FuseTranslationLoaderService} _fuseTranslationLoaderService
   * @param {Platform} _platform
   * @param {TranslateService} _translateService
   */
  constructor(
    private readonly _renderer2: Renderer2,
    @Inject(DOCUMENT) private document: any,
    private _fuseConfigService: FuseConfigService,
    private _fuseNavigationService: FuseNavigationService,
    private _fuseSidebarService: FuseSidebarService,
    private _fuseSplashScreenService: FuseSplashScreenService,
    private _fuseTranslationLoaderService: FuseTranslationLoaderService,
    private _translateService: TranslateService,
    private _platform: Platform
  ) {
    this.barraGoverno();
    this.navigation = navigation;

    this._fuseNavigationService.register('main', this.navigation);

    this._fuseNavigationService.setCurrentNavigation('main');

    this._translateService.setDefaultLang('pt-BR');

    this._translateService.use('pt-BR');

    if (this._platform.ANDROID || this._platform.IOS) {
      this.document.body.classList.add('is-mobile');
    }

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // -----------------------------------------------------------------------------------------------------
  // @ Lifecycle hooks
  // -----------------------------------------------------------------------------------------------------

  /**
   * On init
   */
  ngOnInit(): void {
    // Subscribe to config changes
    this._fuseConfigService.config
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((config) => {
        this.fuseConfig = config;

        // Boxed
        if (this.fuseConfig.layout.width === 'boxed') {
          this.document.body.classList.add('boxed');
        } else {
          this.document.body.classList.remove('boxed');
        }

        // Color theme - Use normal for loop for IE11 compatibility
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.document.body.classList.length; i++) {
          const className = this.document.body.classList[i];

          if (className.startsWith('theme-')) {
            this.document.body.classList.remove(className);
          }
        }

        this.document.body.classList.add(this.fuseConfig.colorTheme);
      });
  }

  /**
   * On destroy
   */
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  /**
   * Toggle sidebar open
   *
   * @param key
   */
  toggleSidebarOpen(key): void {
    this._fuseSidebarService.getSidebar(key).toggleOpen();
  }

  barraGoverno(): void {
    const s = this._renderer2.createElement('script');
    s.type = 'text/javascript';
    s.defer = 'defer';
    s.src = 'https://barra.brasil.gov.br/barra_2.0.js';
    s.text = ``;
    this._renderer2.appendChild(this.document.body, s);
  }
}
