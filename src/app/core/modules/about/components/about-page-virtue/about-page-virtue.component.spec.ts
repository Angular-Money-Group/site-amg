import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutPageVirtueComponent } from './about-page-virtue.component';

describe('AboutPageVirtueComponent', () => {
  let component: AboutPageVirtueComponent;
  let fixture: ComponentFixture<AboutPageVirtueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutPageVirtueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutPageVirtueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
