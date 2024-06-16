import Contenedor from './Contenedor';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Peliculas from './pages/Peliculas';
import TrilogiaOriginal from './pages/TrilogiaOriginal';
import TrilogiaPrecuelas from './pages/TrilogiaPrecuelas';
import Personajes from './pages/Personajes';
import Especies from './pages/Especies';
import DetallePersonajes from './pages/DetallePersonajes'
import DetallePeliculas from './pages/DetallePeliculas'
import DetalleEspecies from './pages/DetalleEspecies';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Contenedor/>}>
          <Route index element={<Peliculas/>} />
          <Route path="Peliculas" element ={<Peliculas/>}/>
          <Route path='TrilogiaOriginal' element={<TrilogiaOriginal/>}/>
          <Route path='TrilogiaPrecuelas' element={<TrilogiaPrecuelas/>}/>
          <Route path='Personajes' element={<Personajes/>}/>
          <Route path='Especies' element={<Especies/>}/>
          <Route path='Personajes/:idPersonaje' element={<DetallePersonajes/>}/>
          <Route path='TrilogiaOriginal/:idPeliculas' element={<DetallePeliculas/>}/>
          <Route path='TrilogiaPrecuelas/:idPeliculas' element={<DetallePeliculas/>}/>
          <Route path='Especies/:idEspecie' element={<DetalleEspecies/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
