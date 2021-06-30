import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-restaurant',
  templateUrl: './new-restaurant.component.html',
  styleUrls: ['./new-restaurant.component.scss']
})
export class NewRestaurantComponent implements OnInit {
@Input() newretaurant :any ; 
  constructor() { }

  ngOnInit(): void {
  }

}
