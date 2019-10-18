import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { WalkerAuthService } from '../walker-auth.service';


@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
fName;
lName;
resumeHeadLine;
keySkills;
experience;
email;
contactNo;
updatedOn;
location;
result;
recommendedJob;
totalRecommendedJobs=0;;
  constructor(private router:Router,private http:HttpClient,private service:WalkerAuthService) {
   
     this.service.getId().subscribe((id)=>{
       localStorage.setItem("walkerId",id.toString());
       this.service.getWalker(id).subscribe((res)=>{ 
        this.fName=res['firstName'];
        this.lName=res['lastName'];
        this.resumeHeadLine=res['resumeHeadLine'];
        this.keySkills=res['keySkills'];
        this.experience=res['experience'];
        this.email=res['email'];
        this.contactNo=res['contactNo'];
        this.updatedOn=res['updatedOn'];
        this.location=res['location'].location;
        this.result=res;
        this.service.getWalkinsBySkills(this.keySkills).subscribe((res)=>{
          this.recommendedJob=res;
          this.totalRecommendedJobs=this.recommendedJob.length;

        })
        
        },(err)=>{
    
        })
  
    
   
      })
   
    }
  
  ngOnInit() {
  }
  View(){
this.router.navigate(['/walker/view']);
  }

}
