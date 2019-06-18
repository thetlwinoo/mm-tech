import { NgModule } from '@angular/core';
import { MatButtonModule, MatDialogModule } from '@angular/material';

import { BoxConfirmDialogComponent } from '@box/components/confirm-dialog/confirm-dialog.component';

@NgModule({
    declarations: [
        BoxConfirmDialogComponent
    ],
    imports: [
        MatDialogModule,
        MatButtonModule
    ],
    entryComponents: [
        BoxConfirmDialogComponent
    ],
})
export class BoxConfirmDialogModule
{
}
