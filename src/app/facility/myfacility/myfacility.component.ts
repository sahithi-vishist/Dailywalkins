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
  constructor(private router:Router,private service:FacilityService) {}

  ngOnInit()
  {
   this.service.getfac().subscribe((res:MyFacilityModel[])=>{this.objAdd=res})
  }
    
  updateCo(objAdd){
    this.service.setter(objAdd);
    this.router.navigate(['/facility/up'])
  }
  
}
