import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RecruiterauthserviceService } from './recruiterauthservice.service';

@Injectable({
  providedIn: 'root'
})
export class RecruiterguardGuard {
  constructor(private service:RecruiterauthserviceService,private router:Router){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(localStorage.getItem('userExists')){
        return true;
      }else{
        this.router.navigate(['recruitment/login']);
        return false;
      }
    }
  }
