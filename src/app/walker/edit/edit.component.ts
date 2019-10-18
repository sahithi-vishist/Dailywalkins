import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { NotificationService } from 'src/app/notification.service';
import { Router } from '@angular/router';
import { WalkerAuthService } from '../walker-auth.service';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
result;
id;
updateWalker;
experience;
currentCTC;
update;
industries;
jobTypes;
noticePeriods;
qualifications;
roles;
locations;


  constructor(private http:HttpClient,private date:DatePipe,private service:WalkerAuthService,
    private router:Router,private notification:NotificationService) {

      this.service.getIndustries().subscribe((res) => {
        this.industries = res;
      }, (err) => {
  
      })
  
      this.service.getJobType().subscribe((res) => {
        this.jobTypes = res;
      })
      this.service.getQualifications().subscribe((res) => {
      this.qualifications=res;
      })
  
      this.service.getNoticePeriod().subscribe((res)=>{
        
        this.noticePeriods=res;
        console.log(res);
      })
      this.service.getLocations().subscribe((res)=>{
        this.locations=res;
      })
      this.service.getRoles().subscribe((res)=>{
        this.roles=res;
      })
    this.id=localStorage.getItem('walkerId');
    this.service.getWalkerDetails(this.id).subscribe((res)=>{
    
this.update={jobSeekerId:'',firstName:'',lastName:'',email:'',gender:'',location:'',contactNo:'',contactNoLandline:'',
dateOfBirth:'',languagesKnown:'',education:'',institute:'',yearOfPass:'',minExp:'',maxExp:'',CCTCFrom:'',CCTCTo:'',
industry:'',role:'',jobType:'',keySkills:'',resumeHeadLine:'',currentDesignation:'',
currentCompany:'',preferredLocation:'',noticePeriod:'',image:'',
"password":res['password'],
"confirmPassword":res['confirmPassword'],
  "experience":res['experience'],
  "currentCTC":res['currentCTC'],
  "expectedCTC":res['expectedCTC'],
  "standardKeySkills":res['keySkills'], 
  "locality":res['locality'],
  "updateResume":res['file'],
  "updatedOn":res['updateOn'],
  "resume":res['file'],
  "textResume":res['resumeHeadLine'],
  "userName":res['firstName'],
  "status":"Active",
  "photo":res['photo'],
  "standardCurrentCompany":res['currentCompany'],
  "previousCompany":res['currentCompany'],
  "previousDesignation":res['currentDesignation'],
 
  "standardPreviousCompany":res['currentCompany'],
  "emailVerified":true,
  "visibleSetting":1,
  "jsId":2,
  "isOnline":true,
  "viewedCount":0,
  "downloadedCount":0,
  "candidatesActiveInLast":res['firstName'],
  "industryId":'',
  "roleId":'',
  "jobTypeId":'',
  "createdBy":res['firstName'],
  "similarCount":0,
  "matchedPercent":0,
  "relevantScore":0,
  "directRegistration":true,
  "profileAccessSpecifier":res['keySkills'],
  "sharedCompaniesList":res['currentCompany'],
  "photoString":res['photoString'],
  "deviceId":res['firstName'],
  "profileName":res['firstName'],
  "isMobileOnline":true,
  "lastLogin":res['updatedOn'],
  "lastActive":res['updatedOn'],
  "uploadedBy":res['firstName'],
  "uploadedDate":res['updatedOn'],
  "onNoticePeriod":res['noticePeriod'].noticeText,
  "lastUpdatedNoticePeriod":this.date.transform(res['updatedOn'],'yyyy-MM-dd'),
  "lastWorkingDay":res['updatedOn'],
  "resumeFile":res['resumeFile']
};
    this.update.jobSeekerId=this.id;
    this.update.firstName=res['firstName'];
      this.update.lastName=res['lastName'];
      this.update.email=res['email'];
      this.update.gender=res['gender'];
     
      this.update.contactNo=res['contactNo'];
      this.update.contactNoLandline=res['contactNoLandline'];
      this.update.dateOfBirth=this.date.transform(res['dateOfBirth'],'yyyy-MM-dd');
      this.update.languagesKnown=res['languagesKnown'];
     
      this.update.institute=res['institute'];
      this.update.yearOfPass=res['yearOfPass'];
   
      this.update.role=res['roleId'].roleName;
     
      this.update.keySkills=res['keySkills'];
      this.update.resumeHeadLine=res['resumeHeadLine'];
      this.update.currentDesignation=res['currentDesignation'];
      this.update.currentCompany=res['currentCompany'];
      this.update.preferredLocation=res['preferredLocation'];
     
      
  
     
    //this.result=res;
    },(err)=>{

    }) 
   }

   onSelectIndustry(event) {
   
    this.update.industryId =  this.industries.find(ind => ind['industryId'] == event.target['value']);
    this.update.industry=this.update.industryId.industryType
  }
  onSelectJobType(event) {
    this.update.jobTypeId = this.jobTypes.find(jt => jt['jobTypeId'] == event.target['value']);
    this.update.jobType=this.update.jobTypeId.jobType
  }
  onSelectEducation(event){
    this.update.education=this.qualifications.find(edu => edu['qualificationId'] == event.target['value'])
  }
  onSelectNoticePeriod(event){
    this.update.noticePeriod=this.noticePeriods.find(np => np['noticePeriodId'] == event.target['value'])
  }
  onSelectLocation(event){
this.update.location=this.locations.find(loc => loc['locationLatLongId'] == event.target['value'])
  }
  onSelectedRole(event){
this.update.roleId=this.roles.find(role => role['roleId'] == event.target['value'])
  }

  ngOnInit() {
  }
  updateDetails(obj){

console.log(this.update);
   this.service.updateWalker(this.update).subscribe((res)=>{
     if(res!=null){
    this.notification.showNotification('success',"updated successfully");
    this.router.navigate(['/walker/view']);
     }
   },(err)=>{
    this.notification.showNotification('error','updation failed due to some error');
   })
  }
}
