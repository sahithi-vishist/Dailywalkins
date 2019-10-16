import { Component, OnInit } from '@angular/core';
import { WalkerAuthService } from '../walker/walker-auth.service';
import { FacilityService } from '../facility/facilityservice.service';
import { RecruiterauthserviceService } from '../recruiterauthservice.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  postJobs;
  totalWalkins;
  displayJob;
  facilities;
  fcount;
  wCount;
  rCount;
  walkers;
  walkins;
  search={skill:''}
  selectedDate = new Date();
  selectedCategory;
  constructor(private service: WalkerAuthService,private router:Router ,private rservice: RecruiterauthserviceService, private fservice: FacilityService) {
    this.service.getWalkers().subscribe((res) => {
      this.walkers = res;
      this.wCount = this.walkers.length;
    })
    this.rservice.getdrives().subscribe((res) => {
      this.walkins = res;
      console.log(this.walkins);
      this.rCount = this.walkins.length;
    })
    this.service.getJobs().subscribe((res) => {
      this.postJobs = res;

      this.displayJob = {
        jobNo: this.postJobs[0].jobNo,
        jobTitle: this.postJobs[0].jobTitle,
        endClient: this.postJobs[0].endClient,
        companyName: this.postJobs[0].companyName,
        keySkills: this.postJobs[0].keySkills,
        walkinDate: this.postJobs[0].walkinDate,
        walkinLocation: this.postJobs[0].walkinLocation,
        companyLogo:this.postJobs[0].companyLogo
      };

      this.totalWalkins = this.postJobs.length;

    })
    this.fservice.getfac().subscribe((res) => {
      this.facilities = res;
      this.fcount = this.facilities.length;

    })
  }

  ngOnInit() {
  }
  loadFacilities(date) {
    console.log(date);
    this.fservice.getFacilityByDate(date).subscribe((res) => {

      this.facilities = res;
      this.fcount = this.facilities.length;
    })
  }

  onSelectCategory(event){
this.selectedCategory=event.target.value;
  }

  checkSkills(searchObj){
    if(this.selectedCategory=="WALKINS"){
    
     this.service.sendSkills(searchObj.skill);
       this.router.navigate(['/walker/displaywalkins'])
    
    }else{
      this.service.sendSkills(searchObj.skill);
      this.router.navigate(['/walker/displaywalkers'])
      
    }


  }
}
