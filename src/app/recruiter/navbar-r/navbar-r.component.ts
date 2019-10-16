import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-r',
  templateUrl: './navbar-r.component.html',
  styleUrls: ['./navbar-r.component.css']
})
export class NavbarRComponent implements OnInit {
  login;
  status;
  constructor() {
    this.login=localStorage.getItem("userExists");
    if(localStorage.getItem('token')!=null)
      this.status=true;
      else
      this.status=false;
  }

  ngOnInit() {
  }

}
