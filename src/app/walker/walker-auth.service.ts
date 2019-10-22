import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({

  providedIn: 'root',

})
export class WalkerAuthService {
  myDate = new Date();
  myArray: any[];
  id;
  url = "http://localhost:62222";
  body;
  setSkills;
  tokenString;
  updateOn;
  designations=[];
  keySkills=[];
  companies=[];
  localities=[];
  institutes=[];
  languages=[];
  locations=[];
  constructor(private http: HttpClient, private date: DatePipe) {

  }
  authenticate(loginDetails): Observable<any> {

    return this.http.post("http://localhost:62222/authenticate", { "username": loginDetails.email, "password": loginDetails.password }).pipe(
      map(data => {

        localStorage.setItem("token", `Bearer ${data['token']}`);
        localStorage.setItem("userExists", "true");
        localStorage.setItem("email", loginDetails.email);
        return data;

      })
    )
  }
  
  getWalkers() {
    return this.http.get(this.url + "/totalwalkers");
  }

  getWalker(id) {
    return this.http.get("http://localhost:62222/getwalkerbyid?walkerId=" + id);
  }
  getId() {
    return this.http.get("http://localhost:62222/getId");
  }
  getWalkerById() {
    this.id = localStorage.getItem("walkerId");
    return this.http.get("http://localhost:62222/getwalkerbyid?walkerId=" + this.id)
  }
  getIndustries() {
    return this.http.get("http://localhost:62222/getIndustries");
  }
  getJobType() {
    return this.http.get("http://localhost:62222/getJobTypes");
  }
  getQualifications() {
    return this.http.get("http://localhost:62222/getQualifications");
  }
  getNoticePeriod() {
    return this.http.get("http://localhost:62222/getNoticePeriods");
  }
  getWalkerDetails(walkerId) {

    return this.http.get("http://localhost:62222/getwalkerbyid?walkerId=" + walkerId);
  }
  getSalaries() {
    return this.http.get("http://localhost:62222/getSalaryDetails");
  }
  getLocations() {
    return this.http.get<any>(this.url + '/getcities').pipe(map((data)=>{
this.locations=data;
return this.locations;
    }))
  }
  getExperienceData() {
    return this.http.get(this.url + '/getallexp');
  }
  getRoles() {
    return this.http.get(this.url + '/getRoles');
  }
  getLocalities(cityObj){
    return this.http.post<any>(this.url+'/getLocalities',cityObj).pipe(map((data)=>{
      this.localities=data;
      return this.localities;
    }));
  }
  getRoleByIndId(indObj){
   
return this.http.post(this.url+'/getRolesByIndId',{"industryId":indObj});
  }

  checkAppliedStatus(jobNo,email){
return this.http.post(this.url+'/checkappliedstatus',{"jobNo":jobNo,"jobSeekerEmailId":email})
  }
  updateWalker(updateInfo) {
    return this.http.put("http://localhost:62222/updatewalker", updateInfo);
  }
  register(reg,photo,resume): Observable<any> {
    var experience = reg.maxExp + "." + reg.minExp;
    var currentCTC = reg.CCTCFrom + "." + reg.CCTCTo;
    var expectedCTC = reg.ECTCFrom + "." + reg.ECTCTo;
    this.updateOn = this.date.transform(this.myDate, 'yyyy-MM-dd');
    var dob = this.date.transform(reg.dob, 'yyyy-MM-dd');
    //var photoString = reg.photo.toString();

    this.body = {
      "firstName": reg.fname,
      "lastName": reg.lname,
      "password": reg.password,
      "confirmPassword": reg.confirmPassword,
      "email": reg.email,
      "contactNo": reg.contactNumber,
      "contactNoLandline": reg.landline,
      "experience": experience,
      "currentCTC": currentCTC,
      "expectedCTC": expectedCTC,
      "education": { "qualificationId": reg.education },
      "keySkills": reg.keySkills,
      "standardKeySkills": reg.keySkills,
      "location": reg.location,
      "locality": reg.locality,
      "updateResume": reg.file,
      "gender": reg.gender,
      "institute": reg.institute,
      "role": reg.role.roleName,
      "yearOfPass": reg.yop,
      "resumeHeadLine": reg.resumeHeadLine,
      "updatedOn": this.updateOn,
      "resume": reg.resume,
      "textResume": reg.resumeHeadLine,
      "userName": reg.fname,
      "status": "Active",
      //"photo": reg.photo,
      "currentDesignation": reg.currentDesignation,
      "currentCompany": reg.currentCompany,
      "standardCurrentCompany": reg.currentCompany,
      "previousCompany": reg.currentCompany,
      "previousDesignation": reg.currentDesignation,
      "preferredLocation": reg.preferredLocation,
      "standardPreviousCompany": reg.currentCompany,
      "noticePeriod": reg.noticePeriod,
      "emailVerified": true,
      "visibleSettings": 1,
      "jsId": 2,
      "isOnline": true,
      "viewedCount": 0,
      "downloadedCount": 0,
      "candidatesActiveInLast": reg.fname,
      "industryId": reg.industryId ,
      "industry":reg.industry,
      "roleId": reg.role,
      "jobTypeId": { "jobTypeId": reg.jobtype },
      "jobType": reg.jobtype,
      "createdBy": reg.fname,
      "similarCount": 0,
      "matchedPercent": 0,
      "relevantScore": 0,
      "directRegistration": true,
      "profileAccessSpecifier": reg.keySkills,
      "sharedCompaniesList": reg.currentCompany,
      "photoString": reg.photo,
      "languagesKnown": reg.languagesKnown,
      "deviceId": reg.fname,
      "profileName": reg.fname,
      "isMobileOnline": true,
      "dateOfBirth": dob,
      "lastLogin": this.updateOn,
      "lastActive": this.updateOn,
      "uploadedBy": reg.fname,
      "uploadedDate": this.updateOn,
      "onNoticePeriod": reg.noticePeriod['noticeText'],
      "lastUpdatedNoticePeriod": this.updateOn,
      "lastWorkingDay": this.updateOn,
     

    }

    const formData=new FormData();
    formData.append('regDetails',JSON.stringify(this.body));
 formData.append('photo',photo);
 formData.append('resume',resume);
 console.log(formData.get('regDetails'));
    return this.http.post("http://localhost:62222/register",formData);
  }
  registerPanelDetails(panel, email) {

    var panelDetails = {
      "panelId": panel.panelId,
      "email": email,
      "majorSkills": panel.majorSkills,
      "availableForF2F": true,
      "availableForSkype": true,
      "availableForTelephonic": true,
      "availableTimeSlotsForFaceToFace": panel.AvailableTimeSlotsForFaceToFace,
      "availableTimeSlotsForSkype": panel.AvailableTimeSlotsForSkype,
      "availableTimeSlotsForTelephonic": panel.AvailableTimeSlotsForTelephonic,
      "costPerHourForF2F": panel.costPerHour,
      "costPerDayForF2F": panel.costPerDay,
      "costPerHourForTelephonic": panel.costPerHourTelephonic,
      "costPerDayForTelephonic": panel.costPerDayTelephonic,
      "costPerHourForSkype": panel.costPerHourSkype,
      "costPerDayForSkype": panel.costPerDaySkype

    }
    return this.http.post(this.url + '/postpaneldetails', panelDetails);

  }
  saveProfileAlerts(profileAlertDetails) {
    var jsPrivacyDetails = {
      "email": profileAlertDetails.email,
      "weekDay": profileAlertDetails.day,
      "onDemandTime": profileAlertDetails.value,
      "emailAlert": profileAlertDetails.emailAlert,
      "smsAlert": profileAlertDetails.smsAlert,
      "chatAlert": profileAlertDetails.chatAlert
    }

    return this.http.post(this.url + "/postjsdetails", jsPrivacyDetails);
  }

  displayAppliedWalkins(email) {
    return this.http.get(this.url + '/getAppliedJobs?walkerEmail=' + email);
  }

  getJobs():Observable<any> {
    return this.http.get(this.url + '/getjobs');
  }
  getJobById(jobId) {
    console.log(jobId);
    return this.http.get(this.url + '/getjobbyid?jobNo=' + jobId);
  }
  getTimeSlots() {
    return this.http.get(this.url + '/gettimeslots');
  }
  getLanguages(){
    return this.http.get<any>(this.url+'/getlanguages').pipe(map((data)=>{
      this.languages=data;
      return this.languages;
    }));
  }
  getCompanies(){
    return this.http.get<any>(this.url+'/getcompanies').pipe(map((data)=>{
this.companies=data;
return this.companies;
    }));
  }
  getDesignations(){
    return this.http.get<any>(this.url+'/getdesignations').pipe(map((data)=>{
      this.designations=data;
      return this.designations;
    }));
  }
  getKeySkills(){
    return this.http.get<any>(this.url+'/getkeyskills').pipe(map((data)=>{
this.keySkills=data;
return this.keySkills;
    }));
  }
  appliedJob(appliedWalkin) {
    return this.http.post(this.url + '/postjsappliedjob', appliedWalkin);
  }
  sendSkills(skills){
this.setSkills=skills;
  }
  getSkills(){
    return this.setSkills;
  }
  getAllInstitutes(){
    return this.http.get<any>(this.url+'/getinstitutes').pipe(map((data)=>{
      this.institutes=data;
      return this.institutes;
    }));
  }
  getWalkinsBySkills(skills) {

    return this.http.post(this.url + '/getjobsbykeyskills', { "keySkills": skills })
  }
  getWalkersBySkills(skills){
    return this.http.post(this.url+'/getWalkersByKeySkills',{"keySkills":skills})
  }

  upload(file) {

    return this.http.post(this.url + "/uploadfile", file);
  }
 
}
