import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { authGuardFn } from '../auth/auth-guard';
import { ChartComponent } from './chart.component';

const route: Routes = [
  { path: '', component: ChartComponent, canActivate: [authGuardFn] },
];
@NgModule({
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule],
})
export class ChartRoutingModule {}
