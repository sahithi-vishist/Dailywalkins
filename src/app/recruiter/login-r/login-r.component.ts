import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert.service';
import { HttpinterceptorRecService } from 'src/app/httpinterceptor-rec.service';

@Component({
  selector: 'app-login-r',
  templateUrl: './login-r.component.html',
  styleUrls: ['./login-r.component.css']
})
export class LoginRComponent implements OnInit {
 msg;
vm={
  mail:'',
  password:''
};
  constructor(private router:Router,private http:HttpClient,
    private alert:AlertService,private service:RecruiterauthserviceService) { }
send(){
  
}

login(val){
  var values={
    "email":val.mail,
    "password":val.password
  }
  this.service.authenticate(values).subscribe((res)=>{ 
    console.log(res);
       if(res!=null){
         this.alert.showAlert("success","login successfull");
         localStorage.setItem("userExists","true");
         localStorage.setItem("recruiterId",JSON.stringify(res));
         if(localStorage.getItem('token') != null){
           
             this.router.navigate(['/recruitment/myprofile']);
         
         }else
         this.router.navigate(['/recruitment/login']);
         
       }
   },(err)=>{
     this.alert.showAlert("error","login failed!Please enter valid email and password");
   })
}
 ngOnInit() {
  }

}
