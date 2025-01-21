import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbRoutingModule } from './db-routing.module';
import { MongoComponent } from './mongo/mongo.component';
import { MysqlComponent } from './mysql/mysql.component';
import { PostgresssqlComponent } from './postgresssql/postgresssql.component';


@NgModule({
  declarations: [
    MongoComponent,
    MysqlComponent,
    PostgresssqlComponent
  ],
  imports: [
    CommonModule,
    DbRoutingModule
  ]
})
export class DbModule { }
