import { Component, OnInit } from '@angular/core';
import { PanelModel } from './panel.model';
import { PanelService } from './panel.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {
  private objPanel:PanelModel[];
  constructor(private panelservice:PanelService,private _router:Router) { }

  ngOnInit() { 
    this.panelservice.getData().subscribe((res:PanelModel[])=>{
      this.objPanel=res;
    })
  }

 updatePanel(objPanel)
 {
   this.panelservice.setter(objPanel);
   this._router.navigate(['/recruitment/WalkinCentral/editpanel']);
 }

 savePanel(){
   let model=new PanelModel();
   this.panelservice.setter(model);
   this._router.navigate(['/recruitment/WalkinCentral/createpanel']);
 }

 deletePanel(panelId){
  console.log("clicked delete")
  console.log(panelId);
  this.panelservice.deletedata(panelId).subscribe(res=>{console.log(res)});
  this.panelservice.getData().subscribe((res:PanelModel[])=>{
    this.objPanel=res;
  })
}

}
