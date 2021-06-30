import { DatePipe, ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/domain/article';
import { Categoriemenu } from 'src/app/domain/categoriemenu';
import { CrudGlobalService } from 'src/app/services/crud-global.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-profilemenu',
  templateUrl: './profilemenu.component.html',
  styleUrls: ['./profilemenu.component.scss']
})
export class ProfilemenuComponent implements OnInit {
  indexClicked:any;
  element:string;
 @Input() idrestau :any ; 
 menus:any;
 
 entitiesCategoriemenu: Categoriemenu[];
 entitiesArticle: Article[];
 ojetUrl = "categoriemenu";

 ojetUrlArticle = "article";



 constructor(private viewportscroller: ViewportScroller,private router: Router,
   private crudservice: CrudGlobalService,
   public datepipe: DatePipe,


 ) {}
 ngOnInit() {

    this.crudservice.findCategorieByRestaurant(this.ojetUrl,this.idrestau)
    .subscribe(data => {
      this.entitiesCategoriemenu = data.result;
   
     
    });

     this.getAllArticle();
 }


  getAllArticle(){
    this.crudservice.findArticleByRestaurant(this.ojetUrlArticle,this.idrestau)
    .subscribe(data => {
      this.entitiesArticle = data.result;
    });

  }

  menu(el:string,index ){
    this.indexClicked=index;
    this.element=el;
    console.log(this.element);
    this.viewportscroller.scrollToAnchor(this.element );

  }

  
}
