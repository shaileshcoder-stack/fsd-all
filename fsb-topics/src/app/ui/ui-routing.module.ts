import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HtmlComponent } from './html/html.component';

const routes: Routes = [
  {path:"html", component:HtmlComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
