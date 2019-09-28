import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { WalkerAuthService } from '../walker/walker-auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router:Router,private auth:WalkerAuthService) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){
      if(localStorage.getItem('userExists')){
        return true;
       
          }
          else
          {
            this.router.navigate(['/walker/login']);
            return false;
          }
   

  }
}
