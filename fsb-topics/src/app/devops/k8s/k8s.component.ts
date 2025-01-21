import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-k8s',
  templateUrl: './k8s.component.html',
  styleUrls: ['./k8s.component.scss']
})
export class K8sComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
 k8sinfo= [
"  1-	what is Kubernetes [Automated Deployment & Scaling, self-Healing, Load Balancing & Service Discovery, Storage Orchestration, Secret & Configuration Management, Rolling Updates & Rollbacks, Storage Orchestration, Multi-Cloud & Hybrid Cloud Support, Configuration Management & Secrets Handling, Networking & DNS Management]",

"  2-	Kubernetes Architecture Components –[ Control Plane Components (Master Node)  compo- API Server (kube-apiserver), Controller Manager (kube-controller-manager), Scheduler (kube-scheduler), etcd]",
"    [Worker Node Components comp-  (Kubelet, Container Runtime, Kube Proxy, Pods, Deployments, Services, ConfigMaps & Secrets, Ingress)]",
"  3-	Kubernetes Cluster Workflow –[ User Interaction, API Server Receives Reques, Scheduler Assigns Workloads, Controller Manager Maintains Desired State, Worker Nodes Run Containers, Networking & Load Balancing]",
"  4-	Control Plane Components [API Server (kube-apiserver), etcd (Key-Value Store), Scheduler (kube-scheduler), Controller Manager (kube-controller-manager) Cloud Controller Manager (Optional)]",
"  5-	 Kubernetes Worker Nodes[ Kubelet, Container Runtime, Kube Proxy, Pods (Application Workloads),",
"  6-	What is Namepaces [Multi-tenancy, Resource Isolation allows organizing applications into separate environments (dev, staging, production), Access Control, Efficient Resource Management]",

"  7-	Pods-[one Or more Multi-container]",
"  8-	Pods Lifecycle[pending,Running,Successed,Failed,Unknown]",

"  9-	Services Cluster IP o node Port load Balancer[ClusterIP, NodePort, loadBalancer]",

"  10-	Key Features of ReplicationController[Maintains Desired Pod Count, Handles Pod Resilienc, Scalable]",
"  11-	Key Fields ReplicationController in the Example [replicas, selector, template]",
"  12-	ReplicationController Lifecycle[Creation, Scaling, Pod Monitoring, Pod Failure Recovery, Deletion]",
"  13-	ReplicaSet vs. ReplicationController",

"  14-	Use Cases for DaemonSet [Log Collection, Monitoring, Network Proxie, Cluster Management]",

"  15-	Key Features of StatefulSet: [Stable, Unique Network Identities, Persistent Storage, Ordered Deployment and Scaling, Stable Pod Names, Graceful Termination,]",
"  16-	StatefulSet Lifecycle: [Pod Creation, Scaling, Pod Termination, Pod Restart, Pod Update]",

"  17-	Deployment To Recreate Of rolling update blue Green Deployment",

"  18-	Key Features of ConfigMap: [Separation of Concerns, Environment-specific Configurations, Easy to Update]",
"  19-	ConfigMap vs. Secret:",

"  20-	Why Use Ingress Controller? [Exposing Services, Path-based Routing, SSL/TLS Termination: Ingress Controllers, Centralized Traffic Management,",
"  21-	Advantages of Using Ingress Controller: [Single Entry Point, Path-based Routing, TLS/SSL Termination:, Load Balancing, Advanced Features, Set Up DNS and Access Your Application]",

"  22-	What are Helm Charts?",
"  23-	Advantages of Using Helm Charts[Simplifies Deployment, Versioning, Configurability, Reusable, Dependency Management, Community Support]",
"  24-	Popular Helm Charts [NGINX Ingress Controller, MySQL, PostgreSQL, Redis, Prometheus, Grafana, Jenkins, MongoDB]",

 ]
}
