import { ContactService } from './../modules/contact/services/contact.service';
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
import { DefaultCarouselComponent } from './components/default-carousel/default-carousel.component';




@NgModule({
  declarations: [
    ContactFormComponent,
    DefaultButtonComponent,
    MessageStatusComponent,
    CurriculumFormComponent,
    DefaultModalComponent,
<<<<<<< Updated upstream
=======
    DefaultCarouselComponent
>>>>>>> Stashed changes
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
    DefaultModalComponent,
    DefaultCarouselComponent
  ]
})
export class SharedModule { }
