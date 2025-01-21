import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NodejsComponent } from './nodejs/nodejs.component';
import { ExpressjsComponent } from './expressjs/expressjs.component';

const routes: Routes = [
  {path:'nodejs', component:NodejsComponent},
  {path :"expressjs" ,component:ExpressjsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BackendRoutingModule { }
