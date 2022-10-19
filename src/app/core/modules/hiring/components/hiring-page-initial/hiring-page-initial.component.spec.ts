import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringPageInitialComponent } from './hiring-page-initial.component';

describe('HiringPageInitialComponent', () => {
  let component: HiringPageInitialComponent;
  let fixture: ComponentFixture<HiringPageInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringPageInitialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringPageInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
