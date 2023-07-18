import { useLocation, useNavigate } from "react-router-dom";
import queryString from 'query-string';
import { getEntrenadoresByAlias, getEntrenadoresByName} from "../helpers";
import { useForm } from "../../hooks/useForm";
import { EntrenadorCard } from "../componets/EntrenadorCard";
import { getEntrenadoresByEquipo } from "../helpers/getEntrenadoresByEquipo";
import { Box, Button, Divider, Grid, TextField, Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";

export const Search = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search); 
    let entrenadores = getEntrenadoresByName(q);

    if (entrenadores.length===0){
        entrenadores = getEntrenadoresByAlias(q);
    }
    if (entrenadores.length===0){
        entrenadores = getEntrenadoresByEquipo(q);
    }
    const showSearch = (q.length === 0);
    const showError  = (q.length > 0) && (entrenadores.length === 0);

    const {onInputChange,searchText} = useForm({
        searchText: q
    });

    const onSearchSubmit = (event) =>{
        event.preventDefault();

        // if (searchText.trim().length <=1) return;

        navigate(`?q=${searchText}`)

    }

    return (
        <>
            <Typography variant="h2" sx={{display:'flex',justifyContent:'center'}}>Search secction</Typography>
            <Divider sx={{background: 'black', height:2}}/>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={4}>
                            <Typography variant="h4" sx={{display:{xs:'none',md:'flex'}}}>Serching</Typography>
                            <Divider sx={{background: 'black', height:2,display:{xs:'none',md:'flex'}}}/>
                        <Box 
                            component='form' onSubmit={onSearchSubmit}
                            sx={{
                                display:'flex',
                                flexWrap:'wrap',
                                justifyContent:'space-around',
                                alignItems:'center',
                                mt:2,
                                '& .MuiTextField-root': { m: 1},
                            }}
                            noValidate
                            autoComplete="off"
                        >
                                    <TextField
                                        sx={{width:'70%'}}
                                        id="outlined-required"
                                        name="searchText"   
                                        label="Search"
                                        value={searchText}
                                        onChange={onInputChange}
                                    />
                                        <Button component='button'variant="contained" sx={{width:'25%',height:50}}
                                            onClick={onSearchSubmit}
                                        >
                                            Search
                                        </Button>
                                        {/* <button className="btn btn-outline-primary mt-1">Search</button> */}
                        </Box>
                    </Grid>             
                    <Grid item xs={12} md={8}>
                        <Typography sx={{display:{xs:'none',md:'flex'}}}variant="h4" >Results</Typography>
                        <Divider sx={{background: 'black', height:2,display:{xs:'none',md:'flex'}}}/>
                        {/* {
                            (q==='')
                                ? <div className="alert alert-primary">Search a hero</div>
                                : (heroes.length === 0) && <div className="alert alert-danger">No hay resultados para: <b>{q}</b></div>
                        } */}
                        <Typography sx={{display: showSearch ? '' : 'none',bgcolor:'green'}}>
                            Buscar un entrenador
                        </Typography>
                        <Typography color="alert alert-danger" sx={{display: showError ? '' : 'none',bgcolor:'red'}}>
                            No hay resultados para: <b>{q}</b>
                        </Typography>
                        {
                            entrenadores.map(entrenador =>(
                                <EntrenadorCard key={entrenador.id} {...entrenador}/>
                            ))
                        }
                    </Grid>
                </Grid>
            </Box>
            
        </>
    )
}
