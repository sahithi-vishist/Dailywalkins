import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacilityRoutingModule } from './facility-routing.module';
import { FregistrationComponent} from './fregistration/fregistration.component';
import { FloginComponent } from './flogin/flogin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddfacilityComponent } from './addfacility/addfacility.component';
import { MyfacilityComponent } from './myfacility/myfacility.component';
import { UpdatefacilityComponent } from './updatefacility/updatefacility.component';
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
  MatTooltipModule,} from '@angular/material';
import { NavbarFacComponent } from './navbar-fac/navbar-fac.component'
import { SharedModule } from '../shared/shared.module';
import { FacilitiesComponent } from './facilities/facilities.component';
import { FacilityService } from './facilityservice.service';
import { BookFacilityComponent } from './book-facility/book-facility.component';

@NgModule({
  declarations: [FregistrationComponent, FloginComponent, AddfacilityComponent, MyfacilityComponent, UpdatefacilityComponent, 
    NavbarFacComponent, FacilitiesComponent, BookFacilityComponent],
  imports: [
    CommonModule,
    SharedModule,
    FacilityRoutingModule,    
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      FacilityRoutingModule,
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
      MatTooltipModule],
    
    exports:[FloginComponent,
      FregistrationComponent,
      AddfacilityComponent,
      MyfacilityComponent,
      SharedModule,FacilitiesComponent,
      BookFacilityComponent,
      UpdatefacilityComponent],
  
})
export class FacilityModule { }
