import jugadores from '../data/jugadores';
export const getJugadoresByEntrenador = ({id}) => {
    return jugadores.filter(entrenadores => entrenadores.id === id)
}