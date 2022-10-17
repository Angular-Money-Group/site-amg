import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {
  submitted = false;
  contactForm! : FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.contactForm = new FormGroup({
    email: new FormControl('',[Validators.required,Validators.email] ),
    phoneNumber:new FormControl('',[Validators.required,Validators.pattern('^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$'),]),
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
