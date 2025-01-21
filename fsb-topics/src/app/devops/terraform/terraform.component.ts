import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-terraform',
  templateUrl: './terraform.component.html',
  styleUrls: ['./terraform.component.scss']
})
export class TerraformComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  tfinfo = [
  "1-	What is Terraform",
  "2-	What is Infrastructure as Code (IaC)?",
  "3-	What are the benefits of using Terraform? [Declarative Syntax, Multi-cloud Support, Version Control, Infrastructure Automation, State Management,]",
  "4-	What are Terraform Providers?[ Examples of pro,viders include AWS, Azure, Google Cloud, Kubernetes, and others.]",
  "5-	What is a Terraform state file?",
  "6-	How do you manage Terraform state? [ Local State, Remote State]",
  "7-	What is a Terraform module?",
  "8-	How does Terraform handle resource dependencies?",
  "9-	What are the different Terraform commands? [terraform init, Terraform plan, terraform validate,        terraform fmt, terraform apply,terraform destroy",
  "10-What is the difference between terraform apply and terraform plan?",
  "11-How do you handle secrets and sensitive data in Terraform? [Environment Variables, Terraform Vault, Sensitive Variables:]",
  "12-What is the purpose of terraform output?",
  "13-What is Terraform Cloud?",
  "14-How can you prevent accidental changes in Terraform? [State Locking, Plan Review, Workspaces,",
  "15-How does Terraform integrate with CI/CD pipelines?",

  ]

}
