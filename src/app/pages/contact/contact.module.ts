import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { RouterModule, Routes } from '@angular/router';

const routes:Routes = [{path:'', component:ContactPageComponent}]

@NgModule({
  declarations: [
    ContactPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule
  ]
})
export class ContactModule { }
