import { NgModule } from '@angular/core';

import { BoxSidebarComponent } from './sidebar.component';

@NgModule({
    declarations: [
        BoxSidebarComponent
    ],
    exports     : [
        BoxSidebarComponent
    ]
})
export class BoxSidebarModule
{
}
