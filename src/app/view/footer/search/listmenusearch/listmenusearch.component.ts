import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Topmenu } from 'src/app/domain/topmenu';
import { CrudGlobalService } from 'src/app/services/crud-global.service';

@Component({
  selector: 'app-listmenusearch',
  templateUrl: './listmenusearch.component.html',
  styleUrls: ['./listmenusearch.component.scss']
})
export class ListmenusearchComponent implements OnInit {

  entities: Topmenu[];

  ojetUrl = "topmenu";



  constructor(private router: Router,
    private crudservice: CrudGlobalService,
    public datepipe: DatePipe,


  ) {}
  ngOnInit() {
    //  this.currentUserRole = this.token.getUser().roles[0];
    this.crudservice.getlistEntity(this.ojetUrl)
      .subscribe(data => {
        this.entities = data.result;
      });
  }
 
}

