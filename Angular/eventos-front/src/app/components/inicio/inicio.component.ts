import { Component } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { authConfig } from '../../auth/auth.config';
import { NavComponent } from "../nav/nav.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [FooterComponent],
  templateUrl: './inicio.component.html'
})
export class InicioComponent {

    constructor(
    ){
      
    }

    
  
   

}
