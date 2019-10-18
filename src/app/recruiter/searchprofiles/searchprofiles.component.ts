import { Component, OnInit } from '@angular/core';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { SharedServiceService } from 'src/app/shared-service.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-searchprofiles',
  templateUrl: './searchprofiles.component.html',
  styleUrls: ['./searchprofiles.component.css']
})
export class SearchprofilesComponent implements OnInit {
  toSearch;
getprofiles;
totalJobs;

  constructor(private service:RecruiterauthserviceService,private notification:NotificationService,
    private sharedService:SharedServiceService) {
    this.toSearch=this.sharedService.getJSON();
    console.log(this.toSearch);
    if(this.toSearch.keySkills!=""){
      this.service.getWalkersBySkills(this.toSearch.keySkills).subscribe((res)=>{
        this.getprofiles=res;
        this.totalJobs=this.getprofiles.length;
    })
  }else if(this.toSearch.location!=null){
  this.sharedService.getWalkersByLocation(this.toSearch).subscribe((res)=>{
    this.getprofiles=res;
    this.totalJobs=this.getprofiles.length;
  })
}else if(this.toSearch.education!=undefined){
  this.sharedService.getWalkersByQualification(this.toSearch).subscribe((res)=>{
    this.getprofiles=res;
  this.totalJobs=this.getprofiles.length;
  
  });
}else if(this.toSearch.industryId!=""){
  this.sharedService.getWalkersByIndustry(this.toSearch).subscribe((res)=>{
    this.getprofiles=res;
    this.totalJobs=this.getprofiles.length;
  })
}else if(this.toSearch.roleId!=""){

  this.sharedService.getWalkersByRole(this.toSearch).subscribe((res)=>{
    this.getprofiles=res;
  this.totalJobs=this.getprofiles.length;
  
  });
}else if(this.toSearch.jobTypeId!=""){
  this.sharedService.getWalkersByJobType(this.toSearch).subscribe((res)=>{
    this.getprofiles=res;
  this.totalJobs=this.getprofiles.length;
  
  });
}else if(this.toSearch.expMin!=""){
  this.sharedService.getWalkersByminExp(this.toSearch).subscribe((res)=>{
    this.getprofiles=res;
  
    this.totalJobs=this.getprofiles.length;
  })
}else if(this.toSearch.expMax!=""){
  this.sharedService.getWalkersBymaxExp(this.toSearch).subscribe((res)=>{
    this.getprofiles=res;
    console.log(this.getprofiles)
  this.totalJobs=this.getprofiles.length;
  
  });
}else{
 this.notification.showNotification("error","please enter any search keyword");

}
    }

  ngOnInit() {
  }

}
