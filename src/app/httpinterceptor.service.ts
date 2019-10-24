import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHeaders, HttpHandler } from '@angular/common/http';
import { WalkerAuthService } from './walker/walker-auth.service';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {
tokenString;
  constructor(private service:WalkerAuthService) { }

  intercept(request:HttpRequest<any>,next:HttpHandler){
   if(localStorage.getItem('token') != null)
   {
    request=request.clone({
      setHeaders:{
        Authorization:localStorage.getItem('token')
      }
    })
  }
    return next.handle(request);
  }

  
}
