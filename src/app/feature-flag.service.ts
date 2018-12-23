import { Injectable } from '@angular/core';
import { FeatureFlags } from './feature-flags';

@Injectable({
  providedIn: 'root'
})
export class FeatureFlagService {
  private featureFlags: FeatureFlags;
  
  constructor() { 
    //pretend this call outs to some Feature Flag provider such as LaunchDarkly or another service
    this.featureFlags = {injectedFlag:false,strategyFlag:false};
  }
  
  public getFlags(): FeatureFlags{
    return JSON.parse(JSON.stringify(this.featureFlags));
  }

  //just for testing
  public toggleMyFlag(): void {
    this.featureFlags.injectedFlag = !this.featureFlags.injectedFlag;
    this.featureFlags.strategyFlag = !this.featureFlags.strategyFlag;
  }
}
