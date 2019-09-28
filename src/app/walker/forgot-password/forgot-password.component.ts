import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {
vm={};
  constructor() { }

  ngOnInit() {
  }
  forgotPassword(emailid){
    console.log(emailid);
  }
}
