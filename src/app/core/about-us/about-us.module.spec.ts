import { TestBed } from '@angular/core/testing';
import { AboutUsModule } from './about-us.module';

describe('AboutUsModule', () => {
  let pipe: AboutUsModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AboutUsModule] });
    pipe = TestBed.inject(AboutUsModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
