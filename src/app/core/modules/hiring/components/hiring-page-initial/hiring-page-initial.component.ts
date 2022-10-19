import { DefaultService } from './../../../../services/default-service/default.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hiring-page-initial',
  templateUrl: './hiring-page-initial.component.html',
  styleUrls: ['./hiring-page-initial.component.scss']
})
export class HiringPageInitialComponent implements OnInit {

  constructor(
    public defaultService:DefaultService
  ) { }

  ngOnInit(): void {
  }

}
