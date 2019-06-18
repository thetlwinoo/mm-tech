import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout1Module } from './layout1/layout1.module';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    Layout1Module
  ],
  exports: [
    Layout1Module
  ]
})
export class LayoutModule { }
