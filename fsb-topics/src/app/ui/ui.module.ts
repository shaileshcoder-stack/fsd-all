import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UiRoutingModule } from './ui-routing.module';
import { HtmlComponent } from './html/html.component';


@NgModule({
  declarations: [
    HtmlComponent
  ],
  imports: [
    CommonModule,
    UiRoutingModule
  ]
})
export class UiModule { }
