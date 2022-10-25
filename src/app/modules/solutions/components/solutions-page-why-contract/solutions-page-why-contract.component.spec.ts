import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolutionsPageWhyContractComponent } from './solutions-page-why-contract.component';

describe('SolutionsPageWhyContractComponent', () => {
  let component: SolutionsPageWhyContractComponent;
  let fixture: ComponentFixture<SolutionsPageWhyContractComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolutionsPageWhyContractComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolutionsPageWhyContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
