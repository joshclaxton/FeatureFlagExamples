import { Injectable } from '@angular/core';
import {FeatureFlagService} from './feature-flag.service'
@Injectable({
  providedIn: 'root'
})
export class FeatureDecisionService {

  constructor(private featureFlagService: FeatureFlagService) { }
  public shouldChangeText(): boolean{
    return this.featureFlagService.getFlags().injectedFlag;
  }

  public shouldChangeTextStrategy(): boolean{
    return this.featureFlagService.getFlags().strategyFlag;
  }
}
