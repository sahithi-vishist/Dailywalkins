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
  selectedCompanyLogo:File;
  imgURL;
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
selectCompanyLogo(event){
  this.selectedCompanyLogo=event.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}
sendData(val){
  console.log(val);
}
submitRegistration(values){
this.service.recruiterRegsiter(values,this.selectedCompanyLogo).subscribe((res)=>{
   
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

this.vm.industry=event.target.value;
}
  ngOnInit() {
  
}

}

