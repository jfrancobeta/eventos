import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-send-link',
  standalone: true,
  imports: [CommonModule,FormsModule,RouterModule],
  templateUrl: './send-link.component.html'
})
export class SendLinkComponent {
  email: string = '';
  message: string = '';
  constructor(private usuarioService: UsuariosService) { }


  sendLink(): void {

    this.usuarioService.forgotPassword(this.email).subscribe(() => {
      this.message = 'Se ha enviado un enlace a tu correo electrónico para restablecer la contraseña.';
    }, error => {
      this.message = 'No se ha podido enviar el enlace. Inténtalo de nuevo más tarde.' + error.message;
      console.error('Error al enviar el enlace:', error);
    });
  }

}
