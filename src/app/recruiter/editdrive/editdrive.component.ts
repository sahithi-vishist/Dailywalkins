import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { DriveFormModel } from '../create-drive/createdrive.model';
import { AlertService } from 'src/app/alert.service';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-editdrive',
  templateUrl: './editdrive.component.html',
  styleUrls: ['./editdrive.component.css']
})
export class EditdriveComponent implements OnInit {

  
  edcoOrdinator;
driveId;  
driveForm:FormGroup;
drivedetails;
timeSlots;
jobtypeList;
industries;
qualifications;
noticeperiodList;
experience;
salary;
roles;
edClient;
selectedCompanyLogo:File;
imgURL;
coordinatorDetails;
selectedCoordinator;
obj={
  name:'',
  contactNo:'',
  email:''
}
coId;
driveformmodel=new DriveFormModel();
constructor(private service:RecruiterauthserviceService,
  private route:ActivatedRoute,private alert:AlertService,
  private builder:FormBuilder,private date:DatePipe,
  private router:Router,
  private http:HttpClient) { 
this.driveId=this.route.snapshot.params.id;
this.http.get("http://localhost:62222/getdriveById?driveId=" + this.driveId).subscribe((res)=>{
  this.drivedetails=res;

});
this.service.getDriveById(this.driveId).subscribe((res:DriveFormModel)=>{
  this.driveformmodel=res;
  this.driveformmodel.driveName=res['driveName'];
  console.log(this.driveformmodel.driveName);
  this.driveformmodel.walkinDate=this.date.transform(res['walkinDate'],'yyyy-MM-dd');
  // console.log( "coordinatror = "+JSON.stringify(res)['coordinators'].email);
  // this.driveformmodel.coordinators=res['coordinators']['coordinatorIdcoordinatorId']['email'];
  this.driveformmodel.coordinators=res['coordinators'];
 // console.log(this.driveformmodel.coordinators);
  this.driveformmodel.coordinators['email']=res['coordinators']['email'];
  //console.log(this.driveformmodel.coordinators['email']);
  this.driveformmodel.coordinators=this.driveformmodel.coordinators['email'];
  this.driveformmodel.timeslot=res['timeslot'];
  //console.log( this.driveformmodel.timeslot);
   this.driveformmodel.timeslot=this.driveformmodel.timeslot.split(',');
   //console.log(this.driveformmodel.timeslot[0]);
});
this.service.getTimeslots().subscribe((res)=>{
  this.timeSlots=res;
});
this.service.getJobtype().subscribe((res)=>{
  this.jobtypeList=res;
      });
      this.service.getIndustries().subscribe((res)=>{
        this.industries=res;
            });
      this.service.getQualification().subscribe((res)=>{
        this.qualifications=res;
      });
      this.service.getNoticePeriod().subscribe((res)=>{
        this.noticeperiodList=res;
       
      });
      this.service.getExperience().subscribe((res)=>{
        this.experience=res;
      });
      this.service.getSalary().subscribe((res)=>{
        this.salary=res;
      });
      this.service.getRoles().subscribe((res)=>{
        this.roles=res;
      });
      this.service.getCoordinators().subscribe((res)=>{
        this.coordinatorDetails=res;
         });
         
  }

  ngOnInit() {
    this.driveForm=new FormGroup({
      driveName:new FormControl('',Validators.required),
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
  this.driveformmodel.coordinators=this.coordinatorDetails.find(coordinator=>coordinator['coordinatorId']==id);
  //console.log(this.selectedCoordinator.email);
    }
addToTextBox(){
  this.edcoOrdinator=this.driveformmodel.coordinators['email'];
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
selectTimeslots(event){
  this.driveformmodel.timeslot=event;
}
selectExpmin(event){
  this.driveformmodel.experienceMin= this.experience.find(expr=>expr['experienceId'] == event.experienceId);
}
selectExpmax(event){
  this.driveformmodel.experienceMax= this.experience.find(expr1=>expr1['experienceId'] == event.experienceId);
}
selectIndustry(event){
  this.driveformmodel.industry= this.industries.find(indestry=>indestry['industryId'] == event.industryId);
}
selectNotice(event){
  this.driveformmodel.noticePeriod= this.noticeperiodList.find(notice=>notice['noticePeriodId'] == event.noticePeriodId);
}
selectJobType(event){
  this.driveformmodel.jobType= this.jobtypeList.find(jobtypes=>jobtypes['jobTypeId'] == event.jobTypeId);
}
selectQualification(event){
  this.driveformmodel.qualification= this.qualifications.find(quals=>quals['qualificationId'] == event.qualificationId);
}
selectMinSalary(event){
  this.driveformmodel.salaryMin= this.salary.find(salary1=>salary1['salaryId'] == event.salaryId);
}
selectMaxSalary(event){
  
  this.driveformmodel.salaryMax= this.salary.find(salary2=>salary2['salaryId'] == event.salaryId);
//console.log(this.driveformmodel.salaryMax)
}
selectRole(event){
  this.driveformmodel.role= this.roles.find(role=>role['roleId'] == event.roleId);
}
selectCompanyLogo(event){
  this.selectedCompanyLogo=event.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}
updateDrive(driveformmodel){
  let driveSlots="";
  console.log(this.driveformmodel.timeslot)
    if(this.driveformmodel.timeslot.length>1){
      this.driveformmodel.timeslot.forEach(ftof => {
        driveSlots=ftof+","+driveSlots;
      
      });
      this.driveformmodel.timeslot=driveSlots;
    }else{
   
      this.driveformmodel.timeslot= this.driveformmodel.timeslot[0];
    }

  const formData=new FormData();
  formData.append('driveDetails',JSON.stringify(this.driveformmodel));
  formData.append('companyLogo',this.selectedCompanyLogo);
  console.log(formData.get('companyLogo'));
  this.service.updateCreatedDrive(formData).subscribe((res)=>{
    if (res != null) {
      this.alert.showAlert('success', "Updated Successfully");
  this.router.navigate(['recruitment/WalkinCentral/Drivedetails']);
    }
    else {
      this.alert.showAlert('Error', "Update unsuccessful");
    }
  });
}
}
