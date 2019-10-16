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
  languages;
  institutes;
  designations;
  companies;
  experiences;
  salaries;
  selectedPhoto: File;
  selectedResume:File;
  imageURL;
  resume;
  profilePhoto;
  updatedOn=new Date();
  constructor(private http: HttpClient, private date: DatePipe, private service: WalkerAuthService,
    private router: Router, private notification: NotificationService) {

    this.service.getIndustries().subscribe((res) => {
      this.industries = res;
    }, (err) => {

    })

    this.service.getJobType().subscribe((res) => {
      this.jobTypes = res;
    })
    this.service.getQualifications().subscribe((res) => {
      this.qualifications = res;
    })

    this.service.getNoticePeriod().subscribe((res) => {

      this.noticePeriods = res;
      console.log(res);
    })
    this.service.getLocations().subscribe((res) => {
      this.locations = res;
    })
    this.service.getRoles().subscribe((res) => {
      // this.roles=res;
    })
    this.service.getLanguages().subscribe((res) => {
      this.languages = res;
    })
    this.service.getDesignations().subscribe((res) => {
      this.designations = res;
    })
    this.service.getCompanies().subscribe((res) => {
      this.companies = res;
    })
    this.service.getSalaries().subscribe((res) => {
      this.salaries = res;
    })
    this.service.getExperienceData().subscribe((res) => {
      this.experiences = res;
    })
    this.service.getAllInstitutes().subscribe((res) => {
      this.institutes = res;
    })
    this.id = localStorage.getItem('walkerId');
    this.service.getWalkerDetails(this.id).subscribe((res) => {

      this.update = {
        jobSeekerId: '', firstName: '', lastName: '', email: '', gender: '', location: res['location'].cityName, contactNo: '', contactNoLandline: '',
        dateOfBirth: '', languagesKnown: '', education: '', institute: '', yearOfPass: '', 
        industry: '', role: '', jobType: '', keySkills: '', resumeHeadLine: '', currentDesignation: '',
        currentCompany: '', preferredLocation: '', noticePeriod: '', 
        "password": res['password'],
        "confirmPassword": res['confirmPassword'],
        "experience": res['experience'],
        "currentCTC": res['currentCTC'],
        "expectedCTC": res['expectedCTC'],
        "standardKeySkills": res['keySkills'],
        "locality": res['locality'],
        "updateResume": res['file'],
        "updatedOn": this.date.transform(this.updatedOn,'yyyy-MM-dd'),
       // "resume": res['file'],
        "textResume": res['resumeHeadLine'],
        "userName": res['firstName'],
        "status": "Active",
        "standardCurrentCompany": res['currentCompany'],
        "previousCompany": res['currentCompany'],
        "previousDesignation": res['currentDesignation'],
        "standardPreviousCompany": res['currentCompany'],
        "emailVerified": true,
      //  "visibleSetting": 1,
        "jsId": 2,
        "isOnline": true,
        "viewedCount": 0,
        "downloadedCount": 0,
        "candidatesActiveInLast": res['firstName'],
        "industryId": '',
        "roleId": '',
        "jobTypeId": '',
        "createdBy": res['firstName'],
        "similarCount": 0,
        "matchedPercent": 0,
        "relevantScore": 0,
        "directRegistration": true,
        "profileAccessSpecifier": res['keySkills'],
        "sharedCompaniesList": res['currentCompany'],
        "photoString": res['photoString'],
        "deviceId": res['firstName'],
        "profileName": res['firstName'],
        "isMobileOnline": true,
        "lastLogin": this.date.transform(this.updatedOn,'yyyy-MM-dd'),
        "lastActive": this.date.transform(this.updatedOn,'yyyy-MM-dd'),
        "uploadedBy": res['firstName'],
        "uploadedDate":this.date.transform(this.updatedOn,'yyyy-MM-dd'),
        "onNoticePeriod": '',
        "lastUpdatedNoticePeriod": this.date.transform(this.updatedOn,'yyyy-MM-dd'),
        "lastWorkingDay": this.date.transform(this.updatedOn,'yyyy-MM-dd'),
        "resumeFile": res['resumeFile']
      };
      this.update.jobSeekerId = this.id;
      this.update.firstName = res['firstName'];
      this.update.lastName = res['lastName'];
      this.update.email = res['email'];
      this.update.gender = res['gender'];
      this.update.contactNo = res['contactNo'];
      this.update.contactNoLandline = res['contactNoLandline'];
      this.update.dateOfBirth = this.date.transform(res['dateOfBirth'], 'yyyy-MM-dd');
      this.update.languagesKnown = res['languagesKnown'];

      this.update.institute = res['institute'];
      this.update.yearOfPass = res['yearOfPass'];

      this.update.role = res['roleId'].roleName;

      this.update.keySkills = res['keySkills'];
      this.update.resumeHeadLine = res['resumeHeadLine'];
      this.update.currentDesignation = res['currentDesignation'];
      this.update.currentCompany = res['currentCompany'];
      this.update.preferredLocation = res['preferredLocation'];
 
      this.profilePhoto=res['photo']


      //this.result=res;
    }, (err) => {

    })
  }
  selectProfileImage(event) {
   this.selectedPhoto = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); 
    reader.onload = (_event) => { 
      this.imageURL= reader.result; 
    }
  }
  onSelectIndustry(event) {

    this.update.industryId = this.industries.find(ind => ind['industryId'] == event.target['value']);
    this.update.industry = this.update.industryId.industryType
    this.service.getRoleByIndId(this.update.industryId).subscribe((res) => {
      this.roles = res;
    })
  }
  onSelectJobType(event) {
    this.update.jobTypeId = this.jobTypes.find(jt => jt['jobTypeId'] == event.target['value']);
    this.update.jobType = this.update.jobTypeId.jobType
  }
  onSelectEducation(event) {
    this.update.education = this.qualifications.find(edu => edu['qualificationId'] == event.target['value'])
  }
  onSelectNoticePeriod(event) {
    this.update.noticePeriod = this.noticePeriods.find(np => np['noticePeriodId'] == event.target['value'])
    this.update.onNoticePeriod=this.update.noticePeriod['noticeText'];
  }
  onSelectLocation(event) {
    this.update.location = this.locations.find(city => city['cityId'] == event.target['value'])
  }
  onSelectedRole(event) {
    this.update.roleId = this.roles.find(role => role['roleId'] == event.target['value'])
  }
  selectInstitute(event) {
    this.update.institute = event.target.value;
  }
  selectLanguage(event) {
    this.update.languagesKnown = event.target.value;
  }
  selectDesignation(event) {
    this.update.currentDesignation = event.target.value;
  }
  selectCompany(event) {
    this.update.currentCompany = event.target.value;
  }
  selectPreferredLocation(event) {
    this.update.preferredLocation = event.target.value;
  }
  // onSelectedCCTCFrom(event) {
  //   this.update.CCTCFrom = event.target.value;
  //   //this.salaries.find(sal=>sal['salaryId'] == event.target['value']);

  // }
  // onSelectedCCTCTo(event) {
  //   this.update.CCTCTo = event.target.value;
  //   //this.salaries.find(sal=>sal['salaryId'] == event.target['value']);

  // }
  // onSelectedECTCFrom(event) {
  //   this.update.ECTCFrom = event.target.value;
  //   //this.salaries.find(sal=>sal['salaryId'] == event.target['value']);

  // }
  // onSelectedECTCTo(event) {
  //   this.update.ECTCTo = event.target.value;
  //   //this.salaries.find(sal=>sal['salaryId'] == event.target['value']);

  // }
  // onSelectedMinExp(event) {
  //   this.update.minExp = event.target.value;
  // }
  // onSelectedMaxExp(event) {
  //   this.update.maxExp = event.target.value;
  // }
  onSelectResume(event){
    this.selectedResume=event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); 
    reader.onload = (_event) => { 
      this.resume = reader.result; 
    }
  }
  ngOnInit() {
  }
  updateDetails(obj) {

    const formData = new FormData();
    formData.append('updateDetails', JSON.stringify(this.update));
    formData.append('photo', this.selectedPhoto);
    formData.append('resume',this.selectedResume)
 
    this.service.updateWalker(formData).subscribe((res) => {
      if (res != null) {
        this.notification.showNotification('success', "updated successfully");
        this.router.navigate(['/walker/view']);
      }
    }, (err) => {
      this.notification.showNotification('error', 'updation failed due to some error');
    })
  }
}
