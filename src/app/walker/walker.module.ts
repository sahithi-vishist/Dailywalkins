import { NgModule } from '@angular/core';
import { CommonModule} from '@angular/common';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { WalkerRoutingModule } from './walker-routing.module';
import { LoginComponent } from './login/login.component';


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
import { FormsModule } from '@angular/forms';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { RegisterComponent } from './register/register.component';
import { AppliedWalkinComponent } from './applied-walkin/applied-walkin.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { AdvanceSearchComponent } from './advance-search/advance-search.component';
import { LogoutComponent } from './logout/logout.component';
// import { NavbarComponent } from './navbar/navbar.component';

import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { HttpClientModule } from '@angular/common/http';
import { JobtypeComponent } from './jobtype/jobtype.component';
import { HomeComponent } from '../home/home.component';

import { SelectedJobComponent } from './selected-job/selected-job.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { NavbarComponent } from './navbar/navbar.component';
import { WalkinDetailsComponent } from './walkin-details/walkin-details.component';
import { DisplaywalkinsBysearchComponent } from './displaywalkins-bysearch/displaywalkins-bysearch.component';

@NgModule({
  declarations: [LoginComponent,HomeComponent,
    ForgotPasswordComponent, 
    RegisterComponent, AppliedWalkinComponent, 
    MyprofileComponent, AdvanceSearchComponent,
     LogoutComponent, ViewComponent, EditComponent, 
     JobtypeComponent, WalkinDetailsComponent, 
     NavbarComponent,SelectedJobComponent, DisplaywalkinsBysearchComponent],
  imports: [
    SharedModule,
    ReactiveFormsModule,
    MultiSelectAllModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    WalkerRoutingModule,
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
    MatTooltipModule
  ],
  exports:[LoginComponent,
    ForgotPasswordComponent,
    NavbarComponent,
    RegisterComponent,
    AppliedWalkinComponent,
    AdvanceSearchComponent,
    MyprofileComponent,
    ViewComponent,
    EditComponent,JobtypeComponent,
    LogoutComponent,
    HomeComponent,
    SelectedJobComponent,
    WalkinDetailsComponent,
    SharedModule,DisplaywalkinsBysearchComponent
    
]
})
export class WalkerModule { }
