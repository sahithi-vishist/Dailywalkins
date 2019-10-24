import { Component, OnInit } from '@angular/core';
import { WalkerAuthService } from '../walker-auth.service';

@Component({
  selector: 'app-applied-walkin',
  templateUrl: './applied-walkin.component.html',
  styleUrls: ['./applied-walkin.component.css']
})
export class AppliedWalkinComponent implements OnInit {
vm={};
appliedWalkins;
appliedWalkinsCount;
  constructor(private service:WalkerAuthService) {
    this.service.displayAppliedWalkins(localStorage.getItem('email')).subscribe((res)=>{
      this.appliedWalkins=res;
      this.appliedWalkinsCount=this.appliedWalkins.length;
    })
  
  }

  ngOnInit() {
  }

}
