import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Topmenu } from 'src/app/domain/topmenu';
import { CrudGlobalService } from 'src/app/services/crud-global.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';



@Component({
  selector: 'app-edit-topmenu',
  templateUrl: './edit-topmenu.component.html',
  styleUrls: ['./edit-topmenu.component.scss']
})
export class EditTopmenuComponent implements OnInit {
  url: any ;
  files: any; imagePath: any;
  constructor(private router: Router, private tokenStorageService: TokenStorageService,
    private crudservice: CrudGlobalService,
    private token: TokenStorageService,
    private messageService: MessageService,
    private formBuilder: FormBuilder, private userService: UserService,
    public datepipe: DatePipe
    , private activatedRoute : ActivatedRoute) {

  }

  addForm: FormGroup;
  ojetUrl: string = 'topmenu';


  ngOnInit() {
  
   let entityId= parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    if (!entityId) {

      this.router.navigate(['list-topmenu']);
      return;
    }
    this.addForm = this.formBuilder.group({
      id: [],
      title: ['', Validators.required],
      image: ['', Validators.required],

    });

    this.crudservice.getLigneById(this.ojetUrl, entityId)
      .subscribe(data => {
        this.addForm.setValue(data.result);
        this.url=data.result.image;
      });
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
  onSubmit(topmenu:Topmenu) {
    console.log("this.addForm.value");
    console.log(topmenu);
    console.log("this.addForm.value");
    topmenu.image = this.url;
    this.crudservice.createLigne(this.ojetUrl, topmenu)
      .subscribe(data => {
        this.router.navigate(['dashboard-admin']);
      });
  }
  cancel() {
    this.router.navigate(['dashboard-admin']);
  }

}