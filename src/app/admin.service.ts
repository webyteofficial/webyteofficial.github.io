import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  userUrl = 'https://webyte-api.herokuapp.com/users';
  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get(this.userUrl);
  }
}
