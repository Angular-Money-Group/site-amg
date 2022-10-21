import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { DefaultButtonComponent } from './layout/default-button/default-button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MessageStatusComponent } from './layout/message-status/message-status.component';
import { CurriculumFormComponent } from './components/curriculum-form/curriculum-form.component';
import { DefaultModalComponent } from './components/default-modal/default-modal.component';




@NgModule({
  declarations: [
    ContactFormComponent,
    DefaultButtonComponent,
    MessageStatusComponent,
    CurriculumFormComponent,
    DefaultModalComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild(),
  ],
  exports: [
    ContactFormComponent,
    DefaultButtonComponent,
    MessageStatusComponent,
    CurriculumFormComponent,
    DefaultModalComponent
  ]
})
export class SharedModule { }
