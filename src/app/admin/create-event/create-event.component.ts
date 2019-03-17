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
  rules : string[] = [];
  rule : string;
  success : boolean = false;
  error : boolean = false;

  constructor(private adminService: AdminService) { }

  add() {
    var body = {
      name : this.name,
      description : this.description,
      contact : this.contact,
      image : this.image,
      rules : this.rules
    }

    console.log(body);
    this.adminService.addEvent(body).subscribe(data => {
        console.log('into the subscription');
        console.log(data);
        if(data['name'] == this.name ){
          this.success = true;
          this.name = '';
          this.description = '';
          this.contact = '';
          this.image = '';
          this.rules = [];
        }
    },
    error => {
      console.log("error occured");
      this.error = true;
    })
  }

  pushRule(){
    this.rules.push(this.rule);
    console.log(this.rules);
    this.rule = '';
  }
}
