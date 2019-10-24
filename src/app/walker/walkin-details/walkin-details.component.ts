import { Component, OnInit } from '@angular/core';
import { WalkerAuthService } from '../walker-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';
import { NotificationService } from 'src/app/notification.service';
import { SharedServiceService } from 'src/app/shared-service.service';


@Component({
  selector: 'app-walkin-details',
  templateUrl: './walkin-details.component.html',
  styleUrls: ['./walkin-details.component.css']
})
export class WalkinDetailsComponent implements OnInit {
jobNo;
jobDetails;
selectedTimings;
timings;
timeSlots=[];
jsAppliedJob;
todaysDate=new Date();
hidden=true;

  constructor(private service:WalkerAuthService,private notification:NotificationService,
    private router:Router,private route:ActivatedRoute,private date:DatePipe,private sharedService:SharedServiceService) {
    this.jobNo=this.route.snapshot.params.jobId;
 
    this.service.getJobById(this.jobNo).subscribe((res)=>{
      this.jobDetails={
        jobTitle:res['jobTitle'],
        standardCurrentCompany:res['standardCurrentCompany'],
        companyName:res['companyName'],
        experience:res['expMin'].expValue+"-"+res['expMax'].expValue,
        minSal:res['minSal'].salValue,
        maxSal:res['maxSal'].salValue,
        noticePeriod:res['noticePeriod'].noticeText,
        location:res['locId'].location,
        endClient:res['endClient'],
        role:res['roleId'].roleName,
        walkinDate:res['walkinDate'],
        walkinTimeSlots:res['walkinTimeSlots'].hoursText,
        walkinLocation:res['walkinLocation'],
        walkinLocality:res['locality'],
        keySkills:res['keySkills'],
        jobDescription:res['jobDescription'],
        qualification:res['qualification'].qualification,
        jobPositions:res['jobPositions'],
        jobType:res['jobTypeId'].jobType,
        contactPerson:res['contactPerson'],
        phone:res['phone'],
        email:res['email'],
        companyAddress:res['address'],
        clientLocation:res['walkinLocation'],
        clientLocality:res['clientLocality'],
        venueDetails:res['venueDetails'],
        recruiterCompanyName:res['recruiterCompanyname'],
        companyLogo:res['companyLogo']
      }
      this.sharedService.setEmailAndJobTitle(this.jobDetails['jobTitle'],this.jobDetails.email);
    })
  
    this.service.getTimeSlots().subscribe((res)=>{
      this.timings=res;
    this.selectedTimings={hoursText:''};
     
      this.timings.forEach(element => {
        this.timeSlots=this.timeSlots.concat([
        {value:element.timeSlotsId,text:element.hoursText}
        
      ]);
      
        });
    
    })

    this.service.checkAppliedStatus({"jobNo":this.jobNo},localStorage.getItem('email')).subscribe((res)=>{
      if(!res){
     
      }else{
     
       document.getElementById('apply').style.display="none";
      
      }
    });
   }
applyJob(job){
 
    this.jsAppliedJob={
      jobNo:{"jobNo":this.jobNo},
      jobSeekerEmailId:localStorage.getItem('email'),
      appliedOn:this.date.transform(this.todaysDate,'yyyy-MM-dd'),
      emailedTo:this.jobDetails.email,
      recruiterCompanyName:this.jobDetails.recruiterCompanyName,
      walkinTimeSlots:this.jobDetails.walkinTimeSlots,
      candidateAvailableTimeSlots:job.hoursText[0],
      approvedTimeSlots:'',
      walkinDate:this.date.transform(this.jobDetails.walkinDate,'yyyy-MM-dd')
    
    }
 this.service.checkAppliedStatus(this.jsAppliedJob.jobNo,this.jsAppliedJob.jobSeekerEmailId).subscribe((res)=>{
   if(!res){
    this.service.appliedJob(this.jsAppliedJob).subscribe((res)=>{
      this.notification.showNotification('success',"Successfully applied for this job");
    },(err)=>{
    
    })
   }else{
    document.getElementById('myModal').style.display="none";
     this.notification.showNotification('error', "Already you have Applied for this job!")
   }
 })


  
}
  ngOnInit() {
  }
  closeDialog(){
    document.getElementById('myModal').style.display="none";
  }
  loadApplyDetails(){
    document.getElementById('myModal').style.display="block";
  }
  
}
