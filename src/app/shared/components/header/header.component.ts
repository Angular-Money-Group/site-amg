import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

 @Input() menu!:any[]
  toggle:boolean = false

  constructor(
    public router:Router
  ) { }

  ngOnInit(): void {
  }


}
