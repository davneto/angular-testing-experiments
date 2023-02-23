import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleWrapperComponent } from './pages/example-wrapper/example-wrapper.component';
import { ExamplesListComponent } from './pages/examples-list/examples-list.component';
import { E2eEx1Component } from './pages/test-examples/e2e/e2e-ex1/e2e-ex1.component';
import { E2eEx2Component } from './pages/test-examples/e2e/e2e-ex2/e2e-ex2.component';
import { UnitEx1Component } from './pages/test-examples/unit/unit-ex1/unit-ex1.component';
import { UnitEx2Component } from './pages/test-examples/unit/unit-ex2/unit-ex2.component';

const routes: Routes = [
  
  {
    path: 'examples/list',
    component: ExamplesListComponent
  },
  {
    path: 'examples',
    component: ExampleWrapperComponent,
    children: [
      { path: 'unit/1', component: UnitEx1Component },
      { path: 'unit/2', component: UnitEx2Component },
      { path: 'e2e/1', component: E2eEx1Component },
      { path: 'e2e/2', component: E2eEx2Component },
      { path: '**', redirectTo: 'examples/list' },
    ],
  },
  {
    path: '',
    component: ExamplesListComponent
  },
  { path: '**', redirectTo: 'examples/list' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
