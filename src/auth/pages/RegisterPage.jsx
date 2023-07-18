import {Link as RouterLink} from 'react-router-dom'
import { Button,Grid, TextField,Link, Typography, Alert } from "@mui/material"
import { AuthLayout } from "../layout/AuthLayout"
import { useForm } from '../../hooks'
import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunks'

const formData = {
    email: 'ejemplo@correo.com',
    password: '123456',
    displayName: 'Ejemplo'
}

const formValidations = {
    email: [(value) => value.includes('@'), 'Correo invalido'],
    password: [(value) => value.length >=6 , 'La contraseña debe tener minimo 6 caracteres'],
    displayName: [(value) => value.length >= 1, 'El nombre es obligatorio'],
}

export const RegisterPage = () => {

    const dispatch = useDispatch();
    const [formSubmitted, setformSubmitted] = useState(false);

    const { status, errorMessage } = useSelector(state => state.auth);
    const isCheckingAuthentication = useMemo( () => status === 'checking',[status])

    const {
        formState, displayName, email, password, onInputChange,
        isFormValid, displayNameValid, emailValid, passwordValid,
    } = useForm(formData,formValidations);
    
    const onSubmit = (event) =>{
        event.preventDefault();
        setformSubmitted(true);
        if(!isFormValid) return;
        dispatch(startCreatingUserWithEmailPassword(formState));
    }

    return (
        <AuthLayout title='Crear cuenta'>
            <form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
                    <Grid container>
                        <Grid item xs={12} sx={{ mt:2}}>
                            <TextField 
                                label='nombre completo' 
                                type='text' 
                                placeholder='ejem: Javier Rodriguez' 
                                fullWidth
                                name='displayName'
                                value={displayName}
                                onChange={onInputChange}
                                error={!!displayNameValid && formSubmitted}
                                helperText={displayNameValid}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{mt:2}}>
                            <TextField 
                                label='correo' 
                                type='email'
                                placeholder='correo@google.com' 
                                fullWidth
                                name='email'
                                value={email}
                                onChange={onInputChange}
                                error={!!emailValid && formSubmitted}
                                helperText={emailValid}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{mt:2}}>
                            <TextField 
                                label='contraseña' 
                                type='password' 
                                placeholder='correo@google.com' 
                                fullWidth
                                name='password'
                                value={password}
                                onChange={onInputChange}
                                error={!!passwordValid && formSubmitted}
                                helperText={passwordValid}
                            />
                        </Grid>
                        <Grid container spacing={2} sx={{mb:2, mt:1}}>
                            <Grid item xs={12} display={!!errorMessage ? '':'none'}>
                                <Alert severity='error'>
                                    {errorMessage}
                                </Alert>
                            </Grid>
                            <Grid item xs={12}>
                                <Button disabled={isCheckingAuthentication} type='submit'variant="contained" fullWidth>
                                    Crear cuenta
                                </Button>
                            </Grid>
                        </Grid>
                        <Grid container derecction='row' justifyContent='end'>
                            <Typography sx={{mr:1}}>
                            ¿Ya tienes cuenta?
                            </Typography>
                            <Link component={RouterLink} color='inherit' to='/auth/login'>
                            Ingresar
                            </Link>
                        </Grid>
                    </Grid>
                </form>
        </AuthLayout>
    )
}
