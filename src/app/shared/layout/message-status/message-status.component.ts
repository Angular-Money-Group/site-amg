import { Observable } from 'rxjs';
import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

export interface IMessageConfig{
  text:string,
  title:string,
  type: 'success' | 'alert' | 'error' | 'none'
}

@Component({
  selector: 'app-message-status',
  templateUrl: './message-status.component.html',
  styleUrls: ['./message-status.component.scss']
})
export class MessageStatusComponent implements OnInit {
  @Input() showMessage:boolean = false
  @Input() title:string = 'Sucesso'
  @Input() text?:string = ''
  @Input() type: 'success' | 'alert' | 'error' | 'none' = 'none'
  @Output() modalClosed: EventEmitter<any> = new EventEmitter();
  @Input() openMessage!:Observable<any>

  constructor() { }

  ngOnInit(): void {
    this.openMessage.subscribe(() => {
      this.closeMessage()
    })
  }

  formatColorMessage(type:string){
    const FORMAT_COLOR_TYPE:any = {
      'success':'5px solid #587b52',
      'alert':'5px solid yellow',
      'error':'5px solid red',
    }
    return type? FORMAT_COLOR_TYPE[type] : ''
  }

  closeMessage(){
    if(!this.showMessage)
    this.showMessage = !this.showMessage
  }
}
