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

    console.log(body);
    
    this.adminService.login(body).subscribe(data => {
      let token = data.headers.get('authorization');
      console.log(token);

      localStorage.setItem('token', token);
    });
  }

}
