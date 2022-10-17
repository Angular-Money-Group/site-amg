import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../services/default/default.service';

@Component({
  selector: 'app-solutions',
  templateUrl: './solutions.component.html',
  styleUrls: ['./solutions.component.scss']
})
export class SolutionsComponent implements OnInit {

  constructor(public defaultService:DefaultService) { }

  ngOnInit(): void {
  }

}
