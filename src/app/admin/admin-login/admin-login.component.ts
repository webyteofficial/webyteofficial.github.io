import { AdminService } from './../../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  email:string;
  password: string;
  constructor(private adminService : AdminService) { }

  ngOnInit() {
  }

  login(){
    var body = {
      email : this.email,
      password : this.password
    }

    this.adminService.login(body).subscribe(data => {
      console.log(data);
    });
  }

}
