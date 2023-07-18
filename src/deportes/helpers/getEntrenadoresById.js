import { entrenadores } from "../data/entrenadores";

export const getEntrenadoresById = (id) => {

    return entrenadores.find(entrenador => entrenador.id === id)

}