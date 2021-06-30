import { DatePipe, ViewportScroller } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbCarousel, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';
import { Restaurant } from 'src/app/domain/restaurant';
import { CrudGlobalService } from 'src/app/services/crud-global.service';
import { RestaurantService } from 'src/app/services/restaurant.service';

@Component({
  selector: 'app-profil-restaurant',
  templateUrl: './profil-restaurant.component.html',
  styleUrls: ['./profil-restaurant.component.scss']
})
export class ProfilRestaurantComponent implements OnInit {
  ojetUrl = "restaurant";
  element:string;
  public restaurant:Restaurant;
  public retaurants:any[]
  public idrestau:any;
  constructor(private viewportscroller: ViewportScroller,private router: Router,
    private crudservice: CrudGlobalService,
    public datepipe: DatePipe,private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.idrestau= parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    this.crudservice.getLigneById(this.ojetUrl,this.idrestau).subscribe(data => {
      this.restaurant = data.result;
      this.menu('init');
    });  

  }

  menu(el:string ){
    this.element=el;
    console.log(this.element);
    this.viewportscroller.scrollToAnchor(this.element );
  }
goToHome(){
  this.router.navigate(['' ])
}










  // carousel //
  paused = false;
  unpauseOnArrow = false;
  pauseOnIndicator = false;
  pauseOnHover = true;
  pauseOnFocus = true;

  @ViewChild('carousel', {static : true}) carousel: NgbCarousel;

  togglePaused() {
    if (this.paused) {
      this.carousel.cycle();
    } else {
      this.carousel.pause();
    }
    this.paused = !this.paused;
  }

  onSlide(slideEvent: NgbSlideEvent) {
    if (this.unpauseOnArrow && slideEvent.paused &&
      (slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)) {
      this.togglePaused();
    }
    if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
      this.togglePaused();
    }
  }
    // carousel //
}
