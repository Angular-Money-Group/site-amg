
import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default-service/default.service';

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
