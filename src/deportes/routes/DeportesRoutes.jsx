import { Navigate, Route, Routes } from 'react-router-dom';
import { Baloncesto, EntrenadorPage, Football, Search } from '../pages';
import App from '../../App';
import { Navbar } from '../../ui';
export const DeportesRoutes = () => {
    return (
    <>
        
            <Navbar/>
            <Routes>
                <Route path="baloncesto" element={<Baloncesto />} />
                <Route path="football" element={<Football />} />
                
                <Route path="search" element={<Search />} />
                <Route path="entrenador/:id" element={<EntrenadorPage />} />
                <Route path="app" element={<App />} />
                                

                <Route path="/" element={<Navigate to="/app" />} />
                <Route path='/*' element={<Navigate to='/'/>}/>

            </Routes>

        {/* <Footer/> */}
    </>
    )
}