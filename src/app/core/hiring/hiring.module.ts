import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HiringRoutingModule } from './hiring-routing.module';
import { HiringComponent } from './hiring.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HiringComponent
  ],
  imports: [
    CommonModule,
    HiringRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class HiringModule { }
