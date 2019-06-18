import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';

import { BoxDirectivesModule } from '@box/directives/directives';
// import { BoxPipesModule } from '@box/pipes/pipes.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        BoxDirectivesModule,
        // BoxPipesModule
    ],
    exports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,

        FlexLayoutModule,

        BoxDirectivesModule,
        // BoxPipesModule
    ]
})
export class BoxSharedModule {
}
