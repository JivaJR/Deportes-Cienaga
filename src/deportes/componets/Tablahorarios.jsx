import React from 'react'
import { getHorariosById } from '../helpers';
import { Mapeo3comp } from './Mapeo3comp';
import Table from '@mui/material/Table';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { TableBody, TableContainer } from '@mui/material';
import Paper from '@mui/material/Paper';

export const Tablahorarios = (id) => {
    const horarios = getHorariosById(id);
    if (horarios.length === 0) {
        return;
    }
    const horario = horarios[0].horario;
    return(
        <>
            <h1> Horario de entrenamientos</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Dia</TableCell>
                            <TableCell align="center">Horas</TableCell>
                            <TableCell align="center">Categorias</TableCell>
                            <TableCell align="center">Edades</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {horario.map( (horario) => (
                            <Mapeo3comp key={horario.id} {...horario}/>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
)            
}
