import { entrenadores } from "../data/entrenadores";

export const getEntrenadoresByEquipo = (equipo = '') => {

    equipo = equipo.toLocaleLowerCase().trim();
    if (equipo.length === 0) return [];

    return entrenadores.filter(
        entrenador => entrenador.equipos_asociados.toLocaleLowerCase().includes(equipo)
    );
}