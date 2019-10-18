import { Component, OnInit } from '@angular/core';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { Router } from '@angular/router';
import { SharedServiceService } from 'src/app/shared-service.service';

@Component({
  selector: 'app-sms',
  templateUrl: './sms.component.html',
  styleUrls: ['./sms.component.css']
})
export class SMSComponent implements OnInit {

  constructor(private service:RecruiterauthserviceService,private router:Router,private sharedService:SharedServiceService) { }
  SendSMS(){
    this.router.navigate(['/Recruitment/SendSMS'])
  }
  ngOnInit() {
  }

}
