import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'comunidade',
    loadChildren: () =>
      import('./modules/community/community.module').then(
        (m) => m.CommunityModule
      ),
  },
  {
    path: 'servicos',
    loadChildren: () =>
      import('./modules/servicos/servicos.module').then(
        (m) => m.ServicosModule
      ),
  },
  {
    path: 'empresa',
    loadChildren: () =>
      import('./modules/about-us/about-us.module').then((m) => m.AboutUsModule),
  },
  {
    path: 'cursos',
    loadChildren: () =>
      import('./modules/courses/courses.module').then((m) => m.CoursesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
