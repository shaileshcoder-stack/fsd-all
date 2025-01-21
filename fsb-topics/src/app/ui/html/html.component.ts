import { Component, OnInit } from '@angular/core';
import {commconst} from '../../utilities/commomConstant' 

@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.scss']
})
export class HtmlComponent implements OnInit {

  constructor() { }
  item = commconst;


  htmlinf = [
    "HTML",
    "1-HTML and HTML5 Difference",
    "2-Basic Structure"
  ];
  ngOnInit(): void {
  }

}

