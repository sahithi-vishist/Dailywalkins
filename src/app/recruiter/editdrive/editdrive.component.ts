import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DriveFormModel } from '../create-drive/createdrive.model';
import { AlertService } from 'src/app/alert.service';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';


@Component({
  selector: 'app-editdrive',
  templateUrl: './editdrive.component.html',
  styleUrls: ['./editdrive.component.css']
})
export class EditdriveComponent implements OnInit {

  

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
driveformmodel=new DriveFormModel();
constructor(private service:RecruiterauthserviceService,
  private route:ActivatedRoute,private alert:AlertService,
  private router:Router,
  private http:HttpClient) { 
this.driveId=this.route.snapshot.params.id;
this.http.get("http://localhost:62222/getdriveById?driveId=" + this.driveId).subscribe((res)=>{
  this.drivedetails=res;
});
this.service.getDriveById(this.driveId).subscribe((res:DriveFormModel)=>{
  this.driveformmodel=res;
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
  });
}
selectTimeslots(event){
  this.driveformmodel.timeslot=this.timeSlots.find(time=>time['timeSlotsId'] == event.target['value']);
}
selectExpmin(event){
  this.driveformmodel.experienceMin= this.experience.find(expr=>expr['experienceId'] == event.target['value']);
}
selectExpmax(event){
  this.driveformmodel.experienceMax= this.experience.find(expr1=>expr1['experienceId'] == event.target['value']);
}
selectIndustry(event){
  this.driveformmodel.industry= this.industries.find(indestry=>indestry['industryId'] == event.target['value']);
}
selectNotice(event){
  this.driveformmodel.noticePeriod= this.noticeperiodList.find(notice=>notice['noticePeriodId'] == event.target['value']);
}
selectJobtype(event){
  this.driveformmodel.jobType= this.jobtypeList.find(jobtypes=>jobtypes['jobTypeId'] == event.target['value']);
}
selectQualification(event){
  this.driveformmodel.qualification= this.qualifications.find(quals=>quals['qualificationId'] == event.target['value']);
}
selectSalmin(event){
  this.driveformmodel.salaryMin= this.salary.find(salary1=>salary1['salaryId'] == event.target['value']);
}
selectSalmax(event){
  
  this.driveformmodel.salaryMax= this.salary.find(salary2=>salary2['salaryId'] == event.target['value']);
console.log(this.driveformmodel.salaryMax)
}
selectRole(event){
  this.driveformmodel.role= this.roles.find(role=>role['roleId'] == event.target['value']);
}
updateDrive(driveformmodel){
 
  this.service.updateCreatedDrive(driveformmodel).subscribe((res)=>{
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
