<<<<<<< Updated upstream:src/app/modules/hiring/components/hiring-page-initial/hiring-page-initial.component.ts
import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default-service/default.service';
=======
import { DefaultService } from './../../../../services/default-service/default.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
>>>>>>> Stashed changes:src/app/core/modules/hiring/components/hiring-page-initial/hiring-page-initial.component.ts

@Component({
  selector: 'app-hiring-page-initial',
  templateUrl: './hiring-page-initial.component.html',
  styleUrls: ['./hiring-page-initial.component.scss']
})
export class HiringPageInitialComponent implements OnInit {
  showModal: boolean = false;
  @Output() goToCurriculumEvent = new EventEmitter()
  constructor(
    public defaultService:DefaultService
  ) { }

  ngOnInit(): void {
  }

}
