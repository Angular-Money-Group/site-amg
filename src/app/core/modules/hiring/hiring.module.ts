import { SharedModule } from 'src/app/shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HiringPageComponent } from './components/hiring-page/hiring-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HiringPageInitialComponent } from './components/hiring-page-initial/hiring-page-initial.component';
import { HiringPageTextsComponent } from './components/hiring-page-texts/hiring-page-texts.component';
import { HiringPageCurriculumComponent } from './components/hiring-page-curriculum/hiring-page-curriculum.component';

const routes:Routes = [{path:'', component:HiringPageComponent}]

@NgModule({
  declarations: [
    HiringPageComponent,
    HiringPageInitialComponent,
    HiringPageTextsComponent,
    HiringPageCurriculumComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class HiringModule { }
