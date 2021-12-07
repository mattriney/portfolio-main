import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']

})
export class EducationComponent implements OnInit {
  expressScriptsIsShown : boolean = false;
  codefiIsShown:boolean = false;
  detailOnClick(id:String) {
    if(id=="expressScripts_detail"){
     this.expressScriptsIsShown = !this.expressScriptsIsShown;
    }
    else if(id=="codefi_detail"){
      this.codefiIsShown = !this.codefiIsShown;
    }

  }

  constructor() {
  }

  ngOnInit(): void {

  }

}
