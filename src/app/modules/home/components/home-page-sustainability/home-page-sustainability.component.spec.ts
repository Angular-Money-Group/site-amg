import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageSustainabilityComponent } from './home-page-sustainability.component';

describe('HomePageSustainabilityComponent', () => {
  let component: HomePageSustainabilityComponent;
  let fixture: ComponentFixture<HomePageSustainabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageSustainabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageSustainabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
