import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { FacilityService } from '../facilityservice.service';
import { FacilityRegistrationModel } from './fregistration.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-fregistration',
  templateUrl: './fregistration.component.html',
  styleUrls: ['./fregistration.component.css'],
})
export class FregistrationComponent  implements OnInit {
  
  regForm:FormGroup;
 // faciltyRegModel= new FacilityRegistrationModel();

  constructor(
    private facilityService:FacilityService,
    private router:Router,
    )
  {}  
 
  ngOnInit() {
    this.regForm=new FormGroup({
      facilityName:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
    
    });
  }
submit(){
console.log(this.regForm.value);
// this.faciltyRegModel.facilityName=this.regForm.get['FacilityName'].value;
// this.faciltyRegModel.email=this.regForm.get['email'].value;
// this.faciltyRegModel.password=this.regForm.get['password'].value;

//console.log(this.faciltyRegModel);

this.facilityService.save(this.regForm.value).subscribe((res)=>
  {console.log(res);
    this.router.navigate(['/facility/flogin'])
  });




//let regForm = JSON.stringify(this.regForm.value);
}



  
  }
