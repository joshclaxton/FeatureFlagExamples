import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-injected',
  templateUrl: './injected.component.html',
  styleUrls: ['./injected.component.css']
})
export class InjectedComponent implements OnInit {

  private initVal = "NO action taken";
  public text:string = this.initVal;
  public name:string = "Injected";

  constructor() { }

  ngOnInit() {
  }

  public myAction():void
  {
    let doBasicStuff = this.doBasicStuff();
    this.text = this.doAdditionalStuffForMyFeature(doBasicStuff);
  }

  public getClass(): string[]
  {
    return ['modded'];
  }

  private doBasicStuff(){
    return "This is DEFAULT"
  }

  private doAdditionalStuffForMyFeature(defaultVal:string){
    return defaultVal + ",but FEATURE also did something extra."
  }

}
