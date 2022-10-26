import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsPageNeedDevsComponent } from './solutions-page-need-devs.component';

describe('SolutionsPageNeedDevsComponent', () => {
  let component: SolutionsPageNeedDevsComponent;
  let fixture: ComponentFixture<SolutionsPageNeedDevsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsPageNeedDevsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsPageNeedDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
