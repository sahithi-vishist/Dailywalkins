import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-editdrive',
  templateUrl: './editdrive.component.html',
  styleUrls: ['./editdrive.component.css']
})
export class EditdriveComponent implements OnInit {
driveId;  
driveForm:FormGroup;
drivedetails;
  constructor(private route:ActivatedRoute,private http:HttpClient) { 
this.driveId=this.route.snapshot.params.id;
this.http.get("http://localhost:62222/getdriveById?driveId=" + this.driveId).subscribe((res)=>{
  this.drivedetails=res;
});
  }

  ngOnInit() {
    this.driveForm=new FormGroup({
      drivename:new FormControl('',[Validators.required]),
      WalkinDate:new FormControl('',[Validators.required]),
      Industry:new FormControl('',[Validators.required]),
      checkIn:new FormControl(''),
      Location:new FormControl('',[Validators.required]),
      Locality:new FormControl('',[Validators.required]),
      SelectDrive:new FormControl('',[Validators.required]),
      JobDescription:new FormControl('',[Validators.required]),
      KeySkills:new FormControl('',[Validators.required]),
      CoOrdinators:new FormControl('',[Validators.required]),
      Designation:new FormControl('',[Validators.required]),
      RolesResponsibilties:new FormControl(''),
      CompanyName:new FormControl('',[Validators.required]),
      EndClient:new FormControl('',[Validators.required]),
      CLocation:new FormControl('',[Validators.required]),
      CLocality:new FormControl(''),
      ExpMin:new FormControl('',[Validators.required]),
      ExpMax:new FormControl('',[Validators.required]),
      JobType:new FormControl(''),
      EndClient1:new FormControl(''),
      checkEndClient:new FormControl(''),
      CompanyProfile:new FormControl('',[Validators.required]),
      Email:new FormControl('',[Validators.required,Validators.email]),
      ContactPerson:new FormControl('',[Validators.required]),
      Phone:new FormControl('',[Validators.required]),
      WalkinTimeSlots:new FormControl('',[Validators.required]),
      Qualification:new FormControl(''),
      ContactNoLandline:new FormControl(''),
      Address:new FormControl(''),
      SalMin:new FormControl('',[Validators.required]),
      SalMax:new FormControl('',[Validators.required]),
      NoticePeriod:new FormControl('',[Validators.required]),
      image:new FormControl('',[Validators.required]),
      Role:new FormControl('')
  });
}

}
