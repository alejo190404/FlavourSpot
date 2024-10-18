import { Usuario } from "./Usuario";

export interface Receta {
    id: number;
    nombre: string;
    pasos: string;
    imagenUrl: string;
    favorita: boolean;
    tiempo: string;
    user: Usuario;
}