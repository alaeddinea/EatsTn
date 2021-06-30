import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { DashboardAdminComponent } from './view/admin/dashboard-admin/dashboard-admin.component';
import { EditGammeComponent } from './view/admin/gamme/edit-gamme/edit-gamme.component';
import { ListGammeComponent } from './view/admin/gamme/list-gamme/list-gamme.component';

import { EditTopmenuComponent } from './view/admin/topmenu/edit-topmenu/edit-topmenu.component';
import { ListTopmenuComponent } from './view/admin/topmenu/list-topmenu/list-topmenu.component';
import { AddRestaurantComponent } from './view/container/add-restaurant/add-restaurant.component';
import { BusinessSuiteComponent } from './view/container/businessSuite/business-suite/business-suite.component';
import { FacebookComponent } from './view/container/facebook/facebook.component';
import { HomeComponent } from './view/container/home/home.component';
import { MapsComponent } from './view/container/maps/maps.component';
import { TestMapComponent } from './view/container/test-map/test-map.component';
import { InscriptionProfessionalComponent } from './view/container/user/inscription-professional/inscription-professional.component';
import { EditProfilProfessinalComponent } from './view/container/user/profil/edit-profil-professinal/edit-profil-professinal.component';
import { EditProfilComponent } from './view/container/user/profil/edit-profil/edit-profil.component';
import { ProfilComponent } from './view/container/user/profil/profil.component';
import { SearchComponent } from './view/footer/search/search/search.component';
import { NotfoundComponent } from './view/notfound/notfound.component';
import { ProfilRestaurantComponent } from './view/profilrestaurant/profil-restaurant/profil-restaurant.component';

const routes: Routes = [
  { path: '', component: MapsComponent },
  { path: 'app-home', component: HomeComponent },

  { path: 'profilrestaurant/:id', component: ProfilRestaurantComponent },
  { path: 'edit-profil', component: EditProfilComponent },
  { path: 'edit-profil-professinal', component: EditProfilProfessinalComponent },
  { path: 'app-profil', component: ProfilComponent },
  { path: 'app-inscription-professional', component: InscriptionProfessionalComponent },
  

  { path: 'app-search', component: SearchComponent },
  { path: 'add-restaurant', component: AddRestaurantComponent },
  { path: 'add-restaurant', component: AddRestaurantComponent },


  { path: 'app-facebook', component: FacebookComponent },
  { path: 'test-map', component: TestMapComponent },
  
  { path: 'business-suite', component: BusinessSuiteComponent },

/** Admin  */
  { path: 'dashboard-admin', component: DashboardAdminComponent },

  {path:"list-topmenu" , component: ListTopmenuComponent }, 
  {path:"edit-topmenu/:id" , component: EditTopmenuComponent }, 

  {path:"list-gamme" , component: ListGammeComponent }, 
  {path:"edit-gamme/:id" , component: EditGammeComponent },


  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    anchorScrolling: 'enabled',
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }



