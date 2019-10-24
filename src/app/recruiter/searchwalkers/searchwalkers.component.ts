import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-searchwalkers',
  templateUrl: './searchwalkers.component.html',
  styleUrls: ['./searchwalkers.component.css']
})
export class SearchwalkersComponent implements OnInit {
  walkerDetails;
  toSearch;
  totalWalkers;
  constructor(private router:Router,
    private service:RecruiterauthserviceService,
    private sharedService:SharedServiceService) {
      this.toSearch=this.sharedService.getJSON();
      console.log(this.toSearch);
     if(this.toSearch.keySkills!=""&&this.toSearch.location!=""&&this.toSearch.preferredLocation!=""&&this.toSearch.education!=""&&this.toSearch.industryId!=""&&this.toSearch.roleId!=""&&this.toSearch.noticePeriod!=""){
        this.sharedService.getwalkerByAll(this.toSearch).subscribe((res)=>{
          this.walkerDetails=res;
          console.log(this.walkerDetails);
          this.totalWalkers=this.walkerDetails.length;
        
        });
      }
      else if(this.toSearch.keySkills!=""){
        this.service.getWalkersBySkills(this.toSearch.keySkills).subscribe((res)=>{
          this.walkerDetails=res;
        this.totalWalkers=this.walkerDetails.length;
        });
    }else if(this.toSearch.industryId!=""){
      this.sharedService.getWalkerByIndustry(this.toSearch.industryId).subscribe((res)=>{
        this.walkerDetails=res;
        this.totalWalkers=this.walkerDetails.length;
      });
    }else if(this.toSearch.education!=""){
      this.sharedService.getWalkerByQualification(this.toSearch.education).subscribe((res)=>{
        this.walkerDetails=res;
      this.totalWalkers=this.walkerDetails.length;
      
      });
   }else if(this.toSearch.roleId!=""){
    this.sharedService.getWalkerByRole(this.toSearch.roleId).subscribe((res)=>{
      this.walkerDetails=res;
      this.totalWalkers=this.walkerDetails.length;
    });
  }else if(this.toSearch.preferredLocation!=""){
    this.service.getWalkersByPrefLocation(this.toSearch.preferredLocation).subscribe((res)=>{
      this.walkerDetails=res;
      this.totalWalkers=this.walkerDetails.length;
    });
  }  else if((this.toSearch.expMin.expValue!=undefined&&this.toSearch.expMax.expValue!=undefined)){
    this.sharedService.getwalkerByExperience(this.toSearch.expMin.expValue,this.toSearch.expMax.expValue).subscribe((res)=>{
      this.walkerDetails=res;
      this.totalWalkers=this.walkerDetails.length;
    
    });
   } else if(this.toSearch.location!=""){
    this.sharedService.getwalkerByLocation(this.toSearch.location).subscribe((res)=>{
      this.walkerDetails=res;
      this.totalWalkers=this.walkerDetails.length;
    
    });
  } else if(this.toSearch.noticePeriod!=""){
    this.sharedService.getWalkerByNoticePeriod(this.toSearch.noticePeriod).subscribe((res)=>{
      this.walkerDetails=res;
      console.log(this.walkerDetails);
      this.totalWalkers=this.walkerDetails.length;
    
    });
  }
  
 
}

  ngOnInit() {
  }
  sendEmail(){
this.router.navigate(['/recruitment/viewProfile']);
  }
  sendSMS(){
    this.router.navigate(['/recruitment/viewProfile']);
  }
}
