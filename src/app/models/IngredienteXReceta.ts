import { Ingrediente } from "./Ingrediente";
import { Receta } from "./Receta";

export interface IngredienteXReceta {
    id: number;
    receta: Receta;
    ingrediente: Ingrediente;
    cantidad: number;
    unidad: string
}