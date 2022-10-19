import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { DefaultService } from 'src/app/core/services/default-service/default.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true, imports:[CommonModule, RouterModule, SharedModule]
})
export class FooterComponent implements OnInit {
  @Input() menu!:any[]
  year = new Date().getFullYear()

  constructor(
    public defaultService:DefaultService
  ) { }

  ngOnInit(): void {
  }

}
