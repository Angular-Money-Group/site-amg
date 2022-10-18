import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-curriculum-form',
  templateUrl: './curriculum-form.component.html',
  styleUrls: ['./curriculum-form.component.scss']
})
export class CurriculumFormComponent implements OnInit {

  curriculumForm:FormGroup = new FormGroup({
    name: new FormControl ('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phoneNumber: new FormControl('', Validators.required),
    message: new FormControl(''),
    file: new FormControl(null, [Validators.required])
  })

  submitted:boolean = false;
  showMessage:boolean = false;
  loadingSubmit:boolean = false

  constructor(
  ) { }

  ngOnInit(): void {
  }

  get name () {
    return this.curriculumForm.get('name')!
  }

  get email () {
    return this.curriculumForm.get('email')!
  }

  get phoneNumber () {
    return this.curriculumForm.get('phoneNumber')!
  }

  get message () {
    return this.curriculumForm.get('message')!
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
