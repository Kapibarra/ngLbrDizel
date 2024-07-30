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
  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Главная',
        icon: 'pi pi-fw pi-home',
      },
      {
        label: 'О нас',
        icon: 'pi pi-star',
      },
      {
        label: 'Ремонт насос-форсунок',
        icon: 'pi pi-search',
        items: [
          {
            label: 'DAF 105',
            icon: 'pi pi-wrench',
          },
          {
            label: 'DAF 95, 85',
            icon: 'pi pi-wrench',
          },
          {
            label: 'DAF 106',
            icon: 'pi pi-wrench',
          },
          {
            label: 'Common Rail',
            icon: 'pi pi-wrench',
          },
          {
            label: 'VOLVO',
            icon: 'pi pi-wrench',
          },
          {
            label: 'Scania',
            icon: 'pi pi-wrench',
          },
          {
            label: 'Iveco',
            icon: 'pi pi-wrench',
          },
          {
            label: 'Renault',
            icon: 'pi pi-wrench',
          },
          {
            label: 'Mercedes',
            icon: 'pi pi-wrench',
          },
          {
            label: 'Cummins',
            icon: 'pi pi-wrench',
          },
          {
            label: 'Caterpillar',
            icon: 'pi pi-wrench',
          },
        ],
      },
      {
        label: 'Направления',
        icon: 'pi pi-share-alt',
        items: [
          {
            label: 'Топливное',
          },
          {
            label: 'Лазерное',
          },
          {
            label: 'Стендовое',
          },
        ],
      },
      {
        label: 'Отзывы',
        icon: 'pi pi-verified',
      },
    ];
  }
}
