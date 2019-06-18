import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoxProgressBarModule, BoxSidebarModule } from '@box/components';
import { LayoutModule } from 'app/layout/layout.module';
import { BoxModule } from '@box/box.module';
import { BoxSharedModule } from '@box/shared.module';
import { boxConfig } from 'app/box-config';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateModule } from '@ngx-translate/core';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,    
    AppRoutingModule,
    BoxModule.forRoot(boxConfig),
    BrowserAnimationsModule,
    TranslateModule.forRoot(),
    BoxSharedModule,
    BoxProgressBarModule,
    BoxSidebarModule,
    LayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
