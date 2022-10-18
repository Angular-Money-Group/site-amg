import { hiringTexts } from './../../model/texts';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiring-page',
  templateUrl: './hiring-page.component.html',
  styleUrls: ['./hiring-page.component.scss']
})
export class HiringPageComponent implements OnInit {
  contentTexts = hiringTexts


  constructor() { }

  ngOnInit(): void {
  }

}
