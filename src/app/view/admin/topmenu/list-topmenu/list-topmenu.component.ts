import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Topmenu } from 'src/app/domain/topmenu';
import { CrudGlobalService } from 'src/app/services/crud-global.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';



@Component({
  selector: 'app-list-topmenu',
  templateUrl: './list-topmenu.component.html',
  styleUrls: ['./list-topmenu.component.scss']
})
export class ListTopmenuComponent implements OnInit {

  entities: Topmenu[];
  TopmenuToDeleted: Topmenu;
  ojetUrl = "topmenu";
  display: boolean = false;
  displayDelete: boolean = false;
  displayAdd: boolean = false;
  topmenu: any = '';

  addForm: FormGroup;
  url: any = 'assets/menu/an.jpg';
  files: any; imagePath: any;

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

      title: ['', Validators.required],
      image: ['', Validators.required],


    });
  }


  yesDelete() {
    this.delete(this.TopmenuToDeleted);
    this.displayDelete = false;
  }
  showDialogDelete(entity: Topmenu) {
    this.TopmenuToDeleted = entity;
    this.displayDelete = true;
  }
  delete(entity: Topmenu): void {
    this.crudservice.deleteLigne(this.ojetUrl, entity.id)
      .subscribe(data => {

        this.entities = this.entities.filter(u => u !== entity);
        this.messageService.add({ severity: 'success', summary: 'حذف ', detail: 'تم الحذف بنجاح .' });
      });
  }
  edit(entity: Topmenu): void {

    this.router.navigate(['edit-topmenu', entity.id.toString()]);
  }


  add(): void {
    this.displayAdd = true;
    //this.router.navigate(['add-topmenu']);
  }
  showDialogSujet(topmenu) {
    this.topmenu = topmenu;
    this.display = true;
  }

  close() {
    this.displayDelete = false;
    this.topmenu = '';
    this.display = false;
  }

  onFileChanged(event) {
    this.files = event.target.files;
    if (this.files.length === 0) {

      return;
    }

    const mimeType = this.files[0].type;
    if (mimeType.match(/image\/*/) == null) {

      return;
    }

    const reader = new FileReader();
    this.imagePath = this.files;
    reader.readAsDataURL(this.files[0]);
    reader.onload = (_event) => {

      this.url = reader.result;

    }
  }
  onSubmit(topmenu: Topmenu) {
    console.log("this.addForm.value");
    console.log(topmenu);
    console.log("this.addForm.value");
    topmenu.image = this.url;
    this.crudservice.createLigne(this.ojetUrl, topmenu)
      .subscribe(data => {
        this.displayAdd = false;
        this.crudservice.getlistEntity(this.ojetUrl)
          .subscribe(data => {
            this.entities = data.result;
          });

      });
  }
  cancel() {
    this.router.navigate(['dashboard-admin']);
  }

}