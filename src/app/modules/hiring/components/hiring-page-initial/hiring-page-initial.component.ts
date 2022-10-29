import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { DefaultService } from "src/app/core/services/default.service";


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
