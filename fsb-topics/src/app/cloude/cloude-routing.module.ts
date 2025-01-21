import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GcpComponent } from './gcp/gcp.component';

const routes: Routes = [
  {
    path:'gcp' ,component:GcpComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CloudeRoutingModule { }
