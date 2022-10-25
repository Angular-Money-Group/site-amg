import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePageWeAreComponent } from './home-page-we-are.component';

describe('HomePageWeAreComponent', () => {
  let component: HomePageWeAreComponent;
  let fixture: ComponentFixture<HomePageWeAreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomePageWeAreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomePageWeAreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
