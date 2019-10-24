import { Component, OnInit } from '@angular/core';
import { HomeModel } from './homepage.model';
import { HomepageService } from './homepage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
private objCo:HomeModel[];

  constructor(private service:HomepageService,private router:Router) { }

  ngOnInit()
   {
    this.service.getCo().subscribe((res:HomeModel[])=>{this.objCo=res})
   }

  saveCo(){
    let model = new HomeModel();
    this.service.setter(model);
    this.router.navigate(['/recruitment/WalkinCentral/']);
  }

updateCo(objCo){
  console.log("update called");
  this.service.setter(objCo);
  this.router.navigate(['/recruitment/WalkinCentral/update'])
}

deleteCo(coordinatorId){
  console.log("clicked delete")
  console.log(coordinatorId);
this.service.deleteCo(coordinatorId).subscribe(res=>{console.log(res)});
 this.service.getCo().subscribe((res:HomeModel[])=>
  {
    this.objCo=res;
  });
}
}
