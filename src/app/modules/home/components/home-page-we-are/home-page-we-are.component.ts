import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-home-page-we-are',
  templateUrl: './home-page-we-are.component.html',
  styleUrls: ['./home-page-we-are.component.scss']
})
export class HomePageWeAreComponent implements OnInit {

  constructor(public defaultService:DefaultService) { }

  ngOnInit(): void {
  }

}
