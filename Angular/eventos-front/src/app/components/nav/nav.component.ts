import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../auth/auth.config';
import { DataService } from '../../services/data.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html'
})
export class NavComponent implements OnInit {


  token: string | null = null;
  url:string =  ""
  constructor(
    private data: DataService,
    private router: Router,
    private authService: AuthService
  ){

    
  }
  ngOnInit(): void {
    this.authService.getTokenObservable().subscribe(token => {
      this.token = token;
      
    });


    
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.url = event.urlAfterRedirects; // Obtener la ruta final después de redirecciones
        console.log('Ruta actual:', this.url);
      }
    });
  }



  public login(){
    this.authService.login();
  }

  public logout(){
    this.authService.logout();
    console.log('Sesión cerrada.');
  }

  public navigateToEventos(): void {
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }

  get admin(): boolean {
    return this.authService.isAdmin();
  }
 
}
