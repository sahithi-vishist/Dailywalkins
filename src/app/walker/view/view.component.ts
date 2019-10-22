import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WalkerAuthService } from '../walker-auth.service';

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
url;
  constructor(private http:HttpClient,private service:WalkerAuthService) {
   
    this.service.getWalkerById().subscribe((res)=>{
    this.result=res;
      this.industryType=res['industryId'].industryType;
      this.role=res['roleId'].roleName;
      this.noticePeriod=res['noticePeriod'].noticeText;
      this.education=res['education'].qualification;
     
    },(err)=>{

    }) 
   }

  ngOnInit() {
  }

}
