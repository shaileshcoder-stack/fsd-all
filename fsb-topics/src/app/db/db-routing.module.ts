import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MongoComponent } from './mongo/mongo.component';
import { MysqlComponent } from './mysql/mysql.component';
import { PostgresssqlComponent } from './postgresssql/postgresssql.component';

const routes: Routes = [
  {
    path:'mongo', component:MongoComponent
  },
{  path:'mysql', component:MysqlComponent
},
{
  path:'postgresssql',component:PostgresssqlComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DbRoutingModule { }
