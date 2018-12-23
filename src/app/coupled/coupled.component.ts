import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-coupled',
  templateUrl: './coupled.component.html',
  styleUrls: ['./coupled.component.css']
})
export class CoupledComponent implements OnInit {

  private initVal = "NO action taken";
  public text:string = this.initVal;
  public name:string = "Coupled";

  constructor() { }

  ngOnInit() {
    
  }

  public myAction():void
  {
    let doBasicStuff = this.doBasicStuff();
    this.text = this.doAdditionalStuffForMyFeature(doBasicStuff);
  }

  public getClass():string[]{
    return ['modded'];
  }
  
  private doBasicStuff(){
    return "This is DEFAULT"
  }

  private doAdditionalStuffForMyFeature(defaultVal:string){
    return defaultVal + ",but FEATURE also did something extra."
  }

}
