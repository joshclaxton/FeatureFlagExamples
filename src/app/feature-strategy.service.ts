import { Injectable } from '@angular/core';
import { FeatureDecisionService } from './feature-decision.service';

@Injectable({
  providedIn: 'root'
})
export class FeatureStrategyService {

  constructor(private featureDecisionService: FeatureDecisionService) { }

  public textStrategy(): string {
    if(this.featureDecisionService.shouldChangeText()){
      let defaultAction = this.defaultAction();
      return this.featureMod(defaultAction);
    }
    else{
      return this.defaultAction();
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


  

  private defaultAction(){
    return "This is DEFAULT"
  }

  private featureMod(defaultVal:string){
    return defaultVal + ",but FEATURE also did something extra."
  }
}

