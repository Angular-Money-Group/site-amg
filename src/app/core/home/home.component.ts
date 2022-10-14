import { Component, OnInit } from '@angular/core';
import { DefaultService } from '../services/default/default.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public gfg = false;
  constructor(public defaultService:DefaultService) { }

  ngOnInit(): void {
  }

}
