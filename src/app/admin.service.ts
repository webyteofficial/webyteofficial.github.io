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
    return this.http.post(environment.api + '/admins/login', body, { observe : 'response'});
  }
  
  addEvent(body){
    return this.http.post(environment.api + '/events', body);
  }

  getEvents(){
    return this.http.get(environment.api + '/events');
  }

  deleteEvent(id){
    return this.http.delete(environment.api + '/events/' + id);
  }

  deleteUser(id){
    return this.http.delete(environment.api + '/users/' + id);
  }

  getEvent(id){
    return this.http.get(environment.api + '/events/' + id);
  }
}
