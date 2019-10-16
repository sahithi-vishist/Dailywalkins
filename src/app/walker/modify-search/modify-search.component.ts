import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { WalkerAuthService } from '../walker-auth.service';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-modify-search',
  templateUrl: './modify-search.component.html',
  styleUrls: ['./modify-search.component.css']
})
export class ModifySearchComponent implements OnInit {
  advSearchForm:FormGroup;
  experience;
  jobTypes;
  industries;
  locations;
  allLocations;
  education;
  roles;
  formData;
  keySkills;
  searchResult;
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
  constructor(private service:WalkerAuthService,private router:Router,
    private _fb:FormBuilder,private sharedService:SharedServiceService) {
    this.searchResult=this.sharedService.getJSON();
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

this.service.getKeySkills().subscribe((res)=>{
  this.keySkills=res;
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
    this.advSearchForm=this._fb.group({
      keySkills:new FormControl(this.searchResult.keySkills,Validators.required),
      location:new FormControl(this.searchResult.location,Validators.required),
      education:new FormControl(this.searchResult.education,Validators.required),
      minExp:new FormControl(this.searchResult.minExp,Validators.required),
      maxExp:new FormControl(this.searchResult.maxExp,Validators.required),
      industry:new FormControl(this.searchResult.industryId,Validators.required),
      role:new FormControl(this.searchResult.roleId,Validators.required),
      jobType:new FormControl(this.searchResult.jobTypeId,Validators.required)
    
    })
  }

}
