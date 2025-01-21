import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jenkins',
  templateUrl: './jenkins.component.html',
  styleUrls: ['./jenkins.component.scss']
})
export class JenkinsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  jenkininfo = [
    " 1-	Jenkins is an open-source automation server used to automate software development processes such as building, testing, and deploying code.",
    " 2-	Install Jenkins Jenkins User Interface First Job: Jenkins Build Process: Freestyle Projects",
    " 3-	Jenkins Pipelines: Jenkins Plugins: Source Code Management Post-Build Actions Jenkins on Docker jenkinsfile Best Practices Jenkins Declarative Pipeline Pipeline as Code: Distributed Builds Jenkins CI/CD with Kubernetes Security in Jenkins : Monitoring Jenkins",
    " 4-	Jenkins Optimization and Scalability [Optimizing Jenkins Performance Scaling Jenkins , Jenkins with DevOps Toolchain, Integrate Jenkins with tools like Ansible, Docker, Terraform, Kubernetes, SonarQube, etc. Automating Deployments- Use Jenkins for end-to-end automation, from building code to deploying it into various environments (Dev, Staging, Prod).",
    " 5-	What is a Jenkins Node? [Master Node Agent Node]",
    " 6-	How can you secure Jenkins? [User Authentication , Role-Based Access Control (RBAC), Secure Communication, Environment Variable",
    " 7-	What is a Jenkins Master-Slave architecture?",

  ]
}
