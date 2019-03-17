import { Component, OnInit, AfterViewInit } from '@angular/core';
declare var TweenMax, TimelineMax, Elastic;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit() {
      var banner = document.getElementsByClassName('banner')[0];
      console.log(banner);

      TweenMax.from([banner, banner.children[0]], 1, { delay: 0.2, minHeight: 0, height: 0 });
      TweenMax.to(banner.children[0], 1, { delay: 1, opacity: 1 });
      TweenMax.to(banner.children[1], 1, { delay: 1.5, opacity: 1 });
  }

}
