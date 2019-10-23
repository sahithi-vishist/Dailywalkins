import { Component, OnInit } from '@angular/core';
import { HomeModel } from '../homepage/homepage.model';
import { HomepageService } from '../homepage/homepage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  obj=new HomeModel();
  constructor(private  service:HomepageService,private router:Router) { }
 

  ngOnInit() {
   // this.obj=this.service.getter();
  }
  create()
  {  
      this.service.saveCo(this.obj).subscribe((res)=>{
        console.log(this.obj);
        this.router.navigate(['/recruitment/WalkinCentral/CoOrdinatorsManagement'])
      })
  }

}
