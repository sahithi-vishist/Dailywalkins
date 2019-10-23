import { Component, OnInit } from '@angular/core';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {
  walkersId;
  wDetails;
  constructor(private service:RecruiterauthserviceService,
    private route:ActivatedRoute) { 
  
    this.walkersId=this.route.snapshot.params.walkerId;
      this.service.getWalkerById(this.walkersId).subscribe((res)=>{
this.wDetails=res;
console.log(this.wDetails);
  });
}

  ngOnInit() {
  }

}
