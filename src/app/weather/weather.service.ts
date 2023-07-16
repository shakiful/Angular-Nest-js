import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http:HttpClient) {}


  fetchWeatherData(page: number, limit: number): Observable<any> {
    const apiUrl = `http://localhost:3000/api/weather/paginated`;

    let params = new HttpParams();
    params = params.set('page', page);
    params = params.set('limit', limit);

    // Send the API request with the params
    return this.http.get(apiUrl, { params });

  }
}
