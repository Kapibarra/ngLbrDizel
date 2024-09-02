import { Component, OnInit } from '@angular/core';
export interface Service {
  imageUrl: string;
  title: string;
  routerLink: string;
}
@Component({
  selector: 'app-services-page',
  templateUrl: './services-page.component.html',
  styleUrls: ['./services-page.component.scss'],
})
export class ServicesPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  services: Service[] = [
    {
      imageUrl: 'assets/images/daf95-service.jpg',
      title: 'Ремонт DAF-105',
      routerLink: '/daf-105',
    },
    {
      imageUrl: 'assets/images/daf-service.jpg',
      title: 'Ремонт DAF-95, 85',
      routerLink: '/daf-95-85',
    },
    {
      imageUrl: 'assets/images/daf106-service.jpg',
      title: 'Ремонт DAF-106',
      routerLink: '/daf-106',
    },
    {
      imageUrl: 'assets/images/man-service.jpg',
      title: 'Ремонт Common Rail',
      routerLink: '/common-rail',
    },
    {
      imageUrl: 'assets/images/volvo-service.jpg',
      title: 'Ремонт VOLVO',
      routerLink: '/volvo',
    },
    {
      imageUrl: 'assets/images/scania-service.jpg',
      title: 'Ремонт Scania',
      routerLink: '/scania',
    },
    {
      imageUrl: 'assets/images/iveco-service.jpg',
      title: 'Ремонт Iveco',
      routerLink: '/iveco',
    },
    {
      imageUrl: 'assets/images/renault-service.jpg',
      title: 'Ремонт Renault',
      routerLink: '/renault',
    },
    {
      imageUrl: 'assets/images/mercedes-service.jpg',
      title: 'Ремонт Mercedes',
      routerLink: '/mercedes',
    },
    {
      imageUrl: 'assets/images/daf95-service.jpg',
      title: 'Ремонт Cummins',
      routerLink: '/cummins',
    },
    {
      imageUrl: 'assets/images/daf95-service.jpg',
      title: 'Ремонт Caterpillar',
      routerLink: '/caterpillar',
    },
  ];
}
