
import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default.service';
import {Meta, Title} from '@angular/platform-browser';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(
    public defaultService:DefaultService,
    private titleService: Title,
    private meta:Meta
  ) {
    this.titleService.setTitle('Sobre a AMG');
    this.meta.addTag({name: 'description', content:'Somos uma equipe com mais de 20 desenvolvedores, com sede em Uberlândia, atendemos clientes em todo o país, e também internacionais.'});
    this.meta.addTag({name: 'keywords', content:''});
  }

  ngOnInit(): void {
  }

}
