import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gcp',
  templateUrl: './gcp.component.html',
  styleUrls: ['./gcp.component.scss']
})
export class GcpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  gcpinfo =[
       " 1-What is Google Cloud Platform (GCP)?",
       " 2-What are the different types of storage available in GCP?[ Google Cloud Storage (GCS), Persistent Disk:, Cloud Filestore, Cloud Bigtable, Cloud Spanner]",
       " 3-What is Google Compute Engine (GCE)?",
       " 4-What is Google Kubernetes Engine (GKE)?",
       " 5-What is Google Cloud Pub/Sub?",
       " 6-What is Cloud Spanner?",
       " 7-What is the difference between Google Cloud Functions and Google App Engine?",
       " 8-What are Google Cloud’s security features?",
       " 9-What is BigQuery and how does it differ from a traditional database?",
       " 10-What are some best practices for optimizing cost in GCP?’",
       " 11-What is Google Cloud’s approach to hybrid cloud?",
       " 12-How does Google Cloud ensure high availability and disaster recovery?",

  ]

}
