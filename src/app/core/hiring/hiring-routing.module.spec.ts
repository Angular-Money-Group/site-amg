import { TestBed } from '@angular/core/testing';
import { HiringRoutingModule } from './hiring-routing.module';

describe('HiringRoutingModule', () => {
  let pipe: HiringRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [HiringRoutingModule] });
    pipe = TestBed.inject(HiringRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
