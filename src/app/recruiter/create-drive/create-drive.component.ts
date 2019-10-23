import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { DriveFormModel } from './createdrive.model';
import { DatePipe } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { HomepageService } from '../homepage/homepage.service';



@Component({
  selector: 'app-create-drive',
  templateUrl: './create-drive.component.html',
  styleUrls: ['./create-drive.component.css']
})
export class CreateDriveComponent implements OnInit {

driveForm:FormGroup;
industries;
values;
roles;
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
selectedRole;
drives;
edClient;
selcteddrive;
driveId;
coordinatorDetails;
driveformmodel=new DriveFormModel();
id;
companyNames;
imgURL;
edcoOrdinator;
selectedCompanyLogo:File;
selectedCoordinator;
designations;
locations;
obj={
  name:'',
  contactNo:'',
  email:''
}
coId;
keySkills;
clocalities;
selectedWlkinLocation;
selectedClientLocation;
clocalities1;
driveDetails;
  constructor(private service:RecruiterauthserviceService,
    private date:DatePipe,private http:HttpClient,
    private router:Router,private coservice:HomepageService,
    private route:ActivatedRoute) {
      
    this.service.getIndustries().subscribe((res)=>{
this.industries=res;
    });
    this.service.getJobtype().subscribe((res)=>{
this.jobtype=res;
    });
    this.service.getQualification().subscribe((res)=>{
      this.qualifications=res;
    });
    this.service.getRoles().subscribe((res)=>{
      this.roles=res;
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
    this.service.getCoordinators().subscribe((res)=>{
      this.coordinatorDetails=res;
       });
       this.service.getCompanyNames().subscribe((res)=>{
        this.companyNames=res;
        });
        this.service.getDesignation().subscribe((res)=>{
          this.designations=res;
        
        });
        this.service.getAllLocations().subscribe((res)=>{
          this.locations=res;
        });
        this.service.getKeyskills().subscribe((res)=>{
          this.keySkills=res;
        });
      this.service.getCompanyNames().subscribe((res)=>{
this.companyNames=res;
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
  companyLogo:new FormControl('',[Validators.required]),
  Role:new FormControl('')
});

}
  
  create(){
    console.log(this.driveForm.value);

    let driveSlots="";
    if(this.selctedTimeslots.length>1){
      this.selctedTimeslots.forEach(ftof => {
        driveSlots=ftof+","+driveSlots;
      
      });
      this.selctedTimeslots=driveSlots;
    }else{
   
      this.selctedTimeslots= this.selctedTimeslots[0];
    }


    this.driveformmodel.driveName=this.driveForm.get('drivename').value;
   this.driveformmodel.walkinDate=this.date.transform(this.driveForm.get('WalkinDate').value,'yyyy-MM-dd');
    this.driveformmodel.industry=this.selctedIndustry;
    this.driveformmodel.walkinLocation=this.driveForm.get('Location').value;
    this.driveformmodel.locality=this.driveForm.get('Locality').value;
    this.driveformmodel.jobDescription=this.driveForm.get('JobDescription').value;
    this.driveformmodel.keySkills=this.driveForm.get('KeySkills').value;
   this.driveformmodel.coordinators=this.selectedCoordinator;
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
    //this.driveformmodel.companyLogo=this.driveForm.get('companyLogo').value;
    this.driveformmodel.role=this.selectedRole;
   
 const formData=new FormData();
    formData.append('driveDetails',JSON.stringify(this.driveformmodel));
    formData.append('companyLogo',this.selectedCompanyLogo);
    console.log(formData.get('companyLogo'));
   
    
   
 this.service.createDrive(formData).subscribe((res)=>{
  
   this.driveForm.reset();
 },(err)=>{
   console.log(err);
 });
  }
  onSubmit(){
    
  
  }
 
  
  changeClientName(){
   
    this.edClient=this.driveForm.get('CompanyName').value;
  }

  displayCoordinators(){
    document.getElementById('myModal').style.display='block';
  }  
  cancel(event){
    document.getElementById('myModal').style.display='none';
  }
  checkAllEmails(){

  }
  checkEmail(id){
    //console.log("Id selected is"+id);
    this.selectedCoordinator=this.coordinatorDetails.find(coordinator=>coordinator['coordinatorId']==id);
    //console.log(this.selectedCoordinator.email);
      }
  addToTextBox(){
    this.edcoOrdinator=this.selectedCoordinator.email;
    //console.log(this.edcoOrdinator);
    document.getElementById('myModal').style.display='none';
  }
 
  addCoordinator(){
    document.getElementById('coModel').style.display='none';
    document.getElementById('coModel1').style.display='block';
  }
  
  saveCoOrdinator(val){
var values={
  "name":val.name,
  "contactNo":val.contactNo,
  "email":val.email
}
this.service.postCoordinatorDetails(values).subscribe((res)=>{

});
  }
  submitCancel(){
    document.getElementById('coModel1').style.display='none';
    document.getElementById('coModel').style.display='block';
  
  }
  postDrive(){
   

  } 
  submit(driveForm){
    
  }
  selectWalkinLocation(){
  this.selectedWlkinLocation=this.locations.find(locat=>locat['city'] == this.driveForm.get('Location').value)
  this.service.getALLLocalities(this.driveForm.get('Location').value).subscribe((res)=>{
  this.clocalities=res;
});

  }
  selectClientLocation(){
    this.selectedClientLocation=this.locations.find(local=>local['city'] == this.driveForm.get('CLocation').value)
    this.service.getALLLocalities(this.driveForm.get('CLocation').value).subscribe((res)=>{
    this.clocalities1=res;
  });
}
  selectDrive(event){
   
    this.driveId=event.target.value;
    this.selcteddrive= this.drives.find(drivess=>drivess['createDriveId'] == event.target['value']);
  
    this.router.navigate(['/recruitment/editdrive/'+this.driveId]);
  }
  selectRole(event){
    this.selectedRole= this.roles.find(role=>role['roleId'] == event.target['value']);
  }
  selectIndustry(event)
  {
    //console.log(event.target.value);
    this.selctedIndustry= this.industries.find(indestry=>indestry['industryId'] == event.target['value']);
    //console.log(this.selctedIndustry);

  }
  selectJobtype(event){
    //console.log("job type is ="+event.target.value);
    this.selctedJobtype= this.jobtype.find(jobtypes=>jobtypes['jobTypeId'] == event.target['value']);
    //console.log(this.selctedJobtype);
  }
  selectQualification(event){
    //console.log(event.target.value);
    this.selctedQualification= this.qualifications.find(quals=>quals['qualificationId'] == event.target['value']);
    //console.log(this.selctedQualification);
  }
  selectTimeslots(event){
    //console.log(event.target.value);
    this.selctedTimeslots=event;
    console.log(this.selctedTimeslots);
  }
  selectNotice(event){
    //console.log(event.target.value);
    this.selctedperiod= this.noticeperiod.find(notice=>notice['noticePeriodId'] == event.target['value']);
    //console.log(this.selctedperiod);
  }
  selectExpmin(event){
    //console.log(event.target.value);
    this.selctedminexp= this.experience.find(expr=>expr['experienceId'] == event.target['value']);
    //console.log(this.selctedminexp);
  }
  selectExpmax(event){
    //console.log(event.target.value);
    this.selctedmaxexp= this.experience.find(expre=>expre['experienceId'] == event.target['value']);
    //console.log(this.selctedmaxexp);
  }
  selectSalmin(event){
    //console.log(event.target.value);
    this.selctedminsal= this.salary.find(salary1=>salary1['salaryId'] == event.target['value']);
    //console.log(this.selctedminsal);
  }
  selectSalmax(event){
    //console.log(event.target.value);
    this.selctedmaxsal= this.salary.find(salary2=>salary2['salaryId'] == event.target['value']);
    //console.log(this.selctedmaxsal);
  }
  selectCompanyLogo(event){
    this.selectedCompanyLogo=event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }
}
