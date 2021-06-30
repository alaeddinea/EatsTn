import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Gamme } from 'src/app/domain/gamme';

import { CrudGlobalService } from 'src/app/services/crud-global.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-edit-gamme',
  templateUrl: './edit-gamme.component.html',
  styleUrls: ['./edit-gamme.component.scss']
})
export class EditGammeComponent implements OnInit {
  entities: Gamme[];
  gammeToDeleted: Gamme;
  ojetUrl = "gamme";
  display: boolean = false;
  displayDelete: boolean = false;
  displayAdd: boolean = false;
  gamme: any = '';
  addForm: FormGroup;
;

constructor(private router: Router, private tokenStorageService: TokenStorageService,
  private crudservice: CrudGlobalService,
  private token: TokenStorageService,
  private messageService: MessageService,
  private formBuilder: FormBuilder, private userService: UserService,
  public datepipe: DatePipe
  , private activatedRoute : ActivatedRoute) {
  }
  ngOnInit(): void {
    
   let entityId= parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
   if (!entityId) {

     this.router.navigate(['dashboard-admin']);
     return;
   }
    this.addForm = this.formBuilder.group({

      id: [],
      symbole: ['', Validators.required],
      description: ['', Validators.required],
    });

    this.crudservice.getLigneById(this.ojetUrl, entityId)
    .subscribe(data => {
      this.addForm.setValue(data.result);
      
    });
  }



  onSubmit(entity:Gamme) {
    console.log("this.addForm.value");
    console.log(entity);
    console.log("this.addForm.value");
   
    this.crudservice.createLigne(this.ojetUrl, entity)
      .subscribe(data => {
        this.router.navigate(['dashboard-admin']);
      });
  }
  cancel() {
    this.router.navigate(['dashboard-admin']);
  }
}
