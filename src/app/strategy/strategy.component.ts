import { Component, OnInit } from '@angular/core';
import { FeatureStrategyService } from '../feature-strategy.service';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.css']
})
export class StrategyComponent implements OnInit {

  private initVal = "NO action taken";
  public text:string = this.initVal;
  public name:string = "Strategy";

  constructor(private featureStrategyService: FeatureStrategyService) { }

  ngOnInit() {
  }

  public myAction():void
  {
    this.text = this.featureStrategyService.textStrategy();
  }

  public getClass():string[]{
   return this.featureStrategyService.textClassStrategy();
  }
}
