import { DefaultService } from './../../../../core/services/default-service/default.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPageComponent implements OnInit {

  constructor(
    public defaultService:DefaultService
  ) { }

  ngOnInit(): void {
  }

}
