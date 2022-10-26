import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HiringPageCurriculumComponent } from './hiring-page-curriculum.component';

describe('HiringPageCurriculumComponent', () => {
  let component: HiringPageCurriculumComponent;
  let fixture: ComponentFixture<HiringPageCurriculumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HiringPageCurriculumComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HiringPageCurriculumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
