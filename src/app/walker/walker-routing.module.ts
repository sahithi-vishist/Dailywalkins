import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { AppliedWalkinComponent } from './applied-walkin/applied-walkin.component';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { JobtypeComponent } from './jobtype/jobtype.component';
import { AuthGuardService } from '../guard/auth-guard.service';
import { LogoutComponent } from './logout/logout.component';
import { HomeComponent } from '../home/home.component';
import { WalkinDetailsComponent } from './walkin-details/walkin-details.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplaywalkinsBysearchComponent } from './displaywalkins-bysearch/displaywalkins-bysearch.component';
import { FileuploadComponent } from './fileupload/fileupload.component';
import { DisplayWalkinsComponent } from './display-walkins/display-walkins.component';
import { DisplayWalkersComponent } from './display-walkers/display-walkers.component';

const routes: Routes = [{path:'',component:LoginComponent},
  {path:"login",component:LoginComponent},
  {path:"home",component:HomeComponent},
{path:"forgot-password",component:ForgotPasswordComponent},
{path:"register",component:RegisterComponent},
{path:"applied-walkin",component:AppliedWalkinComponent,canActivate:[AuthGuardService]},
{path:'advance-search',component:AdvanceSearchComponent},
{path:'myprofile',component:MyprofileComponent,canActivate:[AuthGuardService]},
{path:'displayjobsbysearch',component:DisplaywalkinsBysearchComponent},
{path:'view',component:ViewComponent},
{path:'edit',component:EditComponent},
{path:'jobtype/:id',component:JobtypeComponent},
{path:'logout',component:LogoutComponent},
{path:'selected-job/:jobId',component:WalkinDetailsComponent},
{path:'uploadprofile',component:FileuploadComponent},
{path:'displaywalkins',component:DisplayWalkinsComponent},
{path:'displaywalkers',component:DisplayWalkersComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WalkerRoutingModule { }
