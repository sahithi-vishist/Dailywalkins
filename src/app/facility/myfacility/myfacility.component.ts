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
private objAdd:MyFacilityModel[];
facilityId;
id;
  constructor(private router:Router,private service:FacilityService) {
    this.id=localStorage.getItem("facilityId")
    this.service.getfac().subscribe((res:MyFacilityModel[])=>
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
