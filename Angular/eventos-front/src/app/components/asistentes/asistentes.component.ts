import { Component, numberAttribute, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AsistentesService } from '../../services/asistentes.service';
import { AsistenteDto } from '../../models/AsistenteDto';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-asistentes',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './asistentes.component.html'
})
export class AsistentesComponent implements OnInit{

  misAsistencias: AsistenteDto[] = []

  constructor(private asistenteService: AsistentesService){

  }
  ngOnInit(): void {
    this.listar()
  }


  listar(){
    this.asistenteService.listar().subscribe(asistente => {
      this.misAsistencias = asistente
    })
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
        this.asistenteService.delete(id).subscribe(() => {
          this.misAsistencias = this.misAsistencias.filter((asistente) => asistente.id != id);
        })
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
    
  }

  maps(direccion: string){
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(direccion)}`;
    window.open(url, '_blank');
  }




  

}
