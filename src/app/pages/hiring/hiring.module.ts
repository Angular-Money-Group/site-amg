import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiringPageComponent } from './components/hiring-page/hiring-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [{path:'', component:HiringPageComponent}]

@NgModule({
  declarations: [
    HiringPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HiringModule { }
