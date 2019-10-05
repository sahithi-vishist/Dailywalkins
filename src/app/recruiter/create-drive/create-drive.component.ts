import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { DriveFormModel } from './createdrive.model';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-create-drive',
  templateUrl: './create-drive.component.html',
  styleUrls: ['./create-drive.component.css']
})
export class CreateDriveComponent implements OnInit {

driveForm:FormGroup;
industries;
industryId;
jobtype;
qualifications;
walkintimeslots;
noticeperiod;
experience;
salary;
selctedJobtype;
selctedIndustry;
selctedQualification;
selctedTimeslots;
selctedperiod;
selctedminexp;
selctedmaxexp;
selctedminsal;
selctedmaxsal;
drives;
edClient;
selcteddrive;
driveId;
selectedRole;
roles;
driveformmodel=new DriveFormModel();

  constructor(private service:RecruiterauthserviceService,
    private date:DatePipe,private http:HttpClient,private router:Router) {

    this.service.getIndustries().subscribe((res)=>{
this.industries=res;
    });
    this.service.getRoles().subscribe((res)=>{
      this.roles=res;
    });
    this.service.getJobtype().subscribe((res)=>{
this.jobtype=res;
    });
    this.service.getQualification().subscribe((res)=>{
      this.qualifications=res;
    });
    this.service.getTimeslots().subscribe((res)=>{
      this.walkintimeslots=res;
    });
    this.service.getNoticePeriod().subscribe((res)=>{
      this.noticeperiod=res;
    });
    this.service.getExperience().subscribe((res)=>{
      this.experience=res;
    });
    this.service.getSalary().subscribe((res)=>{
      this.salary=res;
    });
    this.service.getdrives().subscribe((res)=>{
      this.drives=res;
    });
   }

  ngOnInit() {
this.driveForm=new FormGroup({
  drivename:new FormControl('',[Validators.required]),
  WalkinDate:new FormControl('',[Validators.required]),
  Industry:new FormControl('',[Validators.required]),
  checkIn:new FormControl(''),
  Location:new FormControl('',[Validators.required]),
  Locality:new FormControl('',[Validators.required]),
  SelectDrive:new FormControl('',[Validators.required]),
  JobDescription:new FormControl('',[Validators.required]),
  KeySkills:new FormControl('',[Validators.required]),
  CoOrdinators:new FormControl('',[Validators.required]),
  Designation:new FormControl('',[Validators.required]),
  RolesResponsibilties:new FormControl(''),
  CompanyName:new FormControl('',[Validators.required]),
  EndClient:new FormControl('',[Validators.required]),
  CLocation:new FormControl('',[Validators.required]),
  CLocality:new FormControl(''),
  ExpMin:new FormControl('',[Validators.required]),
  ExpMax:new FormControl('',[Validators.required]),
  JobType:new FormControl(''),
  EndClient1:new FormControl(''),
  checkEndClient:new FormControl(''),
  CompanyProfile:new FormControl('',[Validators.required]),
  Email:new FormControl('',[Validators.required,Validators.email]),
  ContactPerson:new FormControl('',[Validators.required]),
  Phone:new FormControl('',[Validators.required]),
  WalkinTimeSlots:new FormControl('',[Validators.required]),
  Qualification:new FormControl(''),
  ContactNoLandline:new FormControl(''),
  Address:new FormControl(''),
  SalMin:new FormControl('',[Validators.required]),
  SalMax:new FormControl('',[Validators.required]),
  NoticePeriod:new FormControl('',[Validators.required]),
  image:new FormControl('',[Validators.required]),
  Role:new FormControl('')
})
  }
  create(){
    console.log(this.driveForm.value);
    this.driveformmodel.driveName=this.driveForm.get('drivename').value;
   this.driveformmodel.walkinDate=this.date.transform(this.driveForm.get('WalkinDate').value,'yyyy-MM-dd');
    this.driveformmodel.industry=this.selctedIndustry;
    this.driveformmodel.walkinLocation=this.driveForm.get('Location').value;
    this.driveformmodel.locality=this.driveForm.get('Locality').value;
    this.driveformmodel.jobDescription=this.driveForm.get('JobDescription').value;
    this.driveformmodel.keySkills=this.driveForm.get('KeySkills').value;
   //this.driveformmodel.coordinators=this.driveForm.get('CoOrdinators').value;
    this.driveformmodel.designation=this.driveForm.get('Designation').value;
    this.driveformmodel.rolesResposibilities=this.driveForm.get('RolesResponsibilties').value;
    this.driveformmodel.companyName=this.driveForm.get('CompanyName').value;
    this.driveformmodel.endClient=this.driveForm.get('EndClient').value;
    this.driveformmodel.clientLocation=this.driveForm.get('CLocation').value;
    this.driveformmodel.experienceMin= this.selctedminexp;
    this.driveformmodel.experienceMax=this.selctedmaxexp;
    this.driveformmodel.jobType=this.selctedJobtype;
    this.driveformmodel.companyProfile=this.driveForm.get('CompanyProfile').value;
    this.driveformmodel.contactEmail=this.driveForm.get('Email').value;
    this.driveformmodel.contactPerson=this.driveForm.get('ContactPerson').value;
    this.driveformmodel.contactNo=this.driveForm.get('Phone').value;
    this.driveformmodel.timeslot=this.selctedTimeslots;
    this.driveformmodel.qualification=this.selctedQualification;
    this.driveformmodel.contactNoLandline=this.driveForm.get('ContactNoLandline').value;
    this.driveformmodel.companyAddress=this.driveForm.get('Address').value;
    this.driveformmodel.clientLocality=this.driveForm.get('CLocality').value;
    this.driveformmodel.salaryMin=this.selctedminsal;
    this.driveformmodel.salaryMax=this.selctedmaxsal;
    this.driveformmodel.noticePeriod=this.selctedperiod;
    this.driveformmodel.companyLogo=this.driveForm.get('image').value;
    this.driveformmodel.role=this.selectedRole;
  console.log(this.driveformmodel);
 this.service.createDrive(this.driveformmodel).subscribe((res)=>{
   console.log(res);
 },(err)=>{
   console.log(err);
 });
  }
  onSubmit(){
    
  
  }
 
  
  changeClientName(){
   
    this.edClient=this.driveForm.get('CompanyName').value;
       // console.log("Ed Client"+this.edCliet);
    //console.log("Ed Client"+event.target.value);
   
  }

  displayCoordinators(){
    document.getElementById('myModal').style.display='block';
   
  }  
  checkAllEmails(){

  }
  addToTextBox(){

  }
  addCoordinator(){

  }
  cancel(){

  }
  postDrive(){
   
console.log(this.driveForm);
  } 
  submit(driveForm){
    
   
  }
  selectRole(event){
    this.selectedRole= this.roles.find(role=>role['roleId'] == event.target['value']);
  }
  selectDrive(event){
    //console.log(event.target.value);
    this.driveId=event.target.value;
    this.selcteddrive= this.drives.find(drivess=>drivess['createDriveId'] == event.target['value']);
   // console.log(this.selcteddrive);
    this.router.navigate(['/recruitment/editdrive/'+this.driveId]);
  }

  selectIndustry(event)
  {
    
    this.selctedIndustry= this.industries.find(indestry=>indestry['industryId'] == event.target['value']);


  }
  selectJobtype(event){
    
    this.selctedJobtype= this.jobtype.find(jobtypes=>jobtypes['jobTypeId'] == event.target['value']);
   
  }
  selectQualification(event){
  
    this.selctedQualification= this.qualifications.find(quals=>quals['qualificationId'] == event.target['value']);

  }
  selectTimeslots(event){
   
    this.selctedTimeslots= this.walkintimeslots.find(time=>time['timeSlotsId'] == event.target['value']);
    
  }
  selectNotice(event){
  
    this.selctedperiod= this.noticeperiod.find(notice=>notice['noticePeriodId'] == event.target['value']);

  }
  selectExpmin(event){

    this.selctedminexp= this.experience.find(expr=>expr['experienceId'] == event.target['value']);
  
  }
  selectExpmax(event){

    this.selctedmaxexp= this.experience.find(expre=>expre['experienceId'] == event.target['value']);
    
  }
  selectSalmin(event){
  
    this.selctedminsal= this.salary.find(salary1=>salary1['salaryId'] == event.target['value']);

  }
  selectSalmax(event){
   
    this.selctedmaxsal= this.salary.find(salary2=>salary2['salaryId'] == event.target['value']);

  }
}
