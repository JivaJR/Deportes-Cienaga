import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import {getEntrenadoresById} from '../helpers';
import { Tablahorarios } from '../componets/Tablahorarios';
import { TablaJugadores } from '../componets/TablaJugadores';
import { Box, Card, CardContent, CardHeader, CardMedia, IconButton, List, ListItem, ListItemButton, ListItemText, Paper, Typography } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import {KeyboardArrowDown } from '@mui/icons-material';
import ReplyIcon from '@mui/icons-material/Reply';

export const EntrenadorPage = () => {
    
    const {id} = useParams();
    const navigate = useNavigate();
    const entrenador = useMemo ( () => getEntrenadoresById(id), [id]);
    const EntrenadorImgUrl = `/entrenadores/${id}.jpg`

    const onReturn = () => {
        navigate(-1);
    }

    if(!entrenador){
        return <Navigate to="/app"/>
    }
    const [open, setOpen] = React.useState(true);

    return (
        <>  
        <Card sx={{ maxWidth: '95%', ml:'2.5%', mt:5}}>
            <CardHeader
                title={entrenador.nombre}
                subheader="September 14, 2016"
            />
            <CardMedia
                sx={{ width: '60%',maxWidth: '60%', ml:'20%'}}
                component="img"
                image={EntrenadorImgUrl} 
                alt={entrenador.nombre}
            />
            <CardContent >
                <Box sx={{pb:3}}>
                    <Paper elevation={0}>
                        <Box
                            sx={{
                                bgcolor: open ? 'rgba(71, 98, 130, 0.2)' : null,
                                pb: open ? 2 : 0,
                        }}
                        >
                            <ListItemButton
                                alignItems="flex-start"
                                onClick={() => setOpen(!open)}
                                sx={{
                                px: 3,
                                pt: 2.5,
                                pb: open ? 0 : 2.5,
                                '&:hover, &:focus': { '& svg': { opacity: open ? 1 : 0 } },
                                }}
                            >
                            <ListItemText
                                primary="Info"
                                primaryTypographyProps={{
                                    fontSize: '25px',
                                    fontWeight: 'medium',
                                    lineHeight: '20px',
                                    mb: '2px',
                                }}
                                secondary="Deporte, Alter Ego, Mensualidad, Club, Otros Clubes"
                                secondaryTypographyProps={{
                                    noWrap: true,
                                    fontSize: 12,
                                    lineHeight: '16px',
                                    color: open ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.5)',
                                }}
                                sx={{ my: 0 }}
                            />
                            <KeyboardArrowDown
                                sx={{
                                    mr: -1,
                                    opacity: 0,
                                    transform: open ? 'rotate(-180deg)' : 'rotate(0)',
                                    transition: '0.2s',
                                }}
                            />
                            </ListItemButton>
                            {open &&
                            <List>

                                <ListItem>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <Typography variant='h4'>Deporte: </Typography>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={entrenador.deporte}
                                        primaryTypographyProps={{ fontSize: 15, fontWeight: 'medium' }}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <Typography variant='h4'>Alter Ego: </Typography>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={entrenador.alter_ego}
                                        primaryTypographyProps={{ fontSize: 20, fontWeight: 'medium' }}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <Typography variant='h4'>Mensualidad: </Typography>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={entrenador.mes}
                                        primaryTypographyProps={{ fontSize: 20, fontWeight: 'medium' }}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <Typography variant='h4'>Club: </Typography>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={entrenador.Nombre_equipo}
                                        primaryTypographyProps={{ fontSize: 20, fontWeight: 'medium' }}
                                    />
                                </ListItem>
                                
                                <ListItem>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <Typography variant='h4'>Otros clubes: </Typography>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={entrenador.equipos_asociados}
                                        primaryTypographyProps={{ fontSize: 20, fontWeight: 'medium' }}
                                    />
                                </ListItem>
                            </List>
                                
                            }
                        </Box>
                    </Paper>
                </Box>
            </CardContent>
            <IconButton
                size="large"
                sx={{
                    color:"white",
                    backgroundColor:'#262254',
                    ':hover': {backgroundColor:'red',opacity:1.2},
                    position:'fixed',
                    right:50,
                    bottom:50,
                    }}
                    onClick={onReturn}
            >
                <ReplyIcon sx={{fontSize:30}}/>
            </IconButton>
        </Card>
            
            <div className='mt-5'>
                <Tablahorarios id={entrenador.nombre}/>
            </div>
            <div className='mt-5'>
                <TablaJugadores id={entrenador.nombre}/>
            </div>
        </>
    )
}


