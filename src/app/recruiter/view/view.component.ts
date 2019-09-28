import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
result;
fName;
lName;
companyName;
email;
contactNo;
updatedOn;
location;
address;
contactnoLandline;
industry;
companyProfile;
  constructor(private http:HttpClient) { 
    var id=localStorage.getItem('recruiterId');
    this.http.get("http://localhost:62222/getRecruiterById?recruiterId="+id).subscribe((res)=>{
     //console.log(res);
      this.fName=res['firstName'];
      this.lName=res['lastName'];
      this.companyName=res['companyName'];
      this.email=res['email'];
      this.contactNo=res['contactNo'];
      this.location=res['location'];
      this.contactnoLandline=res['contactnoLandline'];
      this.address=res['address'];
      this.companyProfile=res['companyProfile'];
      this.industry=res['industry'].industryType;
      console.log(this.industry);
      this.result=res;
    },(err)=>{
      console.log("error");
    });
  }

  ngOnInit() {
  }

}
