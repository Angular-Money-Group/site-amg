import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(
    public defaultService:DefaultService,
    private titleService: Title,
    private meta:Meta
  ) {
    this.titleService.setTitle('Angular Money Group');
    this.meta.addTag({name: 'description', content:'Fundada em 2019, a Angular Money Group é uma empresa voltada á desenvolvimento de website e aplicativos. Tendo como seu principal carro chefe o front end no framework angular. Sediada em Uberlândia mas atendendo clientes em todo o país'});
    this.meta.addTag({name: 'keywords', content:'angular, javascript, typescript, front-end, programação, uberlandia, programadores, projetos, desenvolvimento, vagas, estagio, cursos'});
  }

  ngOnInit(): void {
  }

}
