import { NgModule } from '@angular/core';

import { BoxIfOnDomDirective } from '@box/directives/box-if-on-dom/box-if-on-dom.directive';
import { BoxInnerScrollDirective } from '@box/directives/box-inner-scroll/box-inner-scroll.directive';
import { BoxPerfectScrollbarDirective } from '@box/directives/box-perfect-scrollbar/box-perfect-scrollbar.directive';
import { BoxMatSidenavHelperDirective, BoxMatSidenavTogglerDirective } from '@box/directives/box-mat-sidenav/box-mat-sidenav.directive';

@NgModule({
    declarations: [
        BoxIfOnDomDirective,
        BoxInnerScrollDirective,
        BoxMatSidenavHelperDirective,
        BoxMatSidenavTogglerDirective,
        BoxPerfectScrollbarDirective
    ],
    imports     : [],
    exports     : [
        BoxIfOnDomDirective,
        BoxInnerScrollDirective,
        BoxMatSidenavHelperDirective,
        BoxMatSidenavTogglerDirective,
        BoxPerfectScrollbarDirective
    ]
})
export class BoxDirectivesModule
{
}
