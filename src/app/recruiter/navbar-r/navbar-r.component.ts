import { Component, OnInit } from '@angular/core';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';

@Component({
  selector: 'app-navbar-r',
  templateUrl: './navbar-r.component.html',
  styleUrls: ['./navbar-r.component.css']
})
export class NavbarRComponent implements OnInit {
  login;
  id;
  firstName;
  constructor(private service:RecruiterauthserviceService) {
    this.login=localStorage.getItem("userExists");
    this.id = localStorage.getItem('recruiterId');
    this.service.getRecruiterById(this.id).subscribe((res) => {
      this.firstName=res['firstName'];
  });
  }
  ngOnInit() {
  }

}
