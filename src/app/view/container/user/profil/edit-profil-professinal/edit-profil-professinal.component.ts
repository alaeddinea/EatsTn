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
  selector: 'app-edit-profil-professinal',
  templateUrl: './edit-profil-professinal.component.html',
  styleUrls: ['./edit-profil-professinal.component.scss']
})
export class EditProfilProfessinalComponent implements OnInit {
  addFormPerso: FormGroup;
  currentUser: any;
  ojetUrlPersonelle: string = 'personelle';
  showSetting :boolean =false;
  personelle:Personelle;
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
      console.log(data.result);
      this.personelle=data.result
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
  businessSuite(){
    this.router.navigate(['business-suite']);
  }
  showSettings(){
    this.showSetting=!this.showSetting;
  }
}
