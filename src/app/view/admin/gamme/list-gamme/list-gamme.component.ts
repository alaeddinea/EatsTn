import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Gamme } from 'src/app/domain/gamme';

import { CrudGlobalService } from 'src/app/services/crud-global.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-list-gamme',
  templateUrl: './list-gamme.component.html',
  styleUrls: ['./list-gamme.component.scss']
})
export class ListGammeComponent implements OnInit {

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
    public datepipe: DatePipe,


  ) {

  }
  ngOnInit() {

    //  this.currentUserRole = this.token.getUser().roles[0];
    this.crudservice.getlistEntity(this.ojetUrl)
      .subscribe(data => {
        this.entities = data.result;
      });

    this.addForm = this.formBuilder.group({

      id: [],
      symbole: ['', Validators.required],
      description: ['', Validators.required],


    });
  }
  
  yesDelete() {
    this.delete(this.gammeToDeleted);
    this.displayDelete = false;
  }
  showDialogDelete(entity: Gamme) {
    this.gammeToDeleted = entity;
    this.displayDelete = true;
  }
  delete(entity: Gamme): void {
    this.crudservice.deleteLigne(this.ojetUrl, entity.id)
      .subscribe(data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({ severity: 'success', summary: 'حذف ', detail: 'تم الحذف بنجاح .' });
      });
  }
  edit(entity: Gamme): void {

    this.router.navigate(['edit-gamme', entity.id.toString()]);
  }
  add(): void {
    this.displayAdd = true;
  
  }
  showDialogSujet(gamme) {
    this.gamme = gamme;
    this.display = true;
  }

  close() {
    this.displayDelete = false;
    this.gamme = '';
    this.display = false;
  }
  cancel() {
    this.router.navigate(['dashboard-admin']);
  }


  onSubmit(entity: Gamme) {
    console.log("this.addForm.value");
    console.log(entity);
 
    this.crudservice.createLigne(this.ojetUrl, entity)
      .subscribe(data => {
        this.displayAdd = false;
        this.crudservice.getlistEntity(this.ojetUrl)
          .subscribe(data => {
            this.entities = data.result;
          });

      });
  }
}
