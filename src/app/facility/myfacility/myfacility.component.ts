import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FacilityService } from '../facilityservice.service';
import { MyFacilityModel } from './myfacility.model';

@Component({
  selector: 'app-myfacility',
  templateUrl: './myfacility.component.html',
  styleUrls: ['./myfacility.component.css']
})

export class MyfacilityComponent implements OnInit {
private objAdd;
facilityId;
id;
loginFacUser;
  constructor(private router:Router,private service:FacilityService) {
    this.id=localStorage.getItem("facilityId")
    this.loginFacUser=this.service.getFacilityLogin();
 
    this.service.getLoginFac(this.loginFacUser).subscribe((res)=>
    {
      this.objAdd=res;
      console.log(this.objAdd);
      // this.facilityId = this.objAdd.find(id => id['facilityLoginId'] == id);
      // console.log(this.facilityId);
    })
  
  }

  ngOnInit()
  {
 
  }
    
  updateCo(objAdd){
    this.service.setter(objAdd);
    this.router.navigate(['/facility/up'])
  }
  
}
