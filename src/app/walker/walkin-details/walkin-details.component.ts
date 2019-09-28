import { Component, OnInit } from '@angular/core';
import { WalkerAuthService } from '../walker-auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { DatePipe } from '@angular/common';


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
  constructor(private service:WalkerAuthService,
    private router:Router,private route:ActivatedRoute,private date:DatePipe) {
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
        walkinTimeSlots:res['walkinTimeSlots'],
        walkinLocation:res['walkinLocation'],
        walkinLocality:res['walkinLocality'],
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
        clientLocality:res['walkinLocality'],
        venueDetails:res['address'],
        recruiterCompanyName:res['recruiterCompanyname']
      }
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
 
this.service.appliedJob(this.jsAppliedJob).subscribe((res)=>{

},(err)=>{

})

  console.log(this.jsAppliedJob);
}
  ngOnInit() {
  }
  
 
  loadApplyDetails(){
    if(localStorage.getItem('walkerId')!=null){
      Swal.fire({
        position:'top',
       
        text:'',
        html:`<div class="modal-dialog">
        <div class="modal-content">
            <div id="myModalContent" class="modal-body">
                <div class="form-horizontal">
                    <div class="form-group from-model">
                        <label class="col-sm-5" style="white-space:nowrap">Recruiter Recommended Time slots <span
                                style="color:red;">*</span></label>
                        <label class="col-sm-1">:</label>
                        <div class="col-sm-6">
                            <span class="multiselect-native-select"><select
                                    class="listbox form-control form-control-width-1 input-width" disabled=""
                                    id="WalkinTimeSlots" multiple="True" name="WalkinTimeSlots">
                                    <option value="">{{jobDetails.walkinTimeSlots}}</option>
                                    
                                </select>
                               
                            </span>
                        </div>
                    </div>
                    <div class="form-group from-model">
                        <label class="col-sm-5" style="white-space:nowrap">My available Time Slots <span
                                style="color:red;">*</span></label>
                        <label class="col-sm-1">:</label>
                        <div class="col-sm-8">
                            <ejs-multiselect id='timeslots' name="name" #timeslots="ngModel"
                            [(ngModel)]="selectedTimings.hoursText"
                            [dataSource]='timeSlots'
                            placeholder='--select timings--'>
                        </ejs-multiselect>
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="col-sm-3" style="white-space:nowrap"> </label>
                        <label class="col-sm-1"></label>
                        <div class="col-sm-8">
                            <button class="btn btn-primary btn-sm" name="Submit" value="Submit" imagealign="AbsMiddle"
                                (click)="applyJob(selectedTimings)">Submit</button>
                            <button class="btn btn-primary btn-sm" name="Submit" value="cancel" imagealign="AbsMiddle"
                                >Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
      
        </div>
      </div>`
      })
    }else{
      this.router.navigate(['/walker/login'])
    }

  }

}
