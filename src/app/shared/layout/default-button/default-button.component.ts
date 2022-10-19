import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.scss']
})
export class DefaultButtonComponent implements OnInit {
  @Input() label!:string
  @Input() labelFontSize?:string = 'normal'
  @Input() classes?:string = 'py-2 px-4'
  @Input() arrow?:boolean = false
  @Input() loading?:boolean = false
  @Input() bigArrow?:boolean = false
  constructor() { }

  ngOnInit(): void {
  }

}
