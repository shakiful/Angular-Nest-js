import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WeatherData } from './weather.model';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) {}


  fetchWeatherData(): Observable<any> {
    const apiUrl = `http://localhost:3000/api/weather/`;

    return this.http.get(apiUrl);
  }
}
