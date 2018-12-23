import { Component, OnInit, Input } from '@angular/core';
import { FeatureFlags } from '../feature-flags';
import {FeatureFlagService} from '../feature-flag.service'

@Component({
  selector: 'app-coupled',
  templateUrl: './coupled.component.html',
  styleUrls: ['./coupled.component.css']
})
export class CoupledComponent implements OnInit {

  private initVal = "NO action taken";
  public text:string = this.initVal;
  public name:string = "Coupled";

  constructor(private featureFlagService:FeatureFlagService) { }

  ngOnInit() {
    
  }

  public myAction():void
  {
    //flag is directly used
    if(this.featureFlagService.getFlags().coupledFlag){
      let doBasicStuff = this.doBasicStuff();
      this.text = this.doAdditionalStuffForMyFeature(doBasicStuff);
    }
    else{
      this.text = this.doBasicStuff();
    }
  }

  public getClass():string[]{
    if(this.featureFlagService.getFlags().coupledFlag){
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
