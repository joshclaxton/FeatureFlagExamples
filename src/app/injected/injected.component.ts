import { Component, OnInit } from '@angular/core';
import {FeatureDecisionService} from '../feature-decision.service'


@Component({
  selector: 'app-injected',
  templateUrl: './injected.component.html',
  styleUrls: ['./injected.component.css']
})
export class InjectedComponent implements OnInit {

  private initVal = "NO action taken";
  public text:string = this.initVal;
  public name:string = "Injected";

  constructor(private featureDecisionService: FeatureDecisionService) { }

  ngOnInit() {
  }

  public myAction():void
  {
    //knowledge of feature logic, but not feature flag itself
    if(this.featureDecisionService.shouldChangeText()){
      let doBasicStuff = this.doBasicStuff();
      this.text = this.doAdditionalStuffForMyFeature(doBasicStuff);
    }
    else{
      this.text = this.doBasicStuff();
    }
  }

  public getClass(): string[]
  {
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
