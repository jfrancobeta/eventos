import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { UsuariosService } from '../../services/usuarios.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './reset-password.component.html'
})
export class ResetPasswordComponent {

  token: string = '';
  newPassword: string = '';
  confirmPassword: string = '';
  message: string = '';

  constructor(private route: ActivatedRoute, private usuarioService: UsuariosService, private rotuer: Router) { 
    this.route.queryParams.subscribe(params => {
      this.token = params['token'];
      console.log('Token:', this.token);
    });
  }


  resetPassword() {
    if (this.newPassword !== this.confirmPassword) {
      this.message = 'Las contraseñas no coinciden.';
      return;
    }

    const observer = {
      next: (response: any) => {
        this.message = 'Contraseña restablecida correctamente.';
      },
      error: (error: any) => {
        this.message = 'No se ha podido restablecer la contraseña. Inténtalo de nuevo más tarde.';
        console.log('Error al restablecer la contraseña:', error);
      }
    };

    this.usuarioService.resetPassword(this.token, this.newPassword).subscribe(observer);
  }

}
