import { SharedModule } from 'src/app/shared/shared.module';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { AboutPageWeComponent } from './components/about-page-we/about-page-we.component';
import { AboutPageVirtueComponent } from './components/about-page-virtue/about-page-virtue.component';

const routes:Routes = [{path:'', component:AboutPageComponent}]

@NgModule({
  declarations: [
    AboutPageComponent,
    AboutPageWeComponent,
    AboutPageVirtueComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class AboutModule { }
