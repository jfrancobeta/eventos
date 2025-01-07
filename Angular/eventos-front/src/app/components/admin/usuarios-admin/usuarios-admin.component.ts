import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios.service';
import { User } from '../../../models/user';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-usuarios-admin',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './usuarios-admin.component.html',
})
export class UsuariosAdminComponent implements OnInit {

  users: User[] = [];
  filteredUsers: User[] = [];
  buscar: string = '';
  selectedRole: string = 'all';
  selectedStatus: string = 'all';

  constructor(private UsuarioService: UsuariosService) {

  }

  ngOnInit(): void {
    this.findAll()
  }

  findAll() {
    this.UsuarioService.findAll().subscribe(users => {
      console.log(users)
      this.users = users;
      this.filteredUsers = users;
    })
  }

  filterUsers() {
    this.filteredUsers = this.users.filter(user => {
      const matchesSearchTerm = user.nombre.toLowerCase().includes(this.buscar.toLowerCase());
      const matchesRole = this.selectedRole === 'all' || user.roles.some(role => role.nombre === this.selectedRole);
      const matchesStatus = this.selectedStatus === 'all' || (this.selectedStatus === 'active' ? user.enabled : !user.enabled);
      return matchesSearchTerm && matchesRole && matchesStatus;
    });
  }

  desactivar(id: number) {
    this.UsuarioService.desactivar(id).subscribe(() => {
      this.findAll();
    })
  }
  activar(id: number) {
    this.UsuarioService.activar(id).subscribe(() => {
      this.findAll();
    })
  }
}