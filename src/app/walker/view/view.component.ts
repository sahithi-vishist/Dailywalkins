import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WalkerAuthService } from '../walker-auth.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
result;
industryType;
role;
noticePeriod;
education;
resume;
  constructor(private http:HttpClient,private service:WalkerAuthService,private sanitizer:DomSanitizer) {
   
    this.service.getWalkerById().subscribe((res)=>{
    this.result=res;
      this.industryType=res['industryId'].industryType;
      this.role=res['roleId'].roleName;
      this.noticePeriod=res['noticePeriod'].noticeText;
      this.education=res['education'].qualification;
      this.resume='data:application/doc;base64'+res['resume'];
      // this.resume=this.sanitizer.bypassSecurityTrustResourceUrl(res['resume'])
      // console.log(this.resume)
     
    },(err)=>{

    }) 
   }

  ngOnInit() {
  }

}
