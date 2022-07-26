import { ContactService } from './../../../core/services/contact.service';
import { finalize } from 'rxjs';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { IMessageConfig } from '../../layout/message-status/message-status.component';
import { IContactForm } from '../../models/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form!:FormGroup
  openMessage = new EventEmitter
  modalMessage:IMessageConfig  = {
    text: 'Mensagem enviada com sucesso!',
    title: 'Enviado',
    type: 'success'
  }
  submitted:boolean = false;
  loadingSubmit:boolean = false

  constructor(
    private fb:FormBuilder,
    private contactService:ContactService
    ) { }

    ngOnInit(): void {
      this.form = this.fb.group({
        email: ['', [Validators.required, Validators.email]],
        phone: ['', [Validators.required, Validators.minLength(11)]],
        message: ['', [Validators.required]]
      })
    }

    sendForm(form:FormGroup){
      this.submitted = true
      if(form.invalid)
      return
      this.loadingSubmit = true

      this.contactService.sendContact(form.value)
      .pipe(finalize(() => {
        this.loadingSubmit = false
      }))
      .subscribe(
        res => {
          this.modalMessage = {
            text: 'Mensagem enviada com sucesso!',
            title: 'Enviado',
            type: 'success'
          }
        },
        err => {
          this.modalMessage = {
            text: 'Houve um erro ao enviar sua mensagem!',
            title: 'Erro',
            type: 'error'
          }
        })
      this.openMessage.emit()
      this.submitted = false
      this.form.reset()
    }

}
