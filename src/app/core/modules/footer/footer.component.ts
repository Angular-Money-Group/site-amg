import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  imports: [CommonModule],
})
export class FooterComponent implements OnInit {
  contentContact: any;
  mainPages: any[] = [];
  date: any = new Date();

  constructor(private route: Router) {}

  ngOnInit(): void {
    this.date = this.date.getFullYear();
    this.creatContacts();
    this.creatLinkPages();
  }

  creatContacts() {
    this.contentContact = [
      {
        icon: '../../assets/svg/streamlinehq-travel-map-location-pin-maps-travel-24 1.svg',
        content: 'Rua Geraldo de Moraes 54, Cazeca',
      },
      {
        icon: '../../assets/svg/Vector.svg',
        content: '+55 34 9999-9999',
      },
      {
        icon: '../../assets/svg/streamlinehq-mail-send-envelope-mail-24 1.svg',
        content: 'angularmoneygroup@gmail.com',
      },
    ];
  }

  creatLinkPages() {
    this.mainPages = [
      {
        name: 'Inicial',
        route: '',
      },
      {
        name: 'Serviços',
        route: 'servicos',
      },
      {
        name: 'Cursos',
        route: 'cursos',
      },
    ];
  }

  goTo(route: string): void {
    this.route.navigate([route]);
  }
}
