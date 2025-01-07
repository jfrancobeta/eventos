import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../services/eventos.service';
import { Evento } from '../../../models/evento';
import { find } from 'rxjs';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventos-admin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './eventos-admin.component.html',
  providers: [DatePipe]
})
export class EventosAdminComponent  implements OnInit{
  
  eventos: Evento[] = [];
  eventosFiltrados: Evento[] = [];
  buscar: string = "";
 
  constructor(private eventosService: EventosService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.eventosService.findAll().subscribe(eventos => {
      this.eventos = eventos;
      this.eventosFiltrados = eventos;
    });

    
  }

  filtrar(){
    this.eventosFiltrados = this.eventos.filter(evento => evento.nombre.toLowerCase().includes(this.buscar.toLowerCase()));
  }


  formatDate(date: Date): string {
    const formattedDate = this.datePipe.transform(date, 'dd/MM/yyyy');
    return formattedDate ? formattedDate : 'Fecha inválida';
  }

  eliminar(id: number){
    this.eventosService.eliminar(id).subscribe(() => {
      this.findAll();
    });
  }

}
