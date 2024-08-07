import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SplitterModule } from 'primeng/splitter';
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
import { MenubarModule } from 'primeng/menubar';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import { SwiperModule } from 'swiper/angular';
import { BeforeAfterComponent } from './shared/components/before-after/before-after.component';
import { TabViewModule } from 'primeng/tabview';
import { Daf105Component } from './pages/daf105/daf105.component';
import { Daf95Component } from './pages/daf95/daf95.component';
import { Daf106Component } from './pages/daf106/daf106.component';
import { CommonComponent } from './pages/common/common.component';
import { VolvoComponent } from './pages/volvo/volvo.component';
import { ScaniaComponent } from './pages/scania/scania.component';
import { IvecoComponent } from './pages/iveco/iveco.component';
import { RenaultComponent } from './pages/renault/renault.component';
import { MercedesComponent } from './pages/mercedes/mercedes.component';
import { CumminsComponent } from './pages/cummins/cummins.component';
import { CaterpillarComponent } from './pages/caterpillar/caterpillar.component';
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
    WorkflowComponent,
    BeforeAfterComponent,
    Daf105Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CarouselModule,
    ButtonModule,
    TagModule,
    SwiperModule,
    TabViewModule,
    SplitterModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
