import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  toDoAppIsShown : boolean=false;
  studentRosterIsShown : boolean=false;
  portfolioIsShown : boolean=false;
  weatherappIsShown : boolean=false;
  venobox:any;
  constructor() { }
  detailOnClick(project:String){
    if(project=="toDoApp"){
      this.toDoAppIsShown = !this.toDoAppIsShown;
      this.studentRosterIsShown=false;
      this.portfolioIsShown=false;
    }
    else if(project=="studentRoster"){
      this.studentRosterIsShown = !this.studentRosterIsShown;
      this.toDoAppIsShown=false;
      this.portfolioIsShown=false;
    }
    else if(project=="portfolio"){
      this.portfolioIsShown = !this.portfolioIsShown;
      this.toDoAppIsShown=false;
      this.studentRosterIsShown =false;
    }
    else if(project=="weatherapp"){
      this.weatherappIsShown = !this.weatherappIsShown;
      this.toDoAppIsShown=false;
      this.studentRosterIsShown =false;
      this.portfolioIsShown=false;
    }


  }
  onMouse(idLink:String, idImage:String){
    $( '#' + idLink ).on("mouseenter", function() {
      $('#' + idImage).css( "opacity", "0.3" );
      $('#' + idLink).css( "opacity", "1" );
    }).on('mouseleave', function() {
      $('#' + idImage).css( "opacity", "1" );
      $('#' +idLink).css( "opacity", "0" );
    }

    );

    $( '#' + idImage ).on("mouseenter", function() {
      $('#' + idImage).css( "opacity", "0.3" );
      $('#' +idLink).css( "opacity", "1" );
    }).on('mouseleave', function() {
      $('#' + idImage).css( "opacity", "1" );
      $('#' +idLink).css( "opacity", "0" );
    }
    );
  }
  ngOnInit(): void {
   this.onMouse("portfolio-link","portfolio-img");
   this.onMouse("toDoApp-link","toDoApp-img");
   this.onMouse("roster-link","roster-img");
   this.onMouse("weatherapp-link","weatherapp-img");
   this.venobox=$('.venobox');
   this.venobox.venobox();

  }

}
