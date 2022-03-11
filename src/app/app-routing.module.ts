import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemoComponent } from './demo/demo.component';
import { FirstComponent } from './first/first.component';

const routes: Routes = [
  { path: 'first-component', component: FirstComponent },
  { path: 'demo', component: DemoComponent }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
