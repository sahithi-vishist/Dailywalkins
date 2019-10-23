import { Component, OnInit } from '@angular/core';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-advancesearch',
  templateUrl: './advancesearch.component.html',
  styleUrls: ['./advancesearch.component.css']
})
export class AdvancesearchComponent implements OnInit {
vm={
  KeySkills:'',
  skills:'',
  exskills:'',
  location:'',
  preflocation:'',
  minExp:'',
  maxExp:'',
  industryname:'',
  role:'',
  degree:'',
  period:''
}; 
walkerDetails;
experience;
industries;
roles; 
noticeperiod;
qualifications;
expMin;
expMax;
locations;
search={keySkills:'',
        location:'',
        preferredLocation:'',
        education:'',
        experience:'',
        expMin:'',
        expMax:'',
        industryId:'',
        roleId:'',
        noticePeriod:''}
  constructor(private service:RecruiterauthserviceService,
    private router:Router,private sharedservice:SharedServiceService) {
    this.service.getExperience().subscribe((res)=>{
      this.experience=res;
    });
    this.service.getIndustries().subscribe((res)=>{
      this.industries=res;
    });
this.service.getRoles().subscribe((res)=>{
  this.roles=res;
});
this.service.getQualification().subscribe((res)=>{
  this.qualifications=res;
});
this.service.getNoticePeriod().subscribe((res)=>{
  this.noticeperiod=res;
});
this.service.getAllWakers().subscribe((res)=>{
  this.walkerDetails=res;
});
this.service.getAllLocations().subscribe((res)=>{
this.locations=res;
});

   }
  submitForm(val){
    //console.log(val);
  }
  checkboxAll(){
    document.getElementById('chkAll').hidden=true;
  }
  checkboxResume(){
    document.getElementById('chkResume').hidden=true;
  }
  ngOnInit() {
  }
  advanceSearch(){
    this.search.keySkills=this.vm.KeySkills;
   // this.search.experience=this.expMin+ "."+this.expMax;
    //this.search.education=this.vm.degree;
   // this.search.industryId=this.vm.industryname;
    //this.search.roleId=this.vm.role;
    //this.search.noticePeriodId=this.vm. period;
    this.search.location=this.locations.find(locs=>locs['city']==this.vm.location);
    this.search.preferredLocation=this.vm.preflocation;
  //  console.log(this.search.location);  
    this.sharedservice.setJSON(this.search);

    this.router.navigate(['recruitment/searchProfiles']);
  }
  selectNoticePeriod(event){
    this.search.noticePeriod=this.noticeperiod.find(notice=> notice['noticePeriodId'] == event.target['value']);
    console.log(this.search.noticePeriod);
  }
selectQualification(event){
  this.search.education=this.qualifications.find(quals => quals['qualificationId'] == event.target['value']);

}
selectRole(event){
  this.search.roleId=this.roles.find(role => role['roleId'] == event.target['value']);
}
selectIndustry(event){
  this.search.industryId = this.industries.find(industry=> industry['industryId'] == event.target['value']);

}
onSelectMinExp(event){
  this.search.expMin=this.experience.find(exp => exp['experienceId'] == event.target['value']);
  }
   
   onSelectMaxExp(event){
  this.search.expMax=this.experience.find(exp => exp['experienceId'] == event.target['value']);
   }
  
  



}
