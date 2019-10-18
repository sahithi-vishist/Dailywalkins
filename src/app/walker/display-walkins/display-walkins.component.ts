import { Component, OnInit } from '@angular/core';
import { WalkerAuthService } from '../walker-auth.service';

@Component({
  selector: 'app-display-walkins',
  templateUrl: './display-walkins.component.html',
  styleUrls: ['./display-walkins.component.css']
})
export class DisplayWalkinsComponent implements OnInit {
  skillsToSearch;
  postJobs;
  totalJobs;
  constructor(private service:WalkerAuthService) { 
    this.skillsToSearch=this.service.getSkills();

this.service.getWalkinsBySkills(this.skillsToSearch).subscribe((res)=>{
  this.postJobs=res;
  this.totalJobs=this.postJobs.length;
})
  }

  ngOnInit() {
  }

}
