import { Injectable } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor{

  constructor() { }

  intercept(req, next){
    let Token = localStorage.getItem('token');
    let tokenizedReq = req.clone({
      setHeaders : {
        Authorization : Token
      }
    })

    return next.handle(tokenizedReq);
  }
}
