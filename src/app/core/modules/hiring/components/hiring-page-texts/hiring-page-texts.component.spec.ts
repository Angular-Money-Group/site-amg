import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringPageTextsComponent } from './hiring-page-texts.component';

describe('HiringPageTextsComponent', () => {
  let component: HiringPageTextsComponent;
  let fixture: ComponentFixture<HiringPageTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringPageTextsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringPageTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
