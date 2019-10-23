import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';
import { WalkerAuthService } from '../walker-auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
login;
fName:String;
  constructor(private sharedService:SharedServiceService,private service:WalkerAuthService) {
  
    if(localStorage.getItem("userExists")){
      this.login=true;
     //this.fName=this.sharedService.getfName();
     this.service.getWalkerById().subscribe((res)=>{
      this.fName=res['firstName'];
     })
    }else{
      this.fName="Walker";
    }
   }

  ngOnInit() {
  }

}
