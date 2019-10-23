import { Component, OnInit } from '@angular/core';
import { HomeModel } from '../homepage/homepage.model';
import { HomepageService } from '../homepage/homepage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  private obj:HomeModel;
  constructor(private service:HomepageService,private router:Router) { }

  ngOnInit() {
    this.obj=this.service.getter();
  }

  update(){
    if(this.obj.coordinatorId==undefined){
      this.service.saveCo(this.obj).subscribe((res)=>{
        console.log(this.obj);
        this.router.navigate(['/recruitment/WalkinCentral/CoOrdinatorsManagement'])
      })
    }
    else{
      this.service.updateCo(this.obj).subscribe((res)=>{
        console.log(this.obj);
        this.router.navigate(['/recruitment/WalkinCentral/CoOrdinatorsManagement'])
      })
    }
  }

}
