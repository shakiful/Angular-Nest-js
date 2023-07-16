import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartRoutingModule } from './chart-routing.module';
import { ChartComponent } from './chart.component';

@NgModule({
  declarations: [ChartComponent],
  imports: [SharedModule, FormsModule, RouterModule, ChartRoutingModule],
})
export class ChartModule {}
