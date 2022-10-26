import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default-service/default.service';

@Component({
  selector: 'app-home-page-hiring',
  templateUrl: './home-page-hiring.component.html',
  styleUrls: ['./home-page-hiring.component.scss']
})
export class HomePageHiringComponent implements OnInit {

  constructor(public defaultService:DefaultService) { }

  ngOnInit(): void {
  }

}
