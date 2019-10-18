import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { WalkerAuthService } from 'src/app/walker/walker-auth.service';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared-service.service';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { getTreeMissingMatchingNodeDefError } from '@angular/cdk/tree';

@Component({
  selector: 'app-advancesearch',
  templateUrl: './advancesearch.component.html',
  styleUrls: ['./advancesearch.component.css']
})
export class AdvancesearchComponent implements OnInit {
// vm={
//   Keywords:'',
//   skills:'',
//   exskills:'',
//   location:'',
//   preflocation:'',
//   exp:'',
//   maxExp:'',
//   industryname:'',
//   role:'',
//   degree:'',
//   period:''
// };
//   constructor() { }
//   submitForm(val){
//     console.log(val);
//   }
//   checkboxAll(){
//     document.getElementById('chkAll').hidden=true;
//   }
//   checkboxResume(){
//     document.getElementById('chkResume').hidden=true;
//   }
//   ngOnInit() {
//   }


advSearchRec:FormGroup;
experience;
jobTypes;
industries;
skills;
allLocations;
education;
roles;
formData;
LocationControl=new FormControl();
eduControl=new FormControl();
filteredLocations: Observable<string[]>;
search={Keywords:'',
skills:'',
              education:'',
              Location:'',
            expMin:'',
            expMax:'',
            experience:"",
            industryId:'',
          roleId:'',
        jobTypeId:''}
constructor(private service:RecruiterauthserviceService,private router:Router,private sharedService:SharedServiceService) {
  this.service.getWalkersBySkills(this.skills).subscribe((res)=>{
    this.experience=res;
  })
  this.service.getJobtype().subscribe((res)=>{
    this.jobTypes=res;
  })
  this.service.getIndustries().subscribe((res)=>{
    this.industries=res;
  })
  // this.service.getWalkersByLocation.subscribe((res)=>{
  //   this.allLocations=res;
  // })


  this.service.getQualification().subscribe((res)=>{
    this.education=res;
  })
  // this.service.getRoles().subscribe((res)=>{
  //   this.roles=res;
  // })


 }
 
advanceSearchr(){

console.log(this.advSearchRec.value)
 this.search.Keywords=this.advSearchRec.value.Keywords;
 this.search.skills=this.LocationControl.value;
 //this.search.education=this.eduControl.value;
 this.search.education=this.education.find(edu => edu['qualification'] ==this.eduControl.value);
 this.search.experience=this.search.expMax+""+this.search.expMin;
this.sharedService.setJSON(this.search);
this.router.navigate(['/advanceSearchr']);
}
onSelectRole(event){
 this.search.roleId=this.roles.find(role => role['roleId'] == event.target['value']);
}

onSelectJobType(event){
this.search.jobTypeId=this.jobTypes.find(jobtype => jobtype['jobTypeId'] == event.target['value']);
}
onSelectIndustry(event){
this.search.industryId = this.industries.find(ind => ind['industryId'] == event.target['value']);
}
onSelectMinExp(event){
this.search.expMin=this.experience.find(exp => exp['experienceId'] == event.target['value']);
}

onSelectMaxExp(event){
this.search.expMax=this.experience.find(exp => exp['experienceId'] == event.target['value']);
}

ngOnInit() {

  this.advSearchRec=new FormGroup({
  Keywords:new FormControl('',Validators.required),
  Location:new FormControl('',Validators.required),
  AddSkills:new FormControl('',Validators.required),
  ExcludeSkills:new FormControl('',Validators.required),
education:new FormControl('',Validators.required),
  minExp:new FormControl('',Validators.required),
maxExp:new FormControl('',Validators.required),
industry:new FormControl('',Validators.required),
role:new FormControl('',Validators.required),
jobType:new FormControl('',Validators.required)

})

}

}
