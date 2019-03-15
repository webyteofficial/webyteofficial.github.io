import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  userUrl = 'https://webyte-api.herokuapp.com/users';
  loginUrl = 'https://webyte-api.herokuapp.com/admin/login';

  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get(this.userUrl, {
      headers : new HttpHeaders({
        authorization : 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yzg5MDJiZjE0MTJiYjAwMTcxOGIzYmMiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTUyNjU3NDQ0fQ.VRmR3q7UJpKgMYDq2Ml2riHNpsDIU65Hc8mClk21qe0'
      })
    });
  }

  login(body){
    return this.http.post(this.loginUrl, body, { observe : 'response'});
  }
}
