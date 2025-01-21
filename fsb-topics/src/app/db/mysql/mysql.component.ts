import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mysql',
  templateUrl: './mysql.component.html',
  styleUrls: ['./mysql.component.scss']
})
export class MysqlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  mysqlinfo = [
      " 1-	What is MySQL?",
      " 2-	What are the different types of joins in MySQL? [INNER JOIN, LEFT JOIN, RIGHT JOIN, FULL JOIN]",
      " 3-	Explain normalization and its types.[ First Normal Form, Second Normal Form, Third Normal Form]",
      " 4-	What is the difference between CHAR and VARCHAR?",
      " 5-	What is a primary key?",
      " 6-	What is the difference between DELETE and TRUNCATE?",
      " 7-	What is a foreign key?",
      " 8-	What is indexing in MySQL?",
      " 9-	What is the EXPLAIN statement in MySQL?",
      " 10-	What is a stored procedure?",
      " 11-	What are ACID properties in MySQL? [Atomicity, Consistency, Isolation, Durability]",
      " 12-	hat is the purpose of a JOIN clause in SQL?",
      " 13-	What is the difference between GROUP BY and ORDER BY?",
      " 14-	What is the difference between VARCHAR and TEXT data types?",

  ]
}
