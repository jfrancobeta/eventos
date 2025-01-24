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
  paginatedUsers: User[] = [];
  buscar: string = '';
  selectedRole: string = 'all';
  selectedStatus: string = 'all';

  // Paginación
  currentPage: number = 1;
  pageSize: number = 10;
  totalPages: number = 1;

  constructor(private UsuarioService: UsuariosService) {

  }

  ngOnInit(): void {
    this.findAll()
  }

  findAll() {
    this.UsuarioService.findAll().subscribe(users => {
      this.users = users;
      this.filteredUsers = users;
      this.totalPages = Math.ceil(this.filteredUsers.length / this.pageSize);
      this.updatePaginatedUsers();
    })
  }

  // filterUsers() {
  //   this.filteredUsers = this.users.filter(user => {
  //     const matchesSearchTerm = user.nombre.toLowerCase().includes(this.buscar.toLowerCase());
  //     const matchesRole = this.selectedRole === 'all' || user.roles.some(role => role.nombre === this.selectedRole);
  //     const matchesStatus = this.selectedStatus === 'all' || (this.selectedStatus === 'active' ? user.enabled : !user.enabled);
  //     return matchesSearchTerm && matchesRole && matchesStatus;
  //   });
  // }
  filterUsers() {
    const filtered = this.users.filter(user => {
      const matchesSearchTerm = user.nombre.toLowerCase().includes(this.buscar.toLowerCase());
      const matchesRole = this.selectedRole === 'all' || user.roles.some(role => role.nombre === this.selectedRole);
      const matchesStatus = this.selectedStatus === 'all' || (this.selectedStatus === 'active' ? user.enabled : !user.enabled);
      return matchesSearchTerm && matchesRole && matchesStatus;
    });
    this.filteredUsers = filtered;
    this.totalPages = Math.ceil(this.filteredUsers.length / this.pageSize);
    this.currentPage = 1; // Reiniciar a la primera página
    this.updatePaginatedUsers();
  }

  updatePaginatedUsers() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    
    this.paginatedUsers = this.filteredUsers.slice(startIndex, endIndex);
    console.log(this.paginatedUsers);
    
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedUsers();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedUsers();
    }
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