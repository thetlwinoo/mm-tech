import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatIconModule, MatRippleModule } from '@angular/material';

import { TranslateModule } from '@ngx-translate/core';

import { BoxNavigationComponent } from './navigation.component';
import { BoxNavVerticalItemComponent } from './vertical/item/item.component';
import { BoxNavVerticalCollapsableComponent } from './vertical/collapsable/collapsable.component';
import { BoxNavVerticalGroupComponent } from './vertical/group/group.component';
import { BoxNavHorizontalItemComponent } from './horizontal/item/item.component';
import { BoxNavHorizontalCollapsableComponent } from './horizontal/collapsable/collapsable.component';

@NgModule({
    imports     : [
        CommonModule,
        RouterModule,

        MatIconModule,
        MatRippleModule,

        TranslateModule.forChild()
    ],
    exports     : [
        BoxNavigationComponent
    ],
    declarations: [
        BoxNavigationComponent,
        BoxNavVerticalGroupComponent,
        BoxNavVerticalItemComponent,
        BoxNavVerticalCollapsableComponent,
        BoxNavHorizontalItemComponent,
        BoxNavHorizontalCollapsableComponent
    ]
})
export class BoxNavigationModule
{
}
