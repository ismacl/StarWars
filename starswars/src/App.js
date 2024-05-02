import './App.css';
import Contenedor from './Contenedor';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Peliculas from './pages/Peliculas';

function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Contenedor/>}>
          <Route index element={<Peliculas/>} />
          <Route path="peliculas" element ={<Peliculas/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
