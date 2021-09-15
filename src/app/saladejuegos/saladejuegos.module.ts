import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaladejuegosRoutingModule } from './saladejuegos-routing.module';
import { SaladejuegosComponent } from './saladejuegos.component';


@NgModule({
  declarations: [
    SaladejuegosComponent
  ],
  imports: [
    CommonModule,
    SaladejuegosRoutingModule
  ]
})
export class SaladejuegosModule { }
