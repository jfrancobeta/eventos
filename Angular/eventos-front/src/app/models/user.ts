import { Role } from "./role";

export class User {
    id?: number;
    username!: string;
    password!: string;
    enabled!: boolean;
    nombre!: string;
    apellido!: string;
    email!: string;
    roles!: Role[]; // Role debe definirse en TypeScript como una clase o interfaz aparte.
    intentos!: number;
  }
  