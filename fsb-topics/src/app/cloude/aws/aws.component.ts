import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aws',
  templateUrl: './aws.component.html',
  styleUrls: ['./aws.component.scss']
})
export class AwsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  awsinfo =[
  " 1-What is AWS?",
  " 2- What is EC2 in AWS?",
  " 3- What is the difference between Elastic Load Balancer (ELB) and Amazon Route 53?",
  " 4- What is IAM and how does it work?",
  " 5- What is VPC in AWS?",
  " 6- What is the difference between S3 and EBS in AWS?",
  " 7- What is AWS Lambda?",
  " 8-	Explain CloudFormation in AWS.",
  " 9-	What is the difference between RDS and DynamoDB?",
  " 10-	What are security groups and how do they differ from NACLs?",
  " 11-	How does AWS pricing work? ",
  " 12-	What is Amazon CloudWatch?",

  ]

}
