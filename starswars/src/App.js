import './App.css';
import Contenedor from './Contenedor';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Peliculas from './pages/Peliculas';
import trilogia_original from './pages/TrilogiaOriginal';
import trilogia_precuelas from './pages/TrilogiaPrecuelas';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Contenedor/>}>
          <Route index element={<Peliculas/>} />
          <Route path="Peliculas" element ={<Peliculas/>}/>
          <Route path='TrilogiaOriginal' element={<trilogia_original/>}/>
          <Route path='TrilogiaPrecuelas' element={<trilogia_precuelas/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
