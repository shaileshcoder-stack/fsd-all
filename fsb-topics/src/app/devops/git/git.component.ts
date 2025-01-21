import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.scss']
})
export class GitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gitinfo =[
  "GIT",
"1-	Explain how you can create a new branch and switch to it in Git.",
"2-	What is the purpose of .gitignore?",
"3-	How can you discard local changes in Git?",
"4-	What does git diff do?",
"5-	What is the git log command used for?",
"6-	What is a merge conflict, and how do you resolve it?",
"7-	What are git pull --rebase and when should it be used",
"8-	What is the purpose of git stash?",
"9-	What is the difference between git reset and git revert?",
"10-	What is the difference between git merge and git rebase?",
"11-	What does the git clone command do?",
"12-	What is the difference between git fetch and git pull?",
"13-	What is the difference between Git and SVN (Subversion)",


  ]

}
