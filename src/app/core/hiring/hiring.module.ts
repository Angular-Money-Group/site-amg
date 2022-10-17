import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { HiringRoutingModule } from './hiring-routing.module';
import { HiringComponent } from './hiring.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HiringComponent
  ],
  imports: [
    CommonModule,
    HiringRoutingModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),

  ]
})
export class HiringModule { }
