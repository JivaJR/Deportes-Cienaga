import { EntrenadorList } from '../componets/EntrenadorList'
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

export const Football = () => {
    return (
        <>  
            <Typography variant='h4' sx={{mt:2, mb:2}}>Entrenadores de Football</Typography>
            <Divider sx={{mb:2}}/>
            <EntrenadorList deporte='Football'/>
        </>
        
    )
}
