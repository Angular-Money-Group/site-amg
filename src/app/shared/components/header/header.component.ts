import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default-service/default.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 @Input() menu!:any[]
  toggle:boolean = false

  constructor(
    public router:Router,
    public defaultService:DefaultService
  ) { }

  ngOnInit(): void {
  }


}
