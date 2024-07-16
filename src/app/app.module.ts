import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { AboutComponent } from './shared/components/about/about.component';
import { MapMiniComponent } from './shared/components/map-mini/map-mini.component';
import { ReviewsComponent } from './shared/components/reviews/reviews.component';
import { SochialComponent } from './shared/components/sochial/sochial.component';
import { DirectionsComponent } from './shared/components/directions/directions.component';
import { ContactsComponent } from './shared/components/contacts/contacts.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormComponent } from './shared/components/form/form.component';
import { TeamComponent } from './shared/components/team/team.component';
import { OnlineComponent } from './shared/components/online/online.component';
import { ServicesComponent } from './shared/components/services/services.component';
import { StepsComponent } from './shared/components/steps/steps.component';
import { WorkflowComponent } from './shared/components/workflow/workflow.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContactsPageComponent,
    AboutPageComponent,
    ServicesPageComponent,
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    MapMiniComponent,
    ReviewsComponent,
    SochialComponent,
    DirectionsComponent,
    ContactsComponent,
    FooterComponent,
    FormComponent,
    TeamComponent,
    OnlineComponent,
    ServicesComponent,
    StepsComponent,
    WorkflowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
