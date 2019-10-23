import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WalkerAuthService } from '../walker-auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-advance-search',
  templateUrl: './advance-search.component.html',
  styleUrls: ['./advance-search.component.css']
})
export class AdvanceSearchComponent implements OnInit {
 
  advSearchForm:FormGroup;
  experience;
  jobTypes;
  industries;
  locations;
  allLocations;
  education;
  roles;
  formData;
 locControl=new FormControl();
 eduControl=new FormControl();
 filteredLocations: Observable<string[]>;
 search={keySkills:'',
                location:'',
                education:'',
              expMin:'',
              expMax:'',
              experience:"",
              industryId:'',
            roleId:'',
          jobTypeId:''}
  constructor(private service:WalkerAuthService,private router:Router,private sharedService:SharedServiceService) {
    this.service.getExperienceData().subscribe((res)=>{
      this.experience=res;
    })
    this.service.getJobType().subscribe((res)=>{
      this.jobTypes=res;
    })
    this.service.getIndustries().subscribe((res)=>{
      this.industries=res;
    })
    this.service.getLocations().subscribe((res)=>{
      this.locations=res;
   
    })
    this.service.getQualifications().subscribe((res)=>{
      this.education=res;
    })
    this.service.getRoles().subscribe((res)=>{
      this.roles=res;
      
    })


   }

 advanceSearch(){
  
  
   this.search.keySkills=this.advSearchForm.value.keySkills;
   this.search.location=this.locControl.value;
   //this.search.education=this.eduControl.value;
   this.search.education=this.education.find(edu => edu['qualification'] ==this.eduControl.value);
   this.search.experience=this.search.expMax+""+this.search.expMin;
 this.sharedService.setJSON(this.search);
  this.router.navigate(['/walker/displayjobsbysearch'])
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
this.advSearchForm=new FormGroup({
  keySkills:new FormControl('',Validators.required),
  location:new FormControl('',Validators.required),
  education:new FormControl('',Validators.required),
  minExp:new FormControl('',Validators.required),
  maxExp:new FormControl('',Validators.required),
  industry:new FormControl('',Validators.required),
  role:new FormControl('',Validators.required),
  jobType:new FormControl('',Validators.required)

})

  }
 
}
