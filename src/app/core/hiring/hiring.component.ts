import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-hiring',
  templateUrl: './hiring.component.html',
  styleUrls: ['./hiring.component.scss']
})
export class HiringComponent implements OnInit {
  submitted = false;
  contactForm! : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email] ),
    phoneNumber:new FormControl('',[Validators.required,Validators.pattern('')]),
    message: new FormControl('',Validators.required),
  })
  }
  get email(){
    return this.contactForm.get('email')!;
  }
  get phoneNumber(){
    return this.contactForm.get('phoneNumber')!;
  }
  get message(){
    return this.contactForm.get('message')!;
  }

  onSubmit(){
    //console.log(this.contactForm.value)
    this.submitted = true;
    if (this.contactForm.invalid) {
      return;
  }

   }
}
