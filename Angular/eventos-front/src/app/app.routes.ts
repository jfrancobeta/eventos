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
import { UsuariosAdminComponent } from './components/admin/usuarios-admin/usuarios-admin.component';
import { EventosAdminComponent } from './components/admin/eventos-admin/eventos-admin.component';
import { EstadisticasAdminComponent } from './components/admin/estadisticas-admin/estadisticas-admin.component';
import { userGuard } from './guards/user.guard';

export const routes: Routes = [
    {
        path: 'home',
        component: EventoComponent,
        canActivate: [userGuard]

    },
    {
        path: 'eventos',
        component: AsistentesComponent,
        canActivate: [userGuard]
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
        canActivate: [userGuard]
    },
    {
        path: 'forbidden',
        component: ForbiddenComponent
    },
    {
        path: 'adminuser',
        component: UsuariosAdminComponent
        ,
        canActivate: [authGuard]
    },
    {
        path: 'admineventos',
        component: EventosAdminComponent
        ,
        canActivate: [authGuard]
    },
    {
        path: 'adminestadisticas',
        component: EstadisticasAdminComponent,
        canActivate: [authGuard]
    }

   
];
