import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu: any[] = [
    {route: '/sobre', name: 'Sobre AMG'},
    {route: '/solucoes', name: 'Soluções'},
    {route: '/trabalhe-conosco', name: 'Trabalhe Conosco'},
    {route: '/contato', name: 'Contato'}
  ]
  toggle:boolean = false

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }


}
