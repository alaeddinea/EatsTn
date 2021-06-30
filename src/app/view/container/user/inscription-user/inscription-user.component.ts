import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Personelle } from 'src/app/domain/personelle';
import { CrudGlobalService } from 'src/app/services/crud-global.service';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-inscription-user',
  templateUrl: './inscription-user.component.html',
  styleUrls: ['./inscription-user.component.scss']
})
export class InscriptionUserComponent implements OnInit {
  errorMessage: any;
  seccussMessage:any;
  showNext: boolean = true;

  addFormPerso: FormGroup;
  addFormUser: FormGroup;
  personelleLocal: Personelle;
  userLocal = {};
  userLocalLogin = {};
  ojetUrl = "personelle"

  role: any[];
  date: Date;
  idPersonelle: any;
  constructor(private datePipe: DatePipe, private authService: AuthService,
    private tokenStorage: TokenStorageService, private router: Router, private formBuilder: FormBuilder, private crudservice: CrudGlobalService
  ) { }

  ngOnInit(): void {
    this.date = new Date();
    // let latest_date = this.datePipe.transform(this.date, 'yyyy-MM-dd');
    // console.log(latest_date);
    this.role = [];
    this.role.push("user");
    this.addFormPerso = this.formBuilder.group({
      id: [],
      sexe: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      phone: ['', Validators.required],
      dateCreation: ['', Validators.required],
      mail: ['', Validators.required],
      imgs: [],


    });


    this.addFormUser = this.formBuilder.group({

      login: ['', Validators.required],
      pwd1: ['', Validators.required],
      pwd2: ['', Validators.required],

    });
  }
  inscriptionProfessionnel() {
    this.router.navigate(['app-inscription-professional'])
  }
  next(addFormPerso) {
    this.personelleLocal = addFormPerso.value;
    console.log(this.personelleLocal);
    this.showNext = !this.showNext;
  }
  onSubmitUser(): void {



    if (this.addFormUser.controls['pwd1'].value == this.addFormUser.controls['pwd2'].value) {
      console.log(this.addFormUser.controls['pwd1'].value);


      // verfier si le UserName existe déja 


      this.personelleLocal.dateCreation = this.date;
      this.crudservice.createLigne(this.ojetUrl, this.personelleLocal)
        .subscribe(data => {
          this.idPersonelle = data.result.id;
          this.userLocal = {
            username: this.addFormUser.controls['login'].value,
            personelle: data.result,
            role: this.role, /// stop here 
            password: this.addFormUser.controls['pwd1'].value
          };

          this.authService.register(this.userLocal)
            .subscribe(
              data => {
              this.router.navigate(['app-profil']);
              this.seccussMessage='Utilisateur crée avec succès';
            }
              , error => {
                this.errorMessage = error.error.message;
                console.log(error);
                this.crudservice.deleteLigne(this.ojetUrl, this.idPersonelle).subscribe(data => { });
              });

        });
    } else {
      this.errorMessage = 'verfieir les deux mots de passe ';
    }
  }
}
