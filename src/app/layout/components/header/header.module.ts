import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ParticlesModule } from 'angular-particle';

@NgModule({
  declarations: [HeaderComponent],
  imports: [
    CommonModule,
    ParticlesModule
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }
