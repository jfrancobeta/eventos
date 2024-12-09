import { Routes } from '@angular/router';
import { EventoComponent } from './components/evento/evento.component';
import { AsistentesComponent } from './components/asistentes/asistentes.component';

export const routes: Routes = [
    {
        path: '',
        component: EventoComponent

    },
    {
        path: 'eventos',
        component: AsistentesComponent
    }
];
