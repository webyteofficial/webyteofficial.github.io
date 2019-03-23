import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.scss']
})
export class ResetComponent {
  current;
  new;
  confirm;
  success;
  error;
  
  constructor(private http : HttpClient) { }

  reset(){
    if(this.confirm != this.new){
      this.success = false;
      return this.error = true;
    }
    this.http.patch(environment.api + '/users', {
      password : this.new
    },{
      headers : new HttpHeaders({
        Authorization : localStorage.getItem('token')
      })
    })
    .subscribe(data => {
      console.log(data);
      if(data['email']){
        this.success = true;
        this.error = false;
      }
    })
  }

}
