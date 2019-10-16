import { Component, OnInit } from '@angular/core';
import { WalkerAuthService } from '../walker-auth.service';

@Component({
  selector: 'app-display-walkers',
  templateUrl: './display-walkers.component.html',
  styleUrls: ['./display-walkers.component.css']
})
export class DisplayWalkersComponent implements OnInit {
  walkers;
  skillsToSearch;
  totalWalkers;
  constructor(private service:WalkerAuthService) { 
    this.skillsToSearch=this.service.getSkills();

this.service.getWalkersBySkills(this.skillsToSearch).subscribe((res)=>{
  this.walkers=res;
  this.totalWalkers=this.walkers.length;
})
  }

  ngOnInit() {
  }

}
