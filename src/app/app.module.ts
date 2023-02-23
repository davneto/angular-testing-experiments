import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { E2eEx1Component } from './pages/test-examples/e2e/e2e-ex1/e2e-ex1.component';
import { UnitEx1Component } from './pages/test-examples/unit/unit-ex1/unit-ex1.component';
import { ExamplesListComponent } from './pages/examples-list/examples-list.component';
import { ExampleWrapperComponent } from './pages/example-wrapper/example-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    E2eEx1Component,
    UnitEx1Component,
    ExamplesListComponent,
    ExampleWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
