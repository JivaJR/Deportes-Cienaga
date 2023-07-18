import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { JournalRoutes } from '../journal/routes/JournalRoutes'
import { AuthRoutes } from '../auth'
import { CheckingAuth } from '../ui'
import { useCheckAuth } from '../hooks'
import { DeportesRoutes } from '../deportes/routes/DeportesRoutes'

export const AppRouter = () => {

    const {status} = useCheckAuth();
    if(status === 'checking') {
        return <CheckingAuth/>
    }
    return (
        <Routes>
            {
                (status === 'authenticated')
                ? <Route path='/*' element={<JournalRoutes/>}/>
                : <Route path='/auth/*' element={<AuthRoutes/>}/>
            }

            <Route path='/*' element={<DeportesRoutes/>}/>
            
        </Routes>
    )
}
