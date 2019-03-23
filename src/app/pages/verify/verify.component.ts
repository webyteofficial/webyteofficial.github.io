import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.scss']
})
export class VerifyComponent implements OnInit, AfterViewInit {

  constructor(private http : HttpClient, private router : Router,  private route  : ActivatedRoute) { }

  ngOnInit() {
  }

  ngAfterViewInit(){
    var { token } = this.route.snapshot.params;
    console.log(token);
    var url = environment.api + '/users/verify';
    this.http.patch(url, {} ,{
      observe : 'response',
      headers : new HttpHeaders({
        Authorization : 'Bearer ' + token
      })
    }).subscribe(data => {
      console.log(data);
      var newToken = data.headers.get('Authorization');
      console.log(newToken);
      localStorage.setItem('token',newToken);
      this.router.navigate(['events']);
    })
  }
}
