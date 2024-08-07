import { Component } from '@angular/core';
export interface Service {
  imageUrl: string;
  title: string;
  description: string;
  price: string;
  time: string;
}
@Component({
  selector: 'app-daf105',
  templateUrl: './daf105.component.html',
  styleUrl: './daf105.component.scss',
})
export class Daf105Component {
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
      title: 'Регулировка клапана',
      description:
        'в случае, если распылитель в норме, а клапан не существенно отклонен от параметров',
      price: 'от 3 000 ₽/шт',
      time: '1 час',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Замена распылителя',
      description: 'клапан в норме',
      price: 'от 7 000 ₽/шт',
      time: '3 часа',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'Капитальный ремонт ("под ключ")',
      description: 'в зависимости от стоимости распылителя',
      price: 'от 20 000 ₽/шт',
      time: '4 часа',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'PLD секция - частичный ремонт',
      description:
        ' лазерение "шапки" клапана (в случае предельных параметров тест-плана, но еще границах нормы)',
      price: 'от 3 000 ₽/шт',
      time: '2.5 часа',
    },
    {
      imageUrl: 'assets/images/service01.png',
      title: 'PLD секция - капитальный ремонт',
      description: 'полный ремонт "под ключ"',
      price: 'от 15 000 ₽/шт',
      time: '5 часов',
    },
  ];
}
