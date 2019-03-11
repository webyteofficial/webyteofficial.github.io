import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var TweenMax, Power0;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    var header = document.getElementsByTagName('header')[0];
    var showcase = document.getElementById('showcase');

    showcase.addEventListener('mousemove', function(e) {
        TweenMax.to(showcase, 1, {x: -(e.pageX)  , ease: Power0.easeNone});
    });
  
  }
}
