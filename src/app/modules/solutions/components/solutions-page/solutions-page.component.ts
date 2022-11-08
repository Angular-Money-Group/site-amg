import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-solutions-page',
  templateUrl: './solutions-page.component.html',
  styleUrls: ['./solutions-page.component.scss']
})
export class SolutionsPageComponent implements OnInit {

  constructor(
    public defaultService:DefaultService,
    private titleService: Title,
    private meta:Meta
  ) {
    this.titleService.setTitle('Soluções');
    this.meta.addTag({name: 'description', content:'Seguimos um modelo de trabalho mais utilizado hoje em desenvolvimento de software na área de tecnologia, como metodologias Ágeis. fornecemos Desenvolvedores, e Squads.'});
    this.meta.addTag({name: 'keywords', content:''});
  }
  ngOnInit(): void {
  }

}
