import { Component, OnInit } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventosService } from '../../services/eventos.service';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../auth/auth.config';
import { AsistentesService } from '../../services/asistentes.service';
import { Asistente } from '../../models/Asistente';
import { signalSetFn } from '@angular/core/primitives/signals';

@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [],
  templateUrl: './evento.component.html'
})
export class EventoComponent implements OnInit {

  eventos: Evento[] = []
  token: string | null = null;
  asistente!: Asistente;

  constructor(private serviceEventos: EventosService,
    private oauthService: OAuthService,
    private asistenteService: AsistentesService
  ){
      this.oauthService.configure(authConfig);
      this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
        if (this.oauthService.hasValidAccessToken()) {
          this.token = this.oauthService.getAccessToken();
          console.log('Token válido detectado:', this.token);
          this.findEvent(); // Cargar los eventos al inicio si el token es válido
        }
      });

      // Suscribirse a eventos del OAuthService
      this.oauthService.events.subscribe((event) => {
        if (event.type === 'token_received') {
          this.token = this.oauthService.getAccessToken();
          console.log('Token recibido:', this.token);
          this.findEvent(); // Actualizar los eventos después de recibir el token
        }
      });
  }
  ngOnInit(): void {
    if(this.token){

      this.findEvent()
    }
  }

  public subscribe(evento: number){
    console.log("id" + evento)
    const asistente2: Asistente = {} as Asistente;
    asistente2.evento_id = evento;
    asistente2.date = new Date();
    this.asistenteService.crear(asistente2).subscribe(asis => {
      this.asistente = asis
      console.log("creado")
    })
    
  }
  public login(){
    this.oauthService.initCodeFlow();
  }

  public logout(){
    this.oauthService.logOut();
    this.token = null;
    this.eventos = [];
    console.log('Sesión cerrada.');
  }

  public getAccessToken(): string | null {
    // Obtener el token de acceso
    return this.oauthService.getAccessToken();

  }

  

  findEvent(){
    if(this.token != null){
      this.serviceEventos.findAll().subscribe(evento => {
        this.eventos = evento
      
      })
    }
  }
}
