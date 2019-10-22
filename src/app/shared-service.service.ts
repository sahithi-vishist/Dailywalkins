import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
object;
jobTitle;
fName:String;
url="http://localhost:62222"
  constructor(private http:HttpClient) { }
  setFirstName(firstName){
this.fName=firstName;

  }
  getfName(){
    
    return this.fName;
  }
  setJSON(searchObj){
this.object=searchObj;
  }
  getJSON(){
    return this.object;
  }
  setEmailAndJobTitle(jobTitle,email){
this.jobTitle={'jobTitle':jobTitle,
                'email':email}

  }
  getEmailAndJobTitle(){
return this.jobTitle;
  }
  getWalkinsByLocation(toSearchObj){
return this.http.post(this.url+'/searchByLocation',{"location":toSearchObj.location})
  }
  getWalkinsByIndustry(toSearchObj){
    
    return this.http.post(this.url+'/searchByIndustry',{"industryId":toSearchObj.industryId})
  }
  getWalkinsByminExp(toSearchObj){
    return this.http.post(this.url+'/searchByMinExp',{"expMin":toSearchObj.expMin});
  }
  getWalkinsBymaxExp(toSearchObj){
    return this.http.post(this.url+'/searchByMaxExp',{"expMax":toSearchObj.expMax});
  }
  getWalkinsByRole(toSearchObj){
    return this.http.post(this.url+'/searchByRole',{"roleId":toSearchObj.roleId})
  }
  getWalkinsByJobType(toSearchObj){
    return this.http.post(this.url+'/searchByJobType',{"jobTypeId":toSearchObj.jobTypeId})
  }
  getWalkinsByQualification(toSearchObj){
    return this.http.post(this.url+'/searchByQualification',{"qualification":toSearchObj.education})
  }
}
