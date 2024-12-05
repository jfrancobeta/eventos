import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = inject(OAuthService).getAccessToken();
  if(token != undefined){
    const authRequest = req.clone({
      headers: req.headers.set("Authorization", 'Bearer ' + token)
    })
    return next(authRequest)
  }
  return next(req);
};
