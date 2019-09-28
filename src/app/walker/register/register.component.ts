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
  locations;
  roles;
  experience;
  file:File;
  selectedFile:File
  regForm:FormGroup
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
      this.locations = res;
    })
    this.service.getRoles().subscribe((res) => {
      this.roles = res;
    })
    this.service.getExperienceData().subscribe((res) => {
      this.experience = res;
    })
  }



  vm = {
    file: '', fname: '', lname: '', email: '', contactNumber: '', landline: '', password: '', confirmPassword: '', dob: '',
    gender: '', industry: '', role: '', jobtype: '', currentDesignation: '', minExp: '', maxExp: '', CCTCFrom: '', CCTCTo: '', ECTCFrom: '',
    ECTCTo: '', keySkills: '', resumeHeadLine: '', currentCompany: '', location:'', locality: '', preferredLocation: '', noticePeriod: '',
    education: '', institute: '', yop: '', languagesKnown: '', photo: '', panelId: '', majorSkills: '', costPerHour: '',
    costPerDay: '', AvailbleTimeSlotsForFaceToFace: '', costPerHourSkype: '', costPerDaySkype: '',
    AvailbleTimeSlotsForSkype: '', costPerHourTelephonic: '', costPerDayTelephonic: '', AvailbleTimeSlotsForTelephonic: '', daily: '', weekly: '', value: '', day: '', chkTandC: ''
  };

  public timings: { [key: string]: Object; }[] = [
    { value: "8", time: '08.00 AM' },
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
    this.vm.industry = event.target.value;
    console.log(this.vm.industry);
  }
  onSelectJobType(event) {
    this.vm.jobtype = event.target.value;

  }
  onSelectEducation(event) {
    this.vm.education = event.target.value;
  }
  onSelectNoticePeriod(event) {
    this.vm.noticePeriod = event.target.value;
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
    this.vm.location = this.locations.find(location => location['locationLatLongId'] == event.target['value']);

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
  selectResume(event){
this.selectedFile=event.target.files[0];

//console.log(this.selectedFile);
  }
  
  submit(regDetails) {
  
    this.service.register(regDetails).subscribe((res) => {
   
      this.notification.showNotification('success', "Registration successfull");

    }, (err) => {
      this.notification.showNotification('error', "Registration failed due to some error");
    })

      this.service.registerPanelDetails(regDetails, this.vm.email).subscribe((res) => {

      }, (err) => {

      })
   
    this.service.saveProfileAlerts(regDetails).subscribe((res) => {

    }, (err) => {

    })
    
  
  }



  ngOnInit() {
  }

}
