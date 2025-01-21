import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BackendRoutingModule } from './backend-routing.module';
import { NodejsComponent } from './nodejs/nodejs.component';


@NgModule({
  declarations: [
    NodejsComponent
  ],
  imports: [
    CommonModule,
    BackendRoutingModule
  ]
})
export class BackendModule { }
