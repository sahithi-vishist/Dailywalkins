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

      if(this.toSearch.keySkills!=""){
        this.service.getWalkersBySkills(this.toSearch.keySkills).subscribe((res)=>{
          this.walkerDetails=res;
        this.totalWalkers=this.walkerDetails.length;
        });
    }else if(this.toSearch.industryId!=""){
      this.sharedService.getWalkerByIndustry(this.toSearch).subscribe((res)=>{
        this.walkerDetails=res;
        this.totalWalkers=this.walkerDetails.length;
      });
    }else if(this.toSearch.education!=undefined){
      this.sharedService.getWalkerByQualification(this.toSearch).subscribe((res)=>{
        this.walkerDetails=res;
      this.totalWalkers=this.walkerDetails.length;
      
      });
   }else if(this.toSearch.roleId!=""){
    this.sharedService.getWalkerByRole(this.toSearch).subscribe((res)=>{
      this.walkerDetails=res;
      this.totalWalkers=this.walkerDetails.length;
    });
  }else if(this.toSearch.noticePeriod!=""){
    this.sharedService.getWalkerByNoticePeriod(this.toSearch).subscribe((res)=>{
      this.walkerDetails=res;
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
