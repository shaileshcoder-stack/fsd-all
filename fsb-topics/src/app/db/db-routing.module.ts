import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MongoComponent } from './mongo/mongo.component';

const routes: Routes = [
  {
    path:'mongo', component:MongoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DbRoutingModule { }
