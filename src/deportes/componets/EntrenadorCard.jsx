import * as React from 'react';
import { Link } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';


export const EntrenadorCard = ({
    id,
    nombre, 
    deporte, 
    alter_ego,
    equipos_asociados,
}) => {
    const EntrenadorImgUrl = `/entrenadores/${id}.jpg`

    return (
        
                <Card sx={{ maxWidth: {xs:'100%', md:'95%'} }}>
                    <CardMedia
                        sx={{ height: 500 }}
                        image={EntrenadorImgUrl}
                        title={nombre}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {nombre}
                        </Typography>
                        <List>

                                <ListItem>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                    <Typography variant="h6">Deporte: </Typography>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={deporte}
                                        primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                    <Typography variant="h6">Alter Ego: </Typography>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={alter_ego}
                                        primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                    />
                                </ListItem>

                                <ListItem>
                                    <ListItemIcon sx={{ color: 'inherit' }}>
                                        <Typography variant="h6">Otros Clubes: </Typography>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={equipos_asociados}
                                        primaryTypographyProps={{ fontSize: 14, fontWeight: 'medium' }}
                                    />
                                </ListItem>
                            </List>
                    </CardContent>
                    <CardActions>
                        {/* <Button size="small">Share</Button> */}
                        <Button size="small">
                            <Link to={`/entrenador/${id}`}>
                                    Ver Mas
                            </Link>
                        </Button>
                    </CardActions>
                </Card>
            
    )
}

