import { Component } from '@angular/core';
export interface Service {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  time: string;
}
@Component({
  selector: 'app-daf95',
  templateUrl: './daf95.component.html',
  styleUrl: './daf95.component.scss',
})
export class Daf95Component {
  services: Service[] = [
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Диагностика форсунок и плд-секций',
      description:
        'Включает: ряд механических замеров, разборку, глубокую очистку, регулировку, сборку, стендовые испытания с тест-планами.',
      price: 'Бесплатно',
      time: '2 часа',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Частичный ремонт',
      description:
        'лазерение "шапки" клапана (в случае предельных параметров тест-плана, но еще границах нормы)',
      price: 'от 3 000 ₽/шт',
      time: '3 часа',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Капитальный ремонт ("под ключ")',
      description: '(полный ремонт "под ключ").',
      price: 'от 15 000 ₽/шт',
      time: '4 часа',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Ремонт форсунки DAF 95,85',
      description: 'Ремонт механической форсунки Даф, это замена распылителя.',
      price: 'от 3 200 ₽/шт',
      time: '2.5 часа',
    },
  ];
}
