import * as React from 'react';
import { EntrenadorList } from '../componets/EntrenadorList'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export const Baloncesto = () => {
    return (
        <>
            <Typography variant='h4' sx={{mt:2, mb:2}}>Entrenadores de baloncesto</Typography>
            <Divider />
            <EntrenadorList deporte='Baloncesto'/>
        </>
        
    )
}


