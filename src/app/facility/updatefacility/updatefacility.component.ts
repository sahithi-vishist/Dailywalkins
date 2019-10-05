import { Component, OnInit } from '@angular/core';
import { FacilityService } from '../facilityservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { UpdatefacilityModel } from './updatefacility.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-updatefacility',
  templateUrl: './updatefacility.component.html',
  styleUrls: ['./updatefacility.component.css']
})
export class UpdatefacilityComponent implements OnInit {
  private obj:UpdatefacilityModel;
  
  constructor(private service:FacilityService,private route:ActivatedRoute,private router:Router) {   }

  ngOnInit() {
    this.obj=this.service.getter();
  }

  update(){
    if(this.obj.facilityId==undefined){
      this.service.facilityAdd(this.obj).subscribe((res)=>{
        console.log(this.obj);
        this.router.navigate(['/facility/MyFacilities'])
      })
    }
    else{
      this.service.facilityAdd(this.obj).subscribe((res)=>{
        console.log(this.obj);
        this.router.navigate(['/facility/MyFacilities'])
      })
    }
  }
}