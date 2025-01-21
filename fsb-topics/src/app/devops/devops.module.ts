import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevopsRoutingModule } from './devops-routing.module';
import { GitComponent } from './git/git.component';
import { JenkinsComponent } from './jenkins/jenkins.component';
import { DockerComponent } from './docker/docker.component';
import { K8sComponent } from './k8s/k8s.component';
import { AnsibleComponent } from './ansible/ansible.component';
import { TerraformComponent } from './terraform/terraform.component';


@NgModule({
  declarations: [
    GitComponent,
    JenkinsComponent,
    DockerComponent,
    K8sComponent,
    AnsibleComponent,
    TerraformComponent
  ],
  imports: [
    CommonModule,
    DevopsRoutingModule
  ]
})
export class DevopsModule { }
