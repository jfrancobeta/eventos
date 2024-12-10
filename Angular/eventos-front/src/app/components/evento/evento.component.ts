import { Component, ElementRef, OnInit, ViewChild, viewChild } from '@angular/core';
import { Evento } from '../../models/evento';
import { EventosService } from '../../services/eventos.service';
import { OAuthModule, OAuthService } from 'angular-oauth2-oidc';
import { authConfig } from '../../auth/auth.config';
import { AsistentesService } from '../../services/asistentes.service';
import { Asistente } from '../../models/Asistente';
import { signalSetFn } from '@angular/core/primitives/signals';
import Swal from 'sweetalert2';
import { RouterModule } from '@angular/router';
import { DataService } from '../../services/data.service';
import { DatePipe } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

declare var bootstrap: any;
@Component({
  selector: 'app-evento',
  standalone: true,
  imports: [RouterModule,FormsModule],
  providers: [DatePipe],
  templateUrl: './evento.component.html'
})
export class EventoComponent implements OnInit {

  eventos: Evento[] = []
  miseventos: Evento[] = []
  token: string | null = null;
  asistente!: Asistente;
  userId: number | null = null;
  evento!: Evento ;

  constructor(private serviceEventos: EventosService,
    private data:DataService,
    private asistenteService: AsistentesService,
    private eventoService: EventosService,
    private datapipe: DatePipe
  ){
      this.evento = new Evento()
  }
  ngOnInit(): void {
    this.data.tokenEvent.subscribe(token => {
      this.token = token

      if(this.token != null){
        const payload = JSON.parse(atob(this.token.split('.')[1]))
        this.userId = payload.data
      }
      this.findEvent()
    })

    
  }

  onSubmit(eventoForm: NgForm){
    
    if(eventoForm.valid){
      const fechaCompleta = `${this.evento.fecha} ${this.evento.hora}`;
      const EventoCompleto:Evento = {...this.evento, fecha: new Date(fechaCompleta)}
      console.log(EventoCompleto)
      if(this.evento.id > 0){
      this.serviceEventos.editar(EventoCompleto).subscribe({
        next: (eventoUpadte) => {
          this.eventos = this.eventos.map(u => {
            if(u.id == eventoUpadte.id){
              return {... eventoUpadte}
            }
            return u
          })
          Swal.fire({
            title: "Buen trabajo",
            text: "Evento Actualizado",
            icon: "success"
          });
        }
      })
      }else{
        
        this.eventoService.crear(EventoCompleto).subscribe({ 
          next: (eventoCreated) => {
          this.eventos = [... this.eventos, {... eventoCreated}]
          Swal.fire({
            title: "Buen Trabajo!",
            text: "Evento Creado",
            icon: "success"
          });
        },
        error: (err) => {
          console.log(err)
        }})
      }
      
      
    }
    eventoForm.reset()
  }

  formatDate(date:Date): string{
    const dateObj = new Date(date); // Convertir la cadena de fecha a un objeto Date
    return this.datapipe.transform(dateObj, 'dd/MM/yyyy HH:mm') || ''; // Formato que necesites
  }

  public subscribe(evento: number){
    const asistente2: Asistente = {} as Asistente;
    asistente2.evento_id = evento;
    asistente2.date = new Date();
    this.asistenteService.crear(asistente2).subscribe(asis => {
      this.asistente = asis
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        }
      });
      Toast.fire({
        icon: "success",
        title: "Suerte en tu Evento"
      });
    })
    
  }
 

  

  findEvent(){
    if(this.token != null){
      this.serviceEventos.findAll().subscribe(evento => {
        this.eventos = evento
        if(this.eventos.length > 0){
          this.miseventos = this.eventos.filter(evento => evento.usuario == this.userId)
        }
      })
    }
  }

  eliminar(id:number){
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.eventoService.eliminar(id).subscribe( () => {
          this.miseventos = this.miseventos.filter(evento => evento.id != id)
          this.eventos = this.eventos.filter(evento => evento.id != id)
        })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    
  }

  
  @ViewChild('createEventModal') modalElement: ElementRef | undefined;
  editar(evento:Evento){
    this.evento = new Evento()
    
    const fechaValida = new Date(evento.fecha);
    const fechaAux = fechaValida.toISOString().split('T')[0]; // Extrae YYYY-MM-DD
    const horaFormateada = fechaValida.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit', 
      hour12: false 
    }); // Extrae HH:mm
    
    
    this.evento = {
      ...evento,
      fecha: new Date(fechaAux),
      hora: horaFormateada
    };

    
    const modal = new bootstrap.Modal(this.modalElement?.nativeElement);
    modal.show();
    
    console.log(this.evento.hora)
    
  }

  
}
