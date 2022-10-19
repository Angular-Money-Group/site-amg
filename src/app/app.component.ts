import { Component } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'site-amg';

  menu: any[] = [
    {route: '/home', name: 'Início'},
    {route: '/sobre', name: 'Sobre AMG'},
    {route: '/solucoes', name: 'Soluções'},
    {route: '/trabalhe-conosco', name: 'Trabalhe Conosco'},
    {route: '/contato', name: 'Contato'}
  ]

  ngOnInit(){
    AOS.init({
      once: true
    })
  }
}
