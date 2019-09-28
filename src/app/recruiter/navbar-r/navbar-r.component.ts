import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar-r',
  templateUrl: './navbar-r.component.html',
  styleUrls: ['./navbar-r.component.css']
})
export class NavbarRComponent implements OnInit {
  login;
  constructor() {
    this.login=localStorage.getItem("userExists");
    
  }

  ngOnInit() {
  }

}
