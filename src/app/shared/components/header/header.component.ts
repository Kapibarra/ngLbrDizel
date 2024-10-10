import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;
  home: MenuItem | undefined;
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Главная',
        icon: 'pi pi-fw pi-home',
        routerLink: '/',
      },
      {
        label: 'О компании',
        icon: 'pi pi-star',
        routerLink: '/about',
      },
      {
        label: 'Услуги',
        icon: 'pi pi-search',
        routerLink: '/services',
        // items: [
        //   {
        //     label: 'DAF 105',
        //     icon: 'pi pi-wrench',
        //     routerLink: '/daf-105',
        //   },
        //   {
        //     label: 'DAF 95, 85',
        //     icon: 'pi pi-wrench',
        //     routerLink: '/daf-95-85',
        //   },
        //   {
        //     label: 'DAF 106',
        //     icon: 'pi pi-wrench',
        //     routerLink: '/daf-106',
        //   },
        //   {
        //     label: 'Common Rail',
        //     icon: 'pi pi-wrench',
        //     routerLink: '/common-rail',
        //   },
        //   {
        //     label: 'VOLVO',
        //     icon: 'pi pi-wrench',
        //     routerLink: '/volvo',
        //   },
        //   {
        //     label: 'Scania',
        //     icon: 'pi pi-wrench',
        //     routerLink: '/scania',
        //   },
        //   {
        //     label: 'Iveco',
        //     icon: 'pi pi-wrench',
        //     routerLink: '/iveco',
        //   },
        //   {
        //     label: 'Renault',
        //     icon: 'pi pi-wrench',
        //     routerLink: '/renault',
        //   },
        //   {
        //     label: 'Mercedes',
        //     icon: 'pi pi-wrench',
        //     routerLink: '/mercedes',
        //   },
        //   {
        //     label: 'Cummins',
        //     icon: 'pi pi-wrench',
        //     routerLink: '/cummins',
        //   },
        //   {
        //     label: 'Caterpillar',
        //     icon: 'pi pi-wrench',
        //     routerLink: '/caterpillar',
        //   },
        // ],
      },
      {
        label: 'Обучение',
        icon: 'pi pi-share-alt',
      },
      {
        label: 'Контакты',
        icon: 'pi pi-verified',
        routerLink: '/contact',
      },
    ];
    this.home = { icon: 'pi pi-home', routerLink: '/' };
  }
}
