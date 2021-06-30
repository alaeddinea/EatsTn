import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './view/menu/items/items.component';
import { ItemComponent } from './view/menu/item/item.component';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FiltresComponent } from './view/filtre/filtres/filtres.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import {ButtonModule} from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ConfirmationService, MessageService } from 'primeng/api';
import {DialogModule} from 'primeng/dialog';
import { RestaurantsComponent } from './view/container/restaurants/restaurants.component';
import { RestaurantComponent } from './view/container/restaurant/restaurant.component';
import {SplitterModule} from 'primeng/splitter';
import { NewRestaurantsComponent } from './view/container/new-restaurants/new-restaurants.component';
import { NewRestaurantComponent } from './view/container/new-restaurant/new-restaurant.component';
import { FooterComponent } from './view/footer/footer/footer.component';
import { ProfilRestaurantComponent } from './view/profilrestaurant/profil-restaurant/profil-restaurant.component';
import { CommonModule, DatePipe } from '@angular/common';
import { NotfoundComponent } from './view/notfound/notfound.component';
import { HomeComponent } from './view/container/home/home.component';
import { FavoryComponent } from './view/footer/favory/favory.component';
import { RestaurantService } from './services/restaurant.service';
import { HttpClientModule } from '@angular/common/http';
import { ProfilemenuComponent } from './view/profilrestaurant/profilemenu/profilemenu.component';


import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { CrudGlobalService } from './services/crud-global.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchComponent } from './view/footer/search/search/search.component';
import { ListmenusearchComponent } from './view/footer/search/listmenusearch/listmenusearch.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxSpinnerModule } from "ngx-spinner";
import { MapsComponent } from './view/container/maps/maps.component';
import { ProfilComponent } from './view/container/user/profil/profil.component';
import {TabViewModule} from 'primeng/tabview';
import { InscriptionUserComponent } from './view/container/user/inscription-user/inscription-user.component';
import { InscriptionProfessionalComponent } from './view/container/user/inscription-professional/inscription-professional.component';
import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { EditProfilComponent } from './view/container/user/profil/edit-profil/edit-profil.component';
import { AddRestaurantComponent } from './view/container/add-restaurant/add-restaurant.component';
import { EditProfilProfessinalComponent } from './view/container/user/profil/edit-profil-professinal/edit-profil-professinal.component';
import { BusinessSuiteComponent } from './view/container/businessSuite/business-suite/business-suite.component';
import {AccordionModule} from 'primeng/accordion';
import {MatStepperModule} from '@angular/material/stepper';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    ItemComponent,
    FiltresComponent,
    RestaurantsComponent,
    RestaurantComponent,
    NewRestaurantsComponent,
    NewRestaurantComponent,
    FooterComponent,
    ProfilRestaurantComponent,
    NotfoundComponent,
    HomeComponent,
    FavoryComponent,
    ProfilemenuComponent,
    SearchComponent,
    ListmenusearchComponent,
    MapsComponent,
    ProfilComponent,
    InscriptionUserComponent,
    InscriptionProfessionalComponent,
    EditProfilComponent,
    AddRestaurantComponent,
    EditProfilProfessinalComponent,
    BusinessSuiteComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule,
    SplitButtonModule,
    ButtonModule,
    InputTextModule,
    TableModule,
    MessagesModule,
    ConfirmDialogModule,
    DialogModule,
    BrowserAnimationsModule,
   
    SplitterModule,
    NgbModule,
    NgbPaginationModule,
    HttpClientModule,
    NgxPaginationModule,
    InfiniteScrollModule,
    NgxSpinnerModule,
    TabViewModule,
    ReactiveFormsModule ,
    AccordionModule,
    MatStepperModule,
    MatInputModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
