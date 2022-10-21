import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-default-modal',
  templateUrl: './default-modal.component.html',
  styleUrls: ['./default-modal.component.scss']
})
export class DefaultModalComponent implements OnInit {
  showModal: boolean = false;
  @Output() OpenCloseModal: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
}
