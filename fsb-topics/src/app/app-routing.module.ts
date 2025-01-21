import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ui', loadChildren:()=> import('./ui/ui.module').then(m => m.UiModule)
  },
  {
    path: 'backend', loadChildren:() => import('./backend/backend.module').then(m => m.BackendModule)
  },

  {
    path: 'db', loadChildren:() => import('./db/db.module').then(m => m.DbModule)
  },
  {
    path:'devops',loadChildren:()=> import('./devops/devops.module').then(s => s.DevopsModule)
  },
  {
    path:'cloude', loadChildren:() => import('./cloude/cloude.module').then(m => m.CloudeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
