import { TestBed } from '@angular/core/testing';
import { AboutUsRoutingModule } from './about-us-routing.module';

describe('AboutUsRoutingModule', () => {
  let pipe: AboutUsRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AboutUsRoutingModule] });
    pipe = TestBed.inject(AboutUsRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
