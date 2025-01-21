import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DbRoutingModule } from './db-routing.module';
import { MongoComponent } from './mongo/mongo.component';


@NgModule({
  declarations: [
    MongoComponent
  ],
  imports: [
    CommonModule,
    DbRoutingModule
  ]
})
export class DbModule { }
