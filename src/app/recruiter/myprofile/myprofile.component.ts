import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  result;
  fName;
lName;
companyName;
email;
contactNo;
updatedOn;
location;
postedJobs;walkinDate;
  constructor(private service:RecruiterauthserviceService,
    private http:HttpClient,private route:ActivatedRoute,
    private router:Router,private date:DatePipe) {
  
    var id=localStorage.getItem('recruiterId');
    this.http.get("http://localhost:62222/getRecruiterById?recruiterId="+id).subscribe((res)=>{
      this.fName=res['firstName'];
    this.lName=res['lastName'];
    this.companyName=res['companyName'];
    this.email=res['email'];
    this.contactNo=res['contactNo'];
    this.location=res['location'];
    this.updatedOn=res['updatedOn'];
    this.result=res;
     this.service.getPostWalkins(this.email).subscribe((res)=>{
      this.postedJobs=res;
      this.postedJobs.walkinDate=res['walkinDate'];
     })
    },(err)=>{
      console.log("error");
    });
   }
  viewProfile(){
    
    this.router.navigate(['/recruitment/view']);
  }
  ngOnInit() {
  }

}
