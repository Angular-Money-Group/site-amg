import { Component, OnInit } from '@angular/core';
import { hiringTexts } from '../../models/texts';

@Component({
  selector: 'app-hiring-page-texts',
  templateUrl: './hiring-page-texts.component.html',
  styleUrls: ['./hiring-page-texts.component.scss']
})
export class HiringPageTextsComponent implements OnInit {

  constructor() { }

  contentTexts = hiringTexts

  ngOnInit(): void {
  }

}
