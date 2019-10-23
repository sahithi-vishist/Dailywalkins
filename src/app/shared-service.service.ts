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
    return this.http.post(this.url+'/searchByMinExp',{"expMin":toSearchObj.expMin,expMax:toSearchObj.expMax});
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
    return this.http.post(this.url+'/searchByQualification',{"qualification":toSearchObj.qualification.qualification})
  }
  
  getWalkerByIndustry(toSearchObj){
    
    return this.http.post(this.url+'/searchWalkerByIndustry',{"industryId":toSearchObj})
  }
  getWalkerByRole(toSearchObj){
    return this.http.post(this.url+'/searchWalkerRole',{"roleId":toSearchObj})
  }
  getWalkerByNoticePeriod(toSearchObj){
    return this.http.post(this.url+'/searchWalkerNoticePeriod',{"noticePeriod":toSearchObj})
  }
  getWalkerByQualification(toSearchObj){
    return this.http.post(this.url+'/searchByWalkerQualification',{"education":toSearchObj})
  }
  getwalkerByExperience(minExp,maxExp){
    return this.http.get(this.url+'/getbyexperience?minExp='+minExp+'&'+'maxExp='+maxExp);
  }
  getwalkerByLocation(toSearchObj){
    return this.http.post(this.url+'/searchWalkerByLocation',{"location":toSearchObj})
  }
 getwalkerByAll(toSearchObj){
  return this.http.post(this.url+'/searchByAll',toSearchObj);
 }
}
