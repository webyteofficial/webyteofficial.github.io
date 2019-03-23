import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  me;
  constructor(private http : HttpClient) { 
    this.http.get(environment.api + '/users/me',{
      headers : new HttpHeaders({
        Authorization : localStorage.getItem('token')
      })
    }).subscribe(data => {
      console.log(data);
      this.me = data;
    })
  }

  ngOnInit() {
  }

}
