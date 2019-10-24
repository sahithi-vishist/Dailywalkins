import { Component, OnInit } from '@angular/core';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';

@Component({
  selector: 'app-walkincentral',
  templateUrl: './walkincentral.component.html',
  styleUrls: ['./walkincentral.component.css']
})
export class WalkincentralComponent implements OnInit {

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
