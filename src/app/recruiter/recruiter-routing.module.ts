import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginRComponent } from './login-r/login-r.component';
import { RegistrationRComponent } from './registration-r/registration-r.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { AdvancesearchComponent } from './advancesearch/advancesearch.component';
import { PostwalkinComponent } from './postwalkin/postwalkin.component';
import { WalkincentralComponent } from './walkincentral/walkincentral.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { LogoutComponent } from '../recruiter/logout/logout.component';
import { CreateDriveComponent } from './create-drive/create-drive.component';
import { EditdriveComponent } from './editdrive/editdrive.component';
import { ViewWalkinsComponent } from './view-walkins/view-walkins.component';
import { EditWalkinComponent } from './edit-walkin/edit-walkin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateComponent } from './create/create.component';
import { PanelComponent } from './panel/panel.component';
import { CreatePanelComponent } from './create-panel/create-panel.component';
import { EditPanelComponent } from './edit-panel/edit-panel.component';
import { UpdateComponent } from './update/update.component';
import { DrivedetailsComponent } from './drivedetails/drivedetails.component';
import { WalkinDetailsRComponent } from './walkin-details-r/walkin-details-r.component';
import { RecruiterguardGuard } from '../recruiterguard.guard';
import { UploadProfilesComponent } from './upload-profiles/upload-profiles.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { ShortlistedCandidatesComponent } from './shortlisted-candidates/shortlisted-candidates.component';
import { EvaluationFormsComponent } from './evaluation-forms/evaluation-forms.component';


const routes: Routes = [
  {path:"login",component:LoginRComponent},
  {path:"logout",component:LogoutComponent},
  {path:"forgotpassword",component:ForgetpwdComponent},
  {path:"searchprofiles",component:AdvancesearchComponent,canActivate: [RecruiterguardGuard]},
  {path:"postwalkins",component:PostwalkinComponent,canActivate: [RecruiterguardGuard]},
  {path:"walkincentral",component:WalkincentralComponent,canActivate:[RecruiterguardGuard]},
  {path:"myprofile",component:MyprofileComponent,canActivate: [RecruiterguardGuard]},
  {path:"view",component:ViewComponent},
  {path:"edit",component:EditComponent},
  {path:"WalkinCentral/CreateDrive",component:CreateDriveComponent},
  {path:"registration",component:RegistrationRComponent},
  {path:"editdrive/:id",component:EditdriveComponent},
  {path:"selectedjob/:jobId",component:ViewWalkinsComponent},
  {path:'editWalkin/:id',component:EditWalkinComponent},
  {path:'WalkinCentral/Drivedetails',component:DrivedetailsComponent},
  {path:'WalkinCentral/CoOrdinatorsManagement',component:HomepageComponent},
{path:'WalkinCentral/createCoordinator',component:CreateComponent}, 
{path:'WalkinCentral/update',component:UpdateComponent},
{path:'WalkinCentral/panel',component:PanelComponent},
{path:'WalkinCentral/createpanel',component:CreatePanelComponent},
{path:'WalkinCentral/editpanel',component:EditPanelComponent},
{path:'WalkinCentral/WalkinDetails/:id',component:WalkinDetailsRComponent},
{path:'WalkinCentral/UploadProfiles',component:UploadProfilesComponent},
{path:'WalkinCentral/CandidateDetails',component:CandidateDetailsComponent},
{path:'WalkinCentral/ShortlistedCandidates',component:ShortlistedCandidatesComponent},
{path:'WalkinCentral/EvaluationForms',component:EvaluationFormsComponent},
{path:'WalkinCentral/EditDrive/:id',component:EditdriveComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RecruiterRoutingModule { }
