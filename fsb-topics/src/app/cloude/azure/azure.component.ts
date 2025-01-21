import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-azure',
  templateUrl: './azure.component.html',
  styleUrls: ['./azure.component.scss']
})
export class AzureComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  azureinfo = [
     "  1-What is Azure?",
     "  2-What are the main benefits of using Azure?",
     "  3-What is Azure Virtual Network (VNet)?",
     "  4-What is the difference between Azure Blob Storage and Azure File Storage? [Azure Blob Storage, Azure file  Storage]",
     "  5-What is Azure Active Directory (AAD)?",
     "  6-What is the difference between Azure Resource Manager (ARM) and Azure Service Principal?",
     "  7-What is Azure App Service?",
     "  8-What is Azure Load Balancer?",
     "  9-What is the difference between Azure Functions and Azure Logic Apps? [Azure Functions, Azure Logic Apps]",
     "  10-What are Azure Security Center and Azure Sentinel?",
     "  11-What is Azure Cost Management?",
     "  12-Explain Azure Kubernetes Service (AKS).",

  ]


}
