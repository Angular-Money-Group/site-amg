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
      route: '/',
    },
    {
      name: 'Sobre a AMG',
      route: 'empresa',
    },
    {
      name: 'Soluções',
      route: 'servicos',
    },
    {
      name: 'Trabalhe Conosco',
      //route: 'cursos',
    },
  ];

  constructor(public route: Router) {}

  ngOnInit(): void {}

  hideShow() {
    this.showMenu = !this.showMenu;
  }

  goTo(route: string): void {
    this.route.navigate([route]);
  }
}
