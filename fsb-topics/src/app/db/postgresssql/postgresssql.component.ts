import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-postgresssql',
  templateUrl: './postgresssql.component.html',
  styleUrls: ['./postgresssql.component.scss']
})
export class PostgresssqlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  postgresssqlinfo = [
    " 1- What is PostgreSQL?",
    " 2-	What are the differences between CHAR, VARCHAR, and TEXT in PostgreSQL?",
    " 3-	What is a foreign key in PostgreSQL?",
    " 4-	What is a JOIN in PostgreSQL?[ INNER JOIN,left join,right join,full outer join,]",
    " 5-	What is normalization?",
    " 6-	What is the difference between TRUNCATE and DELETE in PostgreSQL?",
    " 7-	Explain ACID properties in PostgreSQL.",
    " 8-	What is a CTE (Common Table Expression) in PostgreSQL?",
    " 9-	What are window functions in PostgreSQL?",
    " 10-	What is the difference between JSON and JSONB data types in PostgreSQL?",
    " 11-	What are Triggers in PostgreSQL?",
    " 12-	What is EXPLAIN ANALYZE in PostgreSQL?",
    " 13-	What is the purpose of pg_dump in PostgreSQL?",
    " 14-	How can you improve query performance in PostgreSQL?",

  ]

}
