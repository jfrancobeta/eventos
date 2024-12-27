import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { AsistentesService } from '../../services/asistentes.service';
import { Asistente } from '../../models/Asistente';
import { AsistenteDto } from '../../models/AsistenteDto';
import { UsuariosService } from '../../services/usuarios.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [],
  templateUrl: './usuarios.component.html',
})
export class UsuariosComponent implements OnInit {

  constructor(private data: DataService,
    private asistentesService: AsistentesService,
    private usuarioService: UsuariosService
  ) { 
  }

  asis: Asistente[] = [];
  usuarios: User[] = [];

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
          this.usuarios = [...this.usuarios, user];
        });
      }
    )
  }

}
