export class Evento {
    id!: number; // `id` es opcional porque puede no estar definido al crear un nuevo evento.
    nombre!: string;
    descripcion!: string;
    fecha!: Date;
    hora!: string
    usuario!: number;
    lugar!: string;
    capacidad!: number;
}