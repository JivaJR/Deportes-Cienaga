import { entrenadores } from "../data/entrenadores";

export const getEntrenadoresByDeporte = (deporte) => {
    const validEntrenadores = ['Baloncesto','Football'];
    if (! validEntrenadores.includes(deporte)){
        throw new Error(`${ deporte } is not a valid sport`);
    }
    return entrenadores.filter(entrenadores => entrenadores.deporte === deporte);
}