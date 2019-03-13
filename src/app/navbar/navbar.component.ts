import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit, ViewChild, AfterViewInit, ElementRef } from '@angular/core';

declare var TweenMax;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {
  @ViewChild('overlay') overlay : ElementRef;
  email : string;
  password:string;
  loggedIn : boolean = false;
  message : string;
  public isCollapsed = false; 

  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    console.log(this.overlay);
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

  login(){
    var body = {
      email  : this.email, 
      password : this.password
    }

    this.userService.login(body).subscribe(data => {
      console.log('into the subscription');
      console.log(data);

      if(data && data['email'] == this.email){
        this.loggedIn = true;
        localStorage.setItem('email',this.email);
        this.message = ' ';     
        this.close();
        this.router.navigate(['events']);
      }
      else if(data['message'] == "Invalid Email"){
        this.message  = "Invalid Email";
      }
      else if(data['message'] == "Invalid Password"){
        this.message  = "Invalid Password";
      }
    },
    error => console.log("error occured"))
  }

}
