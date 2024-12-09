import { Evento } from "./evento";

export class AsistenteDto {
    id!: number; // Identificador único (auto-generado en el backend)
    evento!: Evento; // ID del evento relacionado
    usuarioId!: number; // ID del usuario relacionado
    date!: Date; // Fecha del registro

    
}