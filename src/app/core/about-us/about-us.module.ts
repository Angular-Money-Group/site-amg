import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AboutUsComponent,
     ],

  imports: [
    CommonModule,
    AboutUsRoutingModule,
    SharedModule,

  ]

})
export class AboutUsModule { }
