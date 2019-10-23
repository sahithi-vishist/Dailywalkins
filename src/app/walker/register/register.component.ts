import { Component, OnInit } from '@angular/core';
import { WalkerAuthService } from '../walker-auth.service';
import { NotificationService } from '../../notification.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { FormGroup, FormControl } from '@angular/forms';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  msg;
  industries;
  jobTypes;
  qualifications;
  noticePeriods;
  salaries;
  cities;
  roles;
  experience;
  file: File;
  resume: File;
  profilePhoto: File;
  regForm: FormGroup
  localities;
  institutes;
  timeSlots;
  languages;
  companies;
  designations;
  skills;
  imgURL;
  locations;
  //   currentDesignation:FormControl;
  //  designationOptions:Observable<string[]>;
  //  designationArray:string[]=[];
  constructor(private service: WalkerAuthService,
    private http: HttpClient, private notification: NotificationService) {

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
    this.service.getSalaries().subscribe((res) => {
      this.salaries = res;
    })
    this.service.getLocations().subscribe((res) => {
      this.cities = res;
    })
    this.service.getRoles().subscribe((res) => {
      //this.roles = res;
    })
    this.service.getExperienceData().subscribe((res) => {
      this.experience = res;
    })

    this.service.getTimeSlots().subscribe((res) => {
      this.timeSlots = res;
    })


  }

  vm = {
    file: '', fname: '', lname: '', email: '', contactNumber: '', landline: '', password: '', confirmPassword: '', dob: '',
    gender: '', industry: '', industryId: '', role: '', jobtype: '', currentDesignation: '', minExp: '', maxExp: '', CCTCFrom: '', CCTCTo: '', ECTCFrom: '',
    ECTCTo: '', keySkills: '', resumeHeadLine: '', currentCompany: '', location: '', locality: '', preferredLocation: '', noticePeriod: '',
    education: '', institute: '', yop: '', languagesKnown: '', photo: '', panelId: '', majorSkills: '', costPerHour: '',
    costPerDay: '', AvailableTimeSlotsForFaceToFace: '', costPerHourSkype: '', costPerDaySkype: '',
    AvailableTimeSlotsForSkype: '', costPerHourTelephonic: '', costPerDayTelephonic: '', AvailableTimeSlotsForTelephonic: '', daily: '', weekly: '', value: '', day: '', chkTandC: ''
  };

 
  radio = true;
  photo: any;

  showPanel() {
    document.getElementById('divPanel').hidden = false;

    document.getElementById('divCheckTele').hidden = false;

    document.getElementById('divCheckSkype').hidden = false;
    document.getElementById('divCheckF2F').hidden = false;


  }
  hidePanel() {
    document.getElementById('divPanel').hidden = true;
    document.getElementById('divCheckTele').hidden = true;
    document.getElementById('divCheckSkype').hidden = true;
    document.getElementById('divCheckF2F').hidden = false;

  }
  showF2F() {
    document.getElementById('divF2FDetails').hidden = false;
  }
  hideF2F() {
    document.getElementById('divF2FDetails').hidden = true;
  }
  showSkype() {
    document.getElementById('divSkypeDetails').hidden = false;
  }
  hideSkype() {
    document.getElementById('divSkypeDetails').hidden = true;
  }
  showTele() {
    document.getElementById('divTelephonicDetails').hidden = false;
  }
  hideTele() {
    document.getElementById('divTelephonicDetails').hidden = true;
  }
  checkboxEmail() {
    document.getElementById('divEmail').hidden = false;

  }
  checkboxNone() {
    document.getElementById('divEmail').hidden = true;
  }
  showDaily() {
    document.getElementById('divTime').hidden = false;
    document.getElementById('divDay').hidden = true;
  }
  showWeekly() {
    document.getElementById('divDay').hidden = false;
    document.getElementById('divTime').hidden = true;
  }
  hideDW() {
    document.getElementById('divDay').hidden = true;
    document.getElementById('divTime').hidden = true;
  }
  getDropDownValue() {
    document.getElementById('divTime').hidden = false;
  }

  check_email(event: any): void {
    let value = event.target.value;
    this.http.get("http://localhost:62222/checkemail?email=" + value).subscribe(res => {
      if (res) {
        this.msg = "email already exists";
      } else {
        this.msg = "email doesn't exists";
      }
      //console.log("Email exists"+email_exist);

    });
  }
  onSelectIndustry(event) {
    this.vm.industryId = this.industries.find(industry => industry['industryId'] == event.target['value']);
    this.vm.industry = this.vm.industryId['industryType'];
    this.service.getRoleByIndId(this.vm.industryId).subscribe((res) => {
      this.roles = res;
    })

  }
  onSelectJobType(event) {
    this.vm.jobtype = event.target.value;

  }
  onSelectEducation(event) {
    this.vm.education = event.target.value;
  }
  onSelectNoticePeriod(event) {
    this.vm.noticePeriod = this.noticePeriods.find(noticePeriod => noticePeriod['noticePeriodId'] == event.target['value']);

  }
  onSelectedCCTCFrom(event) {
    this.vm.CCTCFrom = event.target.value;
    //this.salaries.find(sal=>sal['salaryId'] == event.target['value']);

  }
  onSelectedCCTCTo(event) {
    this.vm.CCTCTo = event.target.value;
    //this.salaries.find(sal=>sal['salaryId'] == event.target['value']);

  }
  onSelectedECTCFrom(event) {
    this.vm.ECTCFrom = event.target.value;
    //this.salaries.find(sal=>sal['salaryId'] == event.target['value']);

  }
  onSelectedECTCTo(event) {
    this.vm.ECTCTo = event.target.value;
    //this.salaries.find(sal=>sal['salaryId'] == event.target['value']);

  }
  onSelectedLocation(event) {
    console.log(event.target.value)
    this.vm.location = this.cities.find(location => location['city'] == event.target['value']);
    this.selectLocality();
  }

  onSelectedRole(event) {
    this.vm.role = this.roles.find(roleObj => roleObj['roleId'] == event.target['value']);
  }
  onSelectedMinExp(event) {
    this.vm.minExp = event.target.value;
  }
  onSelectedMaxExp(event) {
    this.vm.maxExp = event.target.value;
  }
  onSelectedSlotForFaceToFace(event){
   
this.vm.AvailableTimeSlotsForFaceToFace=event;
  }
  onSelectedSlotForSkype(event){
this.vm.AvailableTimeSlotsForSkype=event;
  }
  onSelectedSlotForTelephonic(event){
this.vm.AvailableTimeSlotsForTelephonic=event;
  }
  selectProfileImage(event) {
    this.profilePhoto = event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imgURL = reader.result;
    }
  }
  selectResume(event) {
    this.resume = event.target.files[0];

    //console.log(this.selectedFile);
  }

  submit(regDetails) {
 
    this.service.register(regDetails, this.profilePhoto, this.resume).subscribe((res) => {


    }, (err) => {

    })
    let FacetoFace="";
    if(regDetails.AvailableTimeSlotsForFaceToFace.length>1){
      regDetails.AvailableTimeSlotsForFaceToFace.forEach(ftof => {
       FacetoFace=ftof+","+FacetoFace;
      
      });
      regDetails.AvailableTimeSlotsForFaceToFace=FacetoFace;
    }else{
   
      regDetails.AvailableTimeSlotsForFaceToFace=regDetails.AvailableTimeSlotsForFaceToFace[0];
    }
   
    let skype="";
    if(regDetails.AvailableTimeSlotsForSkype.length>1){
      regDetails.AvailableTimeSlotsForSkype.forEach(sk => {
        skype=sk+","+skype;
      
      });
      regDetails.AvailableTimeSlotsForSkype=skype;
    }else{
   
      regDetails.AvailableTimeSlotsForSkype=regDetails.AvailableTimeSlotsForSkype[0];
    }

    let telephonic="";
    if(regDetails.AvailableTimeSlotsForTelephonic.length>1){
      regDetails.AvailableTimeSlotsForTelephonic.forEach(tele => {
        telephonic=tele+","+telephonic;
      
      });
      regDetails.AvailableTimeSlotsForTelephonic=telephonic;
    }else{
   
      regDetails.AvailableTimeSlotsForTelephonic=regDetails.AvailableTimeSlotsForTelephonic[0];
    }
    this.service.registerPanelDetails(regDetails, this.vm.email).subscribe((res) => {

    }, (err) => {

    })

    this.service.saveProfileAlerts(regDetails).subscribe((res) => {
      this.notification.showNotification('success', "Registration successfull");
    }, (err) => {
      this.notification.showNotification('error', "Registration failed due to some error");
    })


  }


  ngOnInit() {

  }
  designationsFilter() {
    this.designations = this.service.getDesignations().pipe(map(designations => this.desfilter(designations)),
    )

  }
  desfilter(values) {

    return values.filter(designation => designation.designationName.toLowerCase().includes(this.vm.currentDesignation))
  }

  onSkillSelected() {
    //this.vm.keySkills=event.target.value;
    this.skills = this.service.getKeySkills().pipe(map(skills => this.skillFilter(skills)),
    )
  }
  skillFilter(values) {
    return values.filter(skill => skill.requiredKeySkills.toLowerCase().includes(this.vm.keySkills))
  }
  selectCompany() {

    //this.vm.currentCompany=event.target.value;
    this.companies = this.service.getCompanies().pipe(map(companies => this.cmpFilter(companies)),
    )

  }
  cmpFilter(values) {
    return values.filter(company => company.userCompanyNames.toLowerCase().includes(this.vm.currentCompany))
  }
  selectLocality() {
console.log(location)
    this.localities = this.service.getLocalities(this.vm.location).pipe(map(localities =>
      this.locFilter(localities)),
    )
  }
  locFilter(values) {
    return values.filter(locality => locality.location.toLowerCase().includes(this.vm.locality))
  }
  selectInstitute() {
    this.institutes = this.service.getAllInstitutes().pipe(map(institutes =>
      this.insFilter(institutes)),
    )
  }
  insFilter(values) {
    return values.filter(institute => institute.instituteName.toLowerCase().includes(this.vm.institute))

  }
  selectLanguage() {
    this.languages = this.service.getLanguages().pipe(map(languages =>
      this.langFilter(languages)),
    )
  }
  langFilter(values) {
    return values.filter(lang => lang.language.toLowerCase().includes(this.vm.languagesKnown))
  }
  onSelectedSkillSet(){
    this.skills = this.service.getKeySkills().pipe(map(skills =>
      this.skillSetFilter(skills)),
    )
  }
  skillSetFilter(values){
    return values.filter(skill => skill.requiredKeySkills.toLowerCase().includes(this.vm.majorSkills))
  }
  onSelectedPreferredLocation(){
    this.locations = this.service.getLocations().pipe(map(locations =>
      this.cityFilter(locations)),
    )
  }
  cityFilter(values){
    return values.filter(location => location.city.toLowerCase().includes(this.vm.preferredLocation))
  }
}
