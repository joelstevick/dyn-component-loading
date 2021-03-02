import { Component, OnInit } from "@angular/core";

@Component({
  selector: "box",
  template: `
    <div [class]="color">{{ label }}</div>
  `,
  styles: [
    `
    .red {
      background-color: red;
    }
    .green {
       background-color: green;
    }
    div 
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
export class BoxComponent implements OnInit {
  color: string;
  label: string;

  ngOnInit() {}
}
