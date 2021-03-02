import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[boxComponentLoader]"
})
export class BoxComponentLoaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
