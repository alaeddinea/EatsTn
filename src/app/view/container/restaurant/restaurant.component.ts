import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss']
})
export class RestaurantComponent implements OnInit {
@Input() retaurant :any ;
  constructor(private router: Router) { }

  ngOnInit(): void {
   
  }
  onSelect(retaurant){
this.router.navigate(['/profilrestaurant',retaurant.id ])
  }  

}
