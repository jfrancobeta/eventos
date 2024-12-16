import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterModule } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../auth/auth.config';
import { DataService } from '../../services/data.service';

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
    private oauthService: OAuthService
  ){

    this.oauthService.configure(authConfig);
        this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
          if (this.oauthService.hasValidAccessToken()) {
            this.token = this.oauthService.getAccessToken();
            console.log('Token válido detectado:', this.token);
            this.data.tokenEvent.emit(this.token)
          }
        });
  
        // Suscribirse a eventos del OAuthService
        this.oauthService.events.subscribe((event) => {
          if (event.type === 'token_received') {
            this.token = this.oauthService.getAccessToken();
            console.log('Token recibido:', this.token);
            
          }
        });
    
  }
  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.url = event.urlAfterRedirects; // Obtener la ruta final después de redirecciones
        console.log('Ruta actual:', this.url);
      }
    });
  }



  public login(){
    this.oauthService.initCodeFlow();
  }

  public logout(){
    this.oauthService.logOut();
    this.token = null;
    console.log('Sesión cerrada.');
  }

  public navigateToEventos(): void {
    this.router.navigate(['/home']).then(() => {
      window.location.reload();
    });
  }
 
}
