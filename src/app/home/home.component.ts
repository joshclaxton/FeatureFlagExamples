import { Component, OnInit } from '@angular/core';
import { FeatureFlags } from '../feature-flags';
import {FeatureFlagService} from '../feature-flag.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public flags: FeatureFlags;
  constructor(private featureFlagService:FeatureFlagService) { }

  ngOnInit() {
    this.flags = this.featureFlagService.getFlags();
  }

  public toggleFeature():void{
    //not something you would ever do
    this.featureFlagService.toggleMyFlag();
    this.flags = this.featureFlagService.getFlags();
  } 
}
