import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { Topmenu } from 'src/app/domain/topmenu';
import { CrudGlobalService } from 'src/app/services/crud-global.service';



@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

indexClicked:any;
  entities: Topmenu[];

  ojetUrl = "topmenu";



  constructor(private router: Router,
    private crudservice: CrudGlobalService,
    public datepipe: DatePipe,
    private spinner: NgxSpinnerService


  ) {}
  ngOnInit() {
    //  this.currentUserRole = this.token.getUser().roles[0];
    this.crudservice.getlistEntity(this.ojetUrl)
      .subscribe(data => {
        this.entities = data.result;
      });
  }

  currentLiClicked(index:any){
    this.indexClicked=index;
   
  }

}
