import { ContactService } from './../../../core/services/contact.service';
import { IContactForm } from './../../models/contact';
import { IMessageConfig } from './../../layout/message-status/message-status.component';
import { finalize } from 'rxjs';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sizeFileValidator, typeFileValidator } from './validators';
import { toFormData } from '../../models/formData';

@Component({
  selector: 'app-curriculum-form',
  templateUrl: './curriculum-form.component.html',
  styleUrls: ['./curriculum-form.component.scss']
})
export class CurriculumFormComponent implements OnInit {

  form!:FormGroup
  openMessage = new EventEmitter;
  modalMessage:IMessageConfig  = {
    text: 'Mensagem enviada com sucesso!',
    title: 'Enviado',
    type: 'success'
  }
  loadingSubmit:boolean = false
  submitted:boolean = false;

  constructor(
    private contactService:ContactService,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.minLength(11)]],
      message: [''],
      curriculum:['',[Validators.required, sizeFileValidator(10),typeFileValidator()]]
    })
  }

  onFilechange(event:any){
    const file: File = <File>event.target.files[0];
    this.form.get('curriculum')?.setValue(file)
  }

  sendForm(form:FormGroup){
    this.submitted = true
    if(form.invalid)
    return
    this.loadingSubmit = true

    this.contactService.sendContact(toFormData(form.value))
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
