import { DefaultService } from './../../../../services/default-service/default.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-solutions-page-your-projects',
  templateUrl: './solutions-page-your-projects.component.html',
  styleUrls: ['./solutions-page-your-projects.component.scss']
})
export class SolutionsPageYourProjectsComponent implements OnInit {

  constructor(
    public defaultService:DefaultService
  ) { }

  ngOnInit(): void {
  }

}
