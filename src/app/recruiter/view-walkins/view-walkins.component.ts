import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';

@Component({
  selector: 'app-view-walkins',
  templateUrl: './view-walkins.component.html',
  styleUrls: ['./view-walkins.component.css']
})
export class ViewWalkinsComponent implements OnInit {
jobId;
jobDetails;
  constructor(private route:ActivatedRoute,
    private service:RecruiterauthserviceService,
    private router:Router) { 
      this.jobId=this.route.snapshot.params.jobId;
      this.service.getJobById(this.jobId).subscribe((res)=>{
this.jobDetails=res;
this.jobDetails.companyLogo=res['companyLogo'];
      });
    }

  ngOnInit() {
  }

}
