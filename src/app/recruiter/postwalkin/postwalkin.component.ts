import { Component, OnInit } from '@angular/core';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { PostWalkinModel } from './postwalkin.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-postwalkin',
  templateUrl: './postwalkin.component.html',
  styleUrls: ['./postwalkin.component.css']
})
export class PostwalkinComponent implements OnInit {
  walkinModel=new PostWalkinModel();
vm={
  jobtitle:'',
  date:'',
  timeslot:'',
  minexp:'',
  maxexp:'',
  wlocation:'',
  locality:'',
  industryname:'',
  role:'',
  jpostions:'',
  jobskills:'',
  jdescription:'',
  Designation:'',
  noticeperiod:'',
  jobtype:'',  
  qualification:'',
  minsal:'',
  maxsal:'',
  companyname:'',
  EndClient:'',
  clocation:'',
  clocality:'',
  cprofile:'',
  email:'',
  cperson:'',
  cno:'',
  clno:'',
  roleres:'',
  vdetails:'',
  check1:'',
  check2:'',
  check3:'',
  check4:'',
  file:''
};
imgURL;
timeSlots;
selectedTimeslot;
selctedIndustry;
experience;
selctedJobtype;
jobtypeList;
selctedMaxSal;
qualifications;
selectedRole;
roles;
selctedMinSal;
walkintimeslots;
noticeperiodList;
selctedMinExp;
selctedMaxExp;
selctedperiod;
selctedQualification;
salary;
industries;
  selectedCompanyLogo:File;
selectedWalkinLocation;
locations;
localities;
designations;
companyNames;
selectedClientLocation;

  clocalities;
  keySkills;
  constructor(private dates:DatePipe,private service:RecruiterauthserviceService) {
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
        this.service.getRoles().subscribe((res)=>{
          this.roles=res;
        });
        this.service.getTimeslots().subscribe((res)=>{
          this.walkintimeslots=res;
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
   changeClientName(){
    
this.vm.EndClient=this.vm.companyname;

  }
  chkRequireFPanel(){

  }
  chkFSpace(){

  }
  chkFResource(){

  }
  chkFTP(){
    
  }
  selectWalkinLocation(){
    
    this.selectedWalkinLocation=this.locations.find(loca=>loca['city'] == this.vm.wlocation)
     this.service.getALLLocalities(this.vm.wlocation).subscribe((res)=>{
     this.localities=res;
   });
  }
  selectClientLocation(){
    this.selectedClientLocation=this.locations.find(locat=>locat['city'] == this.vm.clocation)
     this.service.getALLLocalities(this.vm.clocation).subscribe((res)=>{
     this.clocalities=res;
   });
  }
  selectTimeslots(event){
    this.selectedTimeslot= event;
    //console.log(this.selectedTimeslot);
  }
  selectMinExp(event){
    this.selctedMinExp= this.experience.find(expr=>expr['experienceId'] == event.target['value']);
  }
  selectMaxExp(event){
    this.selctedMaxExp= this.experience.find(expr1=>expr1['experienceId'] == event.target['value']);
  }
  selectIndustry(event){
    this.selctedIndustry= this.industries.find(indestry=>indestry['industryId'] == event.target['value']);
  }
  selectNoticePeriod(event){
    this.selctedperiod= this.noticeperiodList.find(notice=>notice['noticePeriodId'] == event.target['value']);
  }
  selectJobType(event){
    this.selctedJobtype= this.jobtypeList.find(jobtypes=>jobtypes['jobTypeId'] == event.target['value']);
  }
  selectQualification(event){
    this.selctedQualification= event;
  }
  selectMinSalary(event){
    this.selctedMinSal= this.salary.find(salary1=>salary1['salaryId'] == event.target['value']);
  }
  selectMaxSalary(event){
    this.selctedMaxSal= this.salary.find(salary2=>salary2['salaryId'] == event.target['value']);
  }
  selectRole(event){
this.selectedRole=this.roles.find(role=>role['roleId'] == event.target['value']);
  }
  selectCompanyLogo(event){
    this.selectedCompanyLogo=event.target.files[0];
    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
    }
  }

  createWalkin(data){
    //console.log(data);
    let driveSlots="";
    if(this.selectedTimeslot.length>1){
      this.selectedTimeslot.forEach(ftof => {
        driveSlots=ftof+","+driveSlots;
      
      });
      this.selectedTimeslot=driveSlots;
    }else{
   
      this.selectedTimeslot= this.selectedTimeslot[0];
    }
    let walkinQual="";
    if(this.selctedQualification.length>1){
      this.selctedQualification.forEach(ftof => {
        walkinQual=ftof+","+walkinQual;
      
      });
      this.selctedQualification=walkinQual;
    }else{
   
      this.selctedQualification= this.selctedQualification[0];
    }
    this.walkinModel.jobTitle=data.jobtitle;
    this.walkinModel.walkinDate=this.dates.transform(data.date,'yyyy-MM-dd');
    this.walkinModel.walkinTimeSlots=this.selectedTimeslot;
    this.walkinModel.expMin=this.selctedMinExp;
    this.walkinModel.expMax=this.selctedMaxExp;
    this.walkinModel.walkinLocation=data.wlocation;
    this.walkinModel.locality=data.locality;
    this.walkinModel.jobPositions=data.jpostions;
    this.walkinModel.industryId= this.selctedIndustry;
    this.walkinModel.keySkills=data.jobskills;
    this.walkinModel.jobDescription=data.jdescription;
    this.walkinModel.designation=data.Designation;
    this.walkinModel.noticePeriod=this.selctedperiod;
    this.walkinModel.jobTypeId=this.selctedJobtype;
    this.walkinModel.qualification =this.selctedQualification;
    this.walkinModel.minSal=this.selctedMinSal;
    this.walkinModel.maxSal=this.selctedMaxSal;
    this.walkinModel.companyName=data.companyname;
    this.walkinModel.endClient=data.EndClient;
    this.walkinModel.location=data.clocation;
    this.walkinModel.clientLocality=data.clocality;
    this.walkinModel.companyProfile=data.cprofile;
    this.walkinModel.email=data.email;  
    this.walkinModel.contactPerson=data.cperson;
    this.walkinModel.phone=data.cno;
    this.walkinModel.contactNoLandline=data.clno;
    this.walkinModel.rolesResponsibilties=data.roleres;
    this.walkinModel.venueDetails=data.vdetails;
    this.walkinModel.requirePanel=data.check1;
    this.walkinModel.spaceNeeded=data.check2;
    this.walkinModel.resourceNeeded=data.check3;
    this.walkinModel.tpArrangement=data.check4;
    //this.walkinModel.companyLogo=data.file;
    this.walkinModel.facilityId={facilityRegistrationId:1};
    this.walkinModel.locId={locationLatLongId:1};
    this.walkinModel.roleId=this.selectedRole;
    const formData=new FormData();
    formData.append('postWalkinDetails',JSON.stringify(this.walkinModel));
    formData.append('companyLogo',this.selectedCompanyLogo);
    
    this.service.postWalkinDetails(formData).subscribe((res)=>{
     // console.log(res);
    });
  }
  postWalkins(val){
  
  }
  ngOnInit() {
  }

}
