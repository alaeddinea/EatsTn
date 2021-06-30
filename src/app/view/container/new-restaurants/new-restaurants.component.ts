import { Component, OnInit } from '@angular/core';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-new-restaurants',
  templateUrl: './new-restaurants.component.html',
  styleUrls: ['./new-restaurants.component.scss']
})
export class NewRestaurantsComponent implements OnInit {
  public newretaurants:any[];
  constructor(private restaurantService: RestaurantService){

  }

  ngOnInit(): void {
    this.restaurantService.getAll().subscribe(data => {
      this.newretaurants=data;
      
    });
  }
}