import { TableCell, TableRow } from '@mui/material'
import React from 'react'

export const MapeoJugadores = (jugador) => {

    return (
            <TableRow key={jugador.name}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>{jugador.numero}</TableCell>
                <TableCell align="center">{jugador.name}</TableCell>
                <TableCell align="center">{jugador.lastn}</TableCell>
                <TableCell align="center">{jugador.edad}</TableCell>
            </TableRow>
    )
}