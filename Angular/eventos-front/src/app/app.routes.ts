import { Routes } from '@angular/router';
import { EventoComponent } from './components/evento/evento.component';
import { AsistentesComponent } from './components/asistentes/asistentes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { UsuariosComponent } from './components/usuarios/usuarios.component';
import { authGuard } from './guards/auth.guard';
import { ForbiddenComponent } from './components/forbidden/forbidden.component';

export const routes: Routes = [
    {
        path: 'home',
        component: EventoComponent,
        canActivate: [authGuard]

    },
    {
        path: 'eventos',
        component: AsistentesComponent,
        canActivate: [authGuard]
    },
    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'usuariof',
        component: UsuarioFormComponent,
        
    },
    {
        path: 'nosotros',
        component: NosotrosComponent 
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: 'asistentes',
        component: UsuariosComponent,
        canActivate: [authGuard]
    },
    {
        path: 'forbidden',
        component: ForbiddenComponent
    }

   
];
