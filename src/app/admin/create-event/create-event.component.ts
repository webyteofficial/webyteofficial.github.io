import { AdminService } from './../../admin.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent {
  name : string;
  description : string;
  contact : string;
  image :string;

  constructor(private adminService: AdminService) { }

  register() {
    var body = {
      name : this.name,
      description : this.description,
      contact : this.contact,
      image : this.image,
      rules : ['abhishek']
    }

    console.log(body);
    this.adminService.addEvent(body).subscribe(data => {
        console.log('into the subscription');
        console.log(data);
    },
    error => console.log("error occured"))
  }
}
