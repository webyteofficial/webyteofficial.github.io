import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { UserService } from './../user.service';
import { Router } from '@angular/router';

declare var TweenMax;

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @ViewChild('overlay') overlay : ElementRef;
  firstname : string;
  lastname : string;
  enrollment : string;
  email : string;
  password:string;
  displayDuplicate : boolean;
  gender : string = "Male";
  phone: string;

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit() {
  }

  register(){
    var body = {
      firstName  : this.firstname, 
      lastName : this.lastname, 
      email  : this.email, 
      enrollment : this.enrollment, 
      password : this.password,
      gender : this.gender,
      phone: this.phone
    }

    this.userService.register(body).subscribe(data => {
      console.log('into the subscription');
      console.log(data);

      if(data && data['email'] == this.email ){
        this.open();
      }
      else{
        this.displayDuplicate = true;
      }
    },
    error => console.log("error occured"))
  }

  open(){
    this.overlay.nativeElement.style.visibility = 'visible';
    TweenMax.to(this.overlay.nativeElement, 0.2, { display : 'flex', });
    TweenMax.to(this.overlay.nativeElement.children[1], 0.2, {  scale : 1 });
  }
  
  close(){
    TweenMax.to(this.overlay.nativeElement.children[1], 0.15, {  scale : 0 });
    TweenMax.to(this.overlay.nativeElement, 0.15, { display : 'none', });
  }

}
