import { Router } from '@angular/router';
import { UserService } from './../../shared/services/user.service';
import { Component, ViewChild, ElementRef } from '@angular/core';

declare var TweenMax;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent{
  @ViewChild('overlay') overlay : ElementRef;
  email : string;
  password:string;
  loggedIn : boolean = false;
  message : string;
  public isCollapsed = false; 

  constructor(private userService : UserService,private router : Router) { }

  ngOnInit() {
    this.loggedIn = localStorage.getItem('token') ? true : false;
  }

  login(){
    var body = {
      email  : this.email, 
      password : this.password
    }

    console.log(body);
    this.userService.login(body).subscribe(data => {
      console.log('into the subscription');
      console.log(data);

      if(data && data.body['email'] == this.email){
        this.loggedIn = true;
        this.message = ' ';     
        this.close();
        var token = data.headers.get('Authorization');
        console.log(token);
        localStorage.setItem('token',token);
        this.router.navigate(['events']);
      }
      else if(data['message'] == "Invalid Email"){
        this.message  = "Invalid Email";
      }
      else if(data['message'] == "Invalid Password"){
        this.message  = "Invalid Password";
      }
    },
    error => {
      console.log(error);
      console.log("error occured")
    })
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


  logout(){
    localStorage.removeItem('token');
    this.loggedIn = localStorage.getItem('token') ? true : false;
    this.router.navigate(['home']);
  }

  profile(){
    this.router.navigate(['/users/me']);
  }
}
