import { Injectable } from '@angular/core';
import { FeatureDecisionService } from './feature-decision.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureStrategyService {

  constructor(private featureDecisionService: FeatureDecisionService) { }

  public textStrategy(): string {
    let doBasicStuff = this.doBasicStuff();
    return this.doAdditionalStuffForMyFeature(doBasicStuff);
  }

  public textClassStrategy(): string[] {
    return ['modded'];
  }

  private doBasicStuff(){
    return "This is DEFAULT"
  }

  private doAdditionalStuffForMyFeature(defaultVal:string){
    return defaultVal + ",but FEATURE also did something extra."
  }
}

