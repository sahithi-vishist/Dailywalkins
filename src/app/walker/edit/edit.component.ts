import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { NotificationService } from 'src/app/notification.service';
import { Router } from '@angular/router';
import { WalkerAuthService } from '../walker-auth.service';
import { map } from 'rxjs/operators';



@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  result;
  id;
  updateWalker;
  update;
  industries: any[];
  jobTypes: any[];
  noticePeriods: any[];
  qualifications;
  roles: any[];
  locations;
  languages;
  institutes;
  designations;
  companies;
  experiences;
  salaries;
  selectedPhoto: File;
  selectedResume: File;
  imageURL;
  resume;
  profilePhoto;
  skills;
  cities;
  CCTCFrom;
  CCTCTo;
  expYears;
  expMonths;
  updatedOn = new Date();

  constructor(private http: HttpClient, private date: DatePipe, private service: WalkerAuthService,
    private router: Router, private notification: NotificationService) {

    this.service.getIndustries().subscribe((res: any) => {
      this.industries = res;
    }, (err) => {

    })

    this.service.getJobType().subscribe((res: any) => {
      this.jobTypes = res;
    })
    this.service.getQualifications().subscribe((res) => {
      this.qualifications = res;
    })

    this.service.getNoticePeriod().subscribe((res: any) => {

      this.noticePeriods = res;
    
    })
    this.service.getLocations().subscribe((res) => {
      this.locations = res;
    })
    this.service.getRoles().subscribe((res: any) => {
      this.roles = res;
    })

    this.service.getSalaries().subscribe((res) => {
      this.salaries = res;
    })
    this.service.getExperienceData().subscribe((res) => {
      this.experiences = res;
    })
    this.id = localStorage.getItem('walkerId');
    this.service.getWalkerDetails(this.id).subscribe((res) => {

      this.update = {
        jobSeekerId: '', firstName: '', lastName: '', email: '', gender: '', location: res['location'], contactNo: '', contactNoLandline: '',
        dateOfBirth: '', languagesKnown: '', education: '', institute: '', yearOfPass: '',
        industry: '', role: '', jobType: '', keySkills: '', resumeHeadLine: '', currentDesignation: '',
        currentCompany: '', preferredLocation: '', noticePeriod: '', photo: '',
        "password": res['password'],
        "confirmPassword": res['confirmPassword'],
        "experience": res['experience'],
        "currentCTC": res['currentCTC'],
        "expectedCTC": res['expectedCTC'],
        "standardKeySkills": res['keySkills'],
        "locality": res['locality'],
        "updateResume": res['file'],
        "updatedOn": this.date.transform(this.updatedOn, 'yyyy-MM-dd'),
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
        "industryId": res['industryId'],
        "roleId": res['roleId'],
        "jobTypeId": res['jobTypeId'],
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
        "lastLogin": this.date.transform(this.updatedOn, 'yyyy-MM-dd'),
        "lastActive": this.date.transform(this.updatedOn, 'yyyy-MM-dd'),
        "uploadedBy": res['firstName'],
        "uploadedDate": this.date.transform(this.updatedOn, 'yyyy-MM-dd'),
        "onNoticePeriod": '',
        "lastUpdatedNoticePeriod": this.date.transform(this.updatedOn, 'yyyy-MM-dd'),
        "lastWorkingDay": this.date.transform(this.updatedOn, 'yyyy-MM-dd'),
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
      this.update.education = res['education'];
      this.update.noticePeriod = res['noticePeriod'];


      this.selectedPhoto = res['photo']
      this.profilePhoto = 'data:image/png;base64,' + res['photo'];
      var strCTC=new String(this.update.currentCTC)
      var splitsCTC=strCTC.split(".");
      this.CCTCFrom=splitsCTC[0];
      this.CCTCTo=splitsCTC[1];
      var strExp=new String(this.update.experience)
      var splitsExp=strExp.split(".");
      this.expYears=splitsExp[0];
      this.expMonths=splitsExp[1];
    
    }, (err) => {

    })

  }

  selectProfileImage(event) {
    this.selectedPhoto = event.target.files[0];
 
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.profilePhoto = reader.result;

    }
  }
  onSelectIndustry(event) {

    this.update.industryId = this.industries.find(ind => ind['industryId'] == event['industryId']);
    this.update.industry = this.update.industryId.industryType

    this.service.getRoleByIndId(this.update.industryId).subscribe((res: any) => {
      this.roles = res;
    })
  }
  onSelectJobType(event) {

    this.update.jobTypeId = this.jobTypes.find(jt => jt['jobTypeId'] == event['jobTypeId']);

    this.update.jobType = this.update.jobTypeId.jobType

  }
  onSelectEducation(event) {
    this.update.education = this.qualifications.find(edu => edu['qualificationId'] == event['qualificationId'])
  }
  onSelectNoticePeriod(event) {
    this.update.noticePeriod = this.noticePeriods.find(np => np['noticePeriodId'] == event['noticePeriodId'])
    this.update.onNoticePeriod = this.update.noticePeriod['noticeText'];
  }
  onSelectLocation(event) {
    this.update.location = this.locations.find(city => city['cityId'] == event['cityId'])
  }
  onSelectedRole(event) {
    this.update.roleId = this.roles.find(role => role['roleId'] == event['roleId'])
  }

  onSelectedCCTCFrom(event) {
   
    this.CCTCFrom = event;
   this.update.currentCTC=this.CCTCFrom+"."+this.CCTCTo;

  }
  onSelectedCCTCTo(event) {
    this.CCTCTo = event;
    this.update.currentCTC=this.CCTCFrom+"."+this.CCTCTo;

  }
  // onSelectedECTCFrom(event) {
  //   this.update.ECTCFrom = event.target.value;
  //   //this.salaries.find(sal=>sal['salaryId'] == event.target['value']);

  // }
  // onSelectedECTCTo(event) {
  //   this.update.ECTCTo = event.target.value;
  //   //this.salaries.find(sal=>sal['salaryId'] == event.target['value']);

  // }
  onSelectedExpYears(event) {
    this.expYears = event;
    this.update.experience=this.expYears+"."+this.expMonths;
  }
  onSelectedExpMonths(event) {
    this.expMonths = event;
    this.update.experience=this.expYears+"."+this.expMonths;
  }
  onSelectResume(event) {
    this.selectedResume = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.resume = reader.result;
    }
  }
  ngOnInit() {
  }
  updateDetails(obj) {
console.log(this.update.experience);
    const formData = new FormData();
    formData.append('updateDetails', JSON.stringify(this.update));
    formData.append('photo', this.selectedPhoto);
    formData.append('resume', this.selectedResume)

    this.service.updateWalker(formData).subscribe((res) => {
      if (res != null) {
        this.notification.showNotification('success', "updated successfully");
        this.router.navigate(['/walker/view']);
      }
    }, (err) => {
      this.notification.showNotification('error', 'updation failed due to some error');
    })
  }
  selectLanguage() {
    this.languages = this.service.getLanguages().pipe(map(languages =>
      this.langFilter(languages)),
    )
  }
  langFilter(values) {
    return values.filter(lang => lang.language.toLowerCase().includes(this.update.languagesKnown))

  }
  selectInstitute() {
    this.institutes = this.service.getAllInstitutes().pipe(map(institutes =>
      this.insFilter(institutes)),
    )
  }
  insFilter(values) {
    return values.filter(institute => institute.instituteName.toLowerCase().includes(this.update.institute))

  }
  selectKeySkills() {
    this.skills = this.service.getKeySkills().pipe(map(skills => this.skillFilter(skills)),
    )
  }
  skillFilter(values) {
    return values.filter(skill => skill.requiredKeySkills.toLowerCase().includes(this.update.keySkills))
  }
  selectDesignation() {
    this.designations = this.service.getDesignations().pipe(map(designations => this.desfilter(designations)),
    )
  }
  desfilter(values) {

    return values.filter(designation => designation.designationName.toLowerCase().includes(this.update.currentDesignation))
  }
  selectCompany() {
    this.companies = this.service.getCompanies().pipe(map(companies => this.cmpFilter(companies)),
    )
  }
  cmpFilter(values) {
    return values.filter(company => company.userCompanyNames.toLowerCase().includes(this.update.currentCompany))
  }
  selectPreferredLocation() {
    this.cities = this.service.getLocations().pipe(map(cities =>
      this.cityFilter(cities)),
    )
  }
  cityFilter(values) {
    return values.filter(city => city.cityName.toLowerCase().includes(this.update.preferredLocation))
  }
}
