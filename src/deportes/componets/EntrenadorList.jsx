import React from 'react'
import Box from "@mui/material/Box";
import Grid from '@mui/material/Grid';
import { getEntrenadoresByDeporte } from '../helpers/getEntrenadoresByDeporte';
import { EntrenadorCard } from './EntrenadorCard';


export const EntrenadorList = ({deporte}) => {
    const entrenadores = getEntrenadoresByDeporte(deporte);
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                
                {
                    entrenadores.map(entrenadores =>(
                        <Grid item xs={12} md={4}>
                            <EntrenadorCard key={entrenadores.id} {...entrenadores}/>
                        </Grid>
                    ))
                }
                
            </Grid>
        </Box>
    )
}
