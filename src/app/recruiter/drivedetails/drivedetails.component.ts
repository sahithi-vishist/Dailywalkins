import { Component, OnInit } from '@angular/core';
import { FacilityService } from 'src/app/facility/facilityservice.service';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';

@Component({
  selector: 'app-drivedetails',
  templateUrl: './drivedetails.component.html',
  styleUrls: ['./drivedetails.component.css']
})
export class DrivedetailsComponent implements OnInit {

  obj;

  constructor(private service:RecruiterauthserviceService) { 
this.service.getDrive().subscribe((res)=>{
  this.obj={driveName:'',
  createDriveId:'',
walkinDate:'',
keySkills:''}
this.obj=res;

console.log("response is"+this.obj);
},(err)=>{

})
  }

  ngOnInit() {
  }


}
