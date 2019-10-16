import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WalkerModule } from './walker/walker.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { DatePipe } from '@angular/common';
import { NotificationService } from './notification.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpinterceptorService } from './httpinterceptor.service';
import { WalkerAuthService } from './walker/walker-auth.service';
import { DisplayalljobsComponent } from './displayalljobs/displayalljobs.component';
import { RecruiterModule } from './recruiter/recruiter.module';
import { AlertService } from './alert.service';
import { FacilityModule } from './facility/facility.module';
import { SharedServiceService } from './shared-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ContactUsComponent,
    FeedbackComponent,
    PrivacyPolicyComponent,
    TermsAndConditionsComponent,
    DisplayalljobsComponent,
  
 
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    WalkerModule,
    RecruiterModule
  ],
  providers: [DatePipe,NotificationService,WalkerAuthService,AlertService,
    SharedServiceService,
    {provide:HTTP_INTERCEPTORS,useClass:HttpinterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
