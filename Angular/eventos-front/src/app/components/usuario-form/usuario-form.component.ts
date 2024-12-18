import { Component } from '@angular/core';
import { UsuariosService } from '../../services/usuarios.service';
import { User } from '../../models/user';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-usuario-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './usuario-form.component.html',
})
export class UsuarioFormComponent {

  user: User 
  constructor(private userService: UsuariosService){
    this.user = new User();
  }


  crear(user: NgForm){
    if(user.valid){
      this.userService.crear(this.user).subscribe(user => {
        console.log(user)
      })
    }
  }

}
