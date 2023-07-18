import horario from '../data/horarios';
export const getHorariosById = ({id}) => {
    return horario.filter(entrenadores => entrenadores.id === id)
}