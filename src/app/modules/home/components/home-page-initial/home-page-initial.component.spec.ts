import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageInitialComponent } from './home-page-initial.component';

describe('HomePageInitialComponent', () => {
  let component: HomePageInitialComponent;
  let fixture: ComponentFixture<HomePageInitialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageInitialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageInitialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
