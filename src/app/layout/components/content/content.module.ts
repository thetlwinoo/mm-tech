import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { BoxSharedModule } from '@box/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    CommonModule,
    RouterModule,
    BoxSharedModule
  ],
  exports: [
    ContentComponent
  ]
})
export class ContentModule { }
