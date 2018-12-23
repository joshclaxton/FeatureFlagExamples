import { TestBed } from '@angular/core/testing';

import { FeatureDecisionService } from './feature-decision.service';

describe('FeatureDecisionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureDecisionService = TestBed.get(FeatureDecisionService);
    expect(service).toBeTruthy();
  });
});
