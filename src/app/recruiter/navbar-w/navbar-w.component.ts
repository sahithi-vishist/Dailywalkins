import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-w',
  templateUrl: './navbar-w.component.html',
  styleUrls: ['./navbar-w.component.css']
})
export class NavbarWComponent implements OnInit {
  login;
  token;
  
  status;
  constructor() {
    this.login=localStorage.getItem("userExists");
   
      if(localStorage.getItem('token')!=null)
      this.status=true;
      else
      this.status=false;
    
    console.log(this.status);
   }

  ngOnInit() {
  }

}
