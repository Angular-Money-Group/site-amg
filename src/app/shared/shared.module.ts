import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DefaultButtonComponent } from './components/default-button/default-button.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ContactFormComponent,
    DefaultButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ContactFormComponent,
    DefaultButtonComponent
  ]
})
export class SharedModule { }
