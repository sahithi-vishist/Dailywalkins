import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
login;
  constructor() {
    if(localStorage.getItem("userExists")){
      this.login=true;
    }
   }

  ngOnInit() {
  }

}
