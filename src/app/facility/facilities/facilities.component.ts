import { Component, OnInit } from '@angular/core';
import { FacilityService } from '../facilityservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
facilities;
  constructor(private service:FacilityService,private router:Router) {
    this.service.getfac().subscribe((res)=>{
      this.facilities=res;
    })
    
   }

  ngOnInit() {
  }
  bookfacility(){
    this.router.navigate(['/facility/bookfacility'])
    
  }
}
