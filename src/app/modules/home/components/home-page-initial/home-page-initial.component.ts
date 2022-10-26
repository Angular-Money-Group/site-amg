import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-home-page-initial',
  templateUrl: './home-page-initial.component.html',
  styleUrls: ['./home-page-initial.component.scss']
})
export class HomePageInitialComponent implements OnInit {

  constructor(public defaultService:DefaultService) { }

  ngOnInit(): void {
  }

}
