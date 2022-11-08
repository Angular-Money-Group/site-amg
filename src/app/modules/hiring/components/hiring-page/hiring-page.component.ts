import { hiringTexts } from '../../models/texts';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default.service';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-hiring-page',
  templateUrl: './hiring-page.component.html',
  styleUrls: ['./hiring-page.component.scss']
})
export class HiringPageComponent implements OnInit {
  contentTexts = hiringTexts
  goToCurriculum = new EventEmitter()


  constructor(
    public defaultService:DefaultService,
    private titleService: Title,
    private meta:Meta
  ) {
    this.titleService.setTitle('Trabalhe Conosco');
    this.meta.addTag({name: 'description', content:''});
    this.meta.addTag({name: 'keywords', content:''});
  }

  ngOnInit(): void {
  }

}
