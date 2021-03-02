import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BoxComponent } from "./components/box.component";
import { RedBoxComponent } from "./components/red-box.component";
import { BoxComponentLoaderDirective } from "./directives/box-component-loader.directive";
import { GreenBoxComponent } from "./components/green-box.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [
    AppComponent,
    HelloComponent,
    RedBoxComponent,
    GreenBoxComponent,
    BoxComponent,
    BoxComponentLoaderDirective
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
