import { Component, OnInit } from '@angular/core';
import { WalkerAuthService } from '../walker/walker-auth.service';

@Component({
  selector: 'app-displayalljobs',
  templateUrl: './displayalljobs.component.html',
  styleUrls: ['./displayalljobs.component.css']
})
export class DisplayalljobsComponent implements OnInit {
postJobs;
totalJobs;
  constructor(private service:WalkerAuthService) { 
    this.service.getJobs().subscribe(res=>{
      this.postJobs=res;
      this.totalJobs=this.postJobs.length;
    },err=>{

    })
  }

  ngOnInit() {
  }

}
