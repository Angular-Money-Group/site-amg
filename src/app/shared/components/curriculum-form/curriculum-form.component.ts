import { IContactForm } from './../../models/contact';
import { IMessageConfig } from './../../layout/message-status/message-status.component';
import { finalize } from 'rxjs';
import { HiringService } from './../../../modules/hiring/services/hiring.service';
import { Component, OnInit, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { sizeFileValidator, typeFileValidator } from './validators';

@Component({
  selector: 'app-curriculum-form',
  templateUrl: './curriculum-form.component.html',
  styleUrls: ['./curriculum-form.component.scss']
})
export class CurriculumFormComponent implements OnInit {

  form!:FormGroup
  openMessage = new EventEmitter;
  modalMessage!:IMessageConfig
  loadingSubmit:boolean = false
  submitted:boolean = false;

  constructor(
    private hiringService:HiringService,
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

    const formData = new FormData()
    formData.append(
      'curriculum',
      form.get('curriculum')?.value,
      form.get('curriculum')?.value?.name
    )
    form.get('curriculum')?.setValue(formData)

    const response:IContactForm = form.value
    this.hiringService.sendCurriculum(response)
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
