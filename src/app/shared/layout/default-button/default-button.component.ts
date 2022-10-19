import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent implements OnInit {
  @Input() label!:string
  @Input() classes?:string = 'py-2 px-4'
  @Input() arrow?:boolean = false
  @Input() loading?:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
