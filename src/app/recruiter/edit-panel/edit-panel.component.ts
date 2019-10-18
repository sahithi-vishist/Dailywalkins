import { Component, OnInit } from '@angular/core';
import { PanelModel } from '../panel/panel.model';
import { PanelService } from '../panel/panel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-panel',
  templateUrl: './edit-panel.component.html',
  styleUrls: ['./edit-panel.component.css']
})
export class EditPanelComponent implements OnInit {
  private obj:PanelModel;
  constructor(private panelservice:PanelService,private router:Router) { }

  ngOnInit() {
    this.obj=this.panelservice.getter();
  }
  processForm(){
    console.log("update panle called");
    if(this.obj.panelId==undefined){
      this.panelservice.saveData(this.obj).subscribe((res)=>{
        console.log(this.obj);
        this.router.navigate(['/recruitment/WalkinCentral/panel'])
      })
    }
    else{
      this.panelservice.putData(this.obj).subscribe((res)=>{
        console.log(this.obj);
        this.router.navigate(['/recruitment/WalkinCentral/panel'])
      })
    }
  }

}
