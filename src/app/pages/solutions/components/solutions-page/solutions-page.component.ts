import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default-service/default.service';

@Component({
  selector: 'app-solutions-page',
  templateUrl: './solutions-page.component.html',
  styleUrls: ['./solutions-page.component.scss']
})
export class SolutionsPageComponent implements OnInit {

  constructor(
    public defaultService:DefaultService
  ) { }

  ngOnInit(): void {
  }

}
