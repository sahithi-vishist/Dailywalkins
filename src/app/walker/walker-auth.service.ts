import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import {map} from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
 
  providedIn: 'root',

})
export class WalkerAuthService {
  myDate=new Date();
  myArray:any[];
  id;
  url="http://localhost:62222";
  body;
  constructor(private http:HttpClient,private date:DatePipe) { 
   
  }
  authenticate(loginDetails):Observable<any>{
    
   return this.http.post("http://localhost:62222/authenticate",{"username":loginDetails.email,"password":loginDetails.password}).pipe(
     map(data=>{
 
       localStorage.setItem("token",`Bearer ${data['token']}`);
       localStorage.setItem("userExists","true");
       localStorage.setItem("email",loginDetails.email)
       return data;
      
     })
   ) 
  }


    getWalker(id){
     return this.http.get("http://localhost:62222/getwalkerbyid?walkerId="+id);
    }
    getId(){
      return this.http.get("http://localhost:62222/getId");
    }
    getWalkerById(){
      this.id=localStorage.getItem("walkerId");
      return this.http.get("http://localhost:62222/getwalkerbyid?walkerId="+this.id)
    }
    getIndustries(){
      return this.http.get("http://localhost:62222/getIndustries");
    }
    getJobType(){
      return this.http.get("http://localhost:62222/getJobTypes");
    }
    getQualifications(){
      return this.http.get("http://localhost:62222/getQualifications");
    }
    getNoticePeriod(){
      return this.http.get("http://localhost:62222/getNoticePeriods");
    }
    getWalkerDetails(walkerId){
      
      return this.http.get("http://localhost:62222/getwalkerbyid?walkerId="+walkerId);
    }
    getSalaries(){
      return this.http.get("http://localhost:62222/getSalaryDetails");
    }
    getLocations(){
      return this.http.get(this.url+'/getLocations');
    }
    getExperienceData(){
      return this.http.get(this.url+'/getallexp');
    }
    getRoles(){
      return this.http.get(this.url+'/getRoles');
    }
    updateWalker(updateInfo){
     return this.http.put("http://localhost:62222/updatewalker",updateInfo);
    }
  register(reg):Observable<any>{

    var experience=reg.maxExp+"."+reg.minExp;
    var currentCTC=reg.CCTCFrom+"."+reg.CCTCTo;
    var expectedCTC=reg.ECTCFrom+"."+reg.ECTCTo;
    var updateOn=this.date.transform(this.myDate,'yyyy-MM-dd');
    var dob=this.date.transform(reg.dob,'yyyy-MM-dd');
    var photoString=reg.photo.toString();
 
    this.body={"firstName":reg.fname,
               "lastName":reg.lname,
              "password":reg.password,
            "confirmPassword":reg.confirmPassword,
            "email":reg.email,
              "contactNo":reg.contactNumber,
            "contactNoLandline":reg.landline,
              "experience":experience,
              "currentCTC":currentCTC,
              "expectedCTC":expectedCTC,
              "education":{"qualificationId":reg.education},
              "keySkills":reg.keySkills,
              "standardKeySkills":reg.keySkills,
              "location":reg.location,
              "locality":reg.locality,
              "updateResume":reg.file,
              "gender":reg.gender,
              "institute":reg.institute,
              "role":reg.role.roleName,
              "yearOfPass":reg.yop,
              "resumeHeadLine":reg.resumeHeadLine,
              "updatedOn":updateOn,
              "resume":reg.resume,
              "textResume":reg.resumeHeadLine,
              "userName":reg.fname,
              "status":"Active",
              "photo":reg.photo,
              "currentDesignation":reg.currentDesignation,
              "currentCompany":reg.currentCompany,
              "standardCurrentCompany":reg.currentCompany,
              "previousCompany":reg.currentCompany,
              "previousDesignation":reg.currentDesignation,
              "preferredLocation":reg.preferredLocation,
              "standardPreviousCompany":reg.currentCompany,
              "noticePeriod":{"noticePeriodId":reg.noticePeriod},
              "emailVerified":true,
              "visibleSetting":1,
              "jsId":2,
              "isOnline":true,
              "viewedCount":0,
              "downloadedCount":0,
              "candidatesActiveInLast":reg.fname,
              "industryId":{"industryId":reg.industry},
              "roleId":reg.role,
              "jobTypeId":{"jobTypeId":reg.jobtype},
              "jobType":reg.jobtype,
              "createdBy":reg.fname,
              "similarCount":0,
              "matchedPercent":0,
              "relevantScore":0,
              "directRegistration":true,
              "profileAccessSpecifier":reg.keySkills,
              "sharedCompaniesList":reg.currentCompany,
              "photoString":photoString,
              "languagesKnown":reg.languagesKnown,
              "deviceId":reg.fname,
              "profileName":reg.fname,
              "isMobileOnline":true,
              "dateOfBirth":dob,
              "lastLogin":reg.updateOn,
              "lastActive":reg.updateOn,
              "uploadedBy":reg.fname,
              "uploadedDate":reg.updateOn,
              "onNoticePeriod":reg.noticePeriod,
              "lastUpdatedNoticePeriod":reg.updateOn,
              "lastWorkingDay":reg.updateOn,
              "resumeFile":reg.file
        
             }
            
   return this.http.post("http://localhost:62222/register",this.body);
  }
  registerPanelDetails(panel,email){
  
    var panelDetails={
      "panelId":panel.panelId,
      "email":email,
      "majorSkills":panel.majorSkills,
      "availableForF2F":true,
      "availableForSkype":true,
      "availableForTelephonic":true,
      "availbleTimeSlotsForFaceToFace":panel.AvailbleTimeSlotsForFaceToFace[0],
      "availbleTimeSlotsForSkype":panel.AvailbleTimeSlotsForSkype[0],
      "availbleTimeSlotsForTelephonic":panel.AvailbleTimeSlotsForTelephonic[0],
      "costPerHourForF2F":panel.costPerHour,
      "costPerDayForF2F":panel.costPerDay,
      "costPerHourForTelephonic":panel.costPerHourTelephonic,
      "costPerDayForTelephonic":panel.costPerDayTelephonic,
      "costPerHourForSkype":panel.costPerHourSkype,
      "costPerDayForSkype":panel.costPerDaySkype
      
    }
    return this.http.post(this.url+'/postpaneldetails',panelDetails);
  
  }
  saveProfileAlerts(profileAlertDetails){
    var jsPrivacyDetails={
      "email":profileAlertDetails.email,
      "weekDay":profileAlertDetails.day,
      "onDemandTime":profileAlertDetails.value,
      "emailAlert":profileAlertDetails.emailAlert,
      "smsAlert":profileAlertDetails.smsAlert,
      "chatAlert":profileAlertDetails.chatAlert
    }
 
return this.http.post(this.url+"/postjsdetails",jsPrivacyDetails);
  }
 
  displayAppliedWalkins(){
    return this.http.get(this.url+'/getAppliedJobs');
  }

  getJobs(){
    return this.http.get(this.url+'/getjobs');
  }
  getJobById(jobId){
    console.log(jobId);
    return this.http.get(this.url+'/getjobbyid?jobNo='+jobId);
  }
  getTimeSlots(){
   return  this.http.get(this.url+'/gettimeslots');
  }
  appliedJob(appliedWalkin){
return this.http.post(this.url+'/postjsappliedjob',appliedWalkin);
  }
  getWalkinsBySkills(skills){
   
    return this.http.post(this.url+'/getjobsbykeyskills',{"keySkills":skills})
  }
}
