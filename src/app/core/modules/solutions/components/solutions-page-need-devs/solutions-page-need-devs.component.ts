import { DefaultService } from './../../../../services/default-service/default.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions-page-need-devs',
  templateUrl: './solutions-page-need-devs.component.html',
  styleUrls: ['./solutions-page-need-devs.component.scss']
})
export class SolutionsPageNeedDevsComponent implements OnInit {

  constructor(
    public defaultService:DefaultService
  ) { }

  ngOnInit(): void {
  }

}
