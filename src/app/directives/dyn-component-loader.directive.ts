import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[chatComponentLoader]"
})
export class DynComponentLoaderDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
