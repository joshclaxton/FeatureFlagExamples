import { TestBed } from '@angular/core/testing';

import { FeatureStrategyService } from './feature-strategy.service';

describe('FeatureStrategyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureStrategyService = TestBed.get(FeatureStrategyService);
    expect(service).toBeTruthy();
  });
});
