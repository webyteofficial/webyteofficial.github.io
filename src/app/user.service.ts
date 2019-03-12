import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  registerUrl : string = 'https://webyte-api.herokuapp.com/user';

  constructor(public http : HttpClient){ }

  register(body : Object){
    console.log(body);
    
    const headers = new HttpHeaders({
      'Content-Type':  'application/json',
    });

    return this.http.post(this.registerUrl, body , {
      headers : headers
    });

  }
}
