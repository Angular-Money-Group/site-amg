import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  companyTitle = 'Angular Money Group';
  title = 'Soluções Digitais com alta perfomace';
  ourTechnologies: any[] = [];
  aboutUs =
    'Somos uma empresa de consultoria de T.I. com mais de 3 anos de mercado, nosso foco é atuar no desenvolvimento web e móbile e ajudar empresas, a reduzir seus custos, ter segurança e maior escalabilidade, disponibilizando um ou mais Devs para sua equipe, ou uma squad completa.';
  ourMethod: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.ourTechnologies = [
      {
        title: 'Angular',
        img: '../../../assets/svg/AngularJS-Shield 1.svg',
        content:
          'Angular é uma reescrita completa do AngularJS, feito pela mesma equipe que o construiu',
      },
      {
        title: 'TypeScript',
        img: '../../../assets/svg/Group 1862.svg',
        content:
          '  TypeScript é uma linguagem de programação de código aberto desenvolvida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.',
      },
      {
        title: 'JavaScript',
        img: '../../../assets/svg/logos_javascript.svg',
        content:
          'JavaScript é uma linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca e multiparadigma principais tecnologias da World Wide Web.',
      },
      {
        title: 'CSS',
        img: '../../../assets/svg/Group 1872.svg',
        content:
          ' Cascading Style Sheets é um mecanismo para adicionar estilo a um documento web. O código CSS pode ser aplicado diretamente nas tags ou ficar contido dentro das tags style.',
      },
      {
        title: 'HTML',
        img: '../../../assets/svg/Group 1871.svg',
        content:
          ' HTML é uma linguagem de marcação utilizada na construção de páginas na Web. Documentos HTML podem ser interpretados por navegadores..',
      },
    ];

    this.ourMethod = [
      {
        title: 'Estratégia',
        img: '../../../assets/gifs/alvo (1).gif',
        content: 'Baseada em hipóteses, utiliza modelo de negócios.',
      },
      {
        title: 'Velocidade',
        img: '../../../assets/gifs/foguete (2).gif',
        content: 'Busca ser rápida e opera com dados suficientes para a ação.',
      },
      {
        title: 'Criação do produto',
        img: '../../../assets/gifs/lista-de-controle (1).gif',
        content: 'Busca ser rápida e opera com dados suficientes para a ação.',
      },
      {
        title: 'Insucesso',
        img: '../../../assets/gifs/completo (1).gif',
        content:
          'Utiliza o método “pivotar”, ou seja, inverte o curso, oferecendo novas possibilidades de produtos.',
      },
    ];
  }
}
