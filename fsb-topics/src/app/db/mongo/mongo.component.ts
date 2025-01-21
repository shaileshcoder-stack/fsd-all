import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mongo',
  templateUrl: './mongo.component.html',
  styleUrls: ['./mongo.component.scss']
})
export class MongoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mongodbinfo =[
   " 1-	What is MongoDB",
   " 2-	What is the difference between MongoDB and relational databases?",
   " 3-	What is BSON in MongoDB?",
   " 4-	What is a Collection in MongoDB?",
   " 5-	What is the difference between insert() and save() in MongoDB?",
   " 6-	What is Sharding in MongoDB?",
   " 7-	What is a Replica Set in MongoDB?",
   " 8-	What is the Aggregation Framework in MongoDB?",
   " 9-	How does MongoDB handle data consistency?",
   " 10-	What is the role of ObjectId in MongoDB?",
   " 11-	How would you perform a join in MongoDB?",
   " 12-	What are indexes in MongoDB?",
   " 13-	What are the main advantages of using MongoDB?",
   " 14-	What is the purpose of the db.collection.find() method in MongoDB?",
   " 15-	What are Transactions in MongoDB?",

  ]

}
