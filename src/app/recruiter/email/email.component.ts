import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { SharedServiceService } from 'src/app/shared-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  EmailForm: FormGroup;
  JobNo;
  From;
  EmailSubject;
  ExpMin;
  ExpMax;
  CTCMin;
  CTCMax;
  Location;
  NoticePeriod;
  KeySkills;
  JobDescription;
  EndClient;
  JobType;
  ToEmail;
  EmailCC;

  constructor(private service:RecruiterauthserviceService,private router:Router,private sharedService:SharedServiceService) { }
 
  sendEmail(){
    console.log(this.EmailForm.value);
    this.router.navigate(['/sendEmail'])


  }

  ngOnInit() {
    this.EmailForm=new FormGroup({
      JobNo:new FormControl('',Validators.required),
      From:new FormControl('',Validators.required),
      EmailSubject: new FormControl('',Validators.required),
      ExpMin:new FormControl('',Validators.required),
      ExpMax:new FormControl('',Validators.required),
      CTCMin:new FormControl('',Validators.required),
      CTCMax:new FormControl('',Validators.required),
      Location:new FormControl('',Validators.required),
      NoticePeriod:new FormControl('',Validators.required),
      KeySkills:new FormControl('',Validators.required),
      JobDescription:new FormControl('',Validators.required),
      EndClient:new FormControl('',Validators.required),
      JobType:new FormControl('',Validators.required),
      ToEmail:new FormControl('',[Validators.required,Validators.email]),
      EmailCC:new FormControl('',Validators.required),
  });
}
}