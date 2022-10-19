import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSuggestionComponent } from './home-page-suggestion.component';

describe('HomePageSuggestionComponent', () => {
  let component: HomePageSuggestionComponent;
  let fixture: ComponentFixture<HomePageSuggestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageSuggestionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageSuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
