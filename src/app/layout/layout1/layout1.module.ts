import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout1Component } from './layout1.component';
import { HeaderModule } from 'app/layout/components/header/header.module';
import { ToolbarModule } from 'app/layout/components/toolbar/toolbar.module';
import { FooterModule } from 'app/layout/components/footer/footer.module';
import { NavbarModule } from 'app/layout/components/navbar/navbar.module';
import { ContentModule } from 'app/layout/components/content/content.module';
import { CopyrightModule } from 'app/layout/components/copyright/copyright.module';
import { RouterModule } from '@angular/router';
import { BoxSharedModule } from '@box/shared.module';
import { BoxSidebarModule } from '@box/components';

@NgModule({
  declarations: [
    Layout1Component
  ],
  imports: [
    BoxSharedModule,
    CommonModule,
    RouterModule,
    HeaderModule,
    ContentModule,
    FooterModule,
    NavbarModule,
    ToolbarModule,
    CopyrightModule,
    BoxSidebarModule
  ],
  exports:[
    Layout1Component
  ]
})
export class Layout1Module { }
