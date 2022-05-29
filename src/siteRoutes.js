import { BrowserRouter, Routes, Route  } from 'react-router-dom'
import Home from './pages/home'
import AtravessarRua from './pages/atravessarRua'
import DiaSemana from './pages/diaSemana'
import Fatorial from './pages/fatorial'
import NumeroPar from './pages/numeroPar'


 
export default function SiteRoutes(){
     return(
         <BrowserRouter>
         <Routes>
             <Route path='/' element={<Home />} />
             <Route path='/atravessarRua' element={<AtravessarRua />} />
             <Route path='/diaSemana' element={<DiaSemana />} />
             <Route path='/fatorial' element={<Fatorial />} />
             <Route path='/numeroPar' element={<NumeroPar />} />
         </Routes>
         </BrowserRouter>
     )
}