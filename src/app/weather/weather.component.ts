import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from './weather.model';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
export class WeatherComponent implements OnInit {
  weatherData: WeatherData[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];

  constructor(
    private http: HttpClient,
    private weatherService: WeatherService
  ) {}

  ngOnInit() {
    this.fetchWeatherData();
    // this.updateDisplayedData();
  }

  fetchWeatherData() {
    this.weatherService.fetchWeatherData(this.page,this.tableSize).subscribe((response: any) => {
      this.weatherData = response.map(
        (forecast: any) => ({
          id:forecast.id,
          weatherType: forecast.weather_type,
          icon: forecast.icon,
          temp: forecast.temp,
          feelsLike: forecast.feels_like,
          tempMin: forecast.temp_min,
          tempMax: forecast.temp_max,
          pressure: forecast.pressure,
          humidity: forecast.humidity,
          visibility: forecast.visibility,
          windSpeed: forecast.wind_speed,
          windDeg: forecast.wind_deg,
          clouds: forecast.clouds,
          dt: forecast.dt,
          createdAt: forecast.createdAt,
        }),
        (error) => {
          console.log(error);
        }
      );

      console.log(this.weatherData); // Log the weather data after mapping
    });
  }

  onTableDataChange(pageNumber: any) {
    console.log(pageNumber);

    this.page = pageNumber;
    this.fetchWeatherData();
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchWeatherData();

    console.log(this.tableSize);
    console.log(this.fetchWeatherData());
    console.log(this.weatherData);
  }
}
