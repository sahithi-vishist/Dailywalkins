import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/alert.service';
import { RecruiterauthserviceService } from 'src/app/recruiterauthservice.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  result;
  id;
  message;
  edit;
  myDate = new Date();
  logoString;
  industries;
  constructor(private http: HttpClient, private date: DatePipe,
    private alert: AlertService, private router: Router,private service:RecruiterauthserviceService) {
    //var id=localStorage.getItem('recruiterId');
this.service.getIndustries().subscribe((res)=>{
  this.industries=res;
});
    var regDate = this.date.transform(this.myDate, 'yyyy-MM-dd');
    var updateDate = this.date.transform(this.myDate, 'yyyy-MM-dd');
    var lastLogin = this.date.transform(this.myDate, 'yyyy-MM-dd');
    var lastActive = this.date.transform(this.myDate, 'yyyy-MM-dd');

    var status = "Active";
    this.id = localStorage.getItem('recruiterId');
    this.http.get("http://localhost:62222/getRecruiterById?recruiterId=" + this.id).subscribe((res) => {

console.log(res);
      this.edit = {
        recruiterId: '', firstName: '',
        lastName: '', email: '', contactNo: '', contactnoLandline: '', industry: '',
        "password": res['password'], "confirmPassword": res['confirmPassword'],
        "companyName": res['companyName'], "standardCurrentCompany": res['standardCurrentCompany'],
        "companyURL": res['companyURL'], "address": res['address'], "companyProfile": res['companyProfile'],
        "activation": true, "regDate": regDate, "emailVerified": true, "isOnline": true,
        "designation": res['designation'], "visibility": true, "updateDate": updateDate,
        "logoString": res['companyLogo'], "isMobileOnline": true, "lastLogin": lastLogin,
        "lastActive": lastActive, "status": status
      };
      this.edit.recruiterId = this.id;
      this.edit.firstName = res['firstName'];
      this.edit.lastName = res['lastName'];
      this.edit.location = res['location'];
      this.edit.email = res['email'];
      this.edit.contactNo = res['contactNo'];
      this.edit.contactnoLandline = res['contactnoLandline'];
      this.edit.companyLogo = res['companyLogo'];
      this.edit.industry = res['industry'].industryType;

      
      //this.result=res;
    }, (err) => {
      console.log("error");
    });
  }
  selectIndustry(event){
    this.edit.industry=this.industries.find(industry=>industry['industryId']==event.target['value']);
    console.log(this.edit.industry);
  }
  updateReg(val) {

    this.http.put('http://localhost:62222/updateRecruiterRegistration', this.edit).subscribe((res) => {
      if (res != null) {
        this.alert.showAlert('success', "Updated Successfully");
        this.router.navigate(['/recruitment/view']);
      }
      else {
        this.alert.showAlert('Error', "Update unsuccessful");
      }
    },
      (err) => {
        console.log(err);
      })
  }
  ngOnInit() {

  }

}
