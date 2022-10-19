import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full'
  },
  {
    path: 'sobre',
    loadChildren: () => import('./core/modules/about/about.module').then(m => m.AboutModule)
  },
  {
    path: 'contato',
    loadChildren: () => import('./core/modules/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: 'trabalhe-conosco',
    loadChildren: () => import('./core/modules/hiring/hiring.module').then(m => m.HiringModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./core/modules/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'solucoes',
    loadChildren: () => import('./core/modules/solutions/solutions.module').then(m => m.SolutionsModule)
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[]
})
export class AppRoutingModule { }
