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

  getWalkersByLocation(toSearchObj){
    return this.http.post(this.url+'/getJobsBylocation',{"location":toSearchObj.location})
      }
      getWalkersByIndustry(toSearchObj){
        
        return this.http.post(this.url+'/getJobsByindustryId',{"industryId":toSearchObj.industryId})
      }
      getWalkersByminExp(toSearchObj){
        return this.http.post(this.url+'/getJobsByexperience',{"expMin":toSearchObj.expMin});
      }
      getWalkersBymaxExp(toSearchObj){
        return this.http.post(this.url+'/getJobsByexperience',{"expMax":toSearchObj.expMax});
      }
      getWalkersByRole(toSearchObj){
        return this.http.post(this.url+'/getJobsByrole',{"roleId":toSearchObj.roleId})
      }
      getWalkersByJobType(toSearchObj){
        return this.http.post(this.url+'/getJobsByjobType',{"jobTypeId":toSearchObj.jobTypeId})
      }
      getWalkersByQualification(toSearchObj){
        return this.http.post(this.url+'/getJobsByeducation',{"qualification":toSearchObj.education})
      }
      getWalkersBySkills(toSearchObj){
        return this.http.post(this.url+'/getWalkersBySkills',{"skills":toSearchObj.keySkills})
      }
}
