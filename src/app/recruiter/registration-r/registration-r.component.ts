import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlertService } from 'src/app/alert.service';


@Component({
  selector: 'app-registration-r',
  templateUrl: './registration-r.component.html',
  styleUrls: ['./registration-r.component.css']
})
export class RegistrationRComponent implements OnInit {
  msg;
  vm={
    comapnyName:'',
    Email:'',
    URL:'',
    password:'',
    ConfirmPassword:'',
    location:'',
    address:'',
    industry:'',
    CompanyProfile:'',
    file:'',
    FirstName:'',
    lastName:'',
    mobile:'',
    cmobile:'',
    Designation:'',
    emailalert:'',
    smsalert:'',
    chatalert:'',
    daily:'',
    weekly:'',
    value:'',
    day:'',
    WeekDay:''

  };
  industries;
  constructor(private alert:AlertService,private router:Router,
    private service:RecruiterauthserviceService) { 
this.service.getIndustries().subscribe((res)=>{
  this.industries=res;
});
  }
checkboxEmail(){
  document.getElementById('divEmail').hidden=false;
}

checkboxNone(){
  document.getElementById('divEmail').hidden = true;

}
showDaily(){
  document.getElementById('divTime').hidden = false;
  document.getElementById('divDay').hidden = true;

}
showWeekly(){
  // document.getElementById('divDay').style.display='block';
  document.getElementById('divDay').hidden = false;
  document.getElementById('divTime').hidden = true;

}
hideDW(){
                        
  document.getElementById('divDay').hidden = true;
  document.getElementById('divTime').hidden = true;

}
getDropDownValue(){
  document.getElementById('divTime').hidden = false;

}
sendData(val){
  console.log(val);
}
submitRegistration(values){
this.service.recruiterRegsiter(values).subscribe((res)=>{
   
   if(res){
  this.msg="Registration successfull please login";
  this.alert.showAlert('success',"Registration Successfull");
  }else{
    this.alert.showAlert('Error',"Registration failed due to some error");
  }
},
(err)=>{
  console.log("error");
});
this.service.profileAlerts(values).subscribe((res)=>{
});
}
selectIndustry(event){
//   console.log("industry called");
// console.log(event.target.value);
// this.vm.industry=this.industries.find(indestry=>indestry['industryId'] == event.target['value']);
// console.log(this.vm.industry);
this.vm.industry=event.target.value;
}
  ngOnInit() {
  
}

}

