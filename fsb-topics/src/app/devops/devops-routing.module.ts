import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitComponent } from './git/git.component';

const routes: Routes = [
  {
    path:'git', component:GitComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevopsRoutingModule { }
