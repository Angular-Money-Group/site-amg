import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community',
  templateUrl: './community.component.html',
  styleUrls: ['./community.component.scss'],
})
export class CommunityComponent implements OnInit {
  peopleComunity: any[] = [];
  date = new Date();
  options: any[] = [
    {
      firstOption: 'Conteúdos',
    },
    {
      secondtOption: 'Criação',
    },
    {
      firstOption: 'Conteúdos',
    },
  ];

  constructor() {}

  ngOnInit(): void {
    this.creatComunity();
  }

  creatComunity() {
    this.peopleComunity = [
      {
        name: 'Jessica Wilkins',
        topic: 'Desenvolvimento de carreira',
        subTopic: 'VueJS',
        date: new Date(),
        info: 'O que é programação em pares  e como  ela pode ajuda-lo a  crescer como desenvolvedor',
      },
      {
        name: 'Mark Shenouda',
        topic: 'Desenvolvimento de carreira',
        subTopic: 'VueJS',
        date: new Date(),
        info: 'O que é programação em pares  e como  ela pode ajuda-lo a  crescer como desenvolvedor',
      },
      {
        name: 'JEssica Willians',
        topic: 'Desenvolvimento de carreira',
        subTopic: 'VueJS',
        date: new Date(),
        info: 'O que é programação em pares  e como  ela pode ajuda-lo a  crescer como desenvolvedor',
      },
      {
        name: 'JEssica Willians',
        topic: 'Desenvolvimento de carreira',
        subTopic: 'VueJS',
        date: new Date(),
        info: 'O que é programação em pares  e como  ela pode ajuda-lo a  crescer como desenvolvedor',
      },
      {
        name: 'JEssica Willians',
        topic: 'Desenvolvimento de carreira',
        subTopic: 'VueJS',
        date: new Date(),
        info: 'O que é programação em pares  e como  ela pode ajuda-lo a  crescer como desenvolvedor',
      },
      {
        name: 'JEssica Willians',
        topic: 'Desenvolvimento de carreira',
        subTopic: 'VueJS',
        date: new Date(),
        info: 'O que é programação em pares  e como  ela pode ajuda-lo a  crescer como desenvolvedor',
      },
      {
        name: 'JEssica Willians',
        topic: 'Desenvolvimento de carreira',
        subTopic: 'VueJS',
        date: new Date(),
        info: 'O que é programação em pares  e como  ela pode ajuda-lo a  crescer como desenvolvedor',
      },
      {
        name: 'JEssica Willians',
        topic: 'Desenvolvimento de carreira',
        subTopic: 'VueJS',
        date: new Date(),
        info: 'O que é programação em pares  e como  ela pode ajuda-lo a  crescer como desenvolvedor',
      },
    ];
  }
}
