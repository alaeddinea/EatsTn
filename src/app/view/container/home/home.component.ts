import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
deleveryfee:any;
lat:any;
lng :any;
  constructor(private activatedRoute :ActivatedRoute) { }

  ngOnInit(): void {
   // this.lat= parseInt(this.activatedRoute.snapshot.paramMap.get('lat'));
   // this.lng= parseInt(this.activatedRoute.snapshot.paramMap.get('lng'));
    this.lat=JSON.parse(window.localStorage.getItem('lat'));
    this.lng=JSON.parse(window.localStorage.getItem('lng'));
    console.log("from home : lat ="+this.lat+" | lng ="+this.lng);
  }
  getMsgFromBaby($event){
    this.deleveryfee=$event;
    }
}
