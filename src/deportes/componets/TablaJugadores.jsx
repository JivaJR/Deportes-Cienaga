import React from 'react'
import { MapeoJugadores } from './MapeoJugadores'
import { getJugadoresByEntrenador } from '../helpers/getJugadoresByEntrenador'
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

export const TablaJugadores = (id) => {
    const jugadores = getJugadoresByEntrenador(id);
    if (jugadores.length === 0) {
        return;
    }
    const jugador = jugadores[0].jugador;
    return (
        <>
            <h1> Jugadores activos</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Numero</TableCell>
                            <TableCell align="center">Nombres</TableCell>
                            <TableCell align="center">Apellido</TableCell>
                            <TableCell align="center">Edad</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {jugador.map( (jugador) => (
                            <MapeoJugadores key={jugador.name} {...jugador}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>        
    )
}

