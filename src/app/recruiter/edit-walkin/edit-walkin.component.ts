import { Component, OnInit } from '@angular/core';
import { PostWalkinModel } from '../postwalkin/postwalkin.model';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/alert.service';

@Component({
  selector: 'app-edit-walkin',
  templateUrl: './edit-walkin.component.html',
  styleUrls: ['./edit-walkin.component.css']
})
export class EditWalkinComponent implements OnInit {
jobNo; 
timeSlots;
jobtypeList;
industries;
qualifications;
noticeperiodList;
experience;
salary;
roles;
result;
walkinModel=new  PostWalkinModel();
  constructor(private alert:AlertService,private router:Router,private route:ActivatedRoute,private service:RecruiterauthserviceService) {
this.jobNo=this.route.snapshot.params.id;
this.service.getJobById(this.jobNo).subscribe((res:PostWalkinModel)=>{
  
  this.walkinModel=res;
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
selectedTimeSlots(event){
  this.walkinModel.walkinTimeSlots=this.timeSlots.find(time=>time['timeSlotsId'] == event.target['value']);
}
selectMinExp(event){
  this.walkinModel.expMin= this.experience.find(expr=>expr['experienceId'] == event.target['value']);
}
selectMaxExp(event){
  this.walkinModel.expMax= this.experience.find(expr1=>expr1['experienceId'] == event.target['value']);
}
selectIndustry(event){
  this.walkinModel.industryId= this.industries.find(indestry=>indestry['industryId'] == event.target['value']);
}
selectNoticePeriod(event){
  this.walkinModel.noticePeriod= this.noticeperiodList.find(notice=>notice['noticePeriodId'] == event.target['value']);
}
selectJobType(event){
  this.walkinModel.jobTypeId= this.jobtypeList.find(jobtypes=>jobtypes['jobTypeId'] == event.target['value']);
}
selectQualification(event){
  this.walkinModel.qualification= this.qualifications.find(quals=>quals['qualificationId'] == event.target['value']);
}
selectMinSalary(event){
  this.walkinModel.minSal= this.salary.find(salary1=>salary1['salaryId'] == event.target['value']);
}
selectMaxSalary(event){
  this.walkinModel.maxSal= this.salary.find(salary2=>salary2['salaryId'] == event.target['value']);
}
selectRole(event){
  this.walkinModel.roleId= this.roles.find(role=>role['roleId'] == event.target['value']);
}
  ngOnInit() {
  }
  updateWalkin(walkinModel){
    this.service.updatePostWalkins(this.walkinModel).subscribe((res)=>{
      this.result=res;
      console.log(this.result.jobNo);
      if (res != null) {
        this.alert.showAlert('success', "Updated Successfully");
        this.router.navigate(['/recruitment/selectedjob/'+this.result.jobNo]);
      }
      else {
        this.alert.showAlert('Error', "Update unsuccessful");
      }
    });
  }
}
