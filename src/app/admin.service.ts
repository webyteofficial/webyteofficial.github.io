import { Injectable } from '@angular/core';
import { environment } from './../environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  constructor(private http : HttpClient) { }

  getUsers(){
    return this.http.get(environment.api + '/users');
  }

  login(body){
    return this.http.post(environment.api + '/admin/login', body, { observe : 'response'});
  }
  
  addEvent(body){
    return this.http.post(environment.api + '/event', body);
  }
}
