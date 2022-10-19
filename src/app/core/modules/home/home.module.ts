import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { HomePageInitialComponent } from './components/home-page-initial/home-page-initial.component';
import { HomePageWeAreComponent } from './components/home-page-we-are/home-page-we-are.component';
import { HomePageHiringComponent } from './components/home-page-hiring/home-page-hiring.component';
import { HomePageSustainabilityComponent } from './components/home-page-sustainability/home-page-sustainability.component';

const routes:Routes = [{path:'', component:HomePageComponent}]

@NgModule({
  declarations: [
    HomePageComponent,
    HomePageInitialComponent,
    HomePageWeAreComponent,
    HomePageHiringComponent,
    HomePageSustainabilityComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class HomeModule { }
