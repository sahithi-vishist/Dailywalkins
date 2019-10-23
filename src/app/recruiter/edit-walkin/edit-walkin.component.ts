import { Component, OnInit } from '@angular/core';
import { PostWalkinModel } from '../postwalkin/postwalkin.model';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/alert.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-walkin',
  templateUrl: './edit-walkin.component.html',
  styleUrls: ['./edit-walkin.component.css']
})
export class EditWalkinComponent implements OnInit {
jobNo; 
timeSlots:any[];
jobtypeList;
industries;
qualifications;
noticeperiodList;
experience;
salary;
roles;
result;
designations;
selectedCompanyLogo:File;
imgURL;
locations;
keySkills;
companyNames;
walkinModel=new  PostWalkinModel();
  constructor(private alert:AlertService,private router:Router,
    private route:ActivatedRoute,private service:RecruiterauthserviceService,
    private date:DatePipe) {
this.jobNo=this.route.snapshot.params.id;
this.service.getJobById(this.jobNo).subscribe((res:PostWalkinModel)=>{
  
  this.walkinModel=res;
  this.walkinModel.walkinDate=this.date.transform(res['walkinDate'],'yyyy-MM-dd');
  this.walkinModel.walkinTimeSlots=res['walkinTimeSlots'];
  this.walkinModel.walkinTimeSlots=this.walkinModel.walkinTimeSlots.split(',');
  this.walkinModel.qualification=res['qualification'];
  this.walkinModel.qualification=this.walkinModel.qualification.split(',');
  
});
this.service.getTimeslots().subscribe((res:any)=>{
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
      this.service.getAllLocations().subscribe((res)=>{
        this.locations=res;
      });
      this.service.getCompanyNames().subscribe((res)=>{
        this.companyNames=res;
        });
        this.service.getDesignation().subscribe((res)=>{
          this.designations=res;
        
        });
        this.service.getKeyskills().subscribe((res)=>{
          this.keySkills=res;
        });
}
selectedTimeSlots(event){
  this.walkinModel.walkinTimeSlots=event;
}
selectMinExp(event){
  this.walkinModel.expMin= this.experience.find(expr=>expr['experienceId'] == event.experienceId);
}
selectMaxExp(event){
  this.walkinModel.expMax= this.experience.find(expr1=>expr1['experienceId'] == event.experienceId);
}
selectIndustry(event){
  this.walkinModel.industryId= this.industries.find(indestry=>indestry['industryId'] == event.industryId);
}
selectNoticePeriod(event){
  this.walkinModel.noticePeriod= this.noticeperiodList.find(notice=>notice['noticePeriodId'] == event.noticePeriodId);
}
selectJobType(event){
  this.walkinModel.jobTypeId= this.jobtypeList.find(jobtypes=>jobtypes['jobTypeId'] == event.jobTypeId);
}
selectQualification(event){
  this.walkinModel.qualification= event;
}
selectMinSalary(event){
  this.walkinModel.minSal= this.salary.find(salary1=>salary1['salaryId'] == event.salaryId);
}
selectMaxSalary(event){
  this.walkinModel.maxSal= this.salary.find(salary2=>salary2['salaryId'] == event.salaryId);
}
selectRole(event){
  this.walkinModel.roleId= this.roles.find(role=>role['roleId'] == event.target['value']);
}
selectWalkinLocation(){
    
//   this.selectedWalkinLocation=this.locations.find(loca=>loca['city'] == this.vm.wlocation)
//    this.service.getALLLocalities(this.vm.wlocation).subscribe((res)=>{
//    this.localities=res;
//  });
}
selectCompanyLogo(event){
  this.selectedCompanyLogo=event.target.files[0];
  var reader = new FileReader();
  reader.readAsDataURL(event.target.files[0]); 
  reader.onload = (_event) => { 
    this.imgURL = reader.result; 
  }
}
  ngOnInit() {
  }
  updateWalkin(walkinModel){
    let driveSlots="";
    if( this.walkinModel.walkinTimeSlots.length>1){
      this.walkinModel.walkinTimeSlots.forEach(ftof => {
        driveSlots=ftof+","+driveSlots;
      
      });
      this.walkinModel.walkinTimeSlots=driveSlots;
    }else{
   
      this.walkinModel.walkinTimeSlots= this.walkinModel.walkinTimeSlots[0];
    }let walkinQual="";
    if(this.walkinModel.qualification.length>1){
      this.walkinModel.qualification.forEach(ftof => {
        walkinQual=ftof+","+walkinQual;
      
      });
      this.walkinModel.qualification=walkinQual;
    }else{
   
      this.walkinModel.qualification= this.walkinModel.qualification[0];
    }
    const formData=new FormData();
    formData.append('postWalkinDetails',JSON.stringify(this.walkinModel));
    formData.append('companyLogo',this.selectedCompanyLogo);
    console.log(formData.get('companyLogo'));
    this.service.updatePostWalkins(formData).subscribe((res)=>{
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
