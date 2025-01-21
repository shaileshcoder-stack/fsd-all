import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GcpComponent } from './gcp/gcp.component';
import { AwsComponent } from './aws/aws.component';
import { AzureComponent } from './azure/azure.component';

const routes: Routes = [
  {
    path:'gcp' ,component:GcpComponent
  },
  { 
    path:'aws', component:AwsComponent

  },
  {
    path:'azure',component:AzureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudeRoutingModule { }
