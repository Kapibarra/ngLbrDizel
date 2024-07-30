import { Component, OnInit } from '@angular/core';

export interface Service {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  time: string;
}
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  services: Service[] = [
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Диагностика форсунок и плд-секций',
      description:
        'Включает: ряд механических замеров, разборку, глубокую очистку, регулировку, сборку, стендовые испытания с тест-планами.',
      price: 'от 3 000 ₽/шт',
      time: '2 часа',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Замена масла',
      description: 'Замена масла в двигателе с фильтром и промывкой системы.',
      price: 'от 1 500 ₽/шт',
      time: '1 час',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Ремонт топливных насосов высокого давления',
      description:
        'Проверка состояния и ремонт насосов ТНВД, включая замену уплотнительных элементов и тестирование на стенде.',
      price: 'от 5 000 ₽/шт',
      time: '3 часа',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Реставрация валов распределительных',
      description:
        'Реставрация валов с восстановлением их рабочих поверхностей и нанесением защитных покрытий.',
      price: 'от 7 000 ₽/шт',
      time: '4 часа',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Балансировка карданных валов',
      description:
        'Комплексная балансировка и устранение биений карданных валов.',
      price: 'от 4 500 ₽/шт',
      time: '2.5 часа',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Ремонт турбокомпрессоров',
      description:
        'Диагностика, замена картриджей и регулировка турбин с балансировкой.',
      price: 'от 8 000 ₽/шт',
      time: '5 часов',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Чистка и настройка системы впрыска',
      description: 'Ультразвуковая чистка и настройка системы впрыска топлива.',
      price: 'от 2 000 ₽/шт',
      time: '1.5 часа',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Ремонт системы охлаждения',
      description:
        'Ремонт и обслуживание радиаторов, помп и термостатов системы охлаждения.',
      price: 'от 3 500 ₽/шт',
      time: '3 часа',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Ремонт муфт сцепления',
      description:
        'Диагностика и замена элементов сцепления, регулировка и тестирование.',
      price: 'от 6 000 ₽/шт',
      time: '4 часа',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Комплексное ТО двигателя',
      description:
        'Полное техническое обслуживание двигателя, включая замену фильтров, масел и диагностику всех систем.',
      price: 'от 10 000 ₽',
      time: '6 часов',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
