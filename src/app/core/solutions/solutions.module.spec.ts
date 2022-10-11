import { TestBed } from '@angular/core/testing';
import { SolutionsModule } from './solutions.module';

describe('SolutionsModule', () => {
  let pipe: SolutionsModule;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SolutionsModule] });
    pipe = TestBed.inject(SolutionsModule);
  });

  it('can load instance', () => {
    expect(pipe).toBeTruthy();
  });
});
