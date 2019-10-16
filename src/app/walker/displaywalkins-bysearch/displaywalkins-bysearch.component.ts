import { Component, OnInit } from '@angular/core';
import { WalkerAuthService } from '../walker-auth.service';
import { SharedServiceService } from 'src/app/shared-service.service';
import { NotificationService } from 'src/app/notification.service';

@Component({
  selector: 'app-displaywalkins-bysearch',
  templateUrl: './displaywalkins-bysearch.component.html',
  styleUrls: ['./displaywalkins-bysearch.component.css']
})
export class DisplaywalkinsBysearchComponent implements OnInit {
toSearch;
postJobs;
totalJobs;
  constructor(private service:WalkerAuthService,private notification:NotificationService,
    private sharedService:SharedServiceService) {
    this.toSearch=this.sharedService.getJSON();
    console.log(this.toSearch);
    if(this.toSearch.keySkills!=""){
      this.service.getWalkinsBySkills(this.toSearch.keySkills).subscribe((res)=>{
        this.postJobs=res;
        this.totalJobs=this.postJobs.length;
    })
  }else if(this.toSearch.location!=null){
  this.sharedService.getWalkinsByLocation(this.toSearch).subscribe((res)=>{
    this.postJobs=res;
    this.totalJobs=this.postJobs.length;
  })
}else if(this.toSearch.education!=undefined){
  this.sharedService.getWalkinsByQualification(this.toSearch).subscribe((res)=>{
    this.postJobs=res;
  this.totalJobs=this.postJobs.length;
  
  });
}else if(this.toSearch.industryId!=""){
  this.sharedService.getWalkinsByIndustry(this.toSearch).subscribe((res)=>{
    this.postJobs=res;
    this.totalJobs=this.postJobs.length;
  })
}else if(this.toSearch.roleId!=""){

  this.sharedService.getWalkinsByRole(this.toSearch).subscribe((res)=>{
    this.postJobs=res;
  this.totalJobs=this.postJobs.length;
  
  });
}else if(this.toSearch.jobTypeId!=""){
  this.sharedService.getWalkinsByJobType(this.toSearch).subscribe((res)=>{
    this.postJobs=res;
  this.totalJobs=this.postJobs.length;
  
  });
}else if(this.toSearch.expMin!=""){
  this.sharedService.getWalkinsByminExp(this.toSearch).subscribe((res)=>{
    this.postJobs=res;
  
    this.totalJobs=this.postJobs.length;
  })
}else if(this.toSearch.expMax!=""){
  this.sharedService.getWalkinsBymaxExp(this.toSearch).subscribe((res)=>{
    this.postJobs=res;
    console.log(this.postJobs)
  this.totalJobs=this.postJobs.length;
  
  });
}else{
 //this.notification.showNotification("error","please enter any search keyword");
}

  }

  ngOnInit() {
  }

}
