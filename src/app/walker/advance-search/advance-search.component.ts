import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { WalkerAuthService } from '../walker-auth.service';
import { Router } from '@angular/router';

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
  education;
  roles;
  constructor(private service:WalkerAuthService,private router:Router) {
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
  console.log(this.advSearchForm.value);
  this.router.navigate(['/displayalljobs'])
 }
 onSelectJobType(event){

 }
 onSelectIndustry(event){

 }
 onSelectMinExp(event){

 }
 onSelectMaxExp(event){

 }
 onSelectEducation(event){

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
