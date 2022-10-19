import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageWeComponent } from './about-page-we.component';

describe('AboutPageWeComponent', () => {
  let component: AboutPageWeComponent;
  let fixture: ComponentFixture<AboutPageWeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPageWeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPageWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
