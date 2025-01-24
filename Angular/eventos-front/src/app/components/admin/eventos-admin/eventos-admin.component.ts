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
  eventosPaginacion: Evento[] = []
  buscar: string = "";

  currentPage: number = 1;
  pageSize: number = 6;
  totalPages: number = 1;
 
  constructor(private eventosService: EventosService, private datePipe: DatePipe) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.eventosService.findAll().subscribe(eventos => {
      this.eventos = eventos;
      this.eventosFiltrados = eventos;
      this.totalPages = Math.ceil(this.eventosFiltrados.length / this.pageSize);
      this.updatePaginatedEvents();
    });

    
  }

  updatePaginatedEvents() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.eventosPaginacion = this.eventosFiltrados.slice(startIndex, endIndex);
    
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedEvents();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedEvents();
    }
  }

  filtrar(){
    this.eventosFiltrados = this.eventos.filter(evento => evento.nombre.toLowerCase().includes(this.buscar.toLowerCase()));
    this.totalPages = Math.ceil(this.eventosFiltrados.length / this.pageSize);
    this.currentPage = 1; // Reiniciar a la primera página
    this.updatePaginatedEvents();
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
