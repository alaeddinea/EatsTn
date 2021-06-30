import { Component, NgZone, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personelle } from 'src/app/domain/personelle';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenStorageService } from 'src/app/_services/token-storage.service';
declare var FB: any;

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {
  clickedShoise: number = 1;

  register: boolean = false;
  showInscriptionSimpleUser: boolean = true;
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;

  errorMessage = '';
  roles: string[] = [];
  currentUser: any;
  constructor(private zone: NgZone, private authService: AuthService,
    private tokenStorage: TokenStorageService, private router: Router,) { }

  ngOnInit(): void {

    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;

      this.redirectPage();
    }

  }

  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.chekBlock(this.tokenStorage.getUser().personelle);
        
      //  this.reloadPage();
      },
      err => {
      // this.errorMessage = err.error.message;
        this.errorMessage = "Vérifier votre login ou mot de passe" ;
     
        this.isLoginFailed = true;
      }
    );
  }
  chekBlock(personelle: Personelle){
    if(personelle.block==1){
      this.router.navigate(['404']);
      setTimeout(() => { this.router.navigate(['logoutpage']); }, 2000);
      
      
    }else{
      this.roles = this.tokenStorage.getUser().roles;
    
        this.redirectPage();
    }

  }
  redirectPage(): void {
    
    if (this.roles.some((item) => item == 'ROLE_USER')) {
      this.router.navigate(['edit-profil']);
  }
     else if (this.roles.some((item) => item == 'ROLE_MODERATOR')) {
    this.router.navigate(['edit-profil-professinal']);
}
else if (this.roles.some((item) => item == 'ROLE_ADMIN')) {
  this.router.navigate(['dashboard-admin']);
}

  }





  switchClick(value: number) {
    this.clickedShoise = value;
  }
}
