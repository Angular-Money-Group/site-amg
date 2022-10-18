import { hiringTexts } from './../../model/texts';
import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default-service/default.service';

@Component({
  selector: 'app-hiring-page',
  templateUrl: './hiring-page.component.html',
  styleUrls: ['./hiring-page.component.scss']
})
export class HiringPageComponent implements OnInit {
  contentTexts = hiringTexts


  constructor(
    public defaultService:DefaultService
  ) { }

  ngOnInit(): void {
  }

}
