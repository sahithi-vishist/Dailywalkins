import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BookFacilityModel } from './book-facility/bookfacility.model';

@Injectable({
  providedIn: 'root'
})
export class BookfacilityService {
  private obj= new BookFacilityModel
 
  constructor(private http:HttpClient){}
  
  savefac(obj:BookFacilityModel){
    
      return this.http.post('http://localhost:62222/postbookedfacility',obj);
  }
  
  
  
}
