import { hiringTexts } from '../../models/texts';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-hiring-page',
  templateUrl: './hiring-page.component.html',
  styleUrls: ['./hiring-page.component.scss']
})
export class HiringPageComponent implements OnInit {
  contentTexts = hiringTexts
  goToCurriculum = new EventEmitter()


  constructor(
    public defaultService:DefaultService
  ) { }

  ngOnInit(): void {
  }

}
