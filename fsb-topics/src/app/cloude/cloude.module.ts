import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CloudeRoutingModule } from './cloude-routing.module';
import { GcpComponent } from './gcp/gcp.component';
import { AwsComponent } from './aws/aws.component';
import { AzureComponent } from './azure/azure.component';


@NgModule({
  declarations: [
    GcpComponent,
    AwsComponent,
    AzureComponent
  ],
  imports: [
    CommonModule,
    CloudeRoutingModule
  ]
})
export class CloudeModule { }
