import { Component, OnInit } from '@angular/core';
import { FacilityService } from '../facilityservice.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent implements OnInit {
facilities;
  constructor(private service:FacilityService) {
    this.service.getfac().subscribe((res)=>{
      this.facilities=res;
    })
    
   }

  ngOnInit() {
  }

}
