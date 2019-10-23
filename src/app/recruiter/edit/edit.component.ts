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
  imgURL;
  myDate = new Date();
  logoString;
  industries:any[];
  selectedCompanyLogo:File;
  logo;
  constructor(private http: HttpClient, private date: DatePipe,
    private alert: AlertService, private router: Router,private service:RecruiterauthserviceService) {
   
this.service.getIndustries().subscribe((res:any)=>{
  this.industries=res;
});
    var regDate = this.date.transform(this.myDate, 'yyyy-MM-dd');
    var updateDate = this.date.transform(this.myDate, 'yyyy-MM-dd');
    var lastLogin = this.date.transform(this.myDate, 'yyyy-MM-dd');
    var lastActive = this.date.transform(this.myDate, 'yyyy-MM-dd');

    var status = "Active";
    this.id = localStorage.getItem('recruiterId');
    this.service.getRecruiterById(this.id).subscribe((res) => {
this.logo=res['companyLogo'];
//console.log(res);
      this.edit = {
        recruiterId: '', firstName: '',
        lastName: '', email: '', contactNo: '', contactnoLandline: '', industry:res['industry'],
        "password": res['password'], "confirmPassword": res['confirmPassword'],
        "companyName": res['companyName'], "standardCurrentCompany": res['standardCurrentCompany'],
        "companyURL": res['companyURL'], "address": res['address'], "companyProfile": res['companyProfile'],
        "activation": true, "regDate": regDate, "emailVerified": true, "isOnline": true,
        "designation": res['designation'], "visibility": true, "updateDate": updateDate,
        "isMobileOnline": true, "lastLogin": lastLogin,
        "lastActive": lastActive, "status": status
      };
      this.edit.recruiterId = this.id;
      this.edit.firstName = res['firstName'];
      this.edit.lastName = res['lastName'];
      this.edit.location = res['location'];
      this.edit.email = res['email'];
      this.edit.contactNo = res['contactNo'];
      this.edit.contactnoLandline = res['contactnoLandline'];

 //    this.edit.industry = res['industry'];
      

      console.log("++++++++++++++++" + this.edit.industry);
     
    }, (err) => {
      console.log("error");
    });
  }
  selectCompanyLogo(event){
    this.selectedCompanyLogo=event.target.files[0];
   // console.log(this.selectedCompanyLogo);
   var reader = new FileReader();
   reader.readAsDataURL(event.target.files[0]); 
   reader.onload = (_event) => { 
     this.imgURL = reader.result; 
   }
    }
  selectIndustry(event){
    this.edit.industry=this.industries.find(ind=>ind['industryId']==event.industryId);
    //console.log("--------------" + this.edit.industry);
    
   
  }

  updateReg(val) {
    const formData=new FormData();
    formData.append('recDetails',JSON.stringify(this.edit));
    formData.append('companyLogo',this.selectedCompanyLogo);
    console.log(formData.get('companyLogo'));
    this.http.put('http://localhost:62222/updateRecruiterRegistration',formData).subscribe((res) => {
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
