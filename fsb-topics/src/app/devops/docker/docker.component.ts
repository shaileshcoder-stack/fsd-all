import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-docker',
  templateUrl: './docker.component.html',
  styleUrls: ['./docker.component.scss']
})
export class DockerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  dockerinfo =[
 "1-	Life With Docker  and Life Without Docker",
 "2-	Installing Docker on Linux and Windows ",
 "3-	What is Container ",
 "4-	Docker Run Command ",
 "5-	Basic Structure of a Dockerfile:[From,run,copy,workdir,cmd,expose]",
 "6-	Build Docker Images from a Dockerfile ",
 "7-	Working With Images [create a pplication ,write-dockerfile,Build-the images,Run a container,tag and Push to image registry Dockerhub Use the Image]",
 "8-	Container Lifecycle Summary[create,start,pause,stop,restart,remove,logs,cleanup]",
 "9-	Docker Networking [Bridge Network (Default Network), Host Network, Overlay Network, Macvlan Network, None Network]",
 "10-	Managing Docker Networks [List Networks, Inspect a Network, Create a Custom Network, Remove a Network, Connect a Container to a Network, Disconnect a Container from a Network]",
 "11-	What Are Docker Volumes? [Persistence, Data Sharing, Separation of Concerns, Backup & Restore, Performance]",
 "12-	Types of Volumes in Docker[Named Volumes, Anonymous Volumes, Host Volumes (Bind Mounts)]",
 "13-	Key Features of Docker Compose [Multi-container Applications, Declarative Configuration, Simplified Management, Networking, Volume Management, Scaling]",
 "14-	docker-compose.yml File Structure [version,services,volumes,networks]file extension is.yaml",
 "15-	Docker Swarm Key Concepts in Docker Swarm [swrm,Nades,managed nodes,worker node, Services,Task, Replicas,Overlay Network,Ingress load balancing,]",
 "16-	DockerSwarm vs K8s[overview, Ease of Setup and Use,Scaliballity,Networking,High availibillaty Fault Tolerence, Load balancing,Storages,Ecosystem and Commuicaty,Use cases,",

  ]
}
