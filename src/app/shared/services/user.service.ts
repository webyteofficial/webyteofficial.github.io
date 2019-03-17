import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class UserService implements OnInit {

    constructor(public http: HttpClient) { }

    ngOnInit() {

    }

    register(body: Object) {
        return this.http.post(environment.api + '/users', body, {
            observe: 'response'
        });

    }

    login(body){
        return this.http.post(environment.api + '/users/login', body, { observe: 'response'})
    }


    // apiServices() {
    //     this.http.get(environment.api + '/users', {
    //         headers: new HttpHeaders({
    //             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzhhNmExMjk2ZThhZjAwMTc2NDIwMGQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTUyNjUwNzkyfQ.grzhHGDU6shYYwpzKY5i4dysx4PuI6oOhQI5f6jugNs'
    //         })
    //     }).subscribe(console.log);

    //     this.http.post(environment.api + '/user/login', { email: 'atanugaindfddd534@gmail.com', password: 'atanugain' }, {
    //         observe: 'response'
    //     }).subscribe(res => {
    //         console.log(res)
    //         // console.log(res.headers.get('authorization'))
    //     });

    //     this.http.get(environment.api + '/user', {
    //         headers: new HttpHeaders({
    //             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzhiNzhmNzM5MzUzMDAwMTdlM2QzNzkiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTUyNjUwOTE3fQ.l3TLZoDlnwMW4PxMRN9F95QuOen_eGHkBX0G5D_MVM0'
    //         })
    //     }).subscribe(console.log);


    //     this.http.post(environment.api + '/admin/login', { email: 'mdmobshshir@gmail.com', password: 'Nayeem' }, {
    //         observe: 'response'
    //     }).subscribe(console.log);

    //     this.http.post(environment.api + '/admin/login', { email: 'mdmobshshir@gmail.com', password: 'Nayeem' }, {
    //         observe: 'response',
    //         headers: new HttpHeaders({
    //             'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YzhhNmExMjk2ZThhZjAwMTc2NDIwMGQiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTUyNjUwNzkyfQ.grzhHGDU6shYYwpzKY5i4dysx4PuI6oOhQI5f6jugNs',
    //         })
    //     }).subscribe(console.log);

    // }
}
