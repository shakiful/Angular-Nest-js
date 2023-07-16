import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { WeatherRoutingModule } from './weather-routing.module';
import { WeatherComponent } from './weather.component';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [WeatherComponent],
  imports: [SharedModule, FormsModule, RouterModule, WeatherRoutingModule, NgxPaginationModule],
})
export class WeatherModule {}
