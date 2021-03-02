import {
  Component,
  ComponentFactoryResolver,
  OnInit,
  ViewChild
} from "@angular/core";
import { BoxComponentLoaderDirective } from "../directives/box-component-loader.directive";
import { BoxComponent } from "./box.component";

@Component({
  selector: "blue-box",
  template: `
    <div boxComponentLoader></div>
  `,
  styles: []
})
export class GreenBoxComponent implements OnInit {
  @ViewChild(BoxComponentLoaderDirective, { static: true })
  boxComponentHost: BoxComponentLoaderDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  async ngOnInit() {
    await this.loadComponent(BoxComponent);
  }
  async loadComponent(component) {
    const viewContainerRef = this.boxComponentHost.viewContainerRef;
    viewContainerRef.clear();

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      component
    );

    const componentRef = viewContainerRef.createComponent(componentFactory);

    (componentRef.instance as any).color = "green";
    (componentRef.instance as any).label = "this is green";
  }
}
