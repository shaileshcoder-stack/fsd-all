import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GitComponent } from './git/git.component';
import { AnsibleComponent } from './ansible/ansible.component';
import { DockerComponent } from './docker/docker.component';
import { JenkinsComponent } from './jenkins/jenkins.component';
import { K8sComponent } from './k8s/k8s.component';

const routes: Routes = [
  {
    path:'git', component:GitComponent
  },
  { path:'ansible', component:AnsibleComponent},
  {path:'docker',component:DockerComponent},
  {path:'jenkin',component:JenkinsComponent},
  {path: 'tf', component:JenkinsComponent},
  {path:'k8s', component:K8sComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevopsRoutingModule { }
