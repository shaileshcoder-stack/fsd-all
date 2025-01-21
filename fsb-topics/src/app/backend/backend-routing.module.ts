import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodejsComponent } from './nodejs/nodejs.component';

const routes: Routes = [
  {path:'nodejs', component:NodejsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
