import { AdminService } from '../../shared/services/admin.service';
import { Component, AfterViewInit } from '@angular/core';
declare var TweenMax, Power0;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements AfterViewInit {
  // events = [
  //   { name : 'Hackathon', image : 'hackathon.svg'},
  //   { name : 'App Development', image : 'appdevelopment.svg'},
  //   { name : 'Find the bug', image : 'findbug.svg'},
  //   { name : 'Data Scrapping', image : 'datascrapping.svg'},
  //   { name : 'Code Couples', image : 'codecouples.svg'},
  // ]

    events;

  constructor(private adminService : AdminService) { 
    this.getEvents()
  }

  
  getEvents(){
    this.adminService.getEvents().subscribe(data =>{ 
      console.log(data);
      this.events = data;
    },
    (err) => {
      console.log(err);
    });
  }

  ngAfterViewInit(){
    var header = document.getElementsByTagName('header')[0];
    var showcase = document.getElementById('showcase');

    showcase.addEventListener('mousemove', function(e) {
        TweenMax.to(showcase, 1, {x: -(e.pageX)  , ease: Power0.easeNone});
    });
  
  }
}
