import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';

@Component({
  selector: 'app-walkin-details-r',
  templateUrl: './walkin-details-r.component.html',
  styleUrls: ['./walkin-details-r.component.css']
})
export class WalkinDetailsRComponent implements OnInit {
  driveId;
  obj;
  noticeText;
  qualification;
  jobType;
   locality;
  location;
  endClient;
   experience;
  ctc;
  
    constructor(private route:ActivatedRoute,private service:RecruiterauthserviceService) {
      this.driveId=this.route.snapshot.params.id;
      this.service.getDriveById(this.driveId).subscribe((res)=>{
       this.obj={
        //experienceMax:res['expValue'],
         role:res['role'],
         keySkills:res['keySkills'],
         jobDescription:res['jobDescription'],
         designation:res['designation'],
         noticePeriod:res['noticePeriod'],
         jobType:res['jobType'],
        qualification:res['qualification'],
       companyLogo:res['companyLogo'],
        contactNoLandline:res['contactNoLandline'],
        companyAddress:res['companyAddress'],
        contactNo:res['contactNo'],
        contactEmail:res['contactEmail'],
        companyName:res['companyName'],
        locality:res['locality'],
        location:res['walkinLocation'],
        companyProfile:res['companyProfile'],
        endClient:res['endClient'],
        maxSal:res['salaryMax'],
        minSal:res['salaryMin'],
        rolesResposibilities:res['rolesResposibilities'],
        industry:res['industry'],
        
       }
      // console.log("company logo is"+this.obj.companyLogo);
  this.noticeText=this.obj.noticePeriod.noticeText;
  this.qualification=res['qualification'].qualification;
  this.jobType=res['jobType'].jobType;
  this.locality=res['locality'].city;
  this.location=res['locality'].location;
  this.experience=res['experienceMin'].expValue+"-"+res['experienceMax'].expValue;
  console.log("experience value is"+this.experience)
      });
    }
      
  
  
    ngOnInit() {
    }

}
