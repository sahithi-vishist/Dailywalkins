import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { WalkerAuthService } from '../walker-auth.service';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared-service.service';
import { startWith, map } from 'rxjs/operators';

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
 locControl=new FormControl();
 eduControl=new FormControl();
 skillControl=new FormControl();

locationOptions: Observable<string[]>;
educationOptions:Observable<string[]>;

keySkillsOptions:Observable<string[]>;
locOptions: string[] = [];
skillsOptions:string[]=[];
eduOptions:string[]=[];

 search={keySkills:'',
                location:'',
                qualification:'',
              expMin:'',
              expMax:'',
              experience:"",
              industryId:'',
            roleId:'',
          jobTypeId:''}
  searchResult;
  
  constructor(private service:WalkerAuthService,private router:Router,
    private _fb:FormBuilder,private sharedService:SharedServiceService) {
    this.searchResult=this.sharedService.getJSON();
    this.search.keySkills=this.searchResult.keySkills
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
      this.locations.forEach(locObj => {
        this.locOptions.push(locObj['city'])
      });
 
    })
    this.service.getQualifications().subscribe((res)=>{
      this.education=res;
      this.education.forEach(eduObj=>{
        this.eduOptions.push(eduObj['qualification'])
      })
    })
    
this.service.getKeySkills().subscribe((res)=>{
  this.keySkills=res;
  this.keySkills.forEach(skillObj=>{
    this.skillsOptions.push(skillObj['requiredKeySkills'])
  })
})
   }
   advanceSearch(){
    this.search.keySkills=this.skillControl.value;
    this.search.location=this.locControl.value;
    //this.search.education=this.eduControl.value;
    this.search.qualification=this.education.find(edu => edu['qualification'] ==this.eduControl.value);
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
   this.service.getRoleByIndId(this.search.industryId).subscribe((res)=>{
     this.roles=res;
   })
 
  }
  onSelectMinExp(event){
 this.search.expMin=this.experience.find(exp => exp['experienceId'] == event.target['value']);
 }
  
  onSelectMaxExp(event){
 this.search.expMax=this.experience.find(exp => exp['experienceId'] == event.target['value']);
  }
  
 ngOnInit() {
 
   this.locationOptions = this.locControl.valueChanges
 .pipe(
   startWith(''),
   map(val => this.locfilter(val))
 );
 this.educationOptions = this.eduControl.valueChanges
 .pipe(
   startWith(''),
   map(val => this.edufilter(val))
 );
 
 this.keySkillsOptions = this.skillControl.valueChanges
 .pipe(
   startWith(''),
   map(val => this.skillfilter(val))
 );
 this.advSearchForm=this._fb.group({
  keySkills:new FormControl(this.search.keySkills,Validators.required),
  location:new FormControl(this.searchResult.Location,Validators.required),
  education:new FormControl(this.searchResult.qualification,Validators.required),
  minExp:new FormControl(this.searchResult.minExp,Validators.required),
  maxExp:new FormControl(this.searchResult.maxExp,Validators.required),
  industry:new FormControl(this.searchResult.industryId,Validators.required),
  role:new FormControl(this.searchResult.roleId,Validators.required),
  jobType:new FormControl(this.searchResult.jobTypeId,Validators.required)

})
 
   }
   locfilter(val: string): string[] {
     
     return  this.locOptions.filter(option =>
       option.toLowerCase().indexOf(val.toLowerCase()) === 0);
   }
   edufilter(val: string): string[] {
     
     return  this.eduOptions.filter(option =>
       option.toLowerCase().indexOf(val.toLowerCase()) === 0);
   }
   skillfilter(val: string): string[] {
     
     return  this.skillsOptions.filter(option =>
       option.toLowerCase().indexOf(val.toLowerCase()) === 0);
   }
}
