import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']

})
export class EducationComponent implements OnInit {
  expressScriptsadvIsShown : boolean = false;
  expressScriptsengIsShown : boolean = false;
  codefiIsShown:boolean = false;
  detailOnClick(id:String) {
    if(id=="expressScriptsadv_detail"){
     this.expressScriptsadvIsShown = !this.expressScriptsadvIsShown;
    }
    else if(id=="expressScriptsengi_detail"){
      this.expressScriptsengIsShown = !this.expressScriptsengIsShown;
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
