import { Routes } from '@angular/router';
import { EventoComponent } from './components/evento/evento.component';
import { AsistentesComponent } from './components/asistentes/asistentes.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { UsuarioFormComponent } from './components/usuario-form/usuario-form.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { ContactoComponent } from './components/contacto/contacto.component';

export const routes: Routes = [
    {
        path: 'home',
        component: EventoComponent

    },
    {
        path: 'eventos',
        component: AsistentesComponent
    },
    {
        path: '',
        component: InicioComponent
    },
    {
        path: 'usuariof',
        component: UsuarioFormComponent
    },
    {
        path: 'nosotros',
        component: NosotrosComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    }

   
];
