import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsPageYourProjectsComponent } from './solutions-page-your-projects.component';

describe('SolutionsPageYourProjectsComponent', () => {
  let component: SolutionsPageYourProjectsComponent;
  let fixture: ComponentFixture<SolutionsPageYourProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsPageYourProjectsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsPageYourProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
