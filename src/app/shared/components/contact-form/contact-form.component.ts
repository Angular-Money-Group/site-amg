import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactForm:FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    message: new FormControl('')
  })
  submitted:boolean = false;
  showMessage:boolean = false;
  loadingSubmit:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  get email () {
    return this.contactForm.get('email')!
  }

  get phoneNumber () {
    return this.contactForm.get('phoneNumber')!
  }

  get message () {
    return this.contactForm.get('message')!
  }

  sendForm(form:FormGroup){
    this.submitted = true
    if(form.invalid)
    return
    //enviar formulário utilizando o .pipe(finalize()) para integração com o loading
    this.loadingSubmit = true
    setTimeout(() => {
      this.loadingSubmit = false
      this.showMessage = true
    },500)


    this.submitted = false
  }

}
