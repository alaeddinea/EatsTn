import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Restaurant } from 'src/app/domain/restaurant';
import { CrudGlobalService } from 'src/app/services/crud-global.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  pageNumber:number=0;
  pageSize:number=1;
  totalElements:number;
  totalPages:number;
  palceholderFilter: any = 'Frais de livraison';
  filterDeliveryClicked: boolean = false;
  rangeValue = 4;
  display: boolean = false;
  displayDeliveryfee: boolean = false;
  entities: Restaurant[];
  ojetUrl = "restaurant";



  constructor(private router: Router,
    private crudservice: CrudGlobalService,
    public datepipe: DatePipe,
    private spinner: NgxSpinnerService

  ) { }
  ngOnInit() {
  
    //  this.currentUserRole = this.token.getUser().roles[0];
  
    this.crudservice.findpaginated(this.ojetUrl,this.pageNumber,this.pageSize)
    .subscribe(data => {
      this.entities = data.result.content;
      this.totalElements=data.result.totalElements;
      this.totalPages=data.result.totalPages;
      console.log(this.totalElements);;
  
    });
  }
 
  changerPage($event){
    this.pageNumber= $event
    
console.log($event);
  }
  findpaginated(pageNumber:number,pageSize:number){
    this.crudservice.findpaginated(this.ojetUrl,this.pageNumber,this.pageSize)
    .subscribe(data => {
      this.entities =  this.entities.concat(data.result.content);
      
      this.totalElements=data.result.totalElements;
      this.spinner.hide();
    });
  }
getAllrestaurant(){
  this.crudservice.getlistEntity(this.ojetUrl)
  .subscribe(data => {
    this.entities = data.result;

  });
}
  showDialog() {
    this.display = true;
  }
  showDialog2() {
    this.displayDeliveryfee = true;
  }
  filterDeleveryfee(value: any) {
    this.filterDeliveryClicked = true;
    if (value == 0) {
      this.palceholderFilter = 'Livraison gratuite';
    } else if (value == 1) {
      this.palceholderFilter = '1 dt ou moins';
    } else if (value == 2) {
      this.palceholderFilter = '2 dt ou moins';
    } else if (value == 3) {
      this.palceholderFilter = '3 dt ou moins';
    } else {
      this.palceholderFilter = 'Frais de livraison';
      this.filterDeliveryClicked = false;
    }
    console.log(value);
    this.displayDeliveryfee = false;
    this.crudservice.findByDeliveryfeeeLessThanEqual(this.ojetUrl,value)
    .subscribe(data => {
      this.entities =[];
      this.entities = data.result;

    });
  }

  initAllFilter() {
    this.filterDeliveryClicked = false;
    this.palceholderFilter = 'Frais de livraison';
    this.rangeValue = 4;
    this.getAllrestaurant();
  }
  onScrollDown(){
    if(this.pageNumber < this.totalPages){
      this.spinner.show();     
    this.findpaginated(this.pageNumber++,this.pageSize)   
    }
  }
  onScrollUp(){
    console.log("onScrollDown");
  }
}

