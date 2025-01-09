import { CanActivateFn, Router } from '@angular/router';
import { catchError, filter, firstValueFrom, of, timeout } from 'rxjs';
import { AuthService } from '../services/auth.service';
import { OAuthService } from 'angular-oauth2-oidc';
import { inject } from '@angular/core';

export const userGuard: CanActivateFn = async (route, state) => {
  const authService = inject(AuthService);
    const router = inject(Router);
    const oauthService = inject(OAuthService);
  
    const token = await firstValueFrom(authService.getTokenObservable().pipe(
      filter(token => token !== null),
      timeout(1000), // Esperar un máximo de 5 segundos
      catchError(() => of(null)) // En caso de error o timeout, devolver null
    ));
    if(token == null){
      router.navigate(['/'])
      return false;
    }
    if(isTokenExpired(token)){
      router.navigate(['/'])
      return false
    }
  
    
    
    return true;
  
};

const isTokenExpired = (token: string) => {
  const payload = getPayload(token);
  const exp = payload.exp;
  const now = new Date().getTime() / 1000;
  return now > exp;
};

const getPayload = (token: string) => {
  const payload = token.split('.')[1];
  return JSON.parse(atob(payload));
};


