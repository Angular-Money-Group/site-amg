import { TestBed } from '@angular/core/testing';
import { SolutionsRoutingModule } from './solutions-routing.module';

describe('SolutionsRoutingModule', () => {
  let pipe: SolutionsRoutingModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SolutionsRoutingModule] });
    pipe = TestBed.inject(SolutionsRoutingModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
