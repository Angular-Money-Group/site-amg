import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{path: '**', redirectTo: '/home'},
  { path: 'home', loadChildren: () => import('./core/home/home.module').then(m => m.HomeModule) },
  { path: 'about-us', loadChildren: () => import('./core/about-us/about-us.module').then(m => m.AboutUsModule) },
  { path: 'solutions', loadChildren: () => import('./core/solutions/solutions.module').then(m => m.SolutionsModule) },
  { path: 'hiring', loadChildren: () => import('./core/hiring/hiring.module').then(m => m.HiringModule) },
  { path: 'contact-us', loadChildren: () => import('./core/contact-us/contact-us.module').then(m => m.ContactUsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
