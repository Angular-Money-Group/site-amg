import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HiringComponent } from './hiring.component';

const routes: Routes = [{ path: '', component: HiringComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HiringRoutingModule { }
