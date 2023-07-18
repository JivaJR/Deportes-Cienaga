import { entrenadores } from "../data/entrenadores";

export const getEntrenadoresByName = (nombre = '') => {

    nombre = nombre.toLocaleLowerCase().trim();
    if (nombre.length === 0) return [];

    return entrenadores.filter(
        entrenador => entrenador.nombre.toLocaleLowerCase().includes(nombre)
    );
}