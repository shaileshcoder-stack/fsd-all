import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevopsRoutingModule } from './devops-routing.module';
import { GitComponent } from './git/git.component';


@NgModule({
  declarations: [
    GitComponent
  ],
  imports: [
    CommonModule,
    DevopsRoutingModule
  ]
})
export class DevopsModule { }
