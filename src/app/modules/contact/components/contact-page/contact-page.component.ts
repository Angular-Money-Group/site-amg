import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default.service';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(
    public defaultService:DefaultService,
    private titleService: Title,
    private meta:Meta
  ) {
    this.titleService.setTitle('Entre em contato');
    this.meta.addTag({name: 'description', content:'Entre em contato conosco para um orçamento para seu projeto.'});
    this.meta.addTag({name: 'keywords', content:''});
  }
  ngOnInit(): void {
  }

}
