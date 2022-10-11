import { TestBed } from '@angular/core/testing';
import { HiringModule } from './hiring.module';

describe('HiringModule', () => {
  let pipe: HiringModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HiringModule] });
    pipe = TestBed.inject(HiringModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
