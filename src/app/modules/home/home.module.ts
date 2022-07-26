import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeServicesComponent } from './components/home-services/home-services.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, HomeServicesComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class HomeModule {}
