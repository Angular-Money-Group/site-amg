import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default/default.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public defaultService:DefaultService) { }

  ngOnInit(): void {
  }

}
