import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { Router } from '@angular/router';
import { FacilityService } from '../facilityservice.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-flogin',
  templateUrl: './flogin.component.html',
  styleUrls: ['./flogin.component.css']
})
export class FloginComponent implements OnInit {
  loginForm:FormGroup;
  facilityLoginDetails;
  constructor(private router:Router,private service:FacilityService){
  
   }
 
  ngOnInit() {
    this.loginForm=new FormGroup({
      
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    
  

    });
  }

  login(){
    console.log(this.loginForm.value);
   
    this.service.postfac(this.loginForm.value).subscribe((res)=>
    {
      this.facilityLoginDetails=res;
      localStorage.setItem("facilityId",this.facilityLoginDetails.facilityLoginId);
      this.service.setFacilityLogin(this.facilityLoginDetails);
      this.router.navigate(['/facility/MyFacilities'])
    });

  

  }
}
