import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  _jsonURLRESTAU ="assets/restaurants.json";
  _jsonURLMENU ="assets/menus.json";
  constructor(private httpClient: HttpClient) {
    
   }
   public  getAll(): Observable<any> {
    return this.httpClient.get(this._jsonURLRESTAU);
  }
  public  getAllMenu(): Observable<any> {
    return this.httpClient.get(this._jsonURLMENU);
  }
}
