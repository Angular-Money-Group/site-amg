import { finalize } from 'rxjs';
import { ContactService } from './../../../../core/services/contact.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, EventEmitter, OnInit } from '@angular/core';
import { IMessageConfig } from 'src/app/shared/layout/message-status/message-status.component';

@Component({
  selector: 'app-home-page-suggestion',
  templateUrl: './home-page-suggestion.component.html',
  styleUrls: ['./home-page-suggestion.component.scss']
})
export class HomePageSuggestionComponent implements OnInit {

  loadingSubmit:boolean = false
  message = ''
  openMessage = new EventEmitter
  modalMessage:IMessageConfig  = {
    text: 'Mensagem enviada com sucesso!',
    title: 'Enviado',
    type: 'success'
  }
  submitted:boolean = false

  constructor(
    private contactService:ContactService
  ) { }

  ngOnInit(): void {
  }

  sendMessage(){
    this.submitted = true
    if(!this.message)
    return
    this.loadingSubmit = true

    const response  = {
      message: this.message
    }
    this.contactService.sendContact(response)
    .pipe(finalize(() => {
      this.openMessage.emit()
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
      }
    )
    this.message = ''
    this.submitted = false
  }

}
