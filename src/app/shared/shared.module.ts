import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, RouterState, Routes } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

const routes: Routes = [
  { path:"", component: HeaderComponent }
];


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),

  ],
  exports:[
    HeaderComponent,
    FooterComponent,

  ]
})
export class SharedModule { }
