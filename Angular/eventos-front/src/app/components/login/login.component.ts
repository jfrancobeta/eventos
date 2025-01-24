import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private auth: AuthService){

  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      this.auth.loginCredentials(this.username, this.password);
      
    }
  }
  

}
