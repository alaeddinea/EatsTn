import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Personelle } from 'src/app/domain/personelle';
import { CrudGlobalService } from 'src/app/services/crud-global.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-edit-profil',
  templateUrl: './edit-profil.component.html',
  styleUrls: ['./edit-profil.component.scss']
})
export class EditProfilComponent implements OnInit {
  addFormPerso: FormGroup;
  currentUser: any;
  ojetUrlPersonelle: string = 'personelle';
  personelle:Personelle;
  showSetting :boolean =false;
  constructor(private router: Router,private tokenStorageService: TokenStorageService,
    private crudservice: CrudGlobalService,
     private token: TokenStorageService,
    private messageService: MessageService,
    private formBuilder: FormBuilder,private userService: UserService,
    public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    this.addFormPerso = this.formBuilder.group({
      id: [],
     
      sexe: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      phone: ['', Validators.required],
      dateCreation :['', Validators.required],
      mail: [],
      imgs: [],
      block:[],
      com: [],
   

      
     });
     ; 
     this.crudservice.getLigneById(this.ojetUrlPersonelle,this.currentUser.personelle.id).subscribe(data => {
      this.addFormPerso.setValue(data.result); 
      this.personelle=data.result
      console.log(data.result);
       
      });
  }
  onSubmit(addFormPerso){
   
    console.log(addFormPerso);
  this.crudservice.createLigne(this.ojetUrlPersonelle,addFormPerso)
  .subscribe( data => {
    console.log(data);
    alert('profil mise a jour ')
    this.currentUser = this.token.getUser();
   });
  }


  logout(): void {
    this.tokenStorageService.signOut();
    // window.location.reload();
    this.router.navigate(['app-profil']);

  }
  showSettings(){
    this.showSetting=!this.showSetting;
  }
}
