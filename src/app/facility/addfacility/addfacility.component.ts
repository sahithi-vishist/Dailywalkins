import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FacilityService } from '../facilityservice.service';
import { MyFacilityModel } from '../myfacility/myfacility.model';

@Component({
  selector: 'app-addfacility',
  templateUrl: './addfacility.component.html',
  styleUrls: ['./addfacility.component.css']
})
export class AddfacilityComponent implements OnInit {

  obj=new MyFacilityModel();

  constructor(private router:Router,private service:FacilityService){
  
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

