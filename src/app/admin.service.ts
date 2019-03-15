import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  userUrl = 'https://webyte-api.herokuapp.com/users';
  loginUrl = 'https://webyte-api.herokuapp.com/admin/login';

  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get(this.userUrl);
  }

  login(body){
    return this.http.post(this.loginUrl, body, { observe : 'response'});
  }
}
