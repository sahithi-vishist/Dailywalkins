import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { FacilityService } from '../facilityservice.service';
import { MyFacilityModel } from '../myfacility/myfacility.model';

import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-addfacility',
  templateUrl: './addfacility.component.html',
  styleUrls: ['./addfacility.component.css']
})
export class AddfacilityComponent implements OnInit {
  

  obj=new MyFacilityModel();
facility;
fLoginObj;
  constructor(private router:Router,private service:FacilityService,private http:HttpClient,private route:ActivatedRoute,private date:DatePipe) {
    this.fLoginObj=this.service.getFLogin();
    var id=localStorage.getItem('facilityId');
    this.service.getFacilityById(id).subscribe((res)=>{
      this.facility=res;
console.log()
      this.obj.email=this.facility.email;
      this.obj.facility=this.facility.facilityName;
    });
  }

  ngOnInit() {
   
   /* 
    this.obj=this.service.getter();
    console.log(this.obj) */
}

addfacility(){    
 this.obj.availabilityDates=this.obj.availabilityFromDate+"to"+this.obj.availabilityToDate;
 this.obj.facilityId={facilityLoginId:localStorage.getItem("facilityId")};
 
  this.service.facilityAdd(this.obj).subscribe((res)=>
  {console.log(res);
  });

 this.router.navigate(['/facility/MyFacilities'])
}
}

