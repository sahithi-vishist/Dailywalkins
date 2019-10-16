import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class SharedServiceService {
object;
url="http://localhost:62222"
  constructor(private http:HttpClient) { }
  setJSON(searchObj){
this.object=searchObj;
  }
  getJSON(){
    return this.object;
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
  getWalkerByIndustry(toSearchObj){
    
    return this.http.post(this.url+'/searchWalkerByIndustry',{"industryId":toSearchObj.industryId})
  }
  getWalkerByRole(toSearchObj){
    return this.http.post(this.url+'/searchWalkerRole',{"roleId":toSearchObj.roleId})
  }
  getWalkerByNoticePeriod(toSearchObj){
    return this.http.post(this.url+'/searchWalkerNoticePeriod',{"noticePeriodId":toSearchObj.noticePeriod})
  }
  getWalkerByQualification(toSearchObj){
    return this.http.post(this.url+'/searchByWalkerQualification',{"qualification":toSearchObj.education})
  }
}
