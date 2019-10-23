import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecruiterRoutingModule } from './recruiter-routing.module';
import { LoginRComponent } from './login-r/login-r.component';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatOptionModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationRComponent } from './registration-r/registration-r.component';
import { ForgetpwdComponent } from './forgetpwd/forgetpwd.component';
import { AdvancesearchComponent } from './advancesearch/advancesearch.component';
import { PostwalkinComponent } from './postwalkin/postwalkin.component';
import { WalkincentralComponent } from './walkincentral/walkincentral.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';

import { LogoutComponent } from './logout/logout.component';
import { SharedModule } from '../shared/shared.module';
import { NavbarRComponent } from './navbar-r/navbar-r.component';
import { CreateDriveComponent } from './create-drive/create-drive.component';
import { EditdriveComponent } from './editdrive/editdrive.component';
import { ViewWalkinsComponent } from './view-walkins/view-walkins.component';
import { EditWalkinComponent } from './edit-walkin/edit-walkin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { PanelComponent } from './panel/panel.component';
import { CreatePanelComponent } from './create-panel/create-panel.component';
import { EditPanelComponent } from './edit-panel/edit-panel.component';
import { DrivedetailsComponent } from './drivedetails/drivedetails.component';
import { WalkinDetailsRComponent } from './walkin-details-r/walkin-details-r.component';
import { UploadProfilesComponent } from './upload-profiles/upload-profiles.component';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { ShortlistedCandidatesComponent } from './shortlisted-candidates/shortlisted-candidates.component';
import { EvaluationFormsComponent } from './evaluation-forms/evaluation-forms.component';
import { NavbarWComponent } from './navbar-w/navbar-w.component';
import { SearchwalkersComponent } from './searchwalkers/searchwalkers.component';
import { EmailComponent } from './email/email.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SmsComponent } from './sms/sms.component';
import { ModifySearchComponent } from './modify-search/modify-search.component';
import { NgSelectModule } from '@ng-select/ng-select';


@NgModule({
  declarations: [LoginRComponent,
   PostwalkinComponent,EditdriveComponent,
   ViewWalkinsComponent, RegistrationRComponent, 
   ForgetpwdComponent, AdvancesearchComponent,
   ViewComponent, DrivedetailsComponent,
   WalkincentralComponent,MyprofileComponent, 
   EditWalkinComponent,ViewComponent, EditComponent,LogoutComponent ,
   CreateDriveComponent, LogoutComponent, NavbarRComponent, 
   EditdriveComponent, ViewWalkinsComponent,WalkinDetailsRComponent,

   HomepageComponent,
   EditWalkinComponent,
   CreateComponent,
   UpdateComponent,
   PanelComponent,
   CreatePanelComponent,
   EditPanelComponent,
   DrivedetailsComponent,
   UploadProfilesComponent,
   CandidateDetailsComponent,
   ShortlistedCandidatesComponent,
   EvaluationFormsComponent,
   NavbarWComponent,
   SearchwalkersComponent,
   EmailComponent,
   ViewProfileComponent,
   SmsComponent,
   ModifySearchComponent
],
  imports: [
    SharedModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RecruiterRoutingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatOptionModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    NgSelectModule
  ],
  exports:[LoginRComponent,
    SharedModule,
    RegistrationRComponent,
    ForgetpwdComponent,PostwalkinComponent,
    MyprofileComponent,EditComponent,AdvancesearchComponent,
    WalkincentralComponent,ViewComponent,
  CreateDriveComponent,EditWalkinComponent,
  NavbarRComponent,EditdriveComponent,DrivedetailsComponent,
 WalkinDetailsRComponent,UploadProfilesComponent,NavbarWComponent,
 CandidateDetailsComponent,ShortlistedCandidatesComponent,
 EvaluationFormsComponent,ViewWalkinsComponent,HomepageComponent,
  SearchwalkersComponent,EmailComponent,ViewProfileComponent,
SmsComponent,ModifySearchComponent]
})
export class RecruiterModule { }
