import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../auth/auth.config';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './nav.component.html'
})
export class NavComponent {


  token: string | null = null;
  
  constructor(private oauthService: OAuthService,
    private data: DataService,
    private router: Router
  ){
    this.oauthService.configure(authConfig);
      this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
        if (this.oauthService.hasValidAccessToken()) {
          this.token = this.oauthService.getAccessToken();
          console.log('Token válido detectado:', this.token);
          this.data.tokenEvent.emit(this.token)
        }else{
          this.login();
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


  public login(){
    this.oauthService.initCodeFlow();
  }

  public logout(){
    this.oauthService.logOut();
    this.token = null;
    console.log('Sesión cerrada.');
  }

  public getAccessToken(): string | null {
    // Obtener el token de acceso
    return this.oauthService.getAccessToken();

  }

  public navigateToEventos(): void {
    this.router.navigate(['/']).then(() => {
      window.location.reload();
    });
  }
 
}
