import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject } from 'rxjs';
import { authConfig } from '../auth/auth.config';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
 

  constructor(private oauthService: OAuthService, private http: HttpClient) {
    this.oauthService.configure(authConfig);
    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.oauthService.hasValidAccessToken()) {
        console.log('Valid access token');
        this.setToken(this.oauthService.getAccessToken());
      } else {
        console.log('No valid access token');
        this.setToken(null);
      }
    });

    this.oauthService.events.subscribe(event => {
      if (event.type === 'token_received') {
        this.setToken(this.oauthService.getAccessToken());
      }
    });
  }

  private setToken(token: string | null): void {
    this.tokenSubject.next(token);
  }

  public getToken(): string | null {
    return this.tokenSubject.value;
  }

  public getTokenObservable() {
    return this.tokenSubject.asObservable();
  }

  public login(): void {
    this.oauthService.initCodeFlow();
    
  }

  loginCredentials(username: string, password: string): void {
    const body = new HttpParams()
      .set('grant_type', 'authorization_code') // Si usas el flujo ROPC
      .set('client_id', 'angular-app')
      .set('username', username)
      .set('password', password)
      .set('scope', 'openid profile email');

    const headers = new HttpHeaders({
      'Content-Type': 'application/x-www-form-urlencoded',
    });

    this.http.post('http://localhost:9100/oauth/token', body.toString(), { headers }).subscribe(
      (response: any) => {
        console.log('Token recibido:', response);
        this.oauthService.processIdToken(response.id_token, response.access_token);
        this.oauthService.initCodeFlow(); // Para continuar con PKCE si es necesario
      },
      (error: any) => {
        console.error('Error durante el inicio de sesión:', error);
      }
    );
  }
  public logout(): void {
    this.oauthService.logOut();
    this.setToken(null);
  }

  public hasValidAccessToken(): boolean {
    return this.oauthService.hasValidAccessToken();
  }


  public getIdentityClaims(): any {
    return this.decodeToken(this.getToken());
  }


  public getRoles(): string[] {
    const claims = this.getIdentityClaims();
    return claims?.roles || [];
  }
  
  public isAdmin(): boolean {
    const roles = this.getRoles();
    return roles.includes('ROLE_ADMIN');
  }

  private decodeToken(token: string | null): any {
    if (!token) {
      return null;
    }
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }
  
}
