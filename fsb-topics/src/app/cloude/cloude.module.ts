import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudeRoutingModule } from './cloude-routing.module';
import { GcpComponent } from './gcp/gcp.component';


@NgModule({
  declarations: [
    GcpComponent
  ],
  imports: [
    CommonModule,
    CloudeRoutingModule
  ]
})
export class CloudeModule { }
