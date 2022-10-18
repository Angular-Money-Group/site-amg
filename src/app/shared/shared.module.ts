import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DefaultButtonComponent } from './components/default-button/default-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MessageStatusComponent } from './components/message-status/message-status.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    ContactFormComponent,
    DefaultButtonComponent,
    MessageStatusComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    ContactFormComponent,
    DefaultButtonComponent,
    MessageStatusComponent
  ]
})
export class SharedModule { }
