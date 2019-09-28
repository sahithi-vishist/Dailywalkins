import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FregistrationComponent } from './fregistration/fregistration.component';
import { FloginComponent } from './flogin/flogin.component';
import { AddfacilityComponent } from './addfacility/addfacility.component';
import { MyfacilityComponent } from './myfacility/myfacility.component';
import { UpdatefacilityComponent } from './updatefacility/updatefacility.component';

const routes: Routes = [
  {path:"fregistration",component:FregistrationComponent},
  {path:"flogin",component:FloginComponent},
  {path:"AddFacility",component:AddfacilityComponent},
  {path:"MyFacilities",component:MyfacilityComponent},
  {path:"up",component:UpdatefacilityComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacilityRoutingModule { }
