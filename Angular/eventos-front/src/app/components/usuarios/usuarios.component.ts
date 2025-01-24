import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AsistentesService } from '../../services/asistentes.service';
import { Asistente } from '../../models/Asistente';
import { AsistenteDto } from '../../models/AsistenteDto';
import { UsuariosService } from '../../services/usuarios.service';
import { User } from '../../models/user';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent implements OnInit {

  constructor(private data: DataService,
    private asistentesService: AsistentesService,
    private usuarioService: UsuariosService
  ) { 
  }

  asis: Asistente[] = [];
  usuarios: { [key: number]: User } = {};

  ngOnInit(): void {
    this.loadInscritos();
  }

  loadInscritos() {
    this.data.inscritosEvent.subscribe(id => {
      console.log(id);
      if(id == null) return;
      this.asistentesService.listarPorEvento(id).subscribe(asis => {
        console.log(asis);
        this.asis = asis;
        this.loadUsuarios();
        
      });
    });
  }

  loadUsuarios(){
    this.asis.forEach(asistente => {
        this.usuarioService.findByid(asistente.usuario_id).subscribe(user => {
          this.usuarios[asistente.id] = user;
        });
        console.log(this.usuarios);
      }
    )
  }

  trackByFn(index: number, item: Asistente): number {
    return item.usuario_id; // o cualquier otra propiedad única del asistente
  }

  eliminar(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, eliminarlo!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.asistentesService.delete(id).subscribe(() => {
          this.asis = this.asis.filter(asistente => asistente.id !== id);
          delete this.usuarios[id];
          Swal.fire(
            'Eliminado!',
            'El asistente ha sido eliminado.',
            'success'
          );
        });
      }
    });
  }

}
