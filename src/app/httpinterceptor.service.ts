import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHeaders, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpinterceptorService implements HttpInterceptor {

  constructor() { }
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
