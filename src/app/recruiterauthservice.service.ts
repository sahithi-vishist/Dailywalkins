import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DriveFormModel } from './recruiter/create-drive/createdrive.model';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostWalkinModel } from './recruiter/postwalkin/postwalkin.model';

@Injectable({
  providedIn: 'root'
})

export class RecruiterauthserviceService {
isAuthenticated(){
  return true;
}
recruiterEmailObj;
myDate=new Date();
body;
constructor(private http:HttpClient, private date:DatePipe) { }

  
authenticate(loginDetails):Observable<any>{
    
  return this.http.post("http://localhost:62222/loginCheck",loginDetails);
    
 }

getIndustries(){
  return this.http.get("http://localhost:62222/getIndustries");
    
}
getJobtype(){
  return this.http.get("http://localhost:62222/getJobTypes");
}
getQualification(){
  return this.http.get("http://localhost:62222/getQualifications");
}
getTimeslots(){
  return this.http.get("http://localhost:62222/gettimeslots");
}
getNoticePeriod(){
  return this.http.get("http://localhost:62222/getNoticePeriods");
}
getExperience(){
  return this.http.get("http://localhost:62222/getallexp");
}
getSalary(){
  return this.http.get("http://localhost:62222/getSalaryDetails");
}
createDrive(driveformmodel:DriveFormModel ){
 
  return this.http.post("http://localhost:62222/postdrive",driveformmodel);
}
getdrives(){
  return this.http.get("http://localhost:62222/getdrive");
}
getJobs(){
  return this.http.get("http://localhost:62222/getjobs");
}
getJobById(jobNo){
 
  return this.http.get("http://localhost:62222/getjobbyid?jobNo="+jobNo);
}
getDrive(){
  return this.http.get("http://localhost:62222/getdrive");
}
getDriveById(id){
  return this.http.get("http://localhost:62222/getdriveById?driveId="+id);
}
postWalkinDetails(walkinModel){
  return this.http.post('http://localhost:62222/postjobs',walkinModel);
}
getRoles(){
  return this.http.get('http://localhost:62222/getRoles');
}
updatePostWalkins(walkinModel:PostWalkinModel){
  return this.http.put("http://localhost:62222/updatewalkin",walkinModel);
}
getPostWalkins(recruiterEmail){
this.recruiterEmailObj={
  "email":recruiterEmail
}
return this.http.post("http://localhost:62222/EmailCheck",this.recruiterEmailObj)
}
recruiterRegsiter(regdata,logo){
  var regDate=this.date.transform(this.myDate,'yyyy-MM-dd');
  var updateDate=this.date.transform(this.myDate,'yyyy-MM-dd');
  var lastLogin=this.date.transform(this.myDate,'yyyy-MM-dd');
  var lastActive=this.date.transform(this.myDate,'yyyy-MM-dd');
 // var logoString=regdata.file.toString();
  var status="Active";
  this.body={
    "firstName":regdata.FirstName,
    "lastName":regdata.lastName,
    "password":regdata.password,
    "confirmPassword":regdata.ConfirmPassword,
    "companyName":regdata.comapnyName,
    "standardCurrentCompany":regdata.comapnyName,
    "email":regdata.Email,
    "companyURL":regdata.URL, 
    "contactNo":regdata.mobile,
    "contactnoLandline":regdata.cmobile,
    "industry":{"industryId":regdata.industry},
    "location":regdata.location,
    "address":regdata.address,
    "companyProfile":regdata.CompanyProfile,
    "activation":true,
    "regDate":regDate,
    "emailVerified":true,
    "isOnline":true,
    "designation":regdata.Designation,
    "visibility":true,
    "updateDate":updateDate,
    "logoString":regdata.file,
    "isMobileOnline":true,
    "lastLogin":lastLogin,
    "lastActive":lastActive,
    "status":status
  }
  const formData=new FormData();
  formData.append('recDetails',JSON.stringify(this.body));
  formData.append('companyLogo',logo);
  console.log(formData.get('recDetails'));
 return  this.http.post('http://localhost:62222/saveRecruiterRegistration',formData);
}
  profileAlerts(regdata){
    var details={
      "email":regdata.Email,
      "weekDay":regdata.day,
      "onDemandTime":regdata.value,
      "emailAlert":regdata.emailalert,
      "smsAlert":regdata.smsalert,
      "ChatAlert":regdata.chatalert
    }
    return this.http.post('http://localhost:62222/saveAlerts',details);
  }
}
