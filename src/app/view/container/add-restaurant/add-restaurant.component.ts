import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Categoriemenu } from 'src/app/domain/categoriemenu';
import { Restaurant } from 'src/app/domain/restaurant';
import { CrudGlobalService } from 'src/app/services/crud-global.service';
import * as L from 'leaflet';
import { MenuItem } from 'primeng/api';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Gamme } from 'src/app/domain/gamme';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.scss']
})
export class AddRestaurantComponent implements OnInit {
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  private map;
  lat: any;
  lng: any;
  addForm: FormGroup;
  ojetUrl: string = 'restaurant';
  ojetUrlCategoriemenu: string = 'categoriemenu';
  urlleft: any = 'assets/menu/an.jpg';
  filesleft: any; imagePathleft: any;
  urltop: any = 'assets/menu/an.jpg';
  urlbuttom: any = 'assets/menu/an.jpg';

  filestop: any; imagePathtop: any;
  filesbuttom: any; imagePathbuttom: any;

  showDetailHoraire: boolean = false;
  items: MenuItem[];
  displayMap: boolean = false;
  ojetUrlGamme = "gamme";
  gammes: Gamme[] = [];
  constructor(private httpClient: HttpClient, private formBuilder: FormBuilder, private router: Router, private crudservice: CrudGlobalService) { }

  ngOnInit() {


    this.firstFormGroup = this.formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this.formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.addForm = this.formBuilder.group({
      id: [],
      // Général
      title: ['', Validators.required],
      description: ['', Validators.required],
      // Contact
      phone: ['', Validators.required],
      whatsapp:['', Validators.required],
      mail: ['', Validators.required],
      site: ['', Validators.required],
      facebook: ['', Validators.required],
      instagrame: ['', Validators.required],
      //Emlacement 
      addresse: ['', Validators.required],
      ville: ['', Validators.required],
      codepostale: ['', Validators.required],
      //Localisation sur la carte
      lat: ['', Validators.required],
      lng: ['', Validators.required],

      // Horaires
      typeHoraire: ['', Validators.required],

      lunLancement:  ['', Validators.required],
      lunFermeture:  ['', Validators.required],

      marLancement:  ['', Validators.required],
      marFermeture:  ['', Validators.required],

      merLancement:  ['', Validators.required],
      merFermeture:  ['', Validators.required],

      jeuLancement:  ['', Validators.required],
      jeuFermeture:  ['', Validators.required],

      venLancement:  ['', Validators.required],
      venFermeture:  ['', Validators.required],

      samLancement:  ['', Validators.required],
      samFermeture:  ['', Validators.required],

      dimLancement:  ['', Validators.required],
      dimFermeture:  ['', Validators.required],

      // Gamme de prix
      gamme:   ['', Validators.required],

      // Personelle
      personelle:  ['', Validators.required],


      // block
      block:  [],

      //prix
      deliveryfeee:   ['', Validators.required],


      // images
      imgleft:   ['', Validators.required],
      imgtop:   ['', Validators.required],
      imgbuttom:  ['', Validators.required],
    });

    this.getAllGamme();
  }
  getAllGamme() {
    this.crudservice.getlistEntity(this.ojetUrlGamme)
      .subscribe(data => {
        this.gammes = data.result;
        console.log(this.gammes);
        console.log('ok');
      });
  }
  onFileChangedleft(event) {
    this.filesleft = event.target.files;
    if (this.filesleft.length === 0) {

      return;
    }

    const mimeType = this.filesleft[0].type;
    if (mimeType.match(/image\/*/) == null) {

      return;
    }

    const reader = new FileReader();
    this.imagePathleft = this.filesleft;
    reader.readAsDataURL(this.filesleft[0]);
    reader.onload = (_event) => {

      this.urlleft = reader.result;
      console.log(this.urlleft);
    }
  }
  onFileChangedtop(event) {
    this.filestop = event.target.files;
    if (this.filestop.length === 0) {

      return;
    }

    const mimeType = this.filestop[0].type;
    if (mimeType.match(/image\/*/) == null) {

      return;
    }

    const reader = new FileReader();
    this.imagePathtop = this.filestop;
    reader.readAsDataURL(this.filestop[0]);
    reader.onload = (_event) => {

      this.urltop = reader.result;

    }
  }
  onFileChangedbuttom(event) {
    this.filesbuttom = event.target.files;
    if (this.filesbuttom.length === 0) {

      return;
    }

    const mimeType = this.filesbuttom[0].type;
    if (mimeType.match(/image\/*/) == null) {

      return;
    }

    const reader = new FileReader();
    this.imagePathbuttom = this.filesbuttom;
    reader.readAsDataURL(this.filesbuttom[0]);
    reader.onload = (_event) => {

      this.urlbuttom = reader.result;

    }
  }
  onSubmit(restaurant: Restaurant) {

    console.log(restaurant);
    /*restaurant.imgleft = this.urlleft;
    restaurant.imgtop = this.urltop;
    restaurant.imgbuttom = this.urlbuttom;

    this.crudservice.createLigne(this.ojetUrl, restaurant)
      .subscribe(data => {
        //this.router.navigate(['list-restaurant']);
        const categoriemenu: Categoriemenu = new Categoriemenu();
        categoriemenu.title = "Spécialités";
        categoriemenu.restaurant = data.result.id;
        categoriemenu.priorite = 1;
        this.crudservice.createLigne(this.ojetUrlCategoriemenu, categoriemenu)
          .subscribe(data => {
            console.log(data)
          });
      });*/
  }
  cancel() {
    // this.router.navigate(['list-restaurant']);
  }

  changeHoraireChoix(e) {
    console.log(e.target.value);
    if (e.target.value === '3') {
      this.showDetailHoraire = true;
    } else {
      this.showDetailHoraire = false;
    }
  }
  showMap() {
    this.displayMap = true;
  }
  close() {
    this.displayMap = false;
  }
  changeGender(e) {
    console.log(e.target.value);
  }
}