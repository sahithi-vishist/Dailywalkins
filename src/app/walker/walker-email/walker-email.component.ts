import { Component, OnInit } from '@angular/core';
import { SharedServiceService } from 'src/app/shared-service.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-walker-email',
  templateUrl: './walker-email.component.html',
  styleUrls: ['./walker-email.component.css']
})

export class WalkerEmailComponent implements OnInit {
  sendJobEmail:FormGroup;
 
  result;
  constructor(private sharedService:SharedServiceService,private _fb:FormBuilder) { 
  this.result=this.sharedService.getEmailAndJobTitle();
  console.log(this.result.jobTitle);
  }

  ngOnInit() {
    this.sendJobEmail=this._fb.group({
toEmail:new FormControl('',Validators.required),
fromEmail:new FormControl('',Validators.required),
subject:new FormControl(this.result.jobTitle,Validators.required),
txtMessage:new FormControl('Hi, Just found a suitable job for you on dailywalkins.com',Validators.required)
    })
  }
  sendEmailDetails(){
    console.log(this.sendJobEmail.value);
  }
}
