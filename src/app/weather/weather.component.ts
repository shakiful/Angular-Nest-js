import { Component, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WeatherData } from './weather.model';
import { WeatherService } from './weather.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class WeatherComponent implements OnInit {
  weatherData: WeatherData[] = [];
  page: number = 1;
  count: number = 0;
  tableSize: number = 10;
  tableSizes: any = [5, 10, 15, 20];

  constructor(
    private http: HttpClient,
    private weatherService: WeatherService,
    private toastr: ToastrService
  ) {}

  ngOnInit() {
    const tableSizeString = localStorage.getItem("tableSize");
    this.tableSize = parseInt(tableSizeString, 10)||10;
    this.fetchWeatherData(this.page, this.tableSize);
    console.log(this.count);
  }

  fetchWeatherData(page, tableSize) {
    this.weatherService
      .fetchWeatherData(page, tableSize)
      .subscribe((response: any) => {
        if (Array.isArray(response.data)) {
          this.weatherData = response.data.map(
            (forecast: any) => ({
              id: forecast.id,
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
          this.page = response.page;
          this.tableSize = response.limit;
          this.count = response.total;
        }

        console.log(this.weatherData); // Log the weather data after mapping
      });
  }

  onTableDataChange(pageNumber: any, tableSize: number) {
    console.log(pageNumber);
    localStorage.setItem("tableSize", this.tableSize.toString());
    this.page = pageNumber;
    this.fetchWeatherData(this.page, this.tableSize);

    console.log(this.fetchWeatherData);
  }

  onTableSizeChange(event: any) {
    this.tableSize = event.target.value;
    this.page = 1;
    this.fetchWeatherData(this.page, this.tableSize);

    console.log(this.tableSize);
    console.log(this.fetchWeatherData(this.page, this.tableSize));
    console.log(this.weatherData);
  }

  deleteWeather(id: number) {
    // Remove the deleted item from the weatherData array
    this.weatherData = this.weatherData.filter((item) => item.id !== id);
    this.toastr.success('Successfully deleted');
    (error) => {
      console.error('Error deleting weather item:', error);
    };
  }
}
