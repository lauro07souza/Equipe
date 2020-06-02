import { NgModule } from '@angular/core';

import { FuseIfOnDomDirective } from '@arch/directives/fuse-if-on-dom/fuse-if-on-dom.directive';
import { FuseInnerScrollDirective } from '@arch/directives/fuse-inner-scroll/fuse-inner-scroll.directive';
import { FusePerfectScrollbarDirective } from '@arch/directives/fuse-perfect-scrollbar/fuse-perfect-scrollbar.directive';
import {
  FuseMatSidenavHelperDirective,
  FuseMatSidenavTogglerDirective,
} from '@arch/directives/fuse-mat-sidenav/fuse-mat-sidenav.directive';

@NgModule({
  declarations: [
    FuseIfOnDomDirective,
    FuseInnerScrollDirective,
    FuseMatSidenavHelperDirective,
    FuseMatSidenavTogglerDirective,
    FusePerfectScrollbarDirective,
  ],
  imports: [],
  exports: [
    FuseIfOnDomDirective,
    FuseInnerScrollDirective,
    FuseMatSidenavHelperDirective,
    FuseMatSidenavTogglerDirective,
    FusePerfectScrollbarDirective,
  ],
})
export class FuseDirectivesModule {}
