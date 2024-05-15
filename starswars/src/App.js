import Contenedor from './Contenedor';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Peliculas from './pages/Peliculas';
import TrilogiaOriginal from './pages/TrilogiaOriginal';
import TrilogiaPrecuelas from './pages/TrilogiaPrecuelas';
import Personajes from './pages/Personajes';
import Especies from './pages/Especies';

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
