import { TableCell, TableRow } from '@mui/material'
import React from 'react'

export const Mapeo3comp = (horario) => {

    return (
            <TableRow key={horario.dia}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell>{horario.dia}</TableCell>
                <TableCell align="center">{horario.hora}</TableCell>
                <TableCell align="center">{horario.categoria}</TableCell>
                <TableCell align="center">{horario.edades}</TableCell>
            </TableRow>
    )
}
