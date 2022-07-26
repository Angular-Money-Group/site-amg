import { SharedModule } from 'src/app/shared/shared.module';
import { Router, RouterModule } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true, imports:[CommonModule,RouterModule, SharedModule],
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
