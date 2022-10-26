import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringPageComponent } from './hiring-page.component';

describe('HiringPageComponent', () => {
  let component: HiringPageComponent;
  let fixture: ComponentFixture<HiringPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
