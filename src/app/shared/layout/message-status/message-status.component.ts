import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-message-status',
  templateUrl: './message-status.component.html',
  styleUrls: ['./message-status.component.scss']
})
export class MessageStatusComponent implements OnInit, OnChanges {
  @Input() showMessage:boolean = false
  @Input() title:string = 'Sucesso'
  @Input() text?:string = ''
  @Input() type: 'success' | 'alert' | 'error' | 'none' = 'none'
  @Output() modalClosed: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.showMessage)
    setInterval(() => {
      this.showMessage = false
    }, 3000)
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
    this.showMessage = false
    this.modalClosed.emit()
  }
}
