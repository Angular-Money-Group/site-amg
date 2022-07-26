import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  component: CoursesComponent
},
]

@NgModule({
  declarations: [CoursesComponent],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ]
})
export class CoursesModule { }
