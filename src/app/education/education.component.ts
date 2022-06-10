import { Component, OnInit } from '@angular/core';
import * as awesom from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']

})
export class EducationComponent implements OnInit {
  expressScriptsengiIsShown : boolean = false;
  expressScriptsadvIsShown : boolean = false;
  codefiIsShown:boolean = false;
  detailOnClick(id:String) {
    if(id=="expressScriptsengi_detail"){
     this.expressScriptsengiIsShown = !this.expressScriptsengiIsShown;
    }
    else if(id=="expressScriptsadv_detail"){
      this.expressScriptsadvIsShown = !this.expressScriptsadvIsShown;
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
