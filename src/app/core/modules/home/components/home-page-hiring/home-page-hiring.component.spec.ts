import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageHiringComponent } from './home-page-hiring.component';

describe('HomePageHiringComponent', () => {
  let component: HomePageHiringComponent;
  let fixture: ComponentFixture<HomePageHiringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageHiringComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageHiringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
