import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from './../../admin.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent {
  id : string;
  event;
  constructor(private route : ActivatedRoute, private adminService : AdminService) {
    this.route.paramMap.subscribe(q => {
      var id = q['params'].id;
      if(id){
        console.log(id);
        this.id = id;
        this.getEvent();
      }
    })
   }

  getEvent(){
    this.adminService.getEvent(this.id).subscribe(data => {
      console.log(data);
      this.event = data;
    })
  }

}
