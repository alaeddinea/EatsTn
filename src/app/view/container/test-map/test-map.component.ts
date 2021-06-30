import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as L from 'leaflet';
@Component({
  selector: 'app-test-map',
  templateUrl: './test-map.component.html',
  styleUrls: ['./test-map.component.scss']
})
export class TestMapComponent implements AfterViewInit {
  private map;
  lat: any;
  lng: any;
  constructor(private router: Router,) { }

  ngAfterViewInit(): void {
    this.getLocation();
  }
  getLocation() {

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        if (position) {
          console.log("{lat:" + position.coords.latitude +
            "lng:" + position.coords.longitude);
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.initMap();
          console.log(this.lat);
          console.log(this.lng);
        }
      },
        (error) => {
          alert("Veuillez activer les services de localisation GPS");
          this.lat = 36.80600158108934;
          this.lng = 10.180517492745441;
          this.initMap();
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  private initMap(): void {
    if (this.lat && this.lng) {
      this.map = L.map('map').setView([this.lat, this.lng], 14);
    } else {
      this.lat = 36.80600158108934;
      this.lng = 10.180517492745441;
      this.map = L.map('map').setView([this.lat, this.lng], 14);
    }
    const tile = L.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
    })
    tile.addTo(this.map);
    const smallIcon = new L.Icon({
      iconUrl: 'assets/img/marker-icon-2x.png',
      iconSize: [35, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });
    
    var marker = L.marker([this.lat, this.lng], { icon: smallIcon }).addTo(this.map);

    this.map.on('click', (e) => {

      this.lat = e.latlng.lat;
      this.lng = e.latlng.lng;
      //  var searchControl = esriGeo.geocode([this.lat, this.lng]);
      //  console.log(searchControl.address);



      console.log("{lat:" + this.lat +
        "lng:" + this.lng);

      this.map.setView([this.lat, this.lng], 16, {
        pan: {
          animate: true,
          duration: 1.5
        },
        zoom: {
          animate: true,
          duration: 15
        }
      });

      marker.setLatLng(e.latlng);


    });

  }

  ConfirmerPosition() {
    console.log("{lat:" + this.lat +
      "lng:" + this.lng);
    window.localStorage.removeItem('lat');
    window.localStorage.setItem('lat', JSON.stringify(this.lat));
    window.localStorage.removeItem('lng');
    window.localStorage.setItem('lng', JSON.stringify(this.lng));
    this.router.navigate(['app-home']);
    //this.map = L.map('map').setView([this.lat, this.lng], 16);
  }
  goToHome() {
    this.router.navigate([''])
  }

}