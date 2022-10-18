import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SolutionsPageComponent } from './components/solutions-page/solutions-page.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';

const routes:Routes = [{path:'', component:SolutionsPageComponent}]

@NgModule({
  declarations: [
    SolutionsPageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class SolutionsModule { }
