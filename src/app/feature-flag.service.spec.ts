import { TestBed } from '@angular/core/testing';

import { FeatureFlagService } from './feature-flag.service';

describe('FeatureFlagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureFlagService = TestBed.get(FeatureFlagService);
    expect(service).toBeTruthy();
  });
});
