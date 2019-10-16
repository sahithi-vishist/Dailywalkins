import { Component, OnInit } from '@angular/core';
import { WalkerAuthService } from '../walker-auth.service';
import { NotificationService } from '../../notification.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { formatDate } from '@angular/common';
import { FormGroup } from '@angular/forms';

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
    this.service.getAllInstitutes().subscribe((res) => {
      this.institutes = res;
    })
    this.service.getLanguages().subscribe((res) => {
      this.languages = res;
    })
    this.service.getTimeSlots().subscribe((res) => {
      this.timeSlots = res;
    })
    this.service.getCompanies().subscribe((res)=>{
      this.companies=res;
    })
    this.service.getDesignations().subscribe((res)=>{
      this.designations=res;
    })
    this.service.getKeySkills().subscribe((res)=>{
      this.skills=res;
    })

  }

  // public yearOfPass :{ [key: string]: Object; }[] = [
  //   { value: "1980", name: "1980" },
  //   { value: 1981, name: 1981 },
  //   { value: 1982, name: 1982 },
  //   { value: 1983, name: 1983 },
  //   { value: 1984, name: 1984 },
  //   { value: 1985, name: 1985 },
  //   { value: 1986, name: 1986 },
  //   { value: 1987, name: 1987 },
  //   { value: 1988, name: 1988 },
  //   { value: 1989, name: 1989 },
  //   { value: 1990, name: 1990 },
  //   { value: 1991, name: 1991 },
  //   { value: 1992, name: 1992 },
  //   { value: 1993, name: 1993 },
  //   { value: 1994, name: 1994 },
  //   { value: 1995, name: 1995 },
  //   { value: 1996, name: 1996 },
  //   { value: 1997, name: 1997 },
  //   { value: 1998, name: 1998 },
  //   { value: 1999, name: 1999 },
  //   { value: 2000, name: 2000 },
  //   { value: 2001, name: 2001 },
  //   { value: 2002, name: 2002 },
  //   { value: 2003, name: 2003 },
  //   { value: 2004, name: 2004 },
  //   { value: 2005, name: 2005 },
  //   { value: 2006, name: 2006 },
  //   { value: 2007, name: 2007 },
  //   { value: 2008, name: 2008 },
  //   { value: 2009, name: 2009 },
  //   { value: 2010, name: 2010 },
  //   { value: 2011, name: 2011 },
  //   { value: 2012, name: 2012 },
  //   { value: 2013, name: 2013 },
  //   { value: 2014, name: 2014 },
  //   { value: 2015, name: 2015 },
  //   { value: 2016, name: 2016 },
  //   { value: 2017, name: 2017 },
  //   { value: 2018, name: 2018 },
  //   { value: 2019, name: 2019 }];

  vm = {
    file: '', fname: '', lname: '', email: '', contactNumber: '', landline: '', password: '', confirmPassword: '', dob: '',
    gender: '', industry: '',industryId:'', role: '', jobtype: '', currentDesignation: '', minExp: '', maxExp: '', CCTCFrom: '', CCTCTo: '', ECTCFrom: '',
    ECTCTo: '', keySkills: '', resumeHeadLine: '', currentCompany: '', location: '', locality: '', preferredLocation: '', noticePeriod: '',
    education: '', institute: '', yop: '', languagesKnown: '', photo: '', panelId: '', majorSkills: '', costPerHour: '',
    costPerDay: '', AvailbleTimeSlotsForFaceToFace: '', costPerHourSkype: '', costPerDaySkype: '',
    AvailbleTimeSlotsForSkype: '', costPerHourTelephonic: '', costPerDayTelephonic: '', AvailbleTimeSlotsForTelephonic: '', daily: '', weekly: '', value: '', day: '', chkTandC: ''
  };

  public timings: { [key: string]: Object; }[] = [

    { value: "9", time: '09.00 AM' },
    { value: "10", time: '10.00 AM' },
    { value: "11", time: '11.00 AM' },
    { value: "12", time: '12.00 PM' },
    { value: "13", time: '01.00 PM' },
    { value: "14", time: '02.00 PM' },
    { value: "15", time: '03.00 PM' },
    { value: "16", time: '04.00 PM' },
    { value: "17", time: '05.00 PM' },
    { value: "18", time: '06.00 PM' },
    { value: "19", time: '07.00 PM' }
  ];
  // maps the local data column to fields property
  public localFields: Object = { text: 'time', value: 'value' };
  // set the placeholder to MultiSelect Dropdown input element
  public localWaterMark: string = 'Select Timings';

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
    this.vm.industryId = this.industries.find(industry=>industry['industryId'] == event.target['value']);
   this.vm.industry=this.vm.industryId['industryType'];
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
    this.vm.noticePeriod = this.noticePeriods.find(noticePeriod=>noticePeriod['noticePeriodId']==event.target['value']);
    
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
    this.vm.location = this.cities.find(city => city['cityName'] == event.target['value']);
    this.service.getLocalities(this.vm.location).subscribe((res) => {
      this.localities = res;
      console.log(this.localities)
    })

  }
  selectCompany(event){
    this.vm.currentCompany=event.target.value;
  }
  selectInstitute(event) {
    this.vm.institute = event.target.value;
  }
  selectDesignation(event){
    this.vm.currentDesignation=event.target.value;
  
  }
  selectLanguage(event){
this.vm.languagesKnown=event.target.value;
  }

  selectLocality(event) {
    this.vm.locality = event.target.value;
  }
  onSkillSelected(event){
    this.vm.keySkills=event.target.value;
    
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
  onSelectedSkillSet(event){
  
this.vm.majorSkills=event.target.value;

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

}
