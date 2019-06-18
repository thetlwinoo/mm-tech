import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
    selector   : 'box-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls  : ['./confirm-dialog.component.scss']
})
export class BoxConfirmDialogComponent
{
    public confirmMessage: string;

    /**
     * Constructor
     *
     * @param {MatDialogRef<BoxConfirmDialogComponent>} dialogRef
     */
    constructor(
        public dialogRef: MatDialogRef<BoxConfirmDialogComponent>
    )
    {
    }

}
