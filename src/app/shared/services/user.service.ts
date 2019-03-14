import { Injectable, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { environment } from './../../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class UserService implements OnInit {

    constructor(public http: HttpClient) { }

    ngOnInit() {

    }

    register(body: Object) {
        console.log(body);
        const headers = new HttpHeaders({
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1Yzg4OTFkYjJhMjUyOTFhMDg5NTBiZmYiLCJhY2Nlc3MiOiJhdXRoIiwiaWF0IjoxNTUyNTgxOTA2fQ.AWL7sh5wLOYvOphFaFMACV6e3kqd5nZcqV8OwBTGWqM'
        });
        this.http.get(environment.api + '/users', {
            observe: 'response', headers: headers
        }).subscribe(res => console.log(res));


        this.http.post(environment.api + '/user/login', { email: 'atanugaindfddd534@gmail.com', password: 'atanugain' }, {
            observe: 'response'
        }).subscribe(res => console.log(res));

        return this.http.post(environment.api + '/user', body, {
            headers: headers,
            observe: 'response'
        });

    }
}
