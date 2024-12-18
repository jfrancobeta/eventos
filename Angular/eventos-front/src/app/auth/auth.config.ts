import { AuthConfig } from "angular-oauth2-oidc";

export const authConfig: AuthConfig = {
  issuer: 'http://localhost:9100', // Cambia por tu servidor de autorización
  redirectUri: "http://localhost:4200/home", // Redirección tras el login
  clientId: 'client-app',   // ID del cliente
  responseType: 'code',                // PKCE utiliza el flujo de código de autorización
  scope: 'openid profile read write',       // Scopes que deseas solicitar
  showDebugInformation: true,          // Opcional: útil para depuración
  useSilentRefresh: true,              // Para renovar tokens automáticamente
  postLogoutRedirectUri: "http://localhost:4200/"
  
};
