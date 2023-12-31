import {Link as RouterLink} from 'react-router-dom'
import { Google } from "@mui/icons-material"
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../store/auth/thunks'
import { useMemo } from 'react'

const formData = {
    email: '',
    password: ''
}

export const LoginPage = () => {

    const {status,errorMessage} = useSelector(state => state.auth);

    const dispatch = useDispatch();
    
    const { email, password, onInputChange, formState } = useForm(formData)

    const isAuthenticating = useMemo( () =>status === 'checking' , [status]);

    const onSubmit = ( event ) => {
        event.preventDefault(); 

        dispatch( startLoginWithEmailPassword({email,password}))
    }

    const onGoogleSigIn = () => {
        dispatch(startGoogleSignIn())
    }

    return (
        <AuthLayout title='Login'>
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
                    <Grid container>
                        <Grid item xs={12} sx={{mt:2}}>
                            <TextField 
                                label='correo' 
                                type='email' 
                                placeholder='correo@google.com' 
                                fullWidth
                                name='email'
                                value={email}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{mt:2}}>
                            <TextField 
                                label='contraseña' 
                                type='password' placeholder='Password' 
                                fullWidth
                                name='password'
                                value={password}
                                onChange={onInputChange}
                            />
                        </Grid>
                        <Grid container display={!!errorMessage ? '':'none'} sx={{mt:1}}>
                            <Grid item xs={12} >
                                <Alert severity='error'>
                                    {errorMessage}
                                </Alert>
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{mb:2, mt:1}}>
                            <Grid item xs={12} sm={6}>
                                <Button disabled={isAuthenticating} type='submit' variant="contained" fullWidth>
                                    Login
                                </Button>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Button disabled={isAuthenticating} onClick={onGoogleSigIn} variant="contained" fullWidth>
                                    <Google/>
                                    <Typography sx={{ml:1}}>Google</Typography>
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container derecction='row' justifyContent='end'>
                            <Link component={RouterLink} color='inherit' to='/auth/register'>
                                Crear una cuenta
                            </Link>
                            
                        </Grid>
                    </Grid>
                </form>
        </AuthLayout>
                
    )
}
