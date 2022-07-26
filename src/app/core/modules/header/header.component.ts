import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [CommonModule],
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;
  menu: any[] = [
    {
      name: 'Início',
      route: '',
    },
    {
      name: 'Empresa',
      route: 'empresa',
    },
    {
      name: 'Serviços',
      route: 'servicos',
    },
    {
      name: 'Cursos',
      route: 'cursos',
    },
    {
      name: 'Comunidade',
      route: 'comunidade',
    },
  ];

  constructor(private route: Router) {}

  ngOnInit(): void {}

  hideShow() {
    this.showMenu = !this.showMenu;
  }

  goTo(route: string): void {
    this.route.navigate([route]);
  }
}
