import { Injectable } from '@angular/core';
import { FeatureDecisionService } from './feature-decision.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureStrategyService {

  constructor(private featureDecisionService: FeatureDecisionService) { }

  public textStrategy(): string {
    if(this.featureDecisionService.shouldChangeText()){
      let doBasicStuff = this.doBasicStuff();
      return this.doAdditionalStuffForMyFeature(doBasicStuff);
    }
    else{
      return this.doBasicStuff();
    }
  }

  public textClassStrategy(): string[] {
    if(this.featureDecisionService.shouldChangeText()){
      return ['modded'];
    }
    else{
      return [];
    }
  }


  

  private doBasicStuff(){
    return "This is DEFAULT"
  }

  private doAdditionalStuffForMyFeature(defaultVal:string){
    return defaultVal + ",but FEATURE also did something extra."
  }
}

