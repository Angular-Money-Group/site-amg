import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SolutionsRoutingModule } from './solutions-routing.module';
import { SolutionsComponent } from './solutions.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SolutionsComponent
  ],
  imports: [
    CommonModule,
    SolutionsRoutingModule,
    SharedModule,
    RouterModule
  ]
})
export class SolutionsModule { }
