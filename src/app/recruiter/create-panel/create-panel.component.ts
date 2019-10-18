import { Component, OnInit } from '@angular/core';
import { PanelModel } from '../panel/panel.model';
import { PanelService } from '../panel/panel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-panel',
  templateUrl: './create-panel.component.html',
  styleUrls: ['./create-panel.component.css']
})
export class CreatePanelComponent implements OnInit {
  private obj:PanelModel;
  constructor(private panelservice:PanelService,private router:Router) { }

  ngOnInit() {
    this.obj=this.panelservice.getter();
  }
  processForm(){
    if(this.obj.panelId==undefined){
      this.panelservice.saveData(this.obj).subscribe((res)=>{
        console.log(this.obj);
        this.router.navigate(['/recruitment/WalkinCentral/panel'])
      })
    }
    else{
      this.panelservice.putData(this.obj).subscribe((res)=>{
        console.log(this.obj);
        this.router.navigate(['/panel'])
      })
    }
  }

}
