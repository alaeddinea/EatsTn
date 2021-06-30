import { Time } from "@angular/common";
import { Gamme } from "./gamme";
import { Gouvernorat } from "./gouvernorat";
import { Personelle } from "./personelle";


export class Restaurant {
    id?;
    // Général
    title: string;
    description: any;
    // Contact
    phone: any;
    whatsapp: any;
    mail: any;
    site: any;
    facebook: any;
    instagrame: any;

    //Emlacement 
    addresse:any;
    ville: Gouvernorat;
    codepostale: any;
    //Localisation sur la carte
    lat: any;
    lng: any;

    // Horaires
    typeHoraire: any;

    lunLancement: Time;
    lunFermeture: Time;

    marLancement: Time;
    marFermeture: Time;

    merLancement: Time;
    merFermeture: Time;

    jeuLancement: Time;
    jeuFermeture: Time;

    venLancement: Time;
    venFermeture: Time;

    samLancement: Time;
    samFermeture: Time;

    dimLancement: Time;
    dimFermeture: Time;

    // Gamme de prix
    gamme: Gamme;

    // Personelle
    personelle: Personelle;


   
    // block
	 block:any;

     //prix
     deliveryfeee: any;


    // images
    imgleft: any;
    imgtop: any;
    imgbuttom: any;
}
