import { Router } from '@angular/router';
import { AdminService } from './../../admin.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-events',
  templateUrl: './get-events.component.html',
  styleUrls: ['./get-events.component.scss']
})
export class GetEventsComponent {
  events;
  constructor(private adminService : AdminService, private router : Router) { 
    this.getEvents();
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

  deleteEvent(id){
    console.log(id);
    this.adminService.deleteEvent(id).subscribe(data => {
      console.log(data);
      this.getEvents();
    },
    err => {
      console.log('error occured');
      console.log(err);
    })
  }

  eventInfo(id){
    console.log(id);
    this.router.navigate(['/admin/events',id]);
  }
}
