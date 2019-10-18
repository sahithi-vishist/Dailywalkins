import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { WalkerAuthService } from '../walker-auth.service';
import {HttpClient} from '@angular/common/http';
import { NotificationService } from 'src/app/notification.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
walker={email:'',password:''};
  constructor(private router:Router,private service:WalkerAuthService,
    private http:HttpClient,private notification:NotificationService) { }

  ngOnInit() {
  }
  login(loginDetails){
   
    this.service.authenticate(loginDetails).subscribe((res)=>{ 
     console.log(res);
        if(res!=null){
          this.notification.showNotification("success","login successfull");
          if(localStorage.getItem('token') != null){
            
              this.router.navigate(['/walker/myprofile']);
          
          }else
          this.router.navigate(['/walker/login']);
          
        }
    },(err)=>{
      this.notification.showNotification("error","login failed!Please enter valid email and password");
    })
     
  }
}
