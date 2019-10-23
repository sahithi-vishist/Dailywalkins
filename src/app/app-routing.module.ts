import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DisplayalljobsComponent } from './displayalljobs/displayalljobs.component';


const routes: Routes = [{ path: '', component: HomeComponent },
{ path: 'walker', loadChildren: './walker/walker.module#WalkerModule' },
{ path: 'About', component: AboutUsComponent },
{ path: 'Contact', component: ContactUsComponent },
{ path: 'FeedBack', component: FeedbackComponent },
{ path: 'PrivacyPolicy', component: PrivacyPolicyComponent },
{ path: 'TermsAndConditions', component: TermsAndConditionsComponent },
{ path: 'displayalljobs', component: DisplayalljobsComponent },
{ path: 'recruitment', loadChildren: './recruiter/recruiter.module#RecruiterModule' },
{ path: 'facility', loadChildren: './facility/facility.module#FacilityModule' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
