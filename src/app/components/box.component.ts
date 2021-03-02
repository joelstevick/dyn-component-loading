import { Component } from "@angular/core";

@Component({
  selector: "box",
  template: "<div>red</div>",
  styles: [
    `div 
    { 
      display: inline-block;
      margin: 10px;
      height: 100px; 
      line-height: 100px;
      width: 100px;
      text-align: center; 
      border: 1px dashed grey;
      `
  ]
})
export class Box {
  
}
