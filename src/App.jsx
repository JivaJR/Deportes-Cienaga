
import { Noticias} from './deportes'
import noticias from './deportes/data/noticias'
// Inicio
import * as React from 'react';
import { Box } from '@mui/material';
import { loadUids } from './helpers';

function App() {
  const uids = loadUids();
  console.log('Veamos si carga aqui',uids)
  return (
    <>
      <Box className='pt-3'>
        {
          noticias.map(noticia =>(
              <Noticias key={noticia.id} {...noticia}/>
          ))
        }
      </Box>
    </>
    
  )
}
export default App


