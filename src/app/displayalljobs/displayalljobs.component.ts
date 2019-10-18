import { Component, OnInit } from '@angular/core';
import { WalkerAuthService } from '../walker/walker-auth.service';
import { SharedServiceService } from '../shared-service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-displayalljobs',
  templateUrl: './displayalljobs.component.html',
  styleUrls: ['./displayalljobs.component.css']
})
export class DisplayalljobsComponent implements OnInit {
postJobs;
totalJobs;
toSearch;
filteredJobs;
  constructor(private service:WalkerAuthService,
    private route:ActivatedRoute,private sharedService:SharedServiceService) { 

    this.service.getJobs().subscribe(res=>{
      this.postJobs=res;
      this.totalJobs=this.postJobs.length;
    },err=>{

    })

  }

  ngOnInit() {
  }

}
