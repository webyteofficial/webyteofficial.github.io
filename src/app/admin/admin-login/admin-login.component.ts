import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from './../../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  email:string;
  password: string;
  displatMessage : boolean = false; 
  constructor(private adminService : AdminService, private router : Router) { }

  ngOnInit() {
  }

  login(){
    var body = {
      email : this.email,
      password : this.password
    }

    console.log(body);
    
    this.adminService.login(body).subscribe(data => {
      let token = data.headers.get('authorization');
      console.log(token);
      localStorage.setItem('token', token);
      this.router.navigate(['admin/dashboard']);
    },
    (err) => {
      console.log(err);
      this.displatMessage = true;
    });
  }

}
