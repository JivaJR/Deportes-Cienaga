import { entrenadores } from "../data/entrenadores";

export const getEntrenadoresByAlias = (alias = '') => {

    alias = alias.toLocaleLowerCase().trim();
    if (alias.length === 0) return [];

    return entrenadores.filter(
        entrenador => entrenador.alter_ego.toLocaleLowerCase().includes(alias)
    );
}