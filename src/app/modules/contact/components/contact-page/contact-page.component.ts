import { Component, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor(
    public defaultService: DefaultService
  ) { }

  ngOnInit(): void {
  }

}
