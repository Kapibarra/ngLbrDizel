import { NgModule } from '@angular/core';
import { RouterModule, Routes, Scroll, Router } from '@angular/router';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ContactsPageComponent } from './pages/contacts-page/contacts-page.component';
import { ServicesPageComponent } from './pages/services-page/services-page.component';
import { NotfoundPageComponent } from './pages/notfound-page/notfound-page.component';
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
import { ViewportScroller } from '@angular/common';
import { filter } from 'rxjs/operators';
const routes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactsPageComponent },
  { path: 'services', component: ServicesPageComponent },
  { path: 'daf-105', component: Daf105Component },
  { path: 'daf-95-85', component: Daf95Component },
  { path: 'daf-106', component: Daf106Component },
  { path: 'common-rail', component: CommonComponent },
  { path: 'volvo', component: VolvoComponent },
  { path: 'scania', component: ScaniaComponent },
  { path: 'iveco', component: IvecoComponent },
  { path: 'renault', component: RenaultComponent },
  { path: 'mercedes', component: MercedesComponent },
  { path: 'cummins', component: CumminsComponent },
  { path: 'caterpillar', component: CaterpillarComponent },
  { path: '**', component: NotfoundPageComponent }, // Страница не найдена
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      anchorScrolling: 'enabled',
      scrollPositionRestoration: 'enabled',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
  constructor(
    private router: Router,
    private viewportScroller: ViewportScroller
  ) {
    this.router.events
      .pipe(
        // Фильтруем только события Scroll
        filter((event): event is Scroll => event instanceof Scroll)
      )
      .subscribe((event: Scroll) => {
        if (event.position) {
          // Восстановить позицию прокрутки
          this.viewportScroller.scrollToPosition(event.position);
        } else if (event.anchor) {
          // Прокрутить к якорю
          this.viewportScroller.scrollToAnchor(event.anchor);
        } else {
          // По умолчанию прокрутить в начало
          this.viewportScroller.scrollToPosition([0, 0]);
        }
      });
  }
}
