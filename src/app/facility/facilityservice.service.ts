import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FacilityRegistrationModel } from './fregistration/fregistration.model';
import { UpdatefacilityModel } from './updatefacility/updatefacility.model';
import { FacilityModule } from './facility.module';
import { BookFacilityModel } from './book-facility/bookfacility.model';

@Injectable({
    providedIn: 'root'
  })
  export class FacilityService {

    fLoginObj;
   obj=new UpdatefacilityModel();
    constructor(private http:HttpClient)
  {

  }
      
    save(facRegDetails:UpdatefacilityModel){
     
      return this.http.post('http://localhost:62222/postFacility',facRegDetails)
    }
   
    postfac(loginDetails:UpdatefacilityModel){
      return this.http.post('http://localhost:62222/loginFacilityCheck',loginDetails)
    }
    getFacilityById(id){
return this.http.get('http://localhost:62222/getfacilitybyid?Id='+id);
    }
   
    getFacilityByDate(date){
      return this.http.get('http://localhost:62222/getFacilitiesByDate?date='+date);
    }
    setFLogin(fLoginObj){
      this.fLoginObj=fLoginObj
    }
getFLogin(){
  return this.fLoginObj;
}
   getfac(){
     return this.http.get('http://localhost:62222/getallfacilties')
   }

   facilityAdd(facRegDetails:UpdatefacilityModel)
   {

    return this.http.post('http://localhost:62222/postfaciltyregistration',facRegDetails)
   }

   updatefac(addDetails){
     return this.http.put('http://localhost:62222/updatefaciltyregistration',addDetails)
   }
   setter(obj:UpdatefacilityModel){
     this.obj=obj;
   }
   getter(){
     return this.obj;
   }
   


   
    }