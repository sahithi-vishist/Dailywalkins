import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookFacilityModel } from './bookfacility.model';
import { BookfacilityService } from '../bookfacility.service';

@Component({
  selector: 'app-book-facility',
  templateUrl: './book-facility.component.html',
  styleUrls: ['./book-facility.component.css']
})
export class BookFacilityComponent implements OnInit {
  obj=new BookFacilityModel();

  constructor(private router:Router,private service:BookfacilityService) { }



  ngOnInit() {
   
  }

  bookfac(obj)
  { 
    
    
         
      this.service.savefac(obj).subscribe((res:BookFacilityModel)=>{
        this.obj=res;
        console.log("called my object"+this.obj);
        
      //  this.router.navigate(['/'])
      })
  }


}
