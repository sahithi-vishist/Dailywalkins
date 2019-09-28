import { Component, OnInit } from '@angular/core';
import { WalkerAuthService } from '../walker/walker-auth.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
postJobs;
totalWalkins;
displayJob;

  constructor(private service:WalkerAuthService) { 
    this.service.getJobs().subscribe((res)=>{
      this.postJobs=res;
    
      this.displayJob={ jobNo:this.postJobs[0].jobNo,
                        jobTitle:this.postJobs[0].jobTitle,
                        endClient:this.postJobs[0].endClient,
                        companyName:this.postJobs[0].companyName,
                        keySkills:this.postJobs[0].keySkills,
                        walkinDate:this.postJobs[0].walkinDate,
                        walkinLocation:this.postJobs[0].walkinLocation};

      this.totalWalkins=this.postJobs.length;
     
    })
  }

  ngOnInit() {
  }

}
