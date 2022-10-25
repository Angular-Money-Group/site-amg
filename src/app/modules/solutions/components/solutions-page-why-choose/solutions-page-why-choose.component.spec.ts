import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsPageWhyChooseComponent } from './solutions-page-why-choose.component';

describe('SolutionsPageWhyChooseComponent', () => {
  let component: SolutionsPageWhyChooseComponent;
  let fixture: ComponentFixture<SolutionsPageWhyChooseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsPageWhyChooseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsPageWhyChooseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
