import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageStatusComponent } from './message-status.component';

describe('MessageStatusComponent', () => {
  let component: MessageStatusComponent;
  let fixture: ComponentFixture<MessageStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessageStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessageStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
