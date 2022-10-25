import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default-service/default.service';

@Component({
  selector: 'app-hiring-page-initial',
  templateUrl: './hiring-page-initial.component.html',
  styleUrls: ['./hiring-page-initial.component.scss']
})
export class HiringPageInitialComponent implements OnInit {
  showModal: boolean = false;
  constructor(
    public defaultService:DefaultService
  ) { }

  ngOnInit(): void {
  }

}
