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
search={keySkills:'',
        location:'',
        education:'',
        expMin:'',
        expMax:'',
        experience:"",
        industryId:'',
        roleId:'',
        noticePeriodId:''}
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
    this.search.education=this.vm.degree;
    this.search.industryId=this.vm.industryname;
    this.search.roleId=this.vm.role;
    this.search.noticePeriodId=this.vm. period;
    this.sharedservice.setJSON(this.search);
    this.router.navigate(['recruitment/searchProfiles']);
  }
  selectNoticePeriod(event){
    this.search.noticePeriodId=this.noticeperiod.find(jobtype => jobtype['jobTypeId'] == event.target['value']);
  }
selectQualification(event){
  this.search.education=this.qualifications.find(role => role['qualificationId'] == event.target['value']);
}
selectRole(event){
  this.search.roleId=this.roles.find(role => role['roleId'] == event.target['value']);
}
selectIndustry(event){
  this.search.industryId = this.industries.find(ind => ind['industryId'] == event.target['value']);
}

}
